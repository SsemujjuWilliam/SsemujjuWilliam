
document.addEventListener('DOMContentLoaded', function() {
  // Theme toggling functionality
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDarkMode = root.classList.contains('dark');
    
    if (isDarkMode) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      updateThemeIcons(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      updateThemeIcons(true);
    }
  };
  
  const updateThemeIcons = (isDarkMode) => {
    const moonIcons = document.querySelectorAll('#moon-icon, #mobile-moon-icon');
    const sunIcons = document.querySelectorAll('#sun-icon, #mobile-sun-icon');
    
    moonIcons.forEach(icon => {
      icon.classList.toggle('hidden', isDarkMode);
    });
    
    sunIcons.forEach(icon => {
      icon.classList.toggle('hidden', !isDarkMode);
    });
  };
  
  // Check saved theme preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    updateThemeIcons(true);
  } else {
    updateThemeIcons(false);
  }
  
  // Add click events for theme toggle buttons
  const themeToggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('mobile-theme-toggle')
  ];
  
  themeToggles.forEach(toggle => {
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
    }
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('opacity-0');
      
      if (isOpen) {
        mobileMenu.classList.remove('opacity-0', 'max-h-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'max-h-80');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('opacity-0', 'max-h-0', 'pointer-events-none');
        mobileMenu.classList.remove('opacity-100', 'max-h-80');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  }
  
  // Close mobile menu when clicking a nav link
  const mobileNavLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('opacity-0', 'max-h-0', 'pointer-events-none');
      mobileMenu.classList.remove('opacity-100', 'max-h-80');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
  
  // Showcase carousel functionality
  const carouselContent = document.querySelector('.carousel-content');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  
  if (carouselContent && carouselItems.length > 0) {
    // Initialize
    let currentIndex = 0;
    let itemWidth = carouselItems[0].clientWidth;
    let itemsPerView = window.innerWidth < 768 ? 1 : 3;
    
    // Set initial width
    carouselContent.style.width = `${carouselItems.length * 100}%`;
    carouselItems.forEach(item => {
      item.style.width = `${100 / carouselItems.length}%`;
    });
    
    // Update carousel on window resize
    window.addEventListener('resize', () => {
      itemWidth = carouselItems[0].clientWidth;
      itemsPerView = window.innerWidth < 768 ? 1 : 3;
    });
    
    // Navigate carousel
    const updateCarousel = () => {
      if (carouselItems.length <= itemsPerView) return;
      carouselContent.style.transform = `translateX(-${currentIndex * (100 / carouselItems.length)}%)`;
    };
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, carouselItems.length - itemsPerView);
        updateCarousel();
      });
    }
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simulate form submission (would be replaced by actual API call)
      setTimeout(() => {
        // Show success message
        if (toast) {
          toast.classList.add('show');
          
          // Hide toast after 3 seconds
          setTimeout(() => {
            toast.classList.remove('show');
          }, 3000);
        }
        
        // Reset form
        contactForm.reset();
      }, 1000);
    });
  }
  
  // Animated scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fade-in');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.animationPlayState = 'running';
      }
    });
  };
  
  // Run animation check on load
  animateOnScroll();
  
  // Add animation check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Add animations with delay to multiple elements
  const staggeredElements = document.querySelectorAll('.project-card, .carousel-item');
  staggeredElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 100}ms`;
  });
});
