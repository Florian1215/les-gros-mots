// lancement



                       ////////////////////////////// pitch game one //////////////////////////////
                       
                      
/// lottie
if (window.innerWidth>991){
	console.log ("run");
const lottiePlayer = document.getElementById("my-animation");
const wrapLottie = document.getElementById("lottie-wrap");


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

console.log ("XX="+x+" YY="+y+isAnimating);
//console.log (`X= ${x} Y= ${y}`);
  if (!isAnimating && x >= 30 && x <= 80 && y >= 470 && y <= 540) {
	  console.log (`WINNNER ONE X= ${x} Y= ${y}`);
    isAnimating = true;
    animationStart = performance.now();
    
    setTimeout(() => wrapLottie.style.display = "block",lottiePlayer.play(), 200);
	
  }
});

function updateClipPath() {
  x = mouseX;
  y = mouseY;

  cache.style.clipPath = `circle(${isAnimating ? 1000 : 40}px at ${x}px ${y}px)`;

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

// Second element

const pitchImgWrapTwo = document.querySelector('.pitch-img-wrap-two');
const cacheTwo = pitchImgWrapTwo.querySelector('.cache-two');
let mouseXTwo = 0;
let mouseYTwo = 0;
let isAnimatingTwo = false;
let animationStartTwo = null;
let xTwo; let yTwo;

pitchImgWrapTwo.addEventListener('mousemove', e => {
  const rect = pitchImgWrapTwo.getBoundingClientRect();
  mouseXTwo = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  mouseYTwo = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
  x = mouseXTwo.toFixed(0); 
  y = mouseYTwo.toFixed(0);


});



                  ////////////////////////////// pitch game TWO//////////////////////////////////////////////////
 
                
  
function updateClipPathTwo() {
  x = mouseXTwo.toFixed(0);;
  y = mouseYTwo.toFixed(0);
//console.log (`position second 2 X= ${x} Y= ${y}`);
  cacheTwo.style.clipPath = `circle(${isAnimatingTwo ? 1000 : 40}px at ${x}px ${y}px)`;

  if (isAnimatingTwo) {
    const now = performance.now();
    const elapsedTime = now - animationStartTwo;
    const animationDuration = 1000; // 1 second

    if (elapsedTime >= animationDuration) {
      isAnimatingTwo = false;
      cacheTwo.style.clipPath = 'none';
      pitchImgWrapTwo.classList.remove('pitch-active');
      cacheTwo.classList.remove('pitch-active');
      return;
    }

    const progress = elapsedTime / animationDuration;
    const radius = 40 + (1000 - 40) * progress;
    cacheTwo.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
  }

  requestAnimationFrame(updateClipPathTwo);
}

requestAnimationFrame(updateClipPathTwo);

pitchImgWrapTwo.addEventListener('mouseleave', () => {
  isAnimatingTwo = false;
  cacheTwo.style.clipPath = 'circle(40px at center)';
});

/// sécurité au mouseleave après anim
pitchImgWrapTwo.addEventListener('mouseleave', () => {
  if (!isAnimatingTwo) {
    cacheTwo.style.clipPath = 'none';
  }
});
const lottiePlayerTwo = document.getElementById("my-animation-two");
const wrapLottieTwo = document.getElementById("lottie-wrap-two");

pitchImgWrapTwo.addEventListener('mousemove', e => {
	
	//console.log ("XX"+x+"YY"+y+isAnimating);
	console.log (`X= ${x} Y= ${y}`);
  const rect = pitchImgWrapTwo.getBoundingClientRect();
  mouseXTwo = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  mouseYTwo = Math.max(0, Math.min(e.clientY - rect.top, rect.height));

  if (!isAnimatingTwo && mouseXTwo >= 886 && mouseXTwo <= 952 && mouseYTwo >= 506 && mouseYTwo <= 568) {
    isAnimatingTwo = true;
    console.log (`WINNNER 2  X= ${x} Y= ${y}`);
    animationStartTwo = performance.now();
    wrapLottieTwo.style.display = "block";
    setTimeout(() => lottiePlayerTwo.play(), 200);
  }
});

}// fin condition largeur > 991




