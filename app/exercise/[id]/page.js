"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { usePlan } from "@/context/PlanContext";
import { getWorkoutById } from "@/utils/api";

export default function ExercisePage() {
  const { id } = useParams();
  const { plan, addToPlan, addToSaved } = usePlan();

  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExercise() {
      try {
        const data = await getWorkoutById(id);

        setExercise({
          ...data,
          categories: data.muscleGroups,
          calories: data.caloriesBurned,
        });
      } catch (error) {
        console.error("Failed to load workout:", error);
      } finally {
        setLoading(false);
      }
    }

    loadExercise();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="exercise-page">
          <h1>Loading workout...</h1>
        </main>
      </>
    );
  }

  if (!exercise) {
    return (
      <>
        <Navbar />
        <main className="exercise-page">
          <h1>Exercise not found</h1>
        </main>
      </>
    );
  }

  const isPlanFull = plan.length >= 5;
  const isAlreadyInPlan = plan.some(
    (item) => item.id === exercise.id
  );

  return (
    <>
      <Navbar />

      <main className="exercise-page">
        {/* Image */}
        <div className="exercise-image">
          <Image
            src={exercise.image}
            alt={`${exercise.name} demonstration`}
            fill
            sizes="588px"
            priority
          />
        </div>

        {/* Details */}
        <div className="exercise-info">
          <div className="exercise-heading">
            <h1>{exercise.name}</h1>

            <p className="exercise-description">
              {exercise.description}
            </p>

            <div className="exercise-tags">
              {exercise.categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="exercise-stats">
            <div className="stat-row">
              <span>EQUIPMENT</span>
              <strong>{exercise.equipment}</strong>
            </div>

            <div className="stat-row">
              <span>DURATION</span>
              <strong>{exercise.duration} min</strong>
            </div>

            <div className="stat-row">
              <span>CALORIES</span>
              <strong>{exercise.calories} kcal</strong>
            </div>

            <div className="stat-row">
              <span>RATING</span>
              <strong>{exercise.rating}</strong>
            </div>

            <div className="stat-row">
              <span>DIFFICULTY</span>
              <strong>{exercise.difficulty}</strong>
            </div>

            <div className="stat-row">
              <span>SETS</span>
              <strong>{exercise.sets}</strong>
            </div>

            <div className="stat-row">
              <span>REPS</span>
              <strong>{exercise.reps}</strong>
            </div>
          </div>

          {/* Instructions */}
          <section className="instructions">
            <h2>INSTRUCTIONS</h2>

            <ol>
              {exercise.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </section>

          {/* Actions */}
          <div className="exercise-actions">
            <button
              className="plan-button"
              onClick={() => addToPlan(exercise)}
              disabled={isPlanFull || isAlreadyInPlan}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="15"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M8 3V7M16 3V7M4 10H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <span>
                {isAlreadyInPlan
                  ? "Already in plan"
                  : isPlanFull
                    ? "Plan full"
                    : "Add to today's plan"}
              </span>
            </button>

            <button
              className="save-button"
              onClick={() => addToSaved(exercise)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 4.5C6 3.67 6.67 3 7.5 3H16.5C17.33 3 18 3.67 18 4.5V21L12 17.5L6 21V4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Save for later</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}