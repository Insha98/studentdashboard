'use client';

import React from 'react';
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
        <main className="main-content">
          <div className="main-content-inner">
            <header className="content-header">
              <div className="welcome-box">
                <h1 className="neon-text">Welcome back, Zaira</h1>
                <p>Ready for today&apos;s challenge?</p>
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
                <a href="#" className="see-all-link">See All <i className="fas fa-chevron-right"></i></a>
              </div>
              <div className="learning-grid">
                <div className="learning-card">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80" alt="Advanced Math" />
                    <span className="tag math-tag">ADVANCED MATH</span>
                  </div>
                  <div className="card-body">
                    <h3>Advanced Math: Linear Algebra</h3>
                    <p>Lesson 4 of 12 • 15 mins left</p>
                    <div className="progress-thin">
                      <div className="progress-bar" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="learning-card">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=400&q=80" alt="Basic Coding" />
                    <span className="tag coding-tag">CODING</span>
                  </div>
                  <div className="card-body">
                    <h3>Basic Coding: Python Basics</h3>
                    <p>Lesson 2 of 11 • 45 mins left</p>
                    <div className="progress-thin">
                      <div className="progress-bar" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="learning-card">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&q=80" alt="Robotics" />
                    <span className="tag robotics-tag">ROBOTICS</span>
                  </div>
                  <div className="card-body">
                    <h3>Intro to Robotics</h3>
                    <p>Lesson 5 of 8 • 30 mins left</p>
                    <div className="progress-thin">
                      <div className="progress-bar" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-container">
              <div className="section-header">
                <h2>RECOMMENDED SUBJECTS</h2>
                <a href="#" className="see-all-link">See All <i className="fas fa-chevron-right"></i></a>
              </div>
              <div className="subjects-grid">
                {[
                  { image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80', label: 'ADVANCED MATH', lessons: 24, level: 'Beginner' },
                  { image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&q=80', label: 'BASIC CODING', lessons: 18, level: 'Advanced' },
                  { image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=600&q=80', label: 'ROBOTICS', lessons: 15, level: 'Intermediate' },
                  { image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&q=80', label: 'COMP SCI', lessons: 32, level: 'Beginner' },
                  { image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80', label: 'IT', lessons: 10, level: 'Beginner' },
                ].map((subject, idx) => (
                  <div key={idx} className="subject-item">
                    <div className="subject-icon-wrap">
                      <img src={subject.image} alt={subject.label} />
                      <div className="card-overlay-info">
                        <span className="feat lessons">{subject.lessons} Lessons</span>
                        <span className={`feat level ${subject.level.toLowerCase()}`}>{subject.level}</span>
                      </div>
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
          </div>
        </main>
        <CoursesPanel />
      </div>

      <style jsx>{`
        .dashboard-wrapper {
          width: 100%;
          overflow-x: hidden;
        }
        .main-content {
          margin-left: var(--sidebar-width);
          width: calc(100% - var(--sidebar-width));
          padding: 40px 60px;
          transition: var(--transition);
        }
        .main-content-inner {
          width: 100%;
        }
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }
        .welcome-box h1 {
          font-size: var(--font-page-title);
          font-family: var(--font-heading);
          margin-bottom: 8px;
        }
        .welcome-box p {
          color: var(--text-dim);
          font-size: var(--font-body);
          font-family: var(--font-main);
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
          font-size: var(--font-section-title);
          filter: drop-shadow(0 0 5px rgba(255, 77, 0, 0.5));
        }
        .streak-info .label {
          display: block;
          font-size: var(--font-label);
          font-weight: 600;
          color: var(--text-dim);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .streak-info .value {
          font-size: var(--font-card-title);
          font-weight: 700;
          color: var(--neon-yellow);
          text-shadow: 0 0 10px rgba(240, 192, 0, 0.3);
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
          font-size: var(--font-section-title);
          font-family: var(--font-heading);
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #AAA;
          text-transform: uppercase;
        }
        .see-all-link {
          font-size: var(--font-label);
          color: var(--neon-yellow);
          text-decoration: none;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition);
          letter-spacing: 0.5px;
          font-family: var(--font-main);
        }
        .see-all-link:hover {
          color: white;
          text-shadow: 0 0 10px var(--neon-yellow-glow);
          transform: translateX(5px);
        }
        .see-all-link i {
          font-size: 0.6rem;
        }
        .science-tag, .robotics-tag { background: #3498db; color: white; }
        .logic-tag, .coding-tag { background: #9b59b6; color: white; }
        .learning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
        }
        .learning-card {
          background: var(--card-bg);
          border: 1px solid rgba(240, 192, 0, 0.15);
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 
                      0 0 15px rgba(240, 192, 0, 0.05);
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
          padding: 5px 12px;
          border-radius: 6px;
          font-size: var(--font-label);
          font-family: var(--font-main);
          font-weight: 600;
          color: black;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .physics-tag, .math-tag { background: var(--neon-yellow); }
        .arts-tag, .it-tag, .cs-tag { background: #f39c12; }
        .card-body {
          padding: 20px;
        }
        .card-body h3 {
          font-size: var(--font-card-title);
          font-family: var(--font-heading);
          font-weight: 700;
          margin-bottom: 6px;
          color: #FFF;
        }
        .card-body p {
          font-size: var(--font-body);
          font-family: var(--font-main);
          color: var(--text-dim);
          margin-bottom: 12px;
          font-weight: 500;
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
          justify-content: center;
          gap: 15px;
          padding: 80px 0;
          overflow: visible;
          perspective: 2000px;
          perspective-origin: center;
        }
        .subject-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
        }
        @keyframes subjectAppear {
          from { opacity: 0; transform: translateY(50px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .subject-item:nth-child(1) { animation-delay: 0.1s; }
        .subject-item:nth-child(2) { animation-delay: 0.2s; }
        .subject-item:nth-child(3) { animation-delay: 0.3s; }
        .subject-item:nth-child(4) { animation-delay: 0.4s; }
        .subject-item:nth-child(5) { animation-delay: 0.5s; }
        .subject-icon-wrap {
          width: 250px;
          height: 180px;
          border-radius: 25px;
          overflow: hidden;
          background: #000;
          border: 4px solid var(--neon-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 30px var(--neon-yellow-glow),
            0 0 60px rgba(255, 193, 7, 0.2);
          transition: var(--transition);
        }
        /* Immersive 3D Arched Layout - Desktop only */
        @media (min-width: 1025px) {
          .subject-item:nth-child(1) { transform: translateY(80px) rotateY(20deg) rotateX(10deg); }
          .subject-item:nth-child(2) { transform: translateY(30px) rotateY(10deg) rotateX(5deg); }
          .subject-item:nth-child(3) { transform: translateY(-20px) translateZ(50px); z-index: 5; }
          .subject-item:nth-child(4) { transform: translateY(30px) rotateY(-10deg) rotateX(5deg); }
          .subject-item:nth-child(5) { transform: translateY(80px) rotateY(-20deg) rotateX(10deg); }
          
          .subject-item:hover {
            transform: translateY(-50px) translateZ(150px) rotateY(0) rotateX(0) scale(1.1) !important;
            z-index: 100;
          }
        }
        @media (max-width: 1024px) {
           .subjects-grid {
             display: grid;
             grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
             gap: 20px;
             padding: 40px 0;
           }
           .subject-item {
             transform: none !important;
           }
        }
        .subject-icon-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          transition: var(--transition);
        }
        .card-overlay-info {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 15px 20px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 50%);
          opacity: 0.9;
          transition: var(--transition);
        }
        .feat {
          font-size: var(--font-label);
          font-family: var(--font-main);
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .level.beginner { color: #27ae60; }
        .level.intermediate { color: #f1c40f; }
        .level.advanced { color: #e74c3c; }
        
        .see-all-card {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: 2px dashed var(--border-color) !important;
          cursor: pointer;
          transition: var(--transition);
        }
        .see-all-card:hover {
          border-color: var(--neon-yellow) !important;
          background: rgba(255, 193, 7, 0.05) !important;
        }
        .see-all-btn-wrap {
          text-align: center;
        }
        .see-all-btn {
          background: transparent;
          border: none;
          color: var(--neon-yellow);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: var(--font-card-title);
          letter-spacing: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          transition: var(--transition);
        }
        .see-all-btn i {
          font-size: 1.5rem;
          transition: var(--transition);
        }
        .see-all-card:hover .see-all-btn {
          color: white;
          text-shadow: 0 0 10px var(--neon-yellow-glow);
        }
        .see-all-card:hover .see-all-btn i {
          transform: translateX(10px);
        }
        .subject-item:hover .card-overlay-info {
           opacity: 1;
           background: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 60%);
        }
        .subject-item:hover .subject-icon-wrap {
          border-color: #fff;
          box-shadow: 
            0 0 50px var(--neon-yellow-glow),
            0 0 100px rgba(255, 193, 7, 0.4);
        }
        .subject-item:hover .subject-icon-wrap img {
          opacity: 0.9;
          transform: scale(1.15);
        }
        .subject-label {
          font-size: var(--font-body);
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--neon-yellow);
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 10px var(--neon-yellow-glow);
          transition: var(--transition);
        }
        .subject-item:hover .subject-label {
          color: white;
          text-shadow: 0 0 20px white;
        }
        .see-all-content {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background: #000;
          color: var(--neon-yellow);
          font-size: 2.5rem;
          transition: var(--transition);
        }
        .see-all-item:hover .see-all-content {
          color: #fff;
          background: var(--neon-yellow);
          box-shadow: inset 0 0 40px rgba(0,0,0,0.5);
        }
        .see-all-item:hover .see-all-content i {
          transform: translateX(10px) scale(1.2);
        }
        .see-all-content i {
          transition: var(--transition);
        }
        .bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .bottom-card {
          background: var(--card-bg);
          border: 1px solid rgba(240, 192, 0, 0.15);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 
                      0 0 15px rgba(240, 192, 0, 0.05);
          transition: var(--transition);
        }
        .bottom-card:hover {
          border-color: var(--neon-yellow);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 
                      0 0 25px rgba(240, 192, 0, 0.15);
        }
        .bottom-card h3 {
          text-align: center;
          font-size: var(--font-label);
          font-family: var(--font-heading);
          letter-spacing: 1px;
          color: var(--neon-yellow);
          margin-bottom: 25px;
          text-transform: uppercase;
        }
        .section-header h2 {
          font-size: var(--font-section-title);
          font-weight: 600;
          letter-spacing: 1.5px;
          color: #AAA;
          text-transform: uppercase;
        }
        .see-all-link {
          font-size: var(--font-label);
          color: var(--neon-yellow);
          text-decoration: none;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: var(--transition);
          letter-spacing: 0.5px;
        }
        .see-all-link:hover {
          color: white;
          text-shadow: 0 0 10px var(--neon-yellow-glow);
          transform: translateX(5px);
        }
        .see-all-link i {
          font-size: 0.6rem;
        }
        .tag {
          position: absolute;
          top: 15px;
          left: 15px;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: var(--font-label);
          font-weight: 900;
          color: black;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .card-body h3 {
          font-size: var(--font-card-title);
          font-weight: 700;
          margin-bottom: 6px;
          color: #FFF;
        }
        .card-body p {
          font-size: var(--font-body);
          color: var(--text-dim);
          margin-bottom: 12px;
          font-weight: 500;
        }
        .streak-info .label {
          display: block;
          font-size: var(--font-label);
          font-weight: 600;
          color: var(--text-dim);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .streak-info .value {
          font-size: var(--font-card-title);
          font-weight: 700;
          color: var(--neon-yellow);
          text-shadow: 0 0 10px rgba(240, 192, 0, 0.3);
        }
        .goal-footer {
          text-align: center;
          font-size: var(--font-body);
          font-family: var(--font-main);
          color: var(--text-dim);
          font-weight: 500;
          margin-top: 15px;
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
          font-size: var(--font-body);
          font-family: var(--font-main);
          font-weight: 700;
          margin-bottom: 3px;
          color: #EEE;
        }
        .task-info p {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 500;
        }
        .status-pill {
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 1px;
        }
        .urgent { border: 1px solid var(--neon-yellow); color: var(--neon-yellow); }
        .medium { border: 1px solid #888; color: #888; }
        .low { border: 1px solid #444; color: #444; }

        @media (max-width: 1200px) {
          .main-content { 
            margin-left: 260px; 
            width: calc(100% - 260px);
          }
        }
        @media (max-width: 992px) {
          .learning-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          .subject-icon-wrap {
            width: 150px;
            height: 100px;
          }
        }
        @media (max-width: 768px) {
          .main-content { 
            margin-left: 80px; 
            padding: 25px;
            width: calc(100% - 80px);
          }
          .content-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .welcome-box h1 {
            font-size: 1.6rem;
          }
          .bottom-grid { 
            grid-template-columns: 1fr; 
          }
          .subjects-grid { 
            gap: 15px;
            flex-wrap: wrap;
            padding: 20px 0;
          }
          .subject-item:nth-child(n) {
            transform: none !important;
          }
          .subject-icon-wrap {
            width: 110px;
            height: 75px;
          }
          .subject-label {
            font-size: 0.6rem;
          }
        }
        @media (max-width: 480px) {
          .main-content {
            padding: 15px;
          }
          .learning-grid {
            grid-template-columns: 1fr;
          }
          .subject-icon-wrap {
            width: 90px;
            height: 60px;
            border-width: 2px;
          }
          .welcome-box h1 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div >
  );
};

export default DashboardPage;
