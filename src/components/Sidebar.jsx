'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', icon: 'fas fa-th-large', href: '/' },
    { name: 'Courses', icon: 'fas fa-book-open', href: '/courses' },
    { name: 'Subjects', icon: 'fas fa-file-alt', href: '/subjects' },
    { name: 'Progress', icon: 'fas fa-chart-line', href: '/progress' },
    { name: 'Profile', icon: 'fas fa-user', href: '/profile' },
    { name: 'Settings', icon: 'fas fa-cog', href: '/settings' },
  ];

  const activeModules = [
    { name: 'Advanced Prototyping', progress: 74 },
    { name: 'Design Systems', progress: 45 },
    { name: 'Visual Storytelling', progress: 92 },
  ];

  return (
    <aside className="sidebar-icons">
      <div className="sidebar-logo">
        <div className="logo-box">L</div>
        <span className="logo-text">LMS Pro</span>
      </div>

      <div className="sidebar-nav-list">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="icon-item-link">
            <div className={`icon-item ${pathname === item.href ? 'active' : ''}`}>
              <i className={item.icon}></i>
              <span className="icon-label">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .sidebar-icons {
          width: var(--sidebar-width);
          background: #0A0A0A;
          border-right: 1px solid #1A1A1A;
          display: flex;
          flex-direction: column;
          padding: 40px 15px;
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          z-index: 900;
          overflow-y: auto;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 0 15px;
          margin-bottom: 40px;
          flex-shrink: 0;
        }

        .logo-box {
          width: 38px;
          height: 38px;
          background: var(--neon-yellow);
          border-radius: 12px;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.3rem;
          box-shadow: 0 0 15px rgba(240, 192, 0, 0.3);
        }

        .logo-text {
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: var(--font-section-title);
          letter-spacing: -0.5px;
        }

        .sidebar-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }

        .icon-item-link {
          text-decoration: none;
          display: block;
          width: 100%;
        }

        .icon-item {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 18px;
          color: #888;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          position: relative;
        }

        .icon-item i {
          font-size: 1.2rem;
          width: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .icon-label {
          font-size: var(--font-body);
          font-family: var(--font-heading);
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .icon-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.04);
        }

        .icon-item.active {
          color: black;
          background: var(--neon-yellow);
          box-shadow: 0 8px 20px rgba(240, 192, 0, 0.25);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .profile-top {
          text-align: center;
        }
        .avatar-ring {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 15px;
          padding: 3px;
          border: 2px solid var(--neon-yellow);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--neon-yellow-glow);
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
          right: 5px;
          width: 12px;
          height: 12px;
          background: #27ae60;
          border: 2px solid #0A0A0A;
          border-radius: 50%;
        }
        .profile-top h3 {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .role {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .sidebar-stat-card {
           background: rgba(255, 192, 0, 0.05);
           border: 1px solid rgba(255, 192, 0, 0.1);
           border-radius: 12px;
           padding: 15px;
        }
        .stat-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--neon-yellow);
          margin-bottom: 10px;
        }
        .progress-mini {
          height: 6px;
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
          margin-bottom: 8px;
        }
        .progress-fill {
          height: 100%;
          background: var(--neon-yellow);
          border-radius: 3px;
          box-shadow: 0 0 10px var(--neon-yellow-glow);
        }
        .stat-sub {
          font-size: 0.65rem;
          color: var(--text-dim);
        }

        .skills-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .section-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: #444;
          letter-spacing: 1.5px;
        }
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .skill-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #AAA;
          font-weight: 600;
        }
        .skill-progress-bg {
          height: 4px;
          background: rgba(255,255,255,0.03);
          border-radius: 2px;
        }
        .skill-progress-fill {
          height: 100%;
          background: var(--neon-yellow);
          border-radius: 2px;
        }

        .sidebar-footer-card {
           margin-top: 30px;
           background: rgba(255, 255, 255, 0.03);
           border-radius: 16px;
           padding: 15px;
           display: flex;
           align-items: center;
           gap: 12px;
           border: 1px solid rgba(255,255,255,0.05);
        }
        .rank-icon {
          width: 35px;
          height: 35px;
          background: var(--neon-yellow);
          color: black;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
        .rank-info {
           display: flex;
           flex-direction: column;
        }
        .rank-label { font-size: 0.65rem; color: var(--text-dim); }
        .rank-value { font-size: 0.8rem; font-weight: 700; color: #FFF; }

        .sidebar-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex-shrink: 0;
        }

        .icon-item-link {
          text-decoration: none;
          display: block;
        }

        .icon-item {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 18px;
          color: #888;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          position: relative;
          overflow: hidden;
        }

        .icon-item i {
          font-size: 1.2rem;
          width: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .icon-label {
          font-size: var(--font-body);
          font-family: var(--font-heading);
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .icon-item:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.04);
        }

        .icon-item:hover i {
          transform: scale(1.1);
        }

        .icon-item.active {
          color: black;
          background: var(--neon-yellow);
          box-shadow: 
            0 8px 20px rgba(240, 192, 0, 0.25),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
        }

        .icon-item.active .icon-label {
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .sidebar-icons {
            width: 80px;
            padding: 30px 10px;
          }
          .icon-item {
             padding: 0;
             justify-content: center;
             gap: 0;
          }
          .icon-label, .logo-text { display: none; }
          .icon-item i {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
