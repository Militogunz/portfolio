// Smooth scrolling only for anchor links on same page
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Responsive mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
}

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Select elements to animate
// Select elements to animate
const sections = document.querySelectorAll('section, .project-card, .price-card');
sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Theme Toggle Logic
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  body.classList.add('light-mode');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save preference
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
}


