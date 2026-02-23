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
        {/* Only the icon remains in the header */}
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-mini-card">
            {/* ONLY THE ICON IS KEPT HERE */}
            <div className={`course-icon ${course.colorClass}`}>{course.icon}</div>
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
        /* Tip: I added justify-content center so the icons look good alone */
        .course-mini-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center; 
          transition: var(--transition);
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        /* ... keep the rest of your styles ... */
      `}</style>
    </aside>
  );
};

export default CoursesPanel;