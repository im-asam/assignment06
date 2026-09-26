"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <Link href="/" className="navbar-brand">
          <img
            src="/assets/logo.png"
            alt="FitLog"
            className="navbar-logo"
          />
          <span>FITLOG</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <Link
            href="/"
            className={`nav-link ${isHome ? "active" : ""}`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`nav-link ${isMyPlan ? "active" : ""}`}
          >
            My Plan
          </Link>
        </nav>

        {/* Status */}
        <div className="navbar-status">
          <Link href="/my-plan" className="status-item">
            <span>Plan</span>
            <span className="status-counter plan-counter">0</span>
          </Link>

          <Link href="/my-plan" className="status-item">
            <span>Saved</span>
            <span className="status-counter saved-counter">0</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}