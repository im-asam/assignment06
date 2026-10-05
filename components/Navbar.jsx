"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { plan, saved } = usePlan();

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
            <span className="status-counter plan-counter">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="status-item">
            <span>Saved</span>
            <span className="status-counter saved-counter">
              {saved.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMenuOpen && (
          <nav className="mobile-nav">
            <Link
              href="/"
              className={`mobile-nav-link ${isHome ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`mobile-nav-link ${isMyPlan ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              My Plan
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}