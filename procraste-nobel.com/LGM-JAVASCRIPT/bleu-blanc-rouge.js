

//Script de slider de Novembre 2024
let scrollListener = null; // Variable pour stocker la référence de l'écouteur de scroll

function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  adjust = windowWidth / 11.7; 
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
  document.querySelector('.element-wrapper-two').style.transform = "translateX(0px)";

  // Relancer handleHorizontalScroll pour remettre à jour les valeurs
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
  handleHorizontalScroll('.element-wrapper-two', '.horizontal-section-two', 0);
});

window.addEventListener('load', () => {
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
  handleHorizontalScroll('.element-wrapper-two', '.horizontal-section-two', 0);
});





/// caler au milieu le drapeau avec scroll décalé

//// chargement des images avec un loader installé dans webflow
//

 var loader = document.querySelector('.loader');
 document.body.style.overflow = 'hidden';
var countImage=0

var images = document.getElementsByTagName('img');
var eagerImages = [];

for (var i = 0; i < images.length; i++) {
  if (images[i].getAttribute('loading') === 'eager') {
    eagerImages.push(images[i]);
   
  }
}

function imageLoaded(event) {
  var currentTime = performance.now();
 // console.log('done', currentTime);
  countImage++;
  
  if (countImage==eagerImages.length){
	  loader.style.display='none';
	  document.body.style.overflow = '';
	  document.body.style.position = '';
	  document.body.style.top = '';}
}

for (var j = 0; j < eagerImages.length; j++) {
  if (eagerImages[j].complete) {
    imageLoaded();
  } else {
    eagerImages[j].addEventListener('load', imageLoaded);
  }
}









//le sticky au milieu que pour desktop
const afficheElement = document.querySelector('.drapeau-wrap');
const viewportHeight = window.innerHeight;
const afficheHeight = afficheElement.offsetHeight;



var offset = ((viewportHeight+34) - afficheHeight) / 2 ;


  afficheElement.style.position = 'sticky';
  afficheElement.style.top = `${offset}px`;


console.log ("offset",offset);

/*

// lancement

window.addEventListener('load', (event) => {
  console.log('La page est complètement chargée');
handleHorizontalScroll('.element-wrapper', '.horizontal-section', 300);
handleHorizontalScrollTwo('.element-wrapper-two', '.horizontal-section-two', 300);

});

//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////


////////////////////// ATTENTION LE SCRIPT de UNE ne marche pas quand deux éléments à faire scroller /////////////////////


//console.log( "hello script sans interférence sur les variables");
function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;

  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass);
    var horizontalSection = document.querySelector(horizontalSectionClass);
    var stickyElement = horizontalSection.querySelector('.sticky-wrap');
    
    const calculateStickyPosition = () => {
      var elementWrapperTop = horizontalSection.getBoundingClientRect().top;
      console.log("elementWrapperTop"+elementWrapperTop);
      const windowHeight = window.innerHeight;
      const elementWrapperHeight = elementWrapper.getBoundingClientRect().height;
 var  stickyTopPosition = ((windowHeight - elementWrapperHeight) / 2) +57;
      //const stickyTopPosition=57;
      // comme les image sont en dessous de la nv et que la nav fait toujours 34 les images sont toujours à 34 maintenant en 2024
      stickyElement.style.top = stickyTopPosition + 'px';
      console.log ( "sticky= ", stickyTopPosition);
      console.log ( "windowHeight= ", windowHeight);
      console.log ( "elementWrapperHeight= ", elementWrapperHeight);
      
      
      var stickyLarge = stickyElement.clientWidth;
      var wrapperLarge = elementWrapper.scrollWidth;
      var overflowDuWrapper = wrapperLarge - stickyLarge;
      var scrollLength = overflowDuWrapper + adjust;
      wrapperLarge = wrapperLarge + adjust;
      
      horizontalSection.style.height = wrapperLarge + "px";
      
      return { elementWrapperTop, scrollLength };
    };

    var { elementWrapperTop, scrollLength } = calculateStickyPosition();

    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset.toFixed();

      if (scrollTop >= elementWrapperTop && scrollTop <= (elementWrapperTop + scrollLength)) {
        elementWrapper.style.transform = "translateX(-" + (scrollTop - elementWrapperTop) + "px)";
      }
    });
  } else {
    console.log("SCROLL HORIZONTAL DISABLE");
  }
}


function handleHorizontalScrollTwo(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;

  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass);
    var horizontalSection = document.querySelector(horizontalSectionClass);
    var stickyElement = horizontalSection.querySelector('.sticky-wrap');
    
    const calculateStickyPosition = () => {
      var elementWrapperTop = horizontalSection.getBoundingClientRect().top;
      console.log("elementWrapperTop"+elementWrapperTop);
      const windowHeight = window.innerHeight;
      const elementWrapperHeight = elementWrapper.getBoundingClientRect().height;
      const stickyTopPosition = ((windowHeight+34) - elementWrapperHeight) / 2;
      stickyElement.style.top = stickyTopPosition + 'px';
      
      var stickyLarge = stickyElement.clientWidth;
      var wrapperLarge = elementWrapper.scrollWidth;
      var overflowDuWrapper = wrapperLarge - stickyLarge;
      var scrollLength = overflowDuWrapper + adjust;
      wrapperLarge = wrapperLarge + adjust;
      
      horizontalSection.style.height = wrapperLarge + "px";
      
      return { elementWrapperTop, scrollLength };
    };

    var { elementWrapperTop, scrollLength } = calculateStickyPosition();

    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset.toFixed();

      if (scrollTop >= elementWrapperTop && scrollTop <= (elementWrapperTop + scrollLength)) {
        elementWrapper.style.transform = "translateX(-" + (scrollTop - elementWrapperTop) + "px)";
      }
    });
  } else {
    console.log("SCROLL HORIZONTAL DISABLE");
  }
}

// lancement


*/

