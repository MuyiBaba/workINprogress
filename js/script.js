const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
// HERO CROSSFADE SLIDESHOW
const slides = document.querySelectorAll('.hero .slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile menu toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && navbar) {
      menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
      });
    }
  
    // --- Hero Crossfade Slideshow ---
    const slides = document.querySelectorAll('.hero .slide');
    let currentSlide = 0;
  
    function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    // Only start slider if slides exist
    if (slides.length > 1) {
      setInterval(showNextSlide, 5000); // Change every 5 seconds
    }
  });
  
