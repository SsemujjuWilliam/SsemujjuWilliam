// DOM Elements
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopButton = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselInner = document.querySelector('.carousel-inner');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
function toggleMobileMenu() {
  mobileMenuToggle.classList.toggle('menu-open');
  mobileMenu.classList.toggle('open');
}

mobileMenuToggle.addEventListener('click', toggleMobileMenu);

// Handle scroll events
window.addEventListener('scroll', function() {
  // Add shadow to header on scroll
  if (window.scrollY > 10) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
  
  // Show or hide back to top button
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Back to top button
backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.elements['name'].value;
    const email = this.elements['email'].value;
    const message = this.elements['message'].value;
    
    // Reset form fields
    this.reset();
    
    // Show success toast
    toast.textContent = `Message sent successfully! We'll get back to you soon.`;
    toast.classList.add('show', 'success');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show', 'success');
    }, 3000);
    
    // Normally here you would send data to a server
    console.log('Form submitted:', { name, email, message });
  });
}

// Carousel functionality
if (carouselInner) {
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let itemsPerView = 1;
  
  // Determine how many items to show based on viewport width
  function updateItemsPerView() {
    if (window.innerWidth >= 1024) {
      itemsPerView = 3;
    } else if (window.innerWidth >= 640) {
      itemsPerView = 2;
    } else {
      itemsPerView = 1;
    }
  }
  
  // Initialize carousel
  updateItemsPerView();
  window.addEventListener('resize', updateItemsPerView);
  
  // Move to specific slide
  function moveToSlide(index) {
    if (index < 0) {
      index = totalItems - itemsPerView;
    } else if (index > totalItems - itemsPerView) {
      index = 0;
    }
    currentIndex = index;
    
    const slideWidth = items[0].offsetWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  // Next and previous buttons
  carouselNext.addEventListener('click', () => moveToSlide(currentIndex + 1));
  carouselPrev.addEventListener('click', () => moveToSlide(currentIndex - 1));
  
  // Auto slide every 5 seconds
  let autoSlide = setInterval(() => moveToSlide(currentIndex + 1), 5000);
  
  // Pause auto slide when mouse is over carousel
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
  carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => moveToSlide(currentIndex + 1), 5000);
  });
}

// Tabs functionality
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all tabs
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to current tab
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(`${tabId}-tab`).classList.add('active');
    
    // Redraw charts when tab is selected
    initializeCharts(tabId);
  });
});

// Skills Charts
function initializeCharts(tabId) {
  // Create simple representations of charts without external libraries
  const languagesChart = document.getElementById('languages-chart');
  const librariesChart = document.getElementById('libraries-chart');
  const toolsChart = document.getElementById('tools-chart');
  
  if (tabId === 'languages' && languagesChart) {
    // Create a simple pie chart for languages
    const skills = [
      { name: "Python", value: 95, color: "#4361ee" },
      { name: "R", value: 85, color: "#3a0ca3" },
      { name: "SQL", value: 90, color: "#7209b7" },
      { name: "Java", value: 75, color: "#f72585" },
      { name: "Machine Learning", value: 92, color: "#4cc9f0" },
      { name: "Deep Learning", value: 85, color: "#560bad" },
      { name: "Data Visualization", value: 88, color: "#480ca8" },
      { name: "Statistical Analysis", value: 90, color: "#4361ee" }
    ];
    
    createPieChart(languagesChart, skills);
  }
  
  if (tabId === 'libraries' && librariesChart) {
    // Create a simple bar chart for libraries
    const libraries = [
      { name: "scikit-learn", value: 90, color: "#4361ee" },
      { name: "TensorFlow", value: 85, color: "#3a0ca3" },
      { name: "PyTorch", value: 82, color: "#7209b7" },
      { name: "Django", value: 78, color: "#f72585" },
      { name: "Flask", value: 80, color: "#4cc9f0" },
      { name: "Matplotlib", value: 92, color: "#560bad" },
      { name: "Seaborn", value: 88, color: "#480ca8" },
      { name: "NLTK", value: 85, color: "#4361ee" }
    ];
    
    createBarChart(librariesChart, libraries);
  }
  
  if (tabId === 'tools' && toolsChart) {
    // Create a simple pie chart for tools
    const tools = [
      { name: "Docker", value: 85, color: "#4361ee" },
      { name: "Kubernetes", value: 75, color: "#3a0ca3" },
      { name: "Jenkins", value: 70, color: "#7209b7" },
      { name: "GitHub Actions", value: 80, color: "#f72585" },
      { name: "AWS", value: 85, color: "#4cc9f0" },
      { name: "Azure", value: 80, color: "#560bad" },
      { name: "GCP", value: 75, color: "#480ca8" }
    ];
    
    createPieChart(toolsChart, tools);
  }
}

