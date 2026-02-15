'use client';

import React from 'react';

const CoursesPanel = () => {
  const courses = [
    { name: 'Quantum Physics', unit: 'Unit 2: Wave Dynamics', progress: 78, icon: 'Q', colorClass: 'theme-icon' },
    { name: 'Adv. Mathematics', unit: 'Unit 7: Integrals', progress: 45, icon: 'M', colorClass: 'theme-icon' },
    { name: 'Molecular Bio', unit: 'Unit 5: Cell Theory', progress: 90, icon: 'B', colorClass: 'theme-icon' },
    { name: 'Modern History', unit: 'Unit 4: Renaissance', progress: 15, icon: 'H', colorClass: 'theme-icon' },
  ];

  const recentActivity = [
    { title: 'Completed: Physics Quiz', time: '10m ago' },
    { title: 'Viewed: Math Integrals', time: '1h ago' },
    { title: 'New Achievement: Top Scorer', time: '3h ago' },
  ];

  return (
    <aside className="courses-panel">
      <div className="panel-header">
        <h3>Courses</h3>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-mini-card">
            <div className={`course-icon ${course.colorClass}`}>{course.icon}</div>
            <div className="course-info">
              <h4>{course.name}</h4>
              <p>{course.unit}</p>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
              </div>
              <span className="progress-label">{course.progress}% COMPLETE</span>
            </div>
          </div>
        ))}

        <div className="activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <span className="activity-dot"></span>
                <div className="activity-content">
                  <p className="activity-title">{activity.title}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .courses-panel {
          width: var(--courses-width);
          padding: 30px 20px;
          border-right: 1px solid var(--border-color);
          position: fixed;
          left: var(--sidebar-width);
          bottom: 0;
          top: var(--navbar-height);
          background: var(--bg-black);
        }
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .panel-header h3 {
          color: var(--neon-yellow);
          font-weight: 600;
          font-size: 1.1rem;
        }
        .panel-header i {
          color: var(--text-dim);
          font-size: 0.9rem;
        }
        .course-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          overflow-y: auto;
          max-height: calc(100vh - var(--navbar-height) - 100px);
          padding-right: 5px;
        }
        .course-list::-webkit-scrollbar {
          width: 4px;
        }
        .course-list::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .course-list::-webkit-scrollbar-thumb {
          background: var(--neon-yellow);
          border-radius: 10px;
          box-shadow: 0 0 5px var(--neon-yellow-glow);
        }
        .course-mini-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: var(--transition);
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .course-mini-card:hover {
          transform: scale(1.05);
          border-color: var(--neon-yellow);
          box-shadow: 
            0 0 20px var(--neon-yellow-glow),
            0 0 40px rgba(255, 193, 7, 0.1);
        }
        .course-icon {
          min-width: 35px;
          height: 35px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          color: black;
        }
        .theme-icon { background: var(--neon-yellow); }
        
        .activity-section {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }
        .activity-section h3 {
          font-size: 0.9rem;
          color: var(--text-dim);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .activity-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .activity-dot {
          width: 8px;
          height: 8px;
          background: var(--neon-yellow);
          border-radius: 50%;
          margin-top: 4px;
          box-shadow: 0 0 5px var(--neon-yellow);
        }
        .activity-title {
          font-size: 0.75rem;
          color: var(--text-main);
          margin-bottom: 2px;
        }
        .activity-time {
          font-size: 0.65rem;
          color: var(--text-dim);
        }
        .course-info h4 {
          font-size: 0.85rem;
          margin-bottom: 2px;
        }
        .course-info p {
          font-size: 0.7rem;
          color: var(--text-dim);
          margin-bottom: 8px;
        }
        .progress-container {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          margin-bottom: 5px;
        }
        .progress-bar {
          height: 100%;
          background: var(--neon-yellow);
          border-radius: 10px;
          box-shadow: 0 0 10px var(--neon-yellow), 0 0 20px var(--neon-yellow-glow);
        }
        .progress-label {
          font-size: 0.6rem;
          font-weight: 700;
          color: var(--neon-yellow);
        }
         @media (max-width: 1200px) {
            .courses-panel { display: none; }
        }
      `}</style>
    </aside>
  );
};

export default CoursesPanel;
