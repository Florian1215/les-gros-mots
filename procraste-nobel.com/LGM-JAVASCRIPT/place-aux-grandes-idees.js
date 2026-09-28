

//// first script 
/*
console.log ("start");

if (window.innerWidth>991){
	console.log ("run");



const pitchImgWrap = document.querySelector('.pitch-img-wrap');
const cache = pitchImgWrap.querySelector('.cache');
let mouseX = 0;
let mouseY = 0;
let isAnimating = false;
let animationStart = null;
var x; var y;

pitchImgWrap.addEventListener('mousemove', e => {
  const rect = pitchImgWrap.getBoundingClientRect();
  mouseX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  mouseY = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
   x = mouseX.toFixed(0);
  y = mouseY.toFixed(0)

});

function updateClipPath(mouseX, mouseY,isAnimating) {
  x = mouseX;
  y = mouseY;
  const pitchImgWrap = document.querySelector('.pitch-img-wrap');
  const cache = pitchImgWrap.querySelector('.cache');
  cache.style.clipPath = `circle(${isAnimating ? 1000 : 60}px at ${x}px ${y}px)`;

  if (isAnimating) {
    const now = performance.now();
    const elapsedTime = now - animationStart;
    const animationDuration = 1000; // 1 second

    if (elapsedTime >= animationDuration) {
      isAnimating = false;
      cache.style.clipPath = 'none';
      pitchImgWrap.classList.remove('pitch-active');
      cache.classList.remove('pitch-active');
      return;
    }

    const progress = elapsedTime / animationDuration;
    const radius = 40 + (1000 - 40) * progress;
    cache.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
  }

  requestAnimationFrame(updateClipPath);
}

requestAnimationFrame(updateClipPath);

pitchImgWrap.addEventListener('mouseleave', () => {
  isAnimating = false;
  cache.style.clipPath = 'circle(40px at center)';
});

pitchImgWrap.addEventListener('mouseleave', () => {
  if (!isAnimating) {
    cache.style.clipPath = 'none';
  }
});

 } 
 
 */
 
 ////////////////////////////////////// deuxième script ////////
////////////////////////////////////// deuxième script ////////

let pitchImgWrap = document.querySelector('.pitch-img-wrap');
const cache = pitchImgWrap.querySelector('.cache');
let mouseX = 0;
let mouseY = 0;
let isAnimating = false;
let animationStart = null;
let x = 0;
let y = 0;
let rect = pitchImgWrap.getBoundingClientRect();

if (window.innerWidth > 0) {
  console.log("run");

  function updateClipPath() {
    rect = pitchImgWrap.getBoundingClientRect();
    if (x > rect.left && x < (rect.left + rect.width)) { mouseX = x - rect.left }
    mouseY = Math.max(0, Math.min(y - rect.top, rect.height));

    cache.style.clipPath = `circle(${isAnimating ? 1000 : 60}px at ${mouseX}px ${mouseY}px)`;

    if (isAnimating) {
      const now = performance.now();
      const elapsedTime = now - animationStart;
      const animationDuration = 1000; // 1 second

      if (elapsedTime >= animationDuration) {
        isAnimating = false;
        cache.style.clipPath = 'none';
        pitchImgWrap.classList.remove('pitch-active');
        cache.classList.remove('pitch-active');
        return;
      }

      const progress = elapsedTime / animationDuration;
      const radius = 40 + (1000 - 40) * progress;
      cache.style.clipPath = `circle(${radius}px at ${mouseX}px ${mouseY}px)`;
    }

    requestAnimationFrame(updateClipPath);
  }

  function handleTouchMove(e) {
    x = e.touches[0].clientX - rect.left; // Adjust for element's offset
    y = e.touches[0].clientY - rect.top;  // Adjust for element's offset
  }

  pitchImgWrap.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
  });

  pitchImgWrap.addEventListener('touchstart', e => {
    handleTouchMove(e);
  });

  pitchImgWrap.addEventListener('touchmove', e => {
    handleTouchMove(e);
    // Prevent scrolling on touchmove
    e.preventDefault();
  });

  requestAnimationFrame(updateClipPath);

  pitchImgWrap.addEventListener('mouseleave', () => {
    isAnimating = false;
    cache.style.clipPath = 'circle(40px at center)';
  });

  pitchImgWrap.addEventListener('mouseleave', () => {
    if (!isAnimating) {
      cache.style.clipPath = 'none';
    }
  });
}

 
 /////////////////////////////// animation toogle pour les mobiles ///////width="360" height="640"

 







