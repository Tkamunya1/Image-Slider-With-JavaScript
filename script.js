var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide active';
}

var pauseButton = document.querySelector('#slider-pause');
var nextButton = document.querySelector('#slider-next');
var prevButton = document.querySelector('#slider-prev');
var navButtons = document.querySelectorAll('#slider-nav button');

pauseButton.onclick = function() {
  if (pauseButton.innerHTML == '<i class="fas fa-pause"></i>') {
    clearInterval(slideInterval);
    pauseButton.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    slideInterval = setInterval(nextSlide,3000);
    pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  }
};


