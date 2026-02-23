'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Notifications');
  const [frequency, setFrequency] = useState('Instantly');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const menuItems = [
    { name: 'Account', icon: 'fas fa-user' },
    { name: 'Notifications', icon: 'fas fa-bell' },
    { name: 'Security', icon: 'fas fa-shield-alt' },
    { name: 'Payment', icon: 'fas fa-credit-card' },
    { name: 'Preferences', icon: 'fas fa-sliders-h' },
  ];

  const notificationOptions = [
    { id: 'course-updates', label: 'Course Updates', sub: 'New lectures, updated materials, and schedule changes.', icon: 'fas fa-book-open', active: true },
    { id: 'new-messages', label: 'New Messages', sub: 'Direct messages from your instructors or classmates.', icon: 'fas fa-comment-alt', active: true },
    { id: 'assignment-feedback', label: 'Assignment Feedback', sub: 'Get notified as soon as your work is graded or commented on.', icon: 'fas fa-check-square', active: true },
    { id: 'marketing-emails', label: 'Marketing Emails', sub: 'Product updates, special offers, and platform news.', icon: 'fas fa-bullhorn', active: false },
  ];

  return (
    <div className="settings-page-wrapper">
      <Navbar />
      <div className="settings-layout-container">
        <div className="global-sidebar-wrapper">
          <Sidebar />
        </div>

        <aside className="settings-sub-sidebar">
          <h2 className="settings-panel-title">Settings</h2>

          <div className="profile-card">
            <div className="profile-avatar-wrap">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
                alt="Alex Rivera"
              />
              <div className="status-indicator"></div>
            </div>
            <div className="profile-details">
              <h3>Alex Rivera</h3>
              <span className="profile-badge">Elite Member</span>
            </div>
          </div>

          <nav className="settings-sub-nav">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`sub-nav-item ${activeTab === item.name ? 'active' : ''}`}
                onClick={() => setActiveTab(item.name)}
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="upgrade-promo-card">
            <h4>Upgrade to Pro</h4>
            <p>Get unlimited access to all courses and certificates.</p>
            <button className="upgrade-cta">UPGRADE NOW</button>
          </div>
        </aside>

        <main className="settings-content-main">

          {/* ── ACCOUNT TAB ── */}
          {activeTab === 'Account' && (
            <div>
              <header className="settings-content-header">
                <div className="title-text">
                  <h1>Account Settings</h1>
                  <p>Manage your profile information and account preferences.</p>
                </div>
                <div className="action-buttons">
                  <button className="btn-discard">Discard</button>
                  <button className="btn-save-glow">Save Changes</button>
                </div>
              </header>

              <div className="settings-sections-flex">
                {/* Profile Photo */}
                <section className="glass-card">
                  <div className="photo-entry">
                    <div className="photo-box">
                      <i className="fas fa-user photo-icon"></i>
                    </div>
                    <div className="photo-content">
                      <h3 className="card-subtitle">Your Profile Photo</h3>
                      <p className="card-desc">Accepts PNG, JPG, or SVG. Max 5MB.</p>
                      <div className="photo-btns">
                        <button className="yellow-btn">Change Photo</button>
                        <button className="btn-discard">Remove</button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Personal Information */}
                <section className="glass-card">
                  <h3 className="card-section-title">Personal Information</h3>
                  <div className="settings-form">
                    <div className="input-group">
                      <label>FULL NAME</label>
                      <input type="text" defaultValue="Alex Rivera" />
                    </div>
                    <div className="input-group">
                      <label>EMAIL ADDRESS</label>
                      <input type="email" defaultValue="alex.rivera@premium-lms.com" />
                    </div>
                    <div className="input-group full-span">
                      <label>SHORT BIO</label>
                      <textarea
                        defaultValue="Senior UX/UI Designer and LMS enthusiast. Learning the future of educational architecture one day at a time."
                      ></textarea>
                    </div>
                  </div>
                </section>

                <div className="dual-column-row">
                  {/* Privacy */}
                  <section className="glass-card">
                    <h3 className="card-section-title">Privacy</h3>
                    <div className="control-list">
                      {[
                        { label: 'Public Profile', sub: 'Visible to all registered users', checked: true },
                        { label: 'Learning Progress', sub: 'Show current course status', checked: true },
                        { label: 'Direct Messages', sub: 'Allow mentors to contact you', checked: false },
                      ].map((item) => (
                        <div key={item.label} className="control-row">
                          <div className="control-info">
                            <h4>{item.label}</h4>
                            <p>{item.sub}</p>
                          </div>
                          <label className="neon-toggle">
                            <input type="checkbox" defaultChecked={item.checked} />
                            <span className="neon-slider"></span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Appearance */}
                  <section className="glass-card">
                    <h3 className="card-section-title">Appearance</h3>
                    <div className="theme-pills">
                      <button
                        className={`theme-btn ${!isDarkMode ? 'active' : ''}`}
                        onClick={() => setIsDarkMode(false)}
                      >
                        <i className="fas fa-sun"></i>
                        <span>LIGHT MODE</span>
                      </button>
                      <button
                        className={`theme-btn ${isDarkMode ? 'active' : ''}`}
                        onClick={() => setIsDarkMode(true)}
                      >
                        <i className="fas fa-moon"></i>
                        <span>DARK MODE</span>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}

          {/* ── NOTIFICATIONS TAB ── */}
          {activeTab === 'Notifications' && (
            <div>
              <header className="settings-content-header">
                <div className="title-text">
                  <h1>Notification Settings</h1>
                  <p>Choose how you want to be notified about your learning progress.</p>
                </div>
                <div className="action-buttons">
                  <button className="btn-discard">Discard</button>
                  <button className="btn-save-glow">Save Changes</button>
                </div>
              </header>

              <div className="notification-rows">
                {notificationOptions.map((opt) => (
                  <div key={opt.id} className="notification-card">
                    <div className="card-left">
                      <div className="icon-wrap">
                        <i className={opt.icon}></i>
                      </div>
                      <div className="card-info">
                        <h3>{opt.label}</h3>
                        <p>{opt.sub}</p>
                      </div>
                    </div>
                    <label className="neon-toggle">
                      <input type="checkbox" defaultChecked={opt.active} />
                      <span className="neon-slider"></span>
                    </label>
                  </div>
                ))}
              </div>

              <div className="frequency-section">
                <h3>Email Frequency</h3>
                <div className="pill-group">
                  {['Instantly', 'Daily Summary', 'Weekly Digest'].map((p) => (
                    <button
                      key={p}
                      className={`pill-btn ${frequency === p ? 'active' : ''}`}
                      onClick={() => setFrequency(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── SECURITY TAB ── */}
          {activeTab === 'Security' && (
            <div>
              <header className="settings-content-header">
                <div className="title-text">
                  <h1>Security Settings</h1>
                  <p>Protect your account and control your digital sessions.</p>
                </div>
                <div className="sec-status-badge">
                  <i className="fas fa-shield-alt"></i>
                  <span>ACCOUNT STATUS: PROTECTED</span>
                </div>
              </header>

              <div className="security-grid">
                {/* Left column */}
                <div className="sec-left-col">
                  {/* Change Password */}
                  <section className="glass-card sec-card">
                    <div className="sec-card-header">
                      <div className="sec-icon-wrap">
                        <i className="fas fa-key"></i>
                      </div>
                      <h3>Change Password</h3>
                    </div>
                    <div className="sec-form">
                      <div className="sec-input-group">
                        <label>CURRENT PASSWORD</label>
                        <input type="password" placeholder="••••••••••••" />
                      </div>
                      <div className="sec-row-two">
                        <div className="sec-input-group">
                          <label>NEW PASSWORD</label>
                          <input type="password" placeholder="••••••••••••" />
                        </div>
                        <div className="sec-input-group">
                          <label>CONFIRM PASSWORD</label>
                          <input type="password" placeholder="••••••••••••" />
                        </div>
                      </div>
                      <button className="btn-update-password">
                        Update Password
                      </button>
                    </div>
                  </section>

                  {/* 2FA */}
                  <section className="glass-card sec-card tfa-card">
                    <div className="tfa-top">
                      <div className="sec-card-header">
                        <div className="sec-icon-wrap gold-shield">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <div>
                          <h3>Two-Factor Authentication</h3>
                          <p className="tfa-sub">Add an extra layer of account protection.</p>
                        </div>
                      </div>
                      <label className="neon-toggle">
                        <input type="checkbox" defaultChecked />
                        <span className="neon-slider"></span>
                      </label>
                    </div>
                    <div className="tfa-notice">
                      <i className="fas fa-info-circle tfa-info-icon"></i>
                      <p>
                        <span className="tfa-on">2FA is currently active.</span> Your primary authentication
                        method is an Authenticator app.
                      </p>
                    </div>
                  </section>

                  {/* Help footer */}
                  <div className="sec-help-row">
                    <div className="sec-help-left">
                      <i className="fas fa-question-circle"></i>
                      <div>
                        <span className="sec-help-title">Need help with security?</span>
                        <span className="sec-help-sub">Contact support to find the best next step.</span>
                      </div>
                    </div>
                    <div className="sec-help-links">
                      <button className="sec-link-btn">SECURITY POLICY</button>
                      <button className="sec-link-btn danger-link">REPORT VULNERABILITY</button>
                    </div>
                  </div>
                </div>

                {/* Right column — Login Activity */}
                <div className="sec-right-col">
                  <section className="glass-card sec-card activity-card">
                    <div className="activity-header">
                      <h3>Login Activity</h3>
                      <span className="activity-badge">ACTIVE</span>
                    </div>
                    <div className="device-list">
                      {[
                        { icon: 'fas fa-laptop', name: 'MacBook Pro 16"', location: 'Karachi, Pakistan', time: 'Active now', isActive: true },
                        { icon: 'fas fa-mobile-alt', name: 'iPhone 16 Pro', location: 'Karachi, Pakistan', time: '3 hours ago', isActive: false },
                        { icon: 'fas fa-desktop', name: 'Windows Workstation', location: 'Islamabad, Pakistan', time: 'Yesterday', isActive: false },
                      ].map((device) => (
                        <div key={device.name} className="device-row">
                          <div className="device-icon-wrap">
                            <i className={device.icon}></i>
                          </div>
                          <div className="device-info">
                            <span className="device-name">{device.name}</span>
                            <span className="device-location">{device.location}</span>
                            <span className={`device-time ${device.isActive ? 'time-active' : ''}`}>{device.time}</span>
                          </div>
                          <button className="device-logout-btn">
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                    <button className="btn-logout-all">
                      Log out of all other sessions
                    </button>
                    <p className="logout-all-desc">
                      This will end all sessions except your current one across all devices.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          )}

          {/* ── PAYMENT / CHECKOUT TAB ── */}
          {activeTab === 'Payment' && (
            <div className="checkout-view">
              <header className="co-header">
                <div>
                  <h1 className="co-title">Checkout</h1>
                  <p className="co-sub">Complete your transaction to start learning today</p>
                </div>
              </header>

              <div className="co-grid">
                {/* ── LEFT: payment method + details ── */}
                <div className="co-left">

                  {/* Payment Method */}
                  <section className="glass-card co-card">
                    <h3 className="co-section-label">
                      <i className="fas fa-credit-card co-label-icon"></i>
                      Payment Method
                    </h3>
                    <div className="co-methods">
                      {[
                        { id: 'wallet', icon: 'fas fa-wallet', name: 'Digital Wallet', sub: 'Google Pay / Apple Pay', active: true },
                        { id: 'card', icon: 'fas fa-credit-card', name: 'Credit Card', sub: 'Visa / Mastercard', active: false },
                        { id: 'apple', icon: 'fab fa-apple', name: 'Apple Pay', sub: 'Pay with Face ID', active: false },
                      ].map((m) => (
                        <div key={m.id} className={`co-method-row ${m.active ? 'co-method-active' : ''}`}>
                          <div className={`co-method-icon ${m.active ? 'co-method-icon-active' : ''}`}>
                            <i className={m.icon}></i>
                          </div>
                          <div className="co-method-info">
                            <span className="co-method-name">{m.name}</span>
                            <span className="co-method-sub">{m.sub}</span>
                          </div>
                          <div className={`co-radio ${m.active ? 'co-radio-active' : ''}`}>
                            {m.active && <div className="co-radio-dot"></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Payment Details */}
                  <section className="glass-card co-card">
                    <h3 className="co-section-label">Payment Details</h3>
                    <div className="co-form">
                      <div className="co-input-group full">
                        <label>CARDHOLDER NAME</label>
                        <input type="text" defaultValue="Alex Rivera" />
                      </div>
                      <div className="co-input-group full">
                        <label>CARD NUMBER</label>
                        <div className="co-card-input-wrap">
                          <input type="text" defaultValue="•••• •••• •••• 4282" />
                          <i className="fab fa-cc-visa co-card-logo"></i>
                        </div>
                      </div>
                      <div className="co-input-row">
                        <div className="co-input-group">
                          <label>EXPIRY</label>
                          <input type="text" defaultValue="••/••••" />
                        </div>
                        <div className="co-input-group">
                          <label>CVC</label>
                          <input type="text" defaultValue="•••" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                {/* ── RIGHT: Order Summary ── */}
                <div className="co-right">
                  <section className="glass-card co-card co-summary">
                    <h3 className="co-section-label">Order Summary</h3>

                    {/* Course Card */}
                    <div className="co-course-card">
                      <div className="co-course-thumb">
                        <i className="fas fa-paint-brush co-course-icon"></i>
                      </div>
                      <div className="co-course-badge">BESTSELLER</div>
                    </div>
                    <h4 className="co-course-title">Advanced UI/UX Mastery</h4>
                    <p className="co-course-instructor">Instructor: Alex Rivera</p>
                    <div className="co-stars">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star co-star ${i < 4 ? 'filled' : 'half'}`}></i>
                      ))}
                      <span className="co-rating-count">4.9</span>
                    </div>

                    <div className="co-divider"></div>

                    <div className="co-price-rows">
                      <div className="co-price-row">
                        <span>Subtotal</span>
                        <span>$199.60</span>
                      </div>
                      <div className="co-price-row">
                        <span>Tax</span>
                        <span>$0.40</span>
                      </div>
                    </div>

                    <div className="co-divider"></div>

                    <div className="co-total-row">
                      <span>Total</span>
                      <span className="co-total-amount">$199.00</span>
                    </div>

                    <button className="btn-complete-purchase">
                      Complete Purchase
                    </button>

                    <p className="co-secure-note">
                      <i className="fas fa-lock"></i>
                      Secure transaction guaranteed
                    </p>
                  </section>
                </div>
              </div>
            </div>
          )}


          {/* ── OTHER TABS (placeholder) ── */}
          {activeTab !== 'Account' && activeTab !== 'Notifications' && activeTab !== 'Security' && activeTab !== 'Payment' && (
            <div>
              <header className="settings-content-header">
                <div className="title-text">
                  <h1>{activeTab} Settings</h1>
                  <p>Configure your {activeTab.toLowerCase()} preferences.</p>
                </div>
              </header>
              <div className="glass-card placeholder-card">
                <i className="fas fa-tools placeholder-icon"></i>
                <p>This section is coming soon.</p>
              </div>
            </div>
          )}

        </main>
      </div>

      <style jsx>{`
        .settings-page-wrapper {
          min-height: 100vh;
          background-color: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
        }
        .settings-layout-container {
          display: flex;
          padding-top: 80px;
          min-height: 100vh;
        }
        .global-sidebar-wrapper {
          width: var(--sidebar-width, 80px);
          flex-shrink: 0;
        }

        /* Left secondary sidebar */
        .settings-sub-sidebar {
          width: 280px;
          background: #0A0A0A;
          border-right: 1px solid #111;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          flex-shrink: 0;
        }
        .settings-panel-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #444;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .profile-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #111;
          padding: 12px;
          border-radius: 16px;
        }
        .profile-avatar-wrap {
          position: relative;
          width: 44px;
          height: 44px;
        }
        .profile-avatar-wrap img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #FFD700;
        }
        .status-indicator {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 10px;
          height: 10px;
          background: #4CAF50;
          border: 2px solid #0A0A0A;
          border-radius: 50%;
        }
        .profile-details h3 { font-size: 0.95rem; margin: 0; color: #FFF; }
        .profile-badge { font-size: 0.75rem; color: #555; }
        .settings-sub-nav { display: flex; flex-direction: column; gap: 6px; }
        .sub-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          color: #555;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s;
          text-align: left;
          width: 100%;
          font-family: inherit;
        }
        .sub-nav-item:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .sub-nav-item.active {
          background: #FFD700;
          color: #000;
          box-shadow: 0 4px 20px rgba(255,215,0,0.25);
        }
        .upgrade-promo-card {
          margin-top: auto;
          background: #FFD700;
          padding: 20px;
          border-radius: 20px;
          color: #000;
        }
        .upgrade-promo-card h4 { font-size: 0.9rem; margin-bottom: 8px; font-weight: 700; }
        .upgrade-promo-card p { font-size: 0.75rem; opacity: 0.75; margin-bottom: 14px; }
        .upgrade-cta {
          width: 100%;
          background: #000;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.5px;
          font-family: inherit;
        }

        /* Main content area */
        .settings-content-main {
          flex: 1;
          padding: 40px 60px;
          background: #000;
          overflow-y: auto;
        }
        .settings-content-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 40px;
        }
        .title-text h1 { font-size: 2rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .title-text p { font-size: 0.9rem; color: #555; }
        .action-buttons { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
        .btn-discard {
          background: transparent;
          border: none;
          color: #555;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 16px;
          font-size: 0.9rem;
          font-family: inherit;
          transition: color 0.2s;
        }
        .btn-discard:hover { color: #fff; }
        .btn-save-glow {
          background: #FFD700;
          color: #000;
          border: none;
          padding: 12px 28px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(255,215,0,0.3);
          transition: all 0.3s;
          font-family: inherit;
        }
        .btn-save-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(255,215,0,0.55);
        }

        /* ── ACCOUNT TAB STYLES ── */
        .settings-sections-flex { display: flex; flex-direction: column; gap: 20px; }
        .glass-card {
          background: #111;
          border: 1px solid #1c1c1c;
          border-radius: 20px;
          padding: 24px;
        }
        .card-section-title {
          font-size: 0.72rem;
          font-weight: 700;
          color: #444;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
        .photo-entry { display: flex; align-items: center; gap: 24px; }
        .photo-box {
          width: 80px;
          height: 80px;
          min-width: 80px;
          background: #1a1a1a;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #222;
        }
        .photo-icon { font-size: 2rem; color: #2a2a2a; }
        .card-subtitle { font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: 4px; }
        .card-desc { color: #444; font-size: 0.85rem; margin-bottom: 14px; }
        .photo-btns { display: flex; gap: 12px; align-items: center; }
        .yellow-btn {
          background: #FFD700;
          color: #000;
          border: none;
          padding: 9px 20px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s;
          font-family: inherit;
        }
        .yellow-btn:hover { transform: translateY(-1px); }
        .settings-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .full-span { grid-column: span 2; }
        .input-group { display: flex; flex-direction: column; gap: 8px; }
        .input-group label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #444;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .input-group input, .input-group textarea {
          background: #0D0D0D;
          border: 1px solid #1c1c1c;
          border-radius: 10px;
          padding: 12px 16px;
          color: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          transition: border-color 0.3s;
          outline: none;
        }
        .input-group input:focus, .input-group textarea:focus { border-color: #FFD700; }
        .input-group textarea { min-height: 90px; resize: none; }
        .dual-column-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 20px;
        }
        .control-list { display: flex; flex-direction: column; gap: 20px; }
        .control-row { display: flex; justify-content: space-between; align-items: center; }
        .control-info h4 { font-size: 0.95rem; font-weight: 600; margin-bottom: 2px; color: #ddd; }
        .control-info p { font-size: 0.8rem; color: #444; }
        .theme-pills {
          display: flex;
          gap: 10px;
          background: #0D0D0D;
          padding: 6px;
          border-radius: 12px;
        }
        .theme-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
          border-radius: 10px;
          background: transparent;
          border: none;
          color: #444;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s;
          letter-spacing: 0.5px;
          font-family: inherit;
        }
        .theme-btn.active { background: #fff; color: #000; }

        /* Shared neon toggle */
        .neon-toggle {
          position: relative;
          display: inline-block;
          width: 52px;
          height: 28px;
          flex-shrink: 0;
        }
        .neon-toggle input { opacity: 0; width: 0; height: 0; }
        .neon-slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #2a2a2a;
          transition: .4s;
          border-radius: 34px;
        }
        .neon-slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 4px;
          bottom: 4px;
          background-color: #666;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .neon-slider { background-color: #FFD700; }
        input:checked + .neon-slider:before { transform: translateX(24px); background: #000; }

        /* ── NOTIFICATION TAB STYLES ── */
        .notification-rows { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
        .notification-card {
          background: #111;
          border: 1px solid #1c1c1c;
          border-radius: 20px;
          padding: 22px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.25s;
        }
        .notification-card:hover { background: #161616; }
        .card-left { display: flex; align-items: center; gap: 18px; }
        .icon-wrap {
          width: 48px;
          height: 48px;
          min-width: 48px;
          background: rgba(255,215,0,0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFD700;
          font-size: 1.1rem;
        }
        .card-info h3 { font-size: 1.05rem; color: #fff; margin-bottom: 4px; font-weight: 600; }
        .card-info p { font-size: 0.82rem; color: #555; }
        .frequency-section h3 { font-size: 1.2rem; color: #fff; margin-bottom: 20px; font-weight: 600; }
        .pill-group { display: flex; gap: 12px; flex-wrap: wrap; }
        .pill-btn {
          background: #111;
          border: 2px solid #1c1c1c;
          color: #555;
          padding: 10px 22px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.25s;
          font-family: inherit;
        }
        .pill-btn.active {
          border-color: #FFD700;
          color: #FFD700;
          background: rgba(255,215,0,0.05);
        }

        /* Placeholder */
        .placeholder-card { text-align: center; padding: 60px; }
        .placeholder-icon { font-size: 2.5rem; margin-bottom: 16px; display: block; color: #1f1f1f; }
        .placeholder-card p { color: #333; }

        /* ── SECURITY TAB STYLES ── */
        .sec-status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,215,0,0.08);
          border: 1px solid rgba(255,215,0,0.2);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #FFD700;
          letter-spacing: 1px;
          flex-shrink: 0;
        }
        .security-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 20px;
          align-items: start;
        }
        .sec-left-col { display: flex; flex-direction: column; gap: 20px; }
        .sec-right-col { display: flex; flex-direction: column; gap: 20px; }
        .sec-card { padding: 28px; }
        .sec-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .sec-card-header h3 { font-size: 1.15rem; font-weight: 600; color: #fff; }
        .sec-icon-wrap {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          font-size: 1rem;
        }
        .gold-shield {
          background: rgba(255,215,0,0.1);
          color: #FFD700;
        }
        .sec-form { display: flex; flex-direction: column; gap: 16px; }
        .sec-input-group { display: flex; flex-direction: column; gap: 7px; }
        .sec-input-group label {
          font-size: 0.68rem;
          font-weight: 700;
          color: #444;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .sec-input-group input {
          background: #0A0A0A;
          border: 1px solid #1c1c1c;
          border-radius: 10px;
          padding: 12px 16px;
          color: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.3s;
          width: 100%;
          box-sizing: border-box;
          letter-spacing: 2px;
        }
        .sec-input-group input:focus { border-color: #FFD700; }
        .sec-row-two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .btn-update-password {
          background: #FFD700;
          color: #000;
          border: none;
          padding: 14px 28px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          align-self: flex-start;
          box-shadow: 0 0 20px rgba(255,215,0,0.25);
          transition: all 0.3s;
          font-family: inherit;
          letter-spacing: 0.3px;
        }
        .btn-update-password:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(255,215,0,0.45);
        }
        .tfa-card .sec-card-header { margin-bottom: 0; }
        .tfa-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .tfa-sub { font-size: 0.82rem; color: #555; margin-top: 3px; }
        .tfa-notice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: rgba(255,215,0,0.04);
          border: 1px solid rgba(255,215,0,0.1);
          padding: 14px 16px;
          border-radius: 12px;
        }
        .tfa-info-icon { color: #FFD700; font-size: 0.9rem; margin-top: 2px; flex-shrink: 0; }
        .tfa-notice p { font-size: 0.82rem; color: #555; line-height: 1.5; }
        .tfa-on { color: #FFD700; font-weight: 600; }
        .sec-help-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
        }
        .sec-help-left { display: flex; align-items: center; gap: 12px; color: #333; font-size: 1rem; }
        .sec-help-title { display: block; font-size: 0.85rem; font-weight: 600; color: #555; }
        .sec-help-sub { display: block; font-size: 0.75rem; color: #333; }
        .sec-help-links { display: flex; gap: 16px; }
        .sec-link-btn {
          background: transparent;
          border: none;
          color: #444;
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 1px;
          font-family: inherit;
          transition: color 0.2s;
        }
        .sec-link-btn:hover { color: #fff; }
        .danger-link { color: #c0392b; }
        .danger-link:hover { color: #e74c3c; }
        .activity-card { height: 100%; box-sizing: border-box; }
        .activity-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .activity-header h3 { font-size: 1.15rem; font-weight: 600; color: #fff; }
        .activity-badge {
          background: rgba(255,215,0,0.1);
          color: #FFD700;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 1px;
          border: 1px solid rgba(255,215,0,0.2);
        }
        .device-list { display: flex; flex-direction: column; gap: 4px; margin-bottom: 24px; }
        .device-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 12px;
          border-radius: 14px;
          transition: background 0.2s;
          cursor: pointer;
        }
        .device-row:hover { background: rgba(255,255,255,0.03); }
        .device-icon-wrap {
          width: 42px;
          height: 42px;
          min-width: 42px;
          background: #1a1a1a;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          font-size: 1rem;
        }
        .device-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }
        .device-name { font-size: 0.9rem; font-weight: 600; color: #ddd; }
        .device-location { font-size: 0.77rem; color: #444; }
        .device-time { font-size: 0.75rem; color: #444; }
        .time-active { color: #4CAF50; font-weight: 600; }
        .device-logout-btn {
          background: transparent;
          border: none;
          color: #333;
          cursor: pointer;
          padding: 8px;
          font-size: 0.75rem;
          transition: color 0.2s;
        }
        .device-logout-btn:hover { color: #FFD700; }
        .btn-logout-all {
          width: 100%;
          background: transparent;
          border: 1px solid #1c1c1c;
          color: #FFD700;
          padding: 14px;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
          margin-bottom: 12px;
        }
        .btn-logout-all:hover {
          background: rgba(255,215,0,0.05);
          border-color: rgba(255,215,0,0.3);
        }
        .logout-all-desc { font-size: 0.75rem; color: #333; text-align: center; line-height: 1.4; }

        /* ── PAYMENT TAB STYLES ── */
        .payment-view { position: relative; padding-bottom: 80px; }
        .btn-add-method {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #FFD700;
          color: #000;
          border: none;
          padding: 12px 22px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(255,215,0,0.25);
          transition: all 0.3s;
          font-family: inherit;
          flex-shrink: 0;
        }
        .btn-add-method:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(255,215,0,0.45);
        }
        .pay-section { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
        .pay-section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .card-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FFD700;
          box-shadow: 0 0 8px #FFD700;
        }
        .cards-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .credit-card {
          width: 280px;
          height: 160px;
          border-radius: 20px;
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.25s;
        }
        .credit-card:hover { transform: translateY(-4px); }
        .dark-card {
          background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
          border: 1px solid #2a2a2a;
        }
        .gold-card {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          box-shadow: 0 8px 30px rgba(255,215,0,0.25);
        }
        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-chip {
          width: 32px;
          height: 24px;
          background: linear-gradient(135deg, #888 0%, #555 100%);
          border-radius: 5px;
        }
        .gold-chip {
          background: linear-gradient(135deg, #000 0%, #222 100%);
          opacity: 0.4;
        }
        .card-brand-icon { font-size: 1.8rem; }
        .dark-brand { color: #555; }
        .visa-text {
          font-size: 1.4rem;
          font-weight: 900;
          color: rgba(0,0,0,0.5);
          letter-spacing: 1px;
          font-style: italic;
        }
        .card-number {
          font-size: 1rem;
          letter-spacing: 3px;
          color: #888;
          font-weight: 500;
        }
        .gold-number { color: rgba(0,0,0,0.6); }
        .card-bottom-row {
          display: flex;
          justify-content: space-between;
        }
        .card-label {
          display: block;
          font-size: 0.6rem;
          letter-spacing: 1px;
          color: #444;
          margin-bottom: 3px;
          text-transform: uppercase;
        }
        .dark-label { color: rgba(0,0,0,0.5); }
        .card-value {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #fff;
        }
        .dark-value { color: rgba(0,0,0,0.75); font-weight: 700; }
        .add-card-btn {
          width: 280px;
          height: 160px;
          border-radius: 20px;
          border: 2px dashed #222;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #333;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .add-card-btn i { font-size: 1.4rem; }
        .add-card-btn:hover { border-color: #FFD700; color: #FFD700; background: rgba(255,215,0,0.03); }
        .pay-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 20px;
        }
        .methods-card { display: flex; flex-direction: column; gap: 6px; }
        .method-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 12px;
          border-radius: 12px;
          transition: background 0.2s;
        }
        .method-row:hover { background: rgba(255,255,255,0.03); }
        .method-icon-wrap {
          width: 40px;
          height: 40px;
          min-width: 40px;
          background: #1a1a1a;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: #666;
        }
        .method-info { flex: 1; }
        .method-name { display: block; font-size: 0.9rem; font-weight: 600; color: #ddd; }
        .method-sub { display: block; font-size: 0.77rem; color: #444; }
        .method-radio {
          width: 22px;
          height: 22px;
          min-width: 22px;
          border-radius: 50%;
          border: 2px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.25s;
        }
        .method-radio-active {
          border-color: #FFD700;
          box-shadow: 0 0 8px rgba(255,215,0,0.3);
        }
        .method-radio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #FFD700;
        }
        .txn-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .view-all-btn {
          background: transparent;
          border: none;
          color: #FFD700;
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 1px;
          font-family: inherit;
        }
        .txn-card { padding: 0; overflow: hidden; }
        .txn-table-header {
          display: grid;
          grid-template-columns: 130px 1fr 90px 100px;
          padding: 12px 20px;
          font-size: 0.65rem;
          font-weight: 700;
          color: #444;
          letter-spacing: 1.5px;
          border-bottom: 1px solid #1c1c1c;
        }
        .txn-row {
          display: grid;
          grid-template-columns: 130px 1fr 90px 100px;
          padding: 16px 20px;
          align-items: center;
          border-bottom: 1px solid #0f0f0f;
          transition: background 0.2s;
        }
        .txn-row:last-child { border-bottom: none; }
        .txn-row:hover { background: rgba(255,255,255,0.02); }
        .txn-date { font-size: 0.82rem; color: #555; }
        .txn-desc {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #ddd;
          font-weight: 500;
        }
        .txn-icon { color: #555; font-size: 0.85rem; }
        .txn-amount { font-size: 0.9rem; font-weight: 700; color: #fff; }
        .txn-status {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 100px;
        }
        .txn-status.success {
          background: rgba(76,175,80,0.12);
          color: #4CAF50;
          border: 1px solid rgba(76,175,80,0.2);
        }
        .pay-fab {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FFD700;
          color: #000;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(255,215,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          z-index: 100;
        }
        .pay-fab:hover {
          transform: scale(1.1) rotate(45deg);
          box-shadow: 0 6px 30px rgba(255,215,0,0.6);
        }

        @media (max-width: 1100px) {
          .security-grid { grid-template-columns: 1fr; }
          .dual-column-row { grid-template-columns: 1fr; }
          .pay-bottom-grid { grid-template-columns: 1fr; }
        }


        @media (max-width: 900px) {
          .settings-layout-container { flex-direction: column; }
          .global-sidebar-wrapper { display: none; }
          .settings-sub-sidebar { width: 100%; border-right: none; border-bottom: 1px solid #111; }
          .settings-content-main { padding: 24px 20px; }
          .settings-content-header { flex-direction: column; gap: 16px; }
        }
        @media (max-width: 600px) {
          .settings-form { grid-template-columns: 1fr; }
          .full-span { grid-column: span 1; }
          .photo-entry { flex-direction: column; align-items: flex-start; }
          .pill-group { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;