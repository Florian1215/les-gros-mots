////// animation façon gif 


const lemeondeOpen = document.querySelector('.lemeonde-open');
const gifImgs = lemeondeOpen.querySelectorAll('.gif-img');
let currentIndex = 0;

function toggleVisibility() {
  gifImgs.forEach((gifImg, index) => {
    if (index === currentIndex) {
      gifImg.classList.add('visible');
    } else {
      gifImg.classList.remove('visible');
    }
  });

  currentIndex = (currentIndex + 1) % gifImgs.length;
}

setInterval(toggleVisibility, 150);

   
   
   
 


