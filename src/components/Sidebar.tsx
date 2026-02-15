'use client';

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar-icons">
      <div className="icon-item active">
        <i className="fas fa-th-large"></i>
        <span className="icon-label">Dashboard</span>
      </div>
      <div className="icon-item">
        <i className="fas fa-book-open"></i>
        <span className="icon-label">Courses</span>
      </div>
      <div className="icon-item">
        <i className="fas fa-file-alt"></i>
        <span className="icon-label">Subjects</span>
      </div>
      <div className="icon-item">
        <i className="fas fa-user"></i>
        <span className="icon-label">Profile</span>
      </div>
      <div className="icon-item bottom">
        <i className="fas fa-cog"></i>
        <span className="icon-label">Settings</span>
      </div>

      <style jsx>{`
        .sidebar-icons {
          width: var(--sidebar-width);
          background: var(--bg-black);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 0;
          position: fixed;
          height: calc(100vh - var(--navbar-height));
        }
        .icon-item {
          width: 70px;
          height: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          margin-bottom: 20px;
          color: var(--text-dim);
          cursor: pointer;
          transition: var(--transition);
          gap: 5px;
        }
        .icon-item i {
          font-size: 1.2rem;
        }
        .icon-label {
          font-size: 0.65rem;
          font-weight: 500;
          text-align: center;
        }
        .icon-item:hover, .icon-item.active {
          background: var(--neon-yellow);
          color: black;
          box-shadow: 0 0 15px var(--neon-yellow-glow);
        }
        .icon-item.bottom {
          margin-top: auto;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
