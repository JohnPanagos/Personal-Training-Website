const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
