"use client";
import React from 'react';
import Sidebar from '../../components/Sidebar'; 
import Navbar from '../../components/Navbar'; 

const styles = {
  layoutWrapper: {
    display: 'flex',
    backgroundColor: '#000',
    minHeight: '100vh',
    width: '100%',
    color: '#fff',
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '260px', 
  },
  mainContent: {
    padding: '40px',
    paddingTop: '100px', 
    fontFamily: "'Inter', sans-serif",
    overflowY: 'auto',
  },
  // --- HEADER FLEX BOX ---
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'flex-end', 
    marginBottom: '40px',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  title: {
    fontSize: '32px',
    fontWeight: '800',
    margin: '0',
    color: '#ffffff',
  },
  subtitle: {
    color: '#666',
    fontSize: '15px',
    margin: '0',
  },
  filterContainer: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    padding: '6px',
    borderRadius: '16px',
    gap: '5px',
  },
  tabActive: {
    backgroundColor: '#F0C000',
    color: '#000',
    padding: '10px 22px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(240, 192, 0, 0.2)',
  },
  tabInactive: {
    backgroundColor: 'transparent',
    color: '#888',
    padding: '10px 22px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '35px',
  },
  card: {
    backgroundColor: '#111111',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid #333',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease',
  }
};

const CourseCard = ({ title, instructor, progress, tag, icon }) => (
  <div 
    style={styles.card}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 0 30px rgba(240, 192, 0, 0.2)';
      e.currentTarget.style.borderColor = '#F0C000';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      e.currentTarget.style.borderColor = '#333';
    }}
  >
    <div style={{ height: '200px', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: '#222', color: '#F0C000', fontSize: '10px', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold', border: '1px solid rgba(240, 192, 0, 0.3)' }}>{tag}</span>
      <div style={{ fontSize: '60px' }}>{icon}</div>
    </div>
    <div style={{ padding: '24px' }}>
      <h3 style={{ fontSize: '19px', fontWeight: '700', marginBottom: '8px' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '25px' }}>Instructor: {instructor}</p>
      <div style={{ height: '6px', backgroundColor: '#222', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#F0C000', boxShadow: '0 0 10px #F0C000' }}></div>
      </div>
      <button style={{ width: '100%', backgroundColor: '#F0C000', color: '#000', border: 'none', padding: '15px', borderRadius: '16px', fontWeight: 'bold', marginTop: '25px', cursor: 'pointer' }}>
        Continue Learning ▶
      </button>
    </div>
  </div>
);

export default function CoursesPage() {
  const courses = [
    { title: "Advanced UI/UX Motion Design", instructor: "Sarah Jenkins", progress: 75, tag: "Advanced", icon: "📱" },
    { title: "Mastering Micro-frontends", instructor: "David K. Pike", progress: 32, tag: "Elite", icon: "💻" },
    { title: "Neural Network Defenses", instructor: "Dr. Alix Thorne", progress: 89, tag: "Expert", icon: "🧠" }
  ];

  return (
    <div style={styles.layoutWrapper}>
      <Sidebar />
      <div style={styles.contentWrapper}>
        <Navbar />
        <main style={styles.mainContent}>
          
          {/* --- UPDATED HEADER SECTION --- */}
          <div style={styles.headerRow}>
            <div style={styles.titleSection}>
              <h1 style={styles.title}>My Courses</h1>
              <p style={styles.subtitle}>Welcome back, Alex. You have 4 modules to finish this week.</p>
            </div>
            
            <div style={styles.filterContainer}>
              <button style={styles.tabActive}>In Progress</button>
              <button style={styles.tabInactive}>Completed</button>
              <button style={styles.tabInactive}>All</button>
            </div>
          </div>

          <div style={styles.grid}>
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
            
            <div style={{ border: '2px dashed #333', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', cursor: 'pointer' }}>
               <div style={{ fontSize: '30px', color: '#444' }}>+</div>
               <h4 style={{ color: '#4da3ff', fontWeight: 'bold', marginTop: '10px' }}>Enroll in New Course</h4>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}