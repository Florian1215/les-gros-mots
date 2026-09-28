

// lancement

window.addEventListener('load', (event) => {
  console.log('La page est complètement chargée');
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 300);
});


 // Replace spaces with non-breaking spaces
       var text = $('#fall-one').text().replace(/\s+/g, '*'); // Use /\s+/ to match one or more spaces
       $('#fall-one').html(text);

  $('#fall-one').lettering();
  $('#fall-one span').addClass('fall-letter');
  
  
// Select all the spans in #fall-one
// Get all the spans within #fall-one
const spans = $('#fall-one span');



// Create a variable to keep track of the current word
let currWord = $('<div>').addClass('word');

// Loop over the spans
spans.each((index, span) => {
  const currSpan = $(span);

  // If the current span's text is a "*", we've reached the end of a word
  if (currSpan.text() === '*') {
    // Append the current span to the current word. Modify the script like this : when the program encounter a "*" it create a word element and add the following letters to it until it encounter anothe "*" element and do the same again and again
    currWord.append(currSpan);

    // Append the current word to #fall-one
    $('#fall-one').append(currWord);

    // Reset currWord to a new empty div with class "word"
    currWord = $('<div>').addClass('word');
  } else {
    // If the current span's text is not a "*", add it to the current word
    currWord.append(currSpan);
  }
});


// If there's any remaining span(s) that haven't been added to a word, append it to #fall-one
if (currWord.children().length) {
  $('#fall-one').append(currWord);
}
 
// replace all * caracter
spans.each((index, span) => {
	
	currSpan = $(span);
	if (currSpan.text() == '*'){currSpan.html("&nbsp;");}
});


// funtion qui récupère les position de tout le monde
function getAllposition(){

        const logo = document.getElementById("fall-one");
        const { bottom } = logo.getBoundingClientRect();
        const bottomLogo = bottom + window.pageYOffset;

        // Add data attribute to each span with position information
        $('.fall-letter').each(function(index) {
          var position = bottomLogo - $(this).offset().top;
          $(this).attr('data-position', position);
        });
        }
 getAllposition(); 
       
		// écouteur du resize
		 $( window ).resize(function() {          
		 getAllposition();  
		});     

// Suppression de l'animation sur tablette


if (window.innerWidth>991){
        $('#fall-one').on('mouseleave', function() {
          $('.fall-letter').removeClass('return ');
        });
        
        // Add event handlers after wrapping letters into words
        $('.fall-letter').hover(function() {
          var index = $(this).index();
          var position = parseInt($(this).attr('data-position'));
          var translateYValue = 176 +position;
          
		  //console.log(translateYValue);
          if (index % 2 == 0) {
            $(this).css("transform", "translateY(" + translateYValue + "px) rotate(80deg)");
          } else {
            $(this).css("transform", "translateY(" + translateYValue + "px) rotate(-80deg)");
          }

          setTimeout(() => $(this).css("transform", "translateY(0px) rotate(0deg)"), 1500);
        });
        
      
 }// fin condition suppression anim tablet  
 ////////////////////////////////////////////////////////deuxième bloc de texte/////////////////////////////   

      // Replace spaces with non-breaking spaces
var textTwo = $('#fall-two').text().replace(/\s/g, '*');
       var textTwo = $('#fall-two').text().replace(/\s+/g, '*'); // Use /\s+/ to match one or more spaces
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




/////////////////////////////////////////////////////////// Apparition des lettres au scrolll scrollmagic////////////////////////////////////////// 