//Script de slider de Novembre 2024
let scrollListener = null; // Variable pour stocker la référence de l'écouteur de scroll

function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  adjust = windowWidth / 12; 
  console.log("adjust-24", adjust);

  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass);
    var horizontalSection = document.querySelector(horizontalSectionClass);
    var elementWrapperTop = horizontalSection.offsetTop;
    const windowHeight = window.innerHeight;
    const elementWrapperHeight = elementWrapper.getBoundingClientRect().height;
    const stickyTopPosition = (windowHeight - elementWrapperHeight) / 2;
    const stickyElement = horizontalSection.querySelector('.sticky-wrap');
    stickyElement.style.top = stickyTopPosition + 'px';

    var elements = elementWrapper.querySelectorAll('.img-slide');
    var totalWidth = 0;
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var computedStyle = window.getComputedStyle(element);
      var marginLeft = parseFloat(computedStyle.marginLeft);
      var marginRight = parseFloat(computedStyle.marginRight);
      var elementWidth = element.offsetWidth + marginLeft + marginRight;
      totalWidth += elementWidth;
    }

    var stickyLarge = stickyElement.clientWidth;
    var wrapperLarge = totalWidth;
    var overflowDuWrapper = wrapperLarge - stickyLarge;
    var scrollLength = overflowDuWrapper + adjust;
    wrapperLarge = wrapperLarge + adjust;
    horizontalSection.style.height = wrapperLarge + "px";
    let lastScrollTop = 0;

    // Fonction de scroll horizontale
    function updateHorizontalScroll() {
      var scrollTop = window.pageYOffset.toFixed();
      if (scrollTop >= elementWrapperTop && scrollTop <= (elementWrapperTop + scrollLength)) {
        if (lastScrollTop < elementWrapperTop) {
          elementWrapper.dispatchEvent(new CustomEvent('horizontal-scroll-start'));
        }
        elementWrapper.style.transform = "translateX(-" + (scrollTop - elementWrapperTop) + "px)";
        //console.log("translate", "translateX(-" + (scrollTop - elementWrapperTop) + "px)");
      } else {
        if (lastScrollTop >= elementWrapperTop) {
          elementWrapper.dispatchEvent(new CustomEvent('horizontal-scroll-end'));
        }
      }
      lastScrollTop = scrollTop;
    }

    // Écouteur de scroll
    scrollListener = () => requestAnimationFrame(updateHorizontalScroll);
    window.addEventListener('scroll', scrollListener);

    // Exemple d'utilisation des événements personnalisés
    elementWrapper.addEventListener('horizontal-scroll-start', function() {
      console.log('horizontal-scroll-start');
    });

    elementWrapper.addEventListener('horizontal-scroll-end', function() {
      var translateX = parseFloat(elementWrapper.style.transform.split('(')[1]);
      if (translateX >= -100 && translateX < 0) {
        elementWrapper.style.transform = "translateX(0)";
      }
      console.log('horizontal-scroll-end');
    });
  } else {
    // Désactiver le scroll horizontal pour les écrans plus petits
  }
}

// Gestionnaire de redimensionnement
window.addEventListener('resize', function () {
  // Enlever l'écouteur de scroll pendant le resize
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener);
  }




  // Réinitialiser la position de translateX
  document.querySelector('.element-wrapper').style.transform = "translateX(0px)";

  // Relancer handleHorizontalScroll pour remettre à jour les valeurs
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
});

window.addEventListener('load', () => {
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
});





