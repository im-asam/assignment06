import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <Image
          src="/assets/logo.png"
          alt="FitLog"
          width={28}
          height={28}
        />

        <span>FITLOG</span>
      </div>

      <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </footer>
  );
}