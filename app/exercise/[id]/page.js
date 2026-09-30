import Image from "next/image";
import Navbar from "@/components/Navbar";
import exercises from "../../../data/exercises";

export default async function ExercisePage({ params }) {
  const { id } = await params;

  const exercise = exercises.find(
    (item) => item.id === Number(id)
  );

  if (!exercise) {
    return <h1>Exercise not found</h1>;
  }

  return (
    <>
      <Navbar />

      <main className="exercise-page">
        {/* Image */}
        <div className="exercise-image">
          <Image
            src={`/assets/img${exercise.id}.jpg`}
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

            <button className="plan-button">
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

              <span>Add to today's plan</span>
            </button>

            <button className="save-button">
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