function apparition (fallOne){
	var visibleHeightPercent; // global
const fallOneHeight = fallOne.getBoundingClientRect().height;

//// scrollmagic
const controller = new ScrollMagic.Controller();
      
      const scene = new ScrollMagic.Scene({
        triggerElement: fallOne,
        triggerHook: "onEnter",
        duration: "100%"
      })
      .on('update', function (e) {
        const trigger = e.target.triggerElement();
        const windowHeight = $(window).height();
        const bounds = trigger.getBoundingClientRect();
        const top = bounds.top;
        const bottom = bounds.bottom;
        const height = bounds.height;
       
        
		  if (top >= 0 && bottom <= windowHeight) {
		    visibleHeightPercent = 100;
		  } else if (top < 0 && bottom > windowHeight) {
		    visibleHeightPercent = 100;
		  } else if (bottom < 0 || top > windowHeight) {
		    visibleHeightPercent = 0;
		  } else if (top < 0) {
		    visibleHeightPercent = ((top+height)/height)*100;
		    //console.log(" calcul", (top+height)/height);
		  } else if (bottom > windowHeight) {
		    visibleHeightPercent = (windowHeight - top) / height * 100;
		  }
        
        visibleHeightPercent=(Math.round(visibleHeightPercent))/100;
        
      })
      .addTo(controller);
// end scrooll magic

// Get all elements with class "word" inside the "fall-one" element
const wordsOne = Array.from(fallOne.querySelectorAll('.word'));
const shuffledWordsOne = wordsOne.sort(() => Math.random() - 0.5);
//console.dir (shuffledWordsOne);
      
    wordsOne.forEach((word) => {
  	word.classList.add('hide-word');
	});
 //var allWordsVisible = false;
 var botomDoneOne= false; 
 var topDoneOne = false; 
 var allDoneOne= false;
 let timeoutIdOne;
 const randomWaitOneOne = 10;
  
  
window.addEventListener('scroll', function() {
	//console.log('visible height percentagE:', visibleHeightPercent);
 // tout montrer si égal 1
 if (visibleHeightPercent==1){showALLOne(); allDoneOne=true;}
 // retirer classe invisible avant que l'élément soit totalement visible
 if (visibleHeightPercent<1 && allDoneOne==false){
	 		var partFirst = shuffledWordsOne.slice(0, shuffledWordsOne.length * visibleHeightPercent);
			partFirst.forEach((wordsOne, index) => {
		  
			if (wordsOne.classList.contains('hide-word')) {
		    //console.log("remove class");
		    setTimeout(() => {
		      wordsOne.classList.remove('hide-word');      
		    }, index * randomWaitOneOne);
		  }
		}) 
 }
 
  if (visibleHeightPercent<1 && allDoneOne==true){
	  
	  		var partSecond = shuffledWordsOne.slice(0, shuffledWordsOne.length * (1-visibleHeightPercent));
			  partSecond.forEach((wordsOne, index) => {
		 
		  if (!wordsOne.classList.contains('hide-word')) {
		    //console.log("remove class");
		    setTimeout(() => {
		      wordsOne.classList.add('hide-word');      
		    }, index * randomWaitOneOne);
		  }
		});
  }
  /// si invisible on pet tout les mots en invisible
  if(visibleHeightPercent==0){
	  		shuffledWordsOne.forEach((wordsOne, index) => {
		  
			if (!wordsOne.classList.contains('hide-word')) {
		    //console.log("remove class"); 
		    wordsOne.classList.add('hide-word');
		  }
		})
	  
	  allDoneOne=false;}
 
 
 
 
	});

// si inactivité envoyer le display all

  clearTimeout(timeoutIdOne);
if (allDoneOne==true){
  // Set a new timeout to trigger the external function after 5 seconds
  timeoutIdOne = setTimeout(function() {
    // Call your external function here
    showALLOne();
  }, 1000);
}




function showALLOne(){
	// sécurité si le truc se bloque en fait et que même au milieur on ne voit pas tout
	console.log ("shooswwwwww alla");
		  shuffledWordsOne.forEach((wordsOne, index) => {
		  const randomWaitOneOne = 50;
		  if (wordsOne.classList.contains('hide-word')) {
		    //console.log("remove class");
		    setTimeout(() => {
		      wordsOne.classList.remove('hide-word');      
		    }, index * randomWaitOneOne);
		  }
		})
	
}


}


//////////////////////////////////////////////////////////////////////Apparition et disparition des mots  ///////////////////////////////////////
// Get the element with id "fall-one"
const fallOne = document.querySelector('#fall-one');

apparition (fallOne);


// Get the element with id "fall-one"
const fallTwo = document.querySelector('#fall-two');

apparition (fallTwo);


// 



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







///////////////////////////////////////////////////// click sur le bouton cross link retour page liste des projects////////////////////////////////////




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


