

														///////////// ATTENTION LE SCRIPT N'EST PLUS EN DYNAMIQUE///////////////////////
														
														///////////// ATTENTION LE SCRIPT N'EST PLUS EN DYNAMIQUE///////////////////////
														

														///////////// ATTENTION LE SCRIPT N'EST PLUS EN DYNAMIQUE///////////////////////


														///////////// ATTENTION LE SCRIPT N'EST PLUS EN DYNAMIQUE///////////////////////

														///////////// ATTENTION LE SCRIPT N'EST PLUS EN DYNAMIQUE///////////////////////



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
  
  if (countImage==eagerImages.length){loader.style.display='none'; console.log ("loader supprimé")}
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





 
 ////////////////////////////////////////////////////////deuxième bloc de texte/////////////////////////////   
/*
      // Replace spaces with non-breaking spaces
var textTwo = $('#fall-two').text().replace(/\s/g, '*');
$('#fall-two').html(textTwo);

$('#fall-two').lettering(); 

// Select all the spans in #fall-two
// Get all the spans within #fall-two
const spansTwo = $('#fall-two span');

// Create a variable to keep track of the current word
let currWordTwo = $('<div>').addClass('word');


// Loop over the spans
spansTwo.each((index, span) => {
  const currSpan = $(span);

  // If the current span's text is a "*", we've reached the end of a word
  if (currSpan.text() === '*') {
    // Add the '*' character to the beginning of the word
    currWordTwo.prepend(currSpan);

    // Append the current word to #fall-one
    $('#fall-two').append(currWordTwo);

    // Reset currWord to a new empty div with class "word"
    currWordTwo = $('<div>').addClass('word');
  } else {
    // Add the current span to the current word
    currWordTwo.append(currSpan);
  }
});






// If there's any remaining span(s) that haven't been added to a word, append it to #fall-two
if (currWordTwo.children().length) {
  $('#fall-two').append(currWordTwo);
}

// replace all * character
spansTwo.each((index, span) => {
	
	currSpanTwo = $(span);
	if (currSpanTwo.text() == '*'){currSpanTwo.html("&nbsp;");}
});

// function to get all positions
function getAllpositionTwo(){

        const logoTwo = document.getElementById("fall-two");
        const { bottom } = logoTwo.getBoundingClientRect();
        const bottomLogoTwo = bottom + window.pageYOffset;

        // Add data attribute to each span with position information
        $('#fall-two span').each(function(index) {
          var position = bottomLogoTwo - $(this).offset().top;
          $(this).attr('data-position', position);
        });
}

getAllpositionTwo();

// listener for resize event
$( window ).resize(function() {          
    getAllpositionTwo();  
});     

// Disable animation on tablets
if (window.innerWidth > 991) {
  $('#fall-two').on('mouseleave', function() {
    $('#fall-two span').removeClass('return ');
  });

  // Add event handlers after wrapping letters into words
  $('#fall-two span').hover(function() {
    var index = $(this).index();
    var position = parseInt($(this).attr('data-position'));
    var translateYValue = 176 + position;

    if (index % 2 == 0) {
      $(this).css("transform", "translateY(" + translateYValue + "px) rotate(80deg)");
    } else {
      $(this).css("transform", "translateY(" + translateYValue + "px) rotate(-80deg)");
    }

    setTimeout(() => $(this).css("transform", "translateY(0px) rotate(0deg)"), 1500);
  });
}

*/
/////////////////////////////////////////////////////////// Apparition des lettres au scrolll scrollmagic////////////////////////////////////////// 


/*
// Get the element with id "fall-one"
const fallTwo = document.querySelector('#fall-two');

apparition (fallTwo);
*/

// 

/*
// lancement

window.addEventListener('load', (event) => {
  console.log('La page est complètement chargée');
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 500);
});



//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////





function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  // adjust est la variable dans laquelle on décide de la quantité de blanc à la fin de l'élément sur la droite
console.log ("handleHorizontalScroll");

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
	const stickyTopPosition = (windowHeight - elementWrapperHeight) / 2; // mettre le sticky au centre
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
        console.log (scrollTop - elementWrapperTop);
      }
    });
  }else {console.log ("SCROLL HoriZONTAL DISABLE");}
}





///////////////////////////////////////////////////// click sur le bouton cross link retour page liste des projects////////////////////////////////////


*/

