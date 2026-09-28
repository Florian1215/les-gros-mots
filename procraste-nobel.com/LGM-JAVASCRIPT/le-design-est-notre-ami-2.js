//// chargement des images avec un loader installé dans webflow
//

 var loader = document.querySelector('.loader');
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
  console.log('done', currentTime);
  countImage++;
  
  if (countImage==eagerImages.length){loader.style.display='none';}
}

for (var j = 0; j < eagerImages.length; j++) {
  if (eagerImages[j].complete) {
    imageLoaded();
  } else {
    eagerImages[j].addEventListener('load', imageLoaded);
  }
}

//Script de slider de Novembre 2024
let scrollListener = null; // Variable pour stocker la référence de l'écouteur de scroll

function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  adjust = windowWidth / 20; 
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




/*
// lancement

window.addEventListener('load', (event) => {
  console.log('La page est complètement chargée');
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 300);
});








//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////
///////////////////////////////////////////////////////////////         JUNE script JUNE.          ///////////////////////////////////////
///////////////////////////////////////////////////////////////         JUNE script JUNE.          ///////////////////////////////////////





//console.log( "hello");
function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  // adjust est la variable dans laquelle on décide de la quantité de blanc à la fin de l'élément sur la droite
  console.log ("fx handleHorizontalScroll");

  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass); // l'élément qui est dans le sticky
    //console.log ("elementWrapper"+elementWrapper);
    
	
	//console.log (windowWidth);
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
	const stickyTopPosition = ((windowHeight+34) - elementWrapperHeight) / 2; // mettre le sticky au centre
	const stickyElement = horizontalSection.querySelector('.sticky-wrap');
	stickyElement.style.top = stickyTopPosition + 'px';
	
	console.log ("elementWrapperTop"+elementWrapperTop);
	console.log ("stickyTopPosition"+stickyTopPosition);
	
	/// nouvelle partie du script qui ne calcule plus la largeur mais la prend dans le DOM directement sur les valeur entrées
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



*/


