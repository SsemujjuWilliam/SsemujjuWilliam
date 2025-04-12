
/**
 * Interactive Particle Background using Canvas API
 * Creates animated particles that react to mouse movement
 */

(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let particles = [];
  let mouseX = width / 2;
  let mouseY = height / 2;
  let isMouseMoving = false;
  let mouseTimer;
  
  // Particle constructor
  function Particle(x, y) {
    this.x = x || Math.random() * width;
    this.y = y || Math.random() * height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.color = `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.random() * 0.3 + 0.2})`;
  }
  
  // Update particle position
  Particle.prototype.update = function() {
    // Calculate distance from mouse
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Move away from mouse if it's nearby and moving
    if (distance < 100 && isMouseMoving) {
      const angle = Math.atan2(dy, dx);
      const force = (100 - distance) / 1000;
      this.speedX += Math.cos(angle) * force;
      this.speedY += Math.sin(angle) * force;
    }
    
    // Apply speed limits
    this.speedX = Math.max(-1, Math.min(1, this.speedX));
    this.speedY = Math.max(-1, Math.min(1, this.speedY));
    
    // Apply friction
    this.speedX *= 0.98;
    this.speedY *= 0.98;
    
    // Update position
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Wrap around edges
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  };
  
  // Draw particle
  Particle.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
  
  // Connect particles with lines if they're close enough
  Particle.prototype.connect = function() {
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      const distance = Math.sqrt(
        (this.x - particle.x) * (this.x - particle.x) + 
        (this.y - particle.y) * (this.y - particle.y)
      );
      
      if (distance < 100) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance/1000})`;
        ctx.lineWidth = 0.2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
      }
    }
  };
  
  // Initialize canvas and particles
  function init() {
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Create particles
    const particleCount = Math.min(Math.floor((width * height) / 15000), 100);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Listen for mouse movement
    window.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Set flag for mouse movement
      isMouseMoving = true;
      clearTimeout(mouseTimer);
      
      // Reset flag after mouse stops
      mouseTimer = setTimeout(function() {
        isMouseMoving = false;
      }, 100);
    });
    
    // Handle touch movement for mobile
    window.addEventListener('touchmove', function(e) {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        isMouseMoving = true;
        
        clearTimeout(mouseTimer);
        mouseTimer = setTimeout(function() {
          isMouseMoving = false;
        }, 100);
      }
    });
    
    // Start animation
    animate();
  }
  
  // Animation loop
  function animate() {
    // Clear canvas with slight fade effect for trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(0, 0, width, height);
    
    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      particles[i].connect();
    }
    
    // Continue animation
    requestAnimationFrame(animate);
  }
  
  // Handle window resize
  window.addEventListener('resize', function() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Readjust particle positions
    particles.forEach(function(particle) {
      if (particle.x > width) particle.x = width * Math.random();
      if (particle.y > height) particle.y = height * Math.random();
    });
  });
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
