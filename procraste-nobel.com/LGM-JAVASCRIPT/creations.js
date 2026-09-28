// retourne à la position d'origine après avoir vu un projet


document.addEventListener('DOMContentLoaded', function() {
  window.scrollTo(0, 4000);
});




var touchStartTime;
var touchEndTime;
var touchThreshold = 500; // Threshold in milliseconds to differentiate long touch and fast touch

// Get all elements with the class 'img-crea'
var elements = document.getElementsByClassName('img-crea');

// Add touch event listeners to each element
Array.from(elements).forEach(function(element) {
  element.addEventListener('touchstart', function(event) {
    touchStartTime = new Date().getTime(); // Record the start time of touch
  });

  element.addEventListener('touchend', function(event) {
    touchEndTime = new Date().getTime(); // Record the end time of touch

    var touchDuration = touchEndTime - touchStartTime;

    if (touchDuration >= touchThreshold) {
      // Long touch detected
      console.log('Long touch');
    } else {
      // Fast touch detected
      console.log('Fast touch');
    }
  });
});




//// scroll des textes sur une bande horizontale ////////////
console.log ("ok");

function scrollHorizontally(wrapperId, direction) {
  const trackWrapper = document.getElementById(wrapperId);
  console.log (wrapperId);
  const elements = trackWrapper.querySelectorAll('.text-scroll-horizontal');
  const elementCount = elements.length;
  const elementWidth = elements[0].offsetWidth + parseInt(window.getComputedStyle(elements[0]).marginRight);
  const frameTime = 1000 / 30; // set the frame time to 33.3 ms (30 frames per second)
  let scrollPosition = 0;
  let lastAnimationFrameTime = 0;
  let animationId;

  // Clone elements to make the scrolling infinite
  for (let i = 0; i < elementCount; i++) {
    trackWrapper.appendChild(elements[i].cloneNode(true));
  }

  // Animate elements to move from right to left or left to right
  function animate(timestamp) {
    if (timestamp - lastAnimationFrameTime < frameTime) {
      animationId = requestAnimationFrame(animate);
      return;
    }
    lastAnimationFrameTime = timestamp;
    animationId = requestAnimationFrame(animate);
    if (direction === 'left') {
      scrollPosition -= 1;
      if (scrollPosition < 0) {
        scrollPosition = elementWidth;
        trackWrapper.insertBefore(trackWrapper.lastElementChild, trackWrapper.firstChild);
      }
    } else {
      scrollPosition += 1;
      if (scrollPosition >= elementWidth) {
        scrollPosition = 0;
        trackWrapper.appendChild(trackWrapper.children[0]);
      }
    }
    trackWrapper.style.transform = `translateX(${-scrollPosition}px)`;
  }

  // Start animation
  animate();
}
scrollHorizontally('track-neg-five', 'left');
scrollHorizontally('track-neg-for', 'right');
scrollHorizontally('track-neg-three', 'left');
scrollHorizontally('track-neg-two', 'right');
scrollHorizontally('track-neg-one', 'left');
scrollHorizontally('track-zero', 'right');
scrollHorizontally('track-one', 'left');
scrollHorizontally('track-two', 'right');
scrollHorizontally('track-three', 'left');
scrollHorizontally('track-for', 'right');
scrollHorizontally('track-five', 'left');
scrollHorizontally('track-six', 'right');
scrollHorizontally('track-seven', 'left');
scrollHorizontally('track-eight', 'right');
scrollHorizontally('track-nine', 'left');
scrollHorizontally('track-ten', 'right');
scrollHorizontally('track-onze', 'left');
scrollHorizontally('track-douze', 'right');
scrollHorizontally('track-treize', 'left');
scrollHorizontally('track-quatorze', 'right');
scrollHorizontally('track-quinze', 'left');
scrollHorizontally('track-seize', 'right');
scrollHorizontally('track-dixsept', 'left');
scrollHorizontally('track-dixhuit', 'right');
scrollHorizontally('track-dixneuf', 'left');
scrollHorizontally('track-vingt', 'right');
scrollHorizontally('track-vingtetun', 'left');

//Gérer le plus qui apparait sur les liens
const cursor = document.querySelector('.cursor');
const plusCursor = document.querySelector('.plus-cursor');

setInterval(() => {

    checkClassUnderCursor();

}, 100);

/// ////////fonction pour le curseur plus////////
  function checkClassUnderCursor() {
    const element = document.elementFromPoint(cursor.getBoundingClientRect().left + cursor.offsetWidth / 2, cursor.getBoundingClientRect().top + cursor.offsetHeight / 2);
   if (element && element.classList.length > 0){
    if (element.classList.contains('trigger-mouse')||element.classList.contains('img-crea') ) {
      mouseEnterHandler();
    } else {
      mouseLeaveHandler();
    }
   }
};

 function mouseEnterHandler() {
    cursor.style.width = '60px';
    cursor.style.height = '60px';
    plusCursor.style.width = '40px';
    plusCursor.style.height = '40px';
    plusCursor.style.opacity = '1';
   
    cursor.style.transition = 'all 200ms';
    plusCursor.style.transition = 'all 200ms';
  }

  // Function to handle mouseleave event
  function mouseLeaveHandler() {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
    plusCursor.style.width = '0px';
    plusCursor.style.height = '0px';
    plusCursor.style.opacity = '0';

    cursor.style.transition = 'all 100ms';
    plusCursor.style.transition = 'all 100ms';
  }







//script qui remplace les anim webflow qui rataient des éléments. 
//const slides = document.querySelectorAll('.splide__slide');


function getSlides() {
  return document.querySelectorAll('.splide__slide');
}

// Initial assignment
let slides = getSlides();


// Loop through each slide element
slides.forEach(slide => {
  // Declare a variable to hold the opacity animation timeout ID
  let opacityAnimationTimeout;

  // Add event listeners for mouse enter and leave events
  slide.addEventListener('mouseenter', () => {
    // Clear any existing opacity animation timeout
    clearTimeout(opacityAnimationTimeout);

    // Set a timeout to run the opacity animation after 200ms
    opacityAnimationTimeout = setTimeout(() => {
      // Select the "img-slider-foot" child element of the current slide and set its opacity to 0 with a transition time of 0.1s
      const imgSliderFoot = slide.querySelector('.img-slider-foot');
      if (imgSliderFoot) {
        imgSliderFoot.style.opacity = '0';
        imgSliderFoot.style.transition = 'opacity 0.1s';
      }
    }, 300);
  });

  slide.addEventListener('mouseleave', () => {
    // Clear any existing opacity animation timeout
    clearTimeout(opacityAnimationTimeout);

    // Set a timeout to run the opacity animation after 200ms
    opacityAnimationTimeout = setTimeout(() => {
      // Select the "img-slider-foot" child element of the current slide and set its opacity to 1 with a transition time of 0.1s
      const imgSliderFoot = slide.querySelector('.img-slider-foot');
      if (imgSliderFoot) {
        imgSliderFoot.style.opacity = '1';
        imgSliderFoot.style.transition = 'opacity 0.1s';
      }
    }, 300);
  });
});







