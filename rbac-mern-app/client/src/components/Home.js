import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="nimbus-home">
      {/* Header/Navbar */}
     

      {/* Hero section */}
      <section className="nimbus-hero">
        <div className="nimbus-hero-overlay">
          <div className="nimbus-badge">Enterprise-Grade Access Control</div>
          <h1>
            Secure Role-Based <br /><span className="accent">Access Management</span>
          </h1>
          <p>
            Empower your team with granular permissions. Admin, Editor, and Viewer roles designed for modern collaboration.
          </p>
          <div className="nimbus-cta-buttons">
            <Link to="/register" className="nimbus-btn-primary">Get Started</Link>
            <Link to="/login" className="nimbus-btn-secondary">Sign In</Link>
          </div>
        </div>
        <img src="/cloud-bg.jpg" alt="" className="nimbus-hero-bg" />
      </section>

      {/* Key Features section */}
      <section className="nimbus-features">
        <h2>Key Features</h2>
        <div className="nimbus-feature-row">
          <div className="nimbus-feature-card">
            <div className="nimbus-feature-icon">🔒</div>
            <strong>Secure by Design</strong>
            <div className="nimbus-feature-desc">
              Database-level security with Row Level Security policies ensuring data protection at every layer.
            </div>
          </div>
          <div className="nimbus-feature-card">
            <div className="nimbus-feature-icon">👤</div>
            <strong>Role Management</strong>
            <div className="nimbus-feature-desc">
              Easily assign and manage Admin, Editor, and Viewer roles with fine-grained permission control.
            </div>
          </div>
          <div className="nimbus-feature-card">
            <div className="nimbus-feature-icon">📄</div>
            <strong>Content Control</strong>
            <div className="nimbus-feature-desc">
              Role-based content creation and management. Editors create, viewers consume, admins oversee all.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
