"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Save plan only after localStorage data has loaded
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, hydrated]);

  // Save saved workouts only after localStorage data has loaded
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, hydrated]);

  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      toast.error("Today's plan is full! (Max 5)");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in today's plan!");
      return;
    }

    setPlan((prev) => [
      ...prev,
      {
        ...workout,
        isDone: false,
      },
    ]);

    toast.success(`${workout.name} added to plan!`);
  };

  const addToSaved = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved!");
      return;
    }

    setSaved((prev) => [...prev, workout]);

    toast.success(`${workout.name} saved for later!`);
  };

  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from plan");
  };

  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  };

  const markAsDone = (id) => {
    setPlan((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isDone: true }
          : item
      )
    );

    toast.success("Workout done!");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }

  return context;
}

export default PlanContext;