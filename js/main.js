// ============================================
// Mobile Menu Toggle
// ============================================

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ============================================
// Navbar Scroll Effect
// ============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// Active Navigation Link
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ============================================
// IntersectionObserver for Scroll Animation
// ============================================

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

revealElements.forEach(element => {
  observer.observe(element);
});

// ============================================
// Email Copy to Clipboard
// ============================================

const copyEmailBtn = document.getElementById('copy-email');
const toast = document.getElementById('toast');

copyEmailBtn.addEventListener('click', () => {
  const email = 'kogomo@gmail.com';

  navigator.clipboard.writeText(email).then(() => {
    // Show toast
    toast.classList.remove('hidden');

    // Hide toast after 2 seconds
    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('hide');
      }, 400);
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy email:', err);
  });
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