//////////////// fin jeu numéro 2///////////////////////////
/*

window.addEventListener('load', (event) => {
  console.log('La page est complètement chargée');
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 600);
});



 
 
/////////////////////////////////////////////////////////// Apparition des lettres au scrolll NEW////////////////////////////////////////// 

//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////
///////////////////////////////////////////////////////////////         JUNE script JUNE.          ///////////////////////////////////////
///////////////////////////////////////////////////////////////         JUNE script JUNE.          ///////////////////////////////////////




//console.log( "hello");
function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  // adjust est la variable dans laquelle on décide de la quantité de blanc à la fin de l'élément sur la droite
  console.log ("handleHorizontalScroll");

  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass); // l'élément qui est dans le sticky
    console.log ("elementWrapper"+elementWrapper);
    
	
	console.log (windowWidth);
    var horizontalSection = document.querySelector(horizontalSectionClass); // la section qui contient l'élément

    //var elementWrapperTop = horizontalSection.getBoundingClientRect().top; // get distance from top of elementWrapper to top of viewport
    // console.log ("elementWrapperTop"+elementWrapperTop);
     // Calculate the position of the element relative to the top of the page
	 var elementWrapperTop =horizontalSection.offsetTop;

	 console.log('Position from top:', elementWrapperTop);
 
    /// mettre le sticky au milieu
    // Get the height of the window
	const windowHeight = window.innerHeight;
	const elementWrapperHeight = elementWrapper.getBoundingClientRect().height; // hauteur du contenu
	const stickyTopPosition = (windowHeight - elementWrapperHeight) / 2; // mettre le sticky au centre
	const stickyElement = horizontalSection.querySelector('.sticky-wrap');
	stickyElement.style.top = stickyTopPosition + 'px';
	
	console.log ("elementWrapperTop"+elementWrapperTop);
	console.log ("stickyTopPosition"+stickyTopPosition);
	
	/// nouvelle partie du script qui ne calcule plus la largeur mais la prend dans le DOM directement sur les valeur entrées
					var elements = elementWrapper.querySelectorAll('.img-slide');
					var totalWidth = 0;
					console.log ("nb d'elements trouvé par script= "+elements.length);
					for (var i = 0; i < elements.length; i++) {
					  var element = elements[i];
					  var computedStyle = window.getComputedStyle(element);
					  var marginLeft = parseFloat(computedStyle.marginLeft);
					  console.log("marginLeft ",marginLeft)
					  var marginRight = parseFloat(computedStyle.marginRight);
					   console.log("marginRight ",marginRight)
					  var elementWidth = element.offsetWidth + marginLeft + marginRight;
					  console.log("elementWidth ",elementWidth)
					  totalWidth += elementWidth;
					}
					
					console.log ("totalWidth trouvé= "+totalWidth);

	   // partie caché de elementWrapper
	   var StickyLarge= stickyElement.clientWidth;
	   //console.log ("StickyLarge"+ StickyLarge);
	   var wrapperLarge= elementWrapper.scrollWidth;
	   //console.log ("wrapperLarge"+ wrapperLarge);
	   var wrapperLarge =totalWidth;
	   var overflowDuWrapper= wrapperLarge-StickyLarge;
	   //console.log ("depasse de "+ overflowDuWrapper);
	   // on va scroller de la largeur qui dépasse plus 300 pour ne pas arriver au bord
	   scrollLenght= overflowDuWrapper+ adjust;
	   wrapperLarge= wrapperLarge+adjust;
	   console.log ("wrapperLarge "+ wrapperLarge)
	   
	   horizontalSection.style.height = wrapperLarge + "px";
    


 

    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset.toFixed();
      


      if (scrollTop >= elementWrapperTop && scrollTop <= (elementWrapperTop+scrollLenght)) {
        elementWrapper.style.transform = "translateX(-" + (scrollTop - elementWrapperTop) + "px)";
        console.log (scrollTop - elementWrapperTop);
      }
    });
  }else {//console.log ("SCROLL HoriZONTAL DISABLE");}
}
}




$(".link-cross").on("click", function(e) {
  e.preventDefault(); // prevent the default link behavior

  setTimeout(function() {
    var previousPageURL = document.referrer;
    
    // Check if the previous page URL ends with "/creations"
    if (previousPageURL.endsWith("/creations")) {
      window.history.back();
    } else {
      // Navigate to "/creations"
      window.location.href = "/creations";
    }
  }, 300);
});

*/