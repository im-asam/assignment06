"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePlan } from "../../context/PlanContext";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = usePlan();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.calories,
    0
  );

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = useMemo(() => {
    return [...currentList].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return b.calories - a.calories;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [currentList, sortBy]);

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="my-plan-page">
      {/* =========================
          Header
      ========================= */}

      <section className="my-plan-header">
        <h1>MY PLAN</h1>

        <p>
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </section>

      {/* =========================
          Stats
      ========================= */}

      <section className="plan-stats">
        <div className="plan-stat">
          <span>Exercises</span>
          <strong>{plan.length}</strong>
        </div>

        <div className="plan-stat">
          <span>Minutes</span>
          <strong>{totalMinutes}</strong>
        </div>

        <div className="plan-stat">
          <span>Calories</span>
          <strong>{totalCalories}</strong>
        </div>
      </section>

      {/* =========================
          Toolbar
      ========================= */}

      <section className="plan-controls">
        <div className="plan-tabs">
          <button
            type="button"
            className={activeTab === "plan" ? "active" : ""}
            onClick={() => setActiveTab("plan")}
          >
            Today's Plan
          </button>

          <button
            type="button"
            className={activeTab === "saved" ? "active" : ""}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
        </div>

        <div className="sort-control">
          <span>Sort By</span>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            aria-label="Sort workouts"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </section>

      {/* =========================
          Workout List
      ========================= */}

      <section className="plan-list">
        {sortedList.length === 0 ? (
          <div className="plan-empty">
            <div className="plan-empty-content">
              <h2>NOTHING HERE YET</h2>

              <p>
                Browse the library and add a lift to get today moving.
              </p>

              <Link href="/" className="plan-empty-button">
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="plan-workout-list">
            {sortedList.map((workout) => (
              <article
                key={workout.id}
                className={`plan-workout-card ${
                  workout.isDone ? "done" : ""
                }`}
              >
                {/* Image */}

                <div className="plan-workout-image">
                  <img
                    src={`/assets/img${workout.id}.jpg`}
                    alt={workout.name}
                  />
                </div>

                {/* Main content */}

                <div className="plan-workout-content">
                  <h3>{workout.name}</h3>

                  <p className="plan-equipment">
                    {workout.equipment}
                  </p>

                  <div className="plan-workout-meta">
                    <span>
                      <span className="meta-icon">◷</span>
                      {workout.duration} min
                    </span>

                    <span>
                      <span className="meta-icon">◉</span>
                      {workout.calories} kcal
                    </span>

                    <span>
                      <span className="meta-icon">★</span>
                      {workout.rating}
                    </span>
                  </div>
                </div>

                {/* Actions */}

                <div className="plan-card-actions">
                  <Link
                    href={`/exercise/${workout.id}`}
                    className="view-details-button"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && !workout.isDone && (
                    <button
                      type="button"
                      className="done-button"
                      onClick={() => markAsDone(workout.id)}
                    >
                      <span>✓</span>
                      Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemove(workout.id)}
                    aria-label={`Remove ${workout.name}`}
                  >
                    ×
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}