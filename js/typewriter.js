
/**
 * Typewriter Effect with Smart Highlighting
 * Creates a dynamic typing effect with highlighted keywords
 */

(function() {
  // Configuration
  const config = {
    element: document.getElementById('typewriter'),
    texts: [
      {
        text: "Artificial Intelligence Engineer",
        highlights: ["Artificial Intelligence", "Engineer"]
      },
      {
        text: "Machine Learning Specialist",
        highlights: ["Machine Learning", "Specialist"]
      },
      {
        text: "Data Scientist from Uganda",
        highlights: ["Data Scientist", "Uganda"]
      }
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseBeforeDelete: 2000,
    pauseBeforeType: 500
  };
  
  // Variables
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';
  let highlightClass = '';
  
  // Exit if element doesn't exist
  if (!config.element) return;
  
  // Highlight specific words in text
  function getHighlightedHTML(text, highlights) {
    let result = text;
    let highlightIndex = 0;
    
    // Apply highlights to specific words
    for (const word of highlights) {
      if (text.includes(word)) {
        highlightIndex = (highlightIndex % 3) + 1;
        const highlightClass = `typewriter-highlight-${highlightIndex}`;
        result = result.replace(word, `<span class="${highlightClass}">${word}</span>`);
      }
    }
    
    return result;
  }
  
  // Main typing function
  function typeWriter() {
    const currentTextObj = config.texts[textIndex];
    const fullText = currentTextObj.text;
    
    // Set typing speed based on whether we're typing or deleting
    const speed = isDeleting ? config.deletingSpeed : config.typingSpeed;
    
    // If deleting
    if (isDeleting) {
      charIndex--;
      currentText = fullText.substring(0, charIndex);
    } 
    // If typing
    else {
      charIndex++;
      currentText = fullText.substring(0, charIndex);
    }
    
    // Apply highlighting to completed words only
    if (charIndex === fullText.length && !isDeleting) {
      config.element.innerHTML = getHighlightedHTML(currentText, currentTextObj.highlights);
    } else {
      // When still typing, only apply highlight to complete words
      const words = currentText.split(' ');
      const highlightedText = getHighlightedHTML(currentText, 
        currentTextObj.highlights.filter(highlight => 
          words.some(word => highlight.includes(word) && word.length > 2)
        )
      );
      
      config.element.innerHTML = highlightedText + 
        (charIndex < fullText.length ? '<span class="cursor"></span>' : '');
    }
    
    // Decide if we need to change direction or move to next text
    if (!isDeleting && charIndex === fullText.length) {
      // Pause before starting to delete
      setTimeout(() => isDeleting = true, config.pauseBeforeDelete);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      // Move to next text
      textIndex = (textIndex + 1) % config.texts.length;
      // Pause before typing new text
      setTimeout(() => typeWriter(), config.pauseBeforeType);
      return;
    }
    
    // Schedule next frame
    setTimeout(typeWriter, speed + (isDeleting ? Math.random() * 20 : Math.random() * 50));
  }
  
  // Start the typewriter effect
  setTimeout(typeWriter, 1000);
})();
