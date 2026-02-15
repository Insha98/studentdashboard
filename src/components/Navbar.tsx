'use client';

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <i className="fas fa-user-graduate"></i>
          <span>KOSHUR <span className="neon-text">SCIENTIST</span></span>
        </div>
      </div>
      <div className="nav-center">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search lessons..." />
        </div>
      </div>
      <div className="nav-right">
        <button className="icon-btn notification">
          <i className="far fa-bell"></i>
          <span className="badge"></span>
        </button>
        <button className="cta-btn">CATCH UP NOW</button>
        <div className="profile-avatar">
          <span>ZA</span>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--navbar-height);
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 0.5px;
        }
        .logo i {
          color: var(--neon-yellow);
          font-size: 1.4rem;
        }
        .nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
          max-width: 1000px;
          margin: 0 40px;
        }
        .search-bar {
          width: 100%;
          position: relative;
          background: var(--glass-bg);
          border-radius: 50px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }
        .search-bar:focus-within {
          border-color: var(--neon-yellow);
          box-shadow: 0 0 10px var(--neon-yellow-glow);
        }
        .search-bar i {
          color: var(--text-dim);
          margin-right: 12px;
        }
        .search-bar input {
          background: transparent;
          border: none;
          color: white;
          width: 100%;
          outline: none;
          font-size: 0.9rem;
        }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .cta-btn {
          background: var(--neon-yellow);
          color: black;
          border: none;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 0 15px var(--neon-yellow-glow);
          letter-spacing: 0.5px;
        }
        .cta-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 25px var(--neon-yellow-glow);
        }
        .icon-btn {
          background: transparent;
          border: none;
          color: var(--text-main);
          font-size: 1.4rem;
          cursor: pointer;
          position: relative;
          filter: drop-shadow(0 0 5px var(--neon-yellow-glow));
        }
        .badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          background: var(--neon-yellow);
          border-radius: 50%;
          box-shadow: 0 0 5px var(--neon-yellow);
        }
        .profile-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--neon-yellow);
          background: var(--neon-yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px var(--neon-yellow-glow);
          cursor: pointer;
          transition: var(--transition);
        }
        .profile-avatar:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px var(--neon-yellow-glow);
        }
        .profile-avatar span {
          color: black;
          font-weight: 800;
          font-size: 0.9rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
