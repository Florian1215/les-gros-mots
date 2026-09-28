

// lancement

/*

 console.log ("6 nov15 h)");

window.addEventListener('load', (event) => {

  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 300);
});

*/
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

  // Relancer handleHorizontalScroll pour remettre à jour les valeurs
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
});

window.addEventListener('load', () => {
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
});

///////////////////////////////////////////////////// cacher les images en version 2024 avec deux images seulement ////////////////////////////////////

const wrapFiches = document.querySelectorAll('.all-image-group-24');

wrapFiches.forEach(wrapFiche => {
  const apriOne = wrapFiche.querySelector('.img-one');
  const apriTwo = wrapFiche.querySelector('.img-two');

  let activeApri = apriOne;

  const toggleImage = () => {
    activeApri.classList.add('img-hide');

    if (activeApri === apriOne) {
      activeApri = apriTwo;
    } else {
      activeApri = apriOne;
    }

    activeApri.classList.remove('img-hide');
  };

  // Survol pour desktop
  wrapFiche.addEventListener('mouseover', toggleImage);

  // Touch pour mobile
  wrapFiche.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Évite les comportements indésirables comme le scroll
    toggleImage();
  });
});



//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////
///////////////////////////////////////////////////////////////         JUNE script JUNE.          ///////////////////////////////////////
///////////////////////////////////////////////////////////////         JUNE script JUNE.          ///////////////////////////////////////

/*




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
					  var marginRight = parseFloat(computedStyle.marginRight);
					  var elementWidth = element.offsetWidth + marginLeft + marginRight;
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




*/


///////////////////////////////////////////////////// click sur le bouton cross link retour page liste des projects////////////////////////////////////


