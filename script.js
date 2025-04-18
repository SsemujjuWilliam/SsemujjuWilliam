
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Check if user has previously set a theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
  
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    if (isDark) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuToggle.querySelector('i');
  
  menuToggle.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('active');
    if (isOpen) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });
  
  // Close mobile menu when clicking on a navigation link
  const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    });
  });
  
  // Showcase Carousel
  const showcaseTrack = document.getElementById('showcase-track');
  const showcasePrev = document.getElementById('showcase-prev');
  const showcaseNext = document.getElementById('showcase-next');
  const showcaseItems = document.querySelectorAll('.showcase-item');
  
  let currentIndex = 0;
  let itemWidth;
  let itemsPerView;
  
  function updateCarouselDimensions() {
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth >= 1024) {
      itemsPerView = 3;
    } else if (viewportWidth >= 768) {
      itemsPerView = 2;
    } else {
      itemsPerView = 1;
    }
    
    itemWidth = showcaseTrack.offsetWidth / itemsPerView;
    
    // Update item widths
    showcaseItems.forEach(item => {
      item.style.flex = `0 0 ${itemWidth}px`;
    });
  }
  
  function moveCarousel() {
    const maxIndex = showcaseItems.length - itemsPerView;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    
    showcaseTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
  
  showcasePrev.addEventListener('click', () => {
    currentIndex--;
    moveCarousel();
  });
  
  showcaseNext.addEventListener('click', () => {
    currentIndex++;
    moveCarousel();
  });
  
  // Initialize carousel dimensions
  updateCarouselDimensions();
  
  // Update carousel dimensions on window resize
  window.addEventListener('resize', () => {
    updateCarouselDimensions();
    moveCarousel();
  });
  
  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastClose = document.querySelector('.toast-close');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    setTimeout(() => {
      // Reset the form
      contactForm.reset();
      
      // Restore button
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      
      // Show toast notification
      showToast();
    }, 1000);
  });
  
  // Toast notification functionality
  function showToast() {
    toast.classList.add('show');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      hideToast();
    }, 5000);
  }
  
  function hideToast() {
    toast.classList.remove('show');
  }
  
  toastClose.addEventListener('click', hideToast);
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Elements to animate
  const animateElements = document.querySelectorAll(
    '.section-header, .skill-card, .project-card, .about-content, .about-image'
  );
  
  animateElements.forEach(element => {
    element.classList.add('animate-element');
    observer.observe(element);
  });
});

// Add CSS for animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .animate-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .animate-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(styleSheet);
