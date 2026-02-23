'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const ProgressPage = () => {
    const [timeFilter, setTimeFilter] = useState('Last 30 Days');

    // Stats Card Data
    const stats = [
        { label: 'STUDY HOURS', value: '428.5h', icon: 'far fa-clock', trend: '+12%', trendUp: true, color: '#f0c000' },
        { label: 'AVERAGE GRADE', value: '3.85 GPA', icon: 'far fa-star', trend: 'Stable', trendUp: null, color: '#f0c000' },
        { label: 'COMPLETION RATE', value: '74.2%', icon: 'fas fa-chart-line', trend: '+5%', trendUp: true, color: '#f0c000' },
        { label: 'CREDITS EARNED', value: '112 pts', icon: 'fas fa-graduation-cap', trend: 'Goal: 140', trendUp: null, color: '#f0c000' },
    ];

    // Milestone Data
    const milestones = [
        { title: 'Final Thesis Submission', desc: 'Advanced Interaction Systems Module', date: '12 DEC', badge: 'Urgent', badgeColor: '#f0c000' },
        { title: 'UX Portfolio Review', desc: 'Career Development Office', date: '18 DEC', badge: 'Coming Up', badgeColor: '#3498db' },
    ];

    return (
        <div className="progress-page-wrapper">
            <Navbar />
            <div className="analytics-layout">
                <Sidebar />

                <main className="analytics-main">
                    {/* Header Section */}
                    <header className="analytics-header">
                        <div className="header-left">
                            <h1>Detailed Academic Analytics</h1>
                            <p>Monitoring performance and engagement for Fall Semester 2024</p>
                        </div>
                        <div className="header-right">
                            <div className="filter-dropdown">
                                <i className="far fa-calendar-alt"></i>
                                <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)}>
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                    <option>Last 6 Months</option>
                                </select>
                            </div>
                            <button className="export-btn">
                                <i className="fas fa-file-export"></i>
                                EXPORT PDF
                            </button>
                        </div>
                    </header>

                    {/* Stats Row */}
                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="stat-card glass-card">
                                <div className="stat-header">
                                    <div className="stat-icon-wrap" style={{ color: stat.color }}>
                                        <i className={stat.icon}></i>
                                    </div>
                                    {stat.trend && (
                                        <span className={`stat-trend ${stat.trendUp === true ? 'up' : stat.trendUp === false ? 'down' : ''}`}>
                                            {stat.trendUp === true ? '↗ ' : stat.trendUp === false ? '↘ ' : ''}{stat.trend}
                                        </span>
                                    )}
                                </div>
                                <div className="stat-body">
                                    <span className="stat-label">{stat.label}</span>
                                    <p className="stat-value">{stat.value}</p>
                                </div>
                                <div className="stat-viz">
                                    <div className="mini-bars">
                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                            <div key={i} className="mini-bar" style={{ height: `${Math.random() * 20 + 5}px` }}></div>
                                        ))}
                                        <div className="mini-bar active" style={{ height: '25px' }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="charts-grid">
                        {/* Intensity Chart */}
                        <div className="chart-card line-chart glass-card">
                            <div className="chart-header">
                                <h3>Learning Intensity</h3>
                                <div className="chart-legend">
                                    <span className="legend-item"><span className="dot yellow"></span> Deep Work</span>
                                    <span className="legend-item"><span className="dot gray"></span> Collaboration</span>
                                </div>
                            </div>
                            <div className="chart-viz-container">
                                <svg viewBox="0 0 500 200" className="intensity-svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="var(--neon-yellow)" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="var(--neon-yellow)" stopOpacity="0" />
                                        </linearGradient>
                                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="4" result="blur" />
                                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                        </filter>
                                    </defs>
                                    <path
                                        d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,60 T500,40"
                                        stroke="var(--neon-yellow)"
                                        fill="none"
                                        strokeWidth="3"
                                        filter="url(#glow)"
                                    />
                                    <path d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,60 T500,40 L500,200 L0,200 Z" fill="url(#gradient)" />
                                    <circle cx="400" cy="60" r="4" fill="var(--neon-yellow)" />
                                    <circle cx="400" cy="60" r="12" fill="var(--neon-yellow)" opacity="0.3">
                                        <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                                    </circle>
                                </svg>
                            </div>
                        </div>

                        {/* Radar Chart */}
                        <div className="chart-card radar-chart glass-card">
                            <div className="chart-header">
                                <h3>Skill Competency</h3>
                            </div>
                            <div className="radar-viz-container">
                                <div className="radar-3d-wrap">
                                    <svg viewBox="0 0 200 200" className="radar-svg">
                                        {/* Background Depth Polygons */}
                                        <polygon points="100,20 180,80 150,170 50,170 20,80" fill="none" stroke="#222" strokeWidth="1" />
                                        <polygon points="100,50 150,85 135,140 65,140 50,85" fill="none" stroke="#222" strokeWidth="1" />

                                        {/* Data Polygons with layered depth */}
                                        <polygon points="100,45 150,85 140,155 70,145 40,95" fill="rgba(240, 192, 0, 0.05)" stroke="none" />
                                        <polygon points="100,40 150,80 140,150 70,140 40,90" fill="rgba(240, 192, 0, 0.2)" stroke="var(--neon-yellow)" strokeWidth="2" />

                                        <text x="100" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="#666">UI DESIGN</text>
                                        <text x="185" y="85" textAnchor="start" fontSize="10" fontWeight="700" fill="#666">UX RESEARCH</text>
                                        <text x="155" y="180" textAnchor="middle" fontSize="10" fontWeight="700" fill="#666">PROTOTYPING</text>
                                        <text x="45" y="180" textAnchor="middle" fontSize="10" fontWeight="700" fill="#666">TESTING</text>
                                        <text x="15" y="85" textAnchor="end" fontSize="10" fontWeight="700" fill="#666">LOGIC</text>
                                    </svg>
                                </div>
                                <div className="radar-badges">
                                    <span className="radar-badge yellow">APERTURE USER</span>
                                    <span className="radar-badge blue">MASTER MENTOR</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Milestones Section */}
                    <section className="milestones-section">
                        <div className="section-header-row">
                            <h3>Upcoming Milestones</h3>
                            <button className="text-link">View All Schedule</button>
                        </div>
                        <div className="milestones-grid">
                            {milestones.map((m, idx) => (
                                <div key={idx} className="milestone-card glass-card">
                                    <div className="milestone-date">
                                        <span className="day">{m.date.split(' ')[0]}</span>
                                        <span className="month">{m.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="milestone-info">
                                        <h4>{m.title}</h4>
                                        <p>{m.desc}</p>
                                    </div>
                                    <div className="milestone-actions">
                                        <span className="badge" style={{ background: `rgba(${m.badgeColor === '#f0c000' ? '240,192,0' : '52,152,219'}, 0.1)`, color: m.badgeColor }}>
                                            {m.badge}
                                        </span>
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>

            <style jsx>{`
        .progress-page-wrapper {
          min-height: 100vh;
          background: #000;
          color: #fff;
        }
        .analytics-layout {
          display: flex;
          padding-top: var(--navbar-height);
        }
        .analytics-main {
          flex: 1;
          margin-left: var(--sidebar-width);
          padding: 40px 60px;
          max-width: 1400px;
          margin-right: auto;
          transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .analytics-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .header-left h1 {
          font-size: var(--font-page-title);
          font-family: var(--font-heading);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .header-left p {
          color: var(--text-dim);
          font-size: var(--font-body);
        }
        .header-right {
          display: flex;
          gap: 15px;
        }
        .filter-dropdown {
          background: #111;
          border: 1px solid var(--neon-yellow);
          padding: 10px 15px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--neon-yellow);
          box-shadow: 0 0 15px rgba(240, 192, 0, 0.1);
        }
        .filter-dropdown select {
          background: transparent;
          border: none;
          color: var(--neon-yellow);
          font-family: var(--font-main);
          font-size: var(--font-label);
          outline: none;
          cursor: pointer;
        }
        .export-btn {
          background: var(--neon-yellow);
          color: black;
          border: none;
          padding: 10px 24px;
          border-radius: 12px;
          font-family: var(--font-main);
          font-weight: 700;
          font-size: var(--font-label);
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 4px 15px var(--neon-yellow-glow);
        }
        .export-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px var(--neon-yellow-glow);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }
        .stat-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          transition: var(--transition);
        }
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--neon-yellow);
          box-shadow: 0 10px 30px rgba(240, 192, 0, 0.1);
        }
        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .stat-icon-wrap {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        .stat-trend {
          font-size: 0.75rem;
          font-weight: 700;
          color: #888;
        }
        .stat-trend.up { color: #27ae60; }
        .stat-trend.down { color: #e74c3c; }
        
        .stat-label {
          font-size: var(--font-label);
          color: var(--text-dim);
          font-weight: 600;
          letter-spacing: 1px;
        }
        .stat-value {
          font-size: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
        }
        .mini-bars {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 30px;
        }
        .mini-bar {
          flex: 1;
          background: #222;
          border-radius: 2px;
        }
        .mini-bar.active {
          background: var(--neon-yellow);
          box-shadow: 0 0 10px var(--neon-yellow-glow);
        }

        .charts-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }
        .chart-card {
          padding: 30px;
          min-height: 350px;
          display: flex;
          flex-direction: column;
        }
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .chart-header h3 {
          font-size: var(--font-card-title);
          font-family: var(--font-heading);
          font-weight: 600;
        }
        .chart-legend {
          display: flex;
          gap: 20px;
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.yellow { background: var(--neon-yellow); }
        .dot.gray { background: #444; }

        .chart-viz-container {
          flex: 1;
          display: flex;
          align-items: flex-end;
          filter: drop-shadow(0 0 10px rgba(240, 192, 0, 0.2));
        }
        .intensity-svg {
          width: 100%;
          height: 100%;
        }

        .radar-viz-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          perspective: 1000px;
        }
        .radar-3d-wrap {
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateZ(5deg);
          transition: var(--transition);
        }
        .radar-card:hover .radar-3d-wrap {
          transform: rotateX(10deg) rotateZ(0deg) scale(1.05);
        }
        .radar-svg {
          width: 90%;
          max-height: 220px;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
        }
        .radar-badges {
          display: flex;
          gap: 10px;
        }
        .radar-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          background: #111;
        }
        .radar-badge.yellow { color: var(--neon-yellow); border: 1px solid var(--neon-yellow); }
        .radar-badge.blue { color: #3498db; border: 1px solid #3498db; }

        .milestones-section {
          margin-top: 40px;
        }
        .section-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        .section-header-row h3 {
          font-size: var(--font-card-title);
          font-family: var(--font-heading);
          font-weight: 600;
        }
        .text-link {
          background: transparent;
          border: none;
          color: var(--neon-yellow);
          font-size: var(--font-label);
          font-weight: 600;
          cursor: pointer;
        }
        .milestones-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .milestone-card {
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: var(--transition);
          cursor: pointer;
        }
        .milestone-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.02);
        }
        .milestone-date {
          width: 60px;
          height: 60px;
          background: #111;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
        }
        .milestone-date .day { font-size: 1.2rem; font-weight: 700; }
        .milestone-date .month { font-size: 0.6rem; color: var(--text-dim); text-transform: uppercase; }
        
        .milestone-info { flex: 1; }
        .milestone-info h4 { font-size: var(--font-body); font-weight: 600; margin-bottom: 4px; }
        .milestone-info p { font-size: 0.8rem; color: var(--text-dim); }
        
        .milestone-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .milestone-actions .badge {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 50px;
        }
        .milestone-actions i { color: #333; }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(240, 192, 0, 0.15);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 
                      0 0 15px rgba(240, 192, 0, 0.05);
          transition: var(--transition);
        }
        .glass-card:hover {
          border-color: var(--neon-yellow);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 
                      0 0 25px rgba(240, 192, 0, 0.15);
        }

        @media (max-width: 1300px) {
          .analytics-main { 
            padding: 30px; 
            max-width: 100%;
          }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 1100px) {
          .analytics-layout {
            --profile-w: 0px; /* Hide profile sidebar offset on small screens */
          }
          .analytics-main {
            margin-left: var(--sidebar-width);
          }
          .charts-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .analytics-main { 
            margin-left: 80px; 
            padding: 20px; 
          }
          .stats-grid { grid-template-columns: 1fr; }
          .analytics-header { flex-direction: column; gap: 20px; }
          .milestones-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .analytics-main {
            margin-left: 0;
            padding-top: 100px; /* Space for mobile nav if any */
          }
          .header-left h1 { font-size: 1.5rem; }
        }
      `}</style>
        </div>
    );
};

export default ProgressPage;
