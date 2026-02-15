document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects or interactive elements here if needed
    
    // Smooth scroll or simple interactions
    const courseCards = document.querySelectorAll('.course-mini-card');
    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            // Simulate navigation or selection
            courseCards.forEach(c => c.style.borderColor = 'rgba(255, 255, 255, 0.08)');
            card.style.borderColor = '#d4ff00';
        });
    });

    // Search bar pulse effect on focus
    const searchInput = document.querySelector('.search-bar input');
    const searchBar = document.querySelector('.search-bar');
    
    searchInput.addEventListener('focus', () => {
        searchBar.style.boxShadow = '0 0 15px rgba(212, 255, 0, 0.3)';
    });
    
    searchInput.addEventListener('blur', () => {
        searchBar.style.boxShadow = 'none';
    });

    // Circular progress animation (simple)
    const progressCircle = document.querySelector('.circular-progress circle.progress');
    if (progressCircle) {
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const percent = 68;
        const offset = circumference - (percent / 100) * circumference;
        
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = offset;
    }
});
