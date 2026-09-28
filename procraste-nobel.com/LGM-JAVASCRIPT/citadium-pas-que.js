// lancement
console.log( "pasque");
window.addEventListener('load', (event) => {
  console.log('La page est complètement chargée');
  
  
  
// lancement
// on ajoute une variable de largeur de l'écran
var variableWindow = (window.innerWidth)/7;
handleHorizontalScroll('.element-wrapper', '.horizontal-section', variableWindow);
console.log ("variableWindow====",variableWindow);
});




//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////

/////////////////////////////////////////////////////// ATTENTION CE SRIPT NE FONCTIONNE QUE SI UNE SEUL ÉLMENT 



function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  // adjust est la variable dans laquelle on décide de la quantité de blanc à la fin de l'élément sur la droite


  if (windowWidth > 991  ) {
    var elementWrapper = document.querySelector(elementWrapperClass); // l'élément qui est dans le sticky
    
	
	//console.log ("elementWrapperWidth"+ elementWrapperWidth);
	//console.log (windowWidth);
    var horizontalSection = document.querySelector(horizontalSectionClass); // la section qui contient l'élément

    var elementWrapperTop = horizontalSection.getBoundingClientRect().top; // get distance from top of elementWrapper to top of viewport
 
    /// mettre le sticky au milieu
    // Get the height of the window
	const windowHeight = window.innerHeight;
	const elementWrapperHeight = elementWrapper.getBoundingClientRect().height; // hauteur du contenu
	const stickyTopPosition = ((windowHeight - elementWrapperHeight) / 2)+34; // mettre le sticky au centre
	const stickyElement = horizontalSection.querySelector('.sticky-wrap');
	stickyElement.style.top = stickyTopPosition + 'px';
	console.log ("stickyTopPosition"+stickyTopPosition);
	
	/// fin mettre sticky au milieur de la section
	
	   // partie caché de elementWrapper
	   var StickyLarge= stickyElement.clientWidth;
	   console.log ("StickyLarge"+ StickyLarge);
	   var wrapperLarge= elementWrapper.scrollWidth;
	   console.log ("wrapperLarge"+ wrapperLarge);
	   var overflowDuWrapper= wrapperLarge-StickyLarge;
	   console.log ("depasse de "+ overflowDuWrapper);
	   // on va scroller de la largeur qui dépasse plus 300 pour ne pas arriver au bord
	   scrollLenght= overflowDuWrapper+ adjust;
	   wrapperLarge= wrapperLarge+adjust;
	   
	   horizontalSection.style.height = wrapperLarge + "px";
	   console.log ("wrapperLarge="+ wrapperLarge);
    


 

    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset.toFixed();


      if (scrollTop >= elementWrapperTop && scrollTop <= (elementWrapperTop+scrollLenght)) {
        elementWrapper.style.transform = "translateX(-" + (scrollTop - elementWrapperTop) + "px)";
        //console.log (scrollTop - elementWrapperTop);
      }
    });
  }else {console.log ("SCROLL HoriZONTAL DISABLE");}
}






//////// ///////////////////////////////////// pour les % de view de l'élément ///////////////////////////////////////////////////////
   function calculatePercentageInView(element) {
       // var scrollLeft = $(window).scrollLeft();
        var windowWidth = $(window).width();
        var elementOffsetLeft = element.offset().left;// position par rapport a la gauche de l'ecran hors wrapper element
        var elementWidth = element.outerWidth();
        var left = Math.max(0, elementOffsetLeft);
        var right = Math.min(windowWidth, elementOffsetLeft + elementWidth);

        return ((right - left) / elementWidth) * 100;
      }
if (window.innerWidth>991){
      // Scroll event listener
	  $(window).scroll(function() {
  var wrapOne = $("#wrap-one");
  var pasQueElementOne = wrapOne.children(".pas-que");
  var percentageInViewOne = calculatePercentageInView(wrapOne);
  animatePasQue(percentageInViewOne, pasQueElementOne);
  
  var wrapTwo = $("#wrap-two");
  var pasQueElementTwo = wrapTwo.children(".pas-que");
  var percentageInViewTwo = calculatePercentageInView(wrapTwo);
  animatePasQue(percentageInViewTwo, pasQueElementTwo);
  
  var wrapThree = $("#wrap-three");
  var pasQueElementThree = wrapThree.children(".pas-que");
  var percentageInViewThree = calculatePercentageInView(wrapThree);
  animatePasQue(percentageInViewThree, pasQueElementThree);

  var wrapFor = $("#wrap-for");
  var pasQueElementFor = wrapFor.children(".pas-que");
  var percentageInViewFor = calculatePercentageInView(wrapFor);
  animatePasQue(percentageInViewFor, pasQueElementFor);


});
}
function animatePasQue(percentageInView, pasQueElement) {
  if (percentageInView > 90) {
    pasQueElement.removeClass('off');
  } else if (percentageInView <20){
    pasQueElement.addClass('off');
  }
}

///////////////////////////////////////////////////// click sur le bouton cross link retour page liste des projects////////////////////////////////////


