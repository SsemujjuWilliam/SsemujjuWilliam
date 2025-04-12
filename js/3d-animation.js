
/**
 * 3D Animation using Canvas API
 * Creates an interactive 3D object that responds to mouse movement
 */

(function() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const objects = [];
  let width, height;
  let mouseX = 0, mouseY = 0;
  
  // Object constructor
  function Object3D(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    this.size = Math.random() * 20 + 10;
    this.vertices = [];
    
    // Create cube vertices
    const s = this.size;
    this.vertices = [
      {x: -s, y: -s, z: -s},
      {x: s, y: -s, z: -s},
      {x: s, y: s, z: -s},
      {x: -s, y: s, z: -s},
      {x: -s, y: -s, z: s},
      {x: s, y: -s, z: s},
      {x: s, y: s, z: s},
      {x: -s, y: s, z: s}
    ];
    
    // Edges to connect vertices
    this.edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];
  }
  
  // Update object position and rotation based on mouse
  Object3D.prototype.update = function(mouseX, mouseY) {
    const targetRotationY = (mouseX - width / 2) * 0.0003;
    const targetRotationX = (mouseY - height / 2) * 0.0003;
    
    // Smooth rotation transition
    this.rotationY += (targetRotationY - this.rotationY) * 0.05;
    this.rotationX += (targetRotationX - this.rotationX) * 0.05;
    this.rotationZ += 0.001;
  };
  
  // Project 3D points to 2D canvas
  Object3D.prototype.project = function() {
    const projected = [];
    const focalLength = 300;
    const viewDistance = 100;
    
    // Calculate projected positions
    for (let i = 0; i < this.vertices.length; i++) {
      const vertex = this.vertices[i];
      
      // Apply rotation
      const cosX = Math.cos(this.rotationX);
      const sinX = Math.sin(this.rotationX);
      const cosY = Math.cos(this.rotationY);
      const sinY = Math.sin(this.rotationY);
      const cosZ = Math.cos(this.rotationZ);
      const sinZ = Math.sin(this.rotationZ);
      
      // Rotation around X axis
      let x1 = vertex.x;
      let y1 = vertex.y * cosX - vertex.z * sinX;
      let z1 = vertex.y * sinX + vertex.z * cosX;
      
      // Rotation around Y axis
      let x2 = x1 * cosY - z1 * sinY;
      let y2 = y1;
      let z2 = x1 * sinY + z1 * cosY;
      
      // Rotation around Z axis
      let x3 = x2 * cosZ - y2 * sinZ;
      let y3 = x2 * sinZ + y2 * cosZ;
      let z3 = z2;
      
      // Translate point
      x3 += this.x;
      y3 += this.y;
      z3 += this.z + viewDistance;
      
      // Project to 2D
      const scale = focalLength / z3;
      const projectedX = x3 * scale + width / 2;
      const projectedY = y3 * scale + height / 2;
      
      projected.push({x: projectedX, y: projectedY, scale: scale});
    }
    
    return projected;
  };
  
  // Draw the object on canvas
  Object3D.prototype.draw = function(ctx) {
    const projectedVertices = this.project();
    
    // Set line style
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1.5;
    
    // Draw edges
    ctx.beginPath();
    for (let i = 0; i < this.edges.length; i++) {
      const edge = this.edges[i];
      const v1 = projectedVertices[edge[0]];
      const v2 = projectedVertices[edge[1]];
      
      ctx.moveTo(v1.x, v1.y);
      ctx.lineTo(v2.x, v2.y);
    }
    ctx.stroke();
    
    // Draw vertices
    for (let i = 0; i < projectedVertices.length; i++) {
      const v = projectedVertices[i];
      const size = v.scale * 2;
      
      ctx.fillStyle = `rgba(255, 255, 255, ${v.scale * 0.3})`;
      ctx.beginPath();
      ctx.arc(v.x, v.y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  // Initialize canvas and objects
  function init() {
    // Set canvas dimensions
    resizeCanvas();
    
    // Create objects
    for (let i = 0; i < 1; i++) {
      objects.push(new Object3D(0, 0, 0));
    }
    
    // Mouse move event listener
    window.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Device orientation support for mobile
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(e) {
        if (e.beta && e.gamma) {
          mouseX = width / 2 + (e.gamma * (width / 90));
          mouseY = height / 2 + (e.beta * (height / 180));
        }
      });
    }
    
    // Start animation loop
    animate();
  }
  
  // Resize canvas to match container
  function resizeCanvas() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      width = heroSection.offsetWidth;
      height = heroSection.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
  }
  
  // Animation loop
  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw objects
    for (let i = 0; i < objects.length; i++) {
      objects[i].update(mouseX, mouseY);
      objects[i].draw(ctx);
    }
    
    // Continue animation
    requestAnimationFrame(animate);
  }
  
  // Handle window resize
  window.addEventListener('resize', resizeCanvas);
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
