var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    
      // Remove the active class from the current slide.
  slides[currentSlide].className = 'slide';

  // Increment the current slide index and wrap it around to 0 if it is greater than or equal to the number of slides.
  currentSlide = (currentSlide+1)%slides.length;

    // Add the active class to the new current slide.
  slides[currentSlide].className = 'slide active';
}




