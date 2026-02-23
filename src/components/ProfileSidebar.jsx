'use client';

import React from 'react';

const ProfileSidebar = ({ isOpen, onToggle }) => {
  const activeModules = [
    { name: 'Advanced Prototyping', progress: 74 },
    { name: 'Design Systems', progress: 45 },
    { name: 'Visual Storytelling', progress: 92 },
  ];

  return (
    <aside className={`profile-sidebar ${!isOpen ? 'collapsed' : ''}`}>
      {!isOpen && (
        <button className="expand-trigger" onClick={onToggle} title="Open Profile Section">
          <i className="fas fa-bars"></i>
        </button>
      )}

      <div className="sidebar-profile-panel">
        <button className="collapse-btn" onClick={onToggle} title="Close Profile Section">
          <i className="fas fa-times"></i>
        </button>
        <div className="profile-top">
          <div className="avatar-ring">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
              alt="Alex Rivera"
              className="profile-avatar-circle"
            />
            <div className="online-status"></div>
          </div>
          <h3>Alex Rivera</h3>
          <p className="role">Senior Product Design Student</p>
        </div>

        <div className="sidebar-stat-card">
          <div className="stat-label-row">
            <span>Course Progress</span>
            <span className="val">85%</span>
          </div>
          <div className="progress-mini">
            <div className="progress-fill" style={{ width: '85%' }}></div>
          </div>
          <p className="stat-sub">112 of 140 credits earned</p>
        </div>

        <div className="skills-section">
          <span className="section-label">ACTIVE MODULES</span>
          <div className="skills-list">
            {activeModules.map(module => (
              <div key={module.name} className="skill-item">
                <div className="skill-info">
                  <span>{module.name}</span>
                  <span>{module.progress}%</span>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: `${module.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-footer-card">
          <div className="rank-icon"><i className="fas fa-medal"></i></div>
          <div className="rank-info">
            <span className="rank-label">Student Rank</span>
            <span className="rank-value">Platinum Elite</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-sidebar {
          width: 300px;
          background: #000;
          border-right: 1px solid #1A1A1A;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: var(--sidebar-width);
          top: var(--navbar-height);
          bottom: 0;
          z-index: 850;
          overflow-y: auto;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }

        .profile-sidebar.collapsed {
          transform: translateX(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .sidebar-profile-panel {
          display: flex;
          flex-direction: column;
          gap: 30px;
          position: relative;
        }

        .collapse-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          background: transparent;
          border: none;
          color: #555;
          font-size: 1.2rem;
          cursor: pointer;
          transition: var(--transition);
          padding: 10px;
          z-index: 10;
        }

        .collapse-btn:hover {
          color: var(--neon-yellow);
        }

        .expand-trigger {
          position: fixed;
          left: calc(var(--sidebar-width) + 20px);
          top: calc(var(--navbar-height) + 20px);
          background: #111;
          border: 1px solid #222;
          width: 45px;
          height: 45px;
          border-radius: 12px;
          color: var(--neon-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          transition: var(--transition);
          pointer-events: auto;
        }

        .expand-trigger:hover {
          background: var(--neon-yellow);
          color: black;
          transform: scale(1.1);
        }

        .profile-top {
          text-align: center;
        }
        .avatar-ring {
          position: relative;
          width: 90px;
          height: 90px;
          margin: 0 auto 15px;
          padding: 3px;
          border: 2px solid var(--neon-yellow);
          border-radius: 50%;
          box-shadow: 0 0 20px var(--neon-yellow-glow);
        }
        .profile-avatar-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .online-status {
          position: absolute;
          bottom: 5px;
          right: 8px;
          width: 14px;
          height: 14px;
          background: #27ae60;
          border: 2px solid #000;
          border-radius: 50%;
        }
        .profile-top h3 {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .role {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .sidebar-stat-card {
           background: rgba(240, 192, 0, 0.05);
           border: 1px solid rgba(240, 192, 0, 0.1);
           border-radius: 20px;
           padding: 20px;
        }
        .stat-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--neon-yellow);
          margin-bottom: 12px;
        }
        .progress-mini {
          height: 8px;
          background: rgba(255,255,255,0.05);
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .progress-fill {
          height: 100%;
          background: var(--neon-yellow);
          border-radius: 4px;
          box-shadow: 0 0 10px var(--neon-yellow-glow);
        }
        .stat-sub {
          font-size: 0.7rem;
          color: var(--text-dim);
        }

        .skills-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .section-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: #444;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .skill-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #AAA;
          font-weight: 600;
        }
        .skill-progress-bg {
          height: 5px;
          background: rgba(255,255,255,0.03);
          border-radius: 3px;
        }
        .skill-progress-fill {
          height: 100%;
          background: var(--neon-yellow);
          border-radius: 3px;
        }

        .sidebar-footer-card {
           background: rgba(255, 255, 255, 0.02);
           border-radius: 20px;
           padding: 20px;
           display: flex;
           align-items: center;
           gap: 15px;
           border: 1px solid rgba(255,255,255,0.05);
        }
        .rank-icon {
          width: 40px;
          height: 40px;
          background: var(--neon-yellow);
          color: black;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        .rank-info {
           display: flex;
           flex-direction: column;
        }
        .rank-label { font-size: 0.7rem; color: var(--text-dim); }
        .rank-value { font-size: 0.9rem; font-weight: 700; color: #FFF; }

        @media (max-width: 1100px) {
          .profile-sidebar {
            left: 0;
            width: 320px;
            z-index: 2000;
            transform: translateX(-100%);
            box-shadow: 20px 0 50px rgba(0,0,0,0.8);
          }
          .profile-sidebar:not(.collapsed) {
            transform: translateX(0);
            opacity: 1;
            pointer-events: auto;
          }
          .profile-sidebar.collapsed {
            transform: translateX(-100%);
            opacity: 0;
            pointer-events: none;
          }
          .collapse-btn {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .profile-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </aside>
  );
};

export default ProfileSidebar;
