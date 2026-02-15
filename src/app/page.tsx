'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CoursesPanel from '../components/CoursesPanel';
import ProgressRing from '../components/ProgressRing';

const DashboardPage = () => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <CoursesPanel />
        <main className="main-content">
          <header className="content-header">
            <div className="welcome-box">
              <h1 className="neon-text">Welcome back, Zaira</h1>
              <p>Ready for today's challenge?</p>
            </div>
            <div className="streak-card">
              <div className="streak-icon">
                <i className="fas fa-fire"></i>
              </div>
              <div className="streak-info">
                <span className="label">KEEP RISING</span>
                <span className="value">12 Days</span>
              </div>
            </div>
          </header>

          <section className="section-container">
            <div className="section-header">
              <h2>CONTINUE LEARNING</h2>
              <a href="#" className="see-all">See all</a>
            </div>
            <div className="learning-grid">
              <div className="learning-card">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80" alt="Physics" />
                  <span className="tag physics-tag">PHYSICS</span>
                </div>
                <div className="card-body">
                  <h3>Physics: Light & Optics</h3>
                  <p>Lesson 4 of 12 • 15 mins left</p>
                  <div className="progress-thin">
                    <div className="progress-bar" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </div>
              <div className="learning-card">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=400&q=80" alt="Maths" />
                  <span className="tag math-tag">MATH</span>
                </div>
                <div className="card-body">
                  <h3>Advanced Calculus</h3>
                  <p>Lesson 2 of 11 • 45 mins left</p>
                  <div className="progress-thin">
                    <div className="progress-bar" style={{ width: '18%' }}></div>
                  </div>
                </div>
              </div>
              <div className="learning-card">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&q=80" alt="Science" />
                  <span className="tag science-tag">SCIENCE</span>
                </div>
                <div className="card-body">
                  <h3>Quantum Mechanics</h3>
                  <p>Lesson 5 of 8 • 30 mins left</p>
                  <div className="progress-thin">
                    <div className="progress-bar" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>
              <div className="learning-card">
                <div className="card-image">
                  <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80" alt="Arts" />
                  <span className="tag arts-tag">ARTS</span>
                </div>
                <div className="card-body">
                  <h3>Kashmiri Literature</h3>
                  <p>Lesson 9 of 10 • 5 mins left</p>
                  <div className="progress-thin">
                    <div className="progress-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-container">
            <div className="section-header">
              <h2>MY SUBJECTS</h2>
            </div>
            <div className="subjects-grid">
              {[
                { icon: 'fas fa-atom', label: 'PHYSICS' },
                { icon: 'fas fa-calculator', label: 'MATH' },
                { icon: 'fas fa-flask', label: 'SCIENCE' },
                { icon: 'fas fa-globe-americas', label: 'HISTORY' },
                { icon: 'fas fa-palette', label: 'ARTS' },
                { icon: 'fas fa-code', label: 'CS' },
              ].map((subject, idx) => (
                <div key={idx} className="subject-item">
                  <div className="subject-icon-wrap">
                    <i className={subject.icon}></i>
                  </div>
                  <span className="subject-label">{subject.label}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="bottom-grid">
            <div className="bottom-card goal-card">
              <h3>MONTHLY GOAL</h3>
              <ProgressRing percent={68} label="PROGRESS" />
              <p className="goal-footer">Almost there! Keep it up.</p>
            </div>

            <div className="bottom-card tasks-card">
              <div className="card-header-row">
                <h3>UPCOMING TASKS</h3>
                <div className="calendar-mini-btn">
                  <i className="far fa-calendar-alt"></i>
                </div>
              </div>
              <div className="task-list">
                <div className="task-item">
                  <div className="task-info">
                    <h4>Physics: Light Quiz</h4>
                    <p>Tomorrow, 10:00 AM</p>
                  </div>
                  <span className="status-pill urgent">URGENT</span>
                </div>
                <div className="task-item">
                  <div className="task-info">
                    <h4>History: Submission</h4>
                    <p>In 2 days</p>
                  </div>
                  <span className="status-pill medium">MEDIUM</span>
                </div>
                <div className="task-item">
                  <div className="task-info">
                    <h4>Math: Practice Set</h4>
                    <p>In 4 days</p>
                  </div>
                  <span className="status-pill low">LOW</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .main-content {
          margin-left: calc(var(--sidebar-width) + var(--courses-width));
          flex: 1;
          padding: 40px;
        }
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .welcome-box h1 {
          font-size: 2.2rem;
          margin-bottom: 8px;
        }
        .welcome-box p {
          color: var(--text-dim);
          font-size: 1.1rem;
        }
        .streak-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          padding: 15px 25px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .streak-icon i {
          color: #ff4d00;
          font-size: 1.5rem;
          filter: drop-shadow(0 0 5px rgba(255, 77, 0, 0.5));
        }
        .streak-info .label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-dim);
        }
        .streak-info .value {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--neon-yellow);
        }
        .section-container {
          margin-bottom: 50px;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        .section-header h2 {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .see-all {
          color: var(--neon-yellow);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .science-tag { background: #3498db; color: white; }
        .learning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }
        .learning-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }
        .learning-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--neon-yellow);
          box-shadow: 
            0 0 25px var(--neon-yellow-glow),
            0 0 50px rgba(255, 193, 7, 0.15),
            inset 0 0 15px var(--neon-yellow-glow);
        }
        .card-image {
          height: 160px;
          position: relative;
        }
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
        }
        .tag {
          position: absolute;
          top: 15px;
          left: 15px;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.65rem;
          font-weight: 800;
          color: black;
        }
        .physics-tag { background: var(--neon-yellow); }
        .math-tag { background: white; }
        .arts-tag { background: #f39c12; }
        .card-body {
          padding: 20px;
        }
        .card-body h3 {
          font-size: 1rem;
          margin-bottom: 8px;
        }
        .card-body p {
          font-size: 0.8rem;
          color: var(--text-dim);
          margin-bottom: 15px;
        }
        .progress-thin {
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .progress-bar {
          height: 100%;
          background: var(--neon-yellow);
          border-radius: 10px;
          box-shadow: 0 0 5px var(--neon-yellow);
        }
        .subjects-grid {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .subject-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .subject-icon-wrap {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 193, 7, 0.4), transparent 75%);
          border: 4px solid var(--neon-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.4rem;
          color: var(--neon-yellow);
          box-shadow: 
            0 0 40px var(--neon-yellow-glow),
            0 0 80px rgba(255, 193, 7, 0.2),
            inset 0 0 25px var(--neon-yellow-glow);
          transition: var(--transition);
          -webkit-text-stroke: 1.5px var(--neon-yellow);
        }
        .subject-icon-wrap i {
          filter: drop-shadow(0 0 10px var(--neon-yellow-glow));
          font-weight: 900;
        }
        .subject-item:hover .subject-icon-wrap {
          background: radial-gradient(circle at center, rgba(255, 193, 7, 0.4), transparent 80%);
          color: black;
          box-shadow: 
            0 0 50px var(--neon-yellow-glow),
            0 0 80px rgba(255, 193, 7, 0.3),
            inset 0 0 30px var(--neon-yellow-glow);
          border-color: #fff;
        }
        .subject-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--neon-yellow);
        }
        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .bottom-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 30px;
        }
        .bottom-card h3 {
          text-align: center;
          font-size: 0.9rem;
          letter-spacing: 1px;
          color: var(--neon-yellow);
          margin-bottom: 25px;
        }
        .goal-footer {
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-dim);
        }
        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .card-header-row h3 {
          margin: 0;
          text-align: left;
        }
        .calendar-mini-btn {
          width: 35px;
          height: 35px;
          background: var(--neon-yellow);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          font-size: 0.9rem;
        }
        .task-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .task-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: var(--transition);
        }
        .task-item:hover {
          border-color: var(--neon-yellow);
        }
        .task-info h4 {
          font-size: 0.85rem;
          margin-bottom: 4px;
        }
        .task-info p {
          font-size: 0.7rem;
          color: var(--text-dim);
        }
        .status-pill {
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 0.6rem;
          font-weight: 800;
        }
        .urgent { border: 1px solid var(--neon-yellow); color: var(--neon-yellow); }
        .medium { border: 1px solid #888; color: #888; }
        .low { border: 1px solid #444; color: #444; }

        @media (max-width: 1200px) {
          .main-content { margin-left: var(--sidebar-width); }
        }

        @media (max-width: 768px) {
          .bottom-grid { grid-template-columns: 1fr; }
          .subjects-grid { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
