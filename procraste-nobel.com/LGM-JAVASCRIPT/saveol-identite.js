





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
					var elements = elementWrapper.querySelectorAll('.video-resizer');
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








   /////////////////// flipbook////////////////////////
   console.log ("myriam");
   
   var flipbookEL = document.getElementById('flipbook');

window.addEventListener('resize', function (e) {
  flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});

$(flipbookEL).turn({
   width: "100%",
   height: "100%",
  autoCenter: true,
  page: 2 // set default opening page to page 2
});

$(flipbookEL).turn('peel', 'br'); // 


													/// trigger sur les bouton play pause en version descktop//////////////
													

  
  // Select all elements with class "mookup-mediatransport"
const mookupElements = document.querySelectorAll('.video-element-group .mookup-mediatransport');

// Iterate over each "mookup-mediatransport" element and add a mouseover listener

mookupElements.forEach(mookupElement => {
  // Find the associated "play-button" element
  const playButton = mookupElement.closest('.video-element-group').querySelector('.saveol-video .play-button');
  
  // Add a mouseover event listener to trigger a click on the "play-button" element
  mookupElement.addEventListener('mouseenter', () => {
	  console.log ( "moousseneter");
    playButton.click();
  });
  
    mookupElement.addEventListener('mouseleave', () => {
    playButton.click();
  });
});

if (window.innerWidth<991){
	
// Initialize controller
var controllerTwo = new ScrollMagic.Controller();

// Initialize isPlaying variable
var isPlaying = false;

// Select all elements with class "saveol-video"
var videos = document.querySelectorAll('.saveol-video');

// Loop through each video element
videos.forEach(function(video) {
    // Create a scene
    new ScrollMagic.Scene({
        triggerElement: video, // point of execution
        duration: video.offsetHeight, // pin element for the total duration of video's height
        triggerHook: 0.5 // trigger at middle of viewport
    })
    .on('enter', function() { // when element enters the viewport
        if (!isPlaying) {
            video.querySelector('.play-button').click(); // click play button
            isPlaying = true;
        }
    })
    .on('leave', function() { // when element leaves the viewport
        if (isPlaying) {
	        console.log ("stop");
            video.querySelector('.play-button').click(); // click play button
            isPlaying = false;
        }
    })
    .addTo(controllerTwo); // assign the scene to the controller
});

												
}




 

