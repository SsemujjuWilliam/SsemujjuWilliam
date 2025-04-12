
/**
 * Custom Cursor with Animated Interactions
 * Creates a custom cursor that changes shape when interacting with elements
 */

(function() {
  // Elements
  const cursor = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursor-follower');
  
  // Exit if elements don't exist
  if (!cursor || !cursorFollower) return;
  
  // Variables
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let followerX = 0;
  let followerY = 0;
  
  // Check if device supports touch
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  };
  
  // Initialize cursor
  function initCursor() {
    // Skip custom cursor on touch devices
    if (isTouchDevice()) return;
    
    // Add class to body to hide default cursor
    document.body.classList.add('custom-cursor-active');
    
    // Initial position
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
    
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Show cursors after first move
      cursor.style.opacity = '1';
      cursorFollower.style.opacity = '1';
    });
    
    // Mouse enter/leave document
    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursorFollower.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorFollower.style.opacity = '0';
    });
    
    // Start animation
    requestAnimationFrame(animateCursor);
    
    // Add event listeners for interactive elements
    setupInteractiveElements();
  }
  
  // Animate cursor position
  function animateCursor() {
    // Smooth cursor movement
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    // Even smoother follower movement
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    // Apply positions
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    
    // Continue animation
    requestAnimationFrame(animateCursor);
  }
  
  // Add event listeners for interactive elements
  function setupInteractiveElements() {
    // Links, buttons and other interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, .project-card, .skill-card');
    
    interactiveElements.forEach(element => {
      // Mouse enter
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-active');
        cursorFollower.classList.add('follower-active');
      });
      
      // Mouse leave
      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
        cursorFollower.classList.remove('follower-active');
      });
      
      // Mouse down
      element.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-click');
        cursorFollower.classList.add('follower-click');
      });
      
      // Mouse up
      element.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-click');
        cursorFollower.classList.remove('follower-click');
      });
    });
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursor);
  } else {
    initCursor();
  }
})();
