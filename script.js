
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Check user's preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check if user has previously set a theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
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
  
  // Form Validation with Accessibility
  const contactForm = document.getElementById('contact-form');
  const formInputs = contactForm.querySelectorAll('input, textarea');
  const toast = document.getElementById('toast');
  const toastClose = document.querySelector('.toast-close');
  
  // Add error message elements to form fields
  formInputs.forEach(input => {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form-error-message';
    errorMessage.id = `${input.id}-error`;
    errorMessage.setAttribute('aria-live', 'polite');
    input.parentNode.appendChild(errorMessage);
    
    // Set ARIA attributes
    input.setAttribute('aria-invalid', 'false');
    input.setAttribute('aria-describedby', `${input.id}-error`);
    
    // Add real-time validation
    input.addEventListener('blur', validateField);
    input.addEventListener('input', function() {
      if (this.parentNode.classList.contains('error')) {
        validateField.call(this);
      }
    });
  });
  
  // Validation function
  function validateField() {
    const errorElement = document.getElementById(`${this.id}-error`);
    let errorMessage = '';
    
    // Check if required field is empty
    if (this.hasAttribute('required') && !this.value.trim()) {
      errorMessage = 'This field is required';
    } 
    // Email validation
    else if (this.type === 'email' && this.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
      errorMessage = 'Please enter a valid email address';
    }
    
    // Update form UI based on validation
    if (errorMessage) {
      this.parentNode.classList.add('error');
      this.setAttribute('aria-invalid', 'true');
      errorElement.textContent = errorMessage;
    } else {
      this.parentNode.classList.remove('error');
      this.setAttribute('aria-invalid', 'false');
      errorElement.textContent = '';
    }
  }
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate all fields before submission
    let hasErrors = false;
    formInputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        const errorElement = document.getElementById(`${input.id}-error`);
        input.parentNode.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
        errorElement.textContent = 'This field is required';
        hasErrors = true;
      }
    });
    
    if (hasErrors) {
      // Focus the first field with an error
      contactForm.querySelector('.error input, .error textarea').focus();
      return;
    }
    
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
      
      // Announce to screen readers that the form was submitted successfully
      const srAnnouncement = document.createElement('div');
      srAnnouncement.setAttribute('aria-live', 'assertive');
      srAnnouncement.className = 'sr-only';
      srAnnouncement.textContent = 'Your message has been sent successfully.';
      document.body.appendChild(srAnnouncement);
      
      setTimeout(() => {
        document.body.removeChild(srAnnouncement);
      }, 3000);
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
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add staggered delay to project cards
        if (entry.target.classList.contains('project-card')) {
          const delay = Array.from(document.querySelectorAll('.project-card')).indexOf(entry.target) * 100;
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay);
        } else {
          entry.target.classList.add('animate-in');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Elements to animate
  const animateElements = document.querySelectorAll(
    '.section-header, .skill-card, .project-card, .about-content, .about-image'
  );
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Page transitions
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const pageTransition = document.createElement('div');
  pageTransition.className = 'page-transition';
  document.body.appendChild(pageTransition);
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Skip transition for current section
      if (window.location.hash === targetId) return;
      
      // Trigger transition
      pageTransition.classList.add('active');
      
      // After transition completes, navigate to target section
      setTimeout(() => {
        window.location.hash = targetId;
        
        // Hide transition overlay
        setTimeout(() => {
          pageTransition.classList.remove('active');
        }, 100);
      }, 500);
    });
  });
});
