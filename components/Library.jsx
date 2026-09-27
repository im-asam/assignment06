import Image from "next/image";
import Link from "next/link";
import { workouts } from "@/data/workouts";

export default function Library() {
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
                alt={workout.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>

            <div className="workout-content">
              <div className="category-list">
                {workout.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>

              <h3>{workout.title}</h3>

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