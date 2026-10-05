"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllWorkouts } from "@/utils/api";

export default function Library() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getAllWorkouts();

        console.log("API DATA:", data);
        console.log("FIRST WORKOUT:", data[0]);

        setWorkouts(data);
      } catch (error) {
        console.error("Failed to load workouts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  if (loading) {
    return (
      <section id="library" className="library-section">
        <div className="library-heading">
          <h2>THE LIBRARY</h2>
          <p>Twelve lifts covering every major muscle group.</p>
        </div>

        <div className="library-loading">
          Loading workouts...
        </div>
      </section>
    );
  }

  return (
    <section id="library" className="library-section">
      <div className="library-heading">
        <h2>THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
      </div>

      <div className="workout-grid">
        {workouts.map((workout) => (
          <Link
            href={`/exercise/${workout.id}`}
            className="workout-card"
            key={workout.id}
          >
            <div className="workout-image">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>

            <div className="workout-content">
              <div className="category-list">
                {workout.muscleGroups.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>

              <h3>{workout.name}</h3>

              <p className="equipment">{workout.equipment}</p>

              <div className="workout-meta">
                <span>◷ {workout.duration} min</span>
                <span>◉ {workout.calories} kcal</span>
                <span>★ {workout.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}