// Simple function to create a basic pie chart with HTML/CSS
function createPieChart(container, data) {
  // Clear previous content
  container.innerHTML = '';
  
  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Create a container for the pie chart
  const pieContainer = document.createElement('div');
  pieContainer.className = 'pie-container';
  pieContainer.style.position = 'relative';
  pieContainer.style.width = '200px';
  pieContainer.style.height = '200px';
  pieContainer.style.margin = '0 auto';
  
  // Keep track of current angle
  let currentAngle = 0;
  
  // Create slices
  data.forEach((item, index) => {
    // Calculate slice angle
    const sliceAngle = (item.value / total) * 360;
    
    // Create slice element
    const slice = document.createElement('div');
    slice.className = 'pie-slice';
    slice.style.position = 'absolute';
    slice.style.width = '100%';
    slice.style.height = '100%';
    slice.style.clip = 'rect(0, 100px, 200px, 0)';
    
    // Create colored part of the slice
    const coloredPart = document.createElement('div');
    coloredPart.style.position = 'absolute';
    coloredPart.style.width = '100%';
    coloredPart.style.height = '100%';
    coloredPart.style.clip = 'rect(0, 100px, 200px, 0)';
    coloredPart.style.borderRadius = '50%';
    coloredPart.style.backgroundColor = item.color;
    coloredPart.style.transform = `rotate(${currentAngle}deg)`;
    
    // Add to the DOM
    slice.appendChild(coloredPart);
    pieContainer.appendChild(slice);
    
    // Create label
    const label = document.createElement('div');
    label.className = 'pie-label';
    label.textContent = item.name;
    label.style.position = 'absolute';
    
    // Position label based on the middle angle of the slice
    const middleAngle = currentAngle + (sliceAngle / 2);
    const radius = 120;
    const x = Math.cos(middleAngle * Math.PI / 180) * radius + 100;
    const y = Math.sin(middleAngle * Math.PI / 180) * radius + 100;
    
    label.style.left = `${x}px`;
    label.style.top = `${y}px`;
    label.style.transform = 'translate(-50%, -50%)';
    label.style.fontSize = '10px';
    label.style.fontWeight = 'bold';
    
    // Add label to container
    pieContainer.appendChild(label);
    
    // Update current angle for next slice
    currentAngle += sliceAngle;
  });
  
  // Add pie container to the main container
  container.appendChild(pieContainer);
  
  // Add a legend
  const legend = document.createElement('div');
  legend.className = 'pie-legend';
  legend.style.display = 'flex';
  legend.style.flexWrap = 'wrap';
  legend.style.justifyContent = 'center';
  legend.style.marginTop = '20px';
  
  data.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    legendItem.style.display = 'flex';
    legendItem.style.alignItems = 'center';
    legendItem.style.margin = '5px 10px';
    
    const colorSquare = document.createElement('div');
    colorSquare.style.width = '12px';
    colorSquare.style.height = '12px';
    colorSquare.style.backgroundColor = item.color;
    colorSquare.style.marginRight = '5px';
    
    const text = document.createElement('span');
    text.textContent = `${item.name} (${item.value}%)`;
    text.style.fontSize = '12px';
    
    legendItem.appendChild(colorSquare);
    legendItem.appendChild(text);
    legend.appendChild(legendItem);
  });
  
  container.appendChild(legend);
}

// Simple function to create a basic bar chart with HTML/CSS
function createBarChart(container, data) {
  // Clear previous content
  container.innerHTML = '';
  
  // Create a container for the bar chart
  const chartContainer = document.createElement('div');
  chartContainer.className = 'bar-chart-container';
  chartContainer.style.padding = '20px';
  
  // Sort data by value (optional)
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  
  // Create bars
  sortedData.forEach(item => {
    const barGroup = document.createElement('div');
    barGroup.className = 'bar-group';
    barGroup.style.marginBottom = '15px';
    barGroup.style.display = 'flex';
    barGroup.style.alignItems = 'center';
    
    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = item.name;
    label.style.width = '120px';
    label.style.paddingRight = '10px';
    label.style.textAlign = 'right';
    label.style.fontSize = '12px';
    
    const barContainer = document.createElement('div');
    barContainer.className = 'bar-container';
    barContainer.style.flex = '1';
    barContainer.style.height = '20px';
    barContainer.style.backgroundColor = 'var(--secondary)';
    barContainer.style.borderRadius = '10px';
    barContainer.style.overflow = 'hidden';
    
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = `${item.value}%`;
    bar.style.height = '100%';
    bar.style.backgroundColor = item.color;
    bar.style.borderRadius = '10px';
    bar.style.transition = 'width 1s ease';
    
    const value = document.createElement('div');
    value.className = 'bar-value';
    value.textContent = `${item.value}%`;
    value.style.marginLeft = '10px';
    value.style.fontSize = '12px';
    value.style.width = '40px';
    
    barContainer.appendChild(bar);
    barGroup.appendChild(label);
    barGroup.appendChild(barContainer);
    barGroup.appendChild(value);
    chartContainer.appendChild(barGroup);
  });
  
  container.appendChild(chartContainer);
}

// Initialize charts for default active tab
document.addEventListener('DOMContentLoaded', function() {
  // Set first tab as active by default
  const defaultTab = tabButtons[0].getAttribute('data-tab');
  initializeCharts(defaultTab);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Skip for non-navigation links
    if (this.getAttribute('href') === '#') return;
    
    e.preventDefault();
    
    // Close mobile menu if it's open
    if (mobileMenu.classList.contains('open')) {
      toggleMobileMenu();
    }
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,  // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});
