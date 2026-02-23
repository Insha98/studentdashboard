'use client';

import React, { useState } from 'react';

const CoursePreview = ({ onBack, courseTitle = "Quantum Mechanics for Beginners" }) => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: "Introduction to the Microcosm",
      lessons: [
        { title: "The History of Atoms", type: "VIDEO", duration: "08:30" },
        { title: "The Nature of Light (Preview)", type: "FREE", duration: "Free" },
        { title: "Reading Materials", type: "PDF", duration: "5 mins" },
      ],
      lessonCount: 3
    },
    { title: "Wave Functions & Probability", lessons: [], lessonCount: 5 },
    { title: "Quantum Numbers", lessons: [], lessonCount: 4 },
    { title: "The Uncertainty Principle", lessons: [], lessonCount: 8 },
  ];

  return (
    <div className="course-preview-overlay">
      <div className="preview-container">
        {/* Top Bar */}
        <header className="preview-header">
          <button className="back-btn" onClick={onBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
          <span className="header-title">Course Preview</span>
          <button className="share-btn">
            <i className="fas fa-share-alt"></i>
          </button>
        </header>

        <div className="preview-scroll-area">
          {/* Video Section */}
          <div className="video-section">
            <div className="video-thumb">
              <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80" alt="Course Thumbnail" />
              <div className="play-btn-wrap">
                <div className="play-btn">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="video-controls">
                <div className="progress-slider">
                  <div className="slider-bg"></div>
                  <div className="slider-fill" style={{ width: '40%' }}></div>
                  <div className="slider-handle" style={{ left: '40%' }}></div>
                </div>
                <div className="video-time">Preview • 3:27 / 15:22</div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="info-section">
            <h1 className="course-title">{courseTitle}</h1>
            <div className="author-line">
              <i className="fas fa-user-circle"></i>
              <span>by <span className="author-name">Zaira Scientist</span></span>
            </div>

            <button className="enroll-btn">Enroll Now — Free Preview</button>

            {/* Stats Row */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-icon"><i className="far fa-clock"></i></div>
                <div className="stat-label">Duration</div>
                <div className="stat-value">127 Mins</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-signal"></i></div>
                <div className="stat-label">Level</div>
                <div className="stat-value">Interm.</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><i className="fas fa-flask"></i></div>
                <div className="stat-label">Units</div>
                <div className="stat-value">18 Exp.</div>
              </div>
            </div>

            {/* What you will learn */}
            <div className="learn-section">
              <h3>What you will learn</h3>
              <ul className="learn-list">
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Fundamentals of Wave-Particle Duality and the Double Slit Experiment.</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>The Schrödinger Equation and its practical applications in modern tech.</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Quantum Entanglement and its role in future computing.</span>
                </li>
              </ul>
            </div>

            {/* Curriculum */}
            <div className="curriculum-section">
              <div className="curr-header">
                <h3>Course Curriculum</h3>
                <span className="curr-meta">4 Chapters • 20 Lessons</span>
              </div>

              <div className="module-list">
                {modules.map((mod, idx) => (
                  <div key={idx} className={`module-item ${activeModule === idx ? 'expanded' : ''}`}>
                    <div className="module-header" onClick={() => setActiveModule(activeModule === idx ? null : idx)}>
                      <div className="mod-info">
                        <span className="mod-num">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        <span className="mod-title">{mod.title}</span>
                      </div>
                      <i className={`fas fa-chevron-${activeModule === idx ? 'up' : 'down'}`}></i>
                    </div>
                    {activeModule === idx && mod.lessons.length > 0 && (
                      <div className="lesson-list">
                        {mod.lessons.map((lesson, lIdx) => (
                          <div key={lIdx} className="lesson-item">
                            <div className="lesson-left">
                              <i className={lesson.type === 'VIDEO' ? 'fas fa-play-circle' : lesson.type === 'FREE' ? 'fas fa-unlock' : 'fas fa-file-alt'}></i>
                              <span className="lesson-name">{lesson.title}</span>
                            </div>
                            <span className={`lesson-time ${lesson.type === 'FREE' ? 'free' : ''}`}>
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .course-preview-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000;
          z-index: 2000;
          display: flex;
          justify-content: center;
        }
        .preview-container {
          width: 100%;
          max-width: 450px;
          height: 100%;
          background: var(--bg-black);
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }
        @media (max-width: 480px) {
          .preview-container {
            max-width: 100%;
          }
          .info-section {
            padding: 15px;
          }
          .course-title {
            font-size: 1.3rem;
          }
          .stats-row {
            gap: 8px;
          }
        }
        .preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid var(--border-color);
        }
        .header-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: var(--font-card-title);
          color: white;
        }
        .back-btn, .share-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
        }
        .preview-scroll-area {
          flex: 1;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .preview-scroll-area::-webkit-scrollbar { display: none; }

        .video-section {
          width: 100%;
          background: #111;
        }
        .video-thumb {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .video-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
        }
        .play-btn-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
        }
        .play-btn {
          width: 60px;
          height: 60px;
          background: var(--neon-yellow);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          font-size: 1.5rem;
          padding-left: 5px;
          box-shadow: 0 0 20px var(--neon-yellow-glow);
        }
        .video-controls {
          position: absolute;
          bottom: 15px;
          left: 20px;
          right: 20px;
        }
        .progress-slider {
          height: 3px;
          position: relative;
          margin-bottom: 10px;
        }
        .slider-bg {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.2);
          border-radius: 5px;
        }
        .slider-fill {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          background: var(--neon-yellow);
          border-radius: 5px;
          box-shadow: 0 0 10px var(--neon-yellow);
        }
        .slider-handle {
          position: absolute;
          top: 50%;
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid var(--neon-yellow);
          border-radius: 50%;
          translate: -50% -50%;
        }
        .video-time {
          font-size: 11px;
          font-family: var(--font-main);
          color: rgba(255,255,255,0.7);
        }

        .info-section {
          padding: 25px 20px;
        }
        .course-title {
          font-size: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .author-line {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-dim);
          font-size: var(--font-body);
          font-family: var(--font-main);
          margin-bottom: 25px;
        }
        .author-line i { color: var(--neon-yellow); font-size: 1.2rem; }
        .author-name { color: var(--neon-yellow); font-weight: 600; }

        .enroll-btn {
          width: 100%;
          background: var(--neon-yellow);
          color: black;
          border: none;
          padding: 16px;
          border-radius: 50px;
          font-family: var(--font-main);
          font-weight: 800;
          font-size: var(--font-body);
          margin-bottom: 25px;
          box-shadow: 0 10px 20px var(--neon-yellow-glow);
          cursor: pointer;
          transition: var(--transition);
        }
        .enroll-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px var(--neon-yellow-glow);
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 30px;
        }
        .stat-card {
          background: var(--card-bg);
          padding: 15px 10px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid var(--border-color);
        }
        .stat-icon {
          color: var(--neon-yellow);
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 10px;
          font-family: var(--font-main);
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .stat-value {
          font-size: var(--font-label);
          font-family: var(--font-main);
          font-weight: 700;
        }

        .learn-section {
          margin-bottom: 35px;
        }
        .learn-section h3 {
          font-size: var(--font-card-title);
          font-family: var(--font-heading);
          margin-bottom: 15px;
        }
        .learn-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .learn-list li {
          display: flex;
          gap: 12px;
          font-size: var(--font-body);
          font-family: var(--font-main);
          color: var(--text-dim);
          line-height: 1.5;
        }
        .learn-list i {
          color: var(--neon-yellow);
          font-size: 1.1rem;
          margin-top: 2px;
        }

        .curriculum-section h3 {
          font-size: var(--font-card-title);
          font-family: var(--font-heading);
        }
        .curr-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .curr-meta {
          font-size: var(--font-label);
          font-family: var(--font-main);
          color: var(--neon-yellow);
          font-weight: 600;
        }
        .module-item {
          background: var(--card-bg);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          margin-bottom: 12px;
          overflow: hidden;
        }
        .module-header {
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .mod-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .mod-num {
          font-size: var(--font-label);
          font-family: var(--font-main);
          font-weight: 800;
          color: var(--neon-yellow);
        }
        .mod-title {
          font-size: var(--font-body);
          font-family: var(--font-main);
          font-weight: 700;
        }
        .lesson-list {
          padding: 0 18px 18px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          border-top: 1px solid var(--border-color);
          padding-top: 15px;
        }
        .lesson-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .lesson-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .lesson-left i {
          color: var(--text-dim);
          font-size: 0.9rem;
        }
        .lesson-name {
          font-size: var(--font-label);
          font-family: var(--font-main);
          color: var(--text-main);
        }
        .lesson-time {
          font-size: var(--font-label);
          font-family: var(--font-main);
          color: var(--text-dim);
        }
        .lesson-time.free {
          color: var(--neon-yellow);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default CoursePreview;
