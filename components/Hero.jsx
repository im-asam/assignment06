import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-banner">
        <div className="hero-content">
          <p className="hero-eyebrow">WORKOUT LIBRARY</p>

          <h1 className="hero-title">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="hero-description">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link href="#library" className="hero-button">
            BROWSE WORKOUTS
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <Image
            src="/assets/hero.png"
            alt="FitLog workout"
            width={334}
            height={334}
            priority
          />
        </div>
      </div>
    </section>
  );
}