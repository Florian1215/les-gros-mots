/// anim des sandwichs


//init

   // Set all elements with class "sand" to display none
    var sandElements = document.querySelectorAll('.allsand');
    sandElements.forEach(function(sandElement) {
      sandElement.style.display = 'none';
    });
    document.querySelector('.sand-one').style.display = 'block';

// Get all elements with classes "s-one" to "s-nine"
var sElements = document.querySelectorAll('.s-one, .s-two, .s-three, .s-for, .s-five, .s-six, .s-seven, .s-eight, .s-nine');

sElements.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    triggerAnimation(element);
  });
  
  element.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.touches[0];
    var targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (targetElement && targetElement.classList.contains(element.classList[0])) {
      triggerAnimation(element);
    }
  });
});

function triggerAnimation(element) {
  // Get the number from the class name (e.g., "s-one" -> 1)
  var number = (element.className.split('-')[1]);

  // Set all elements with class "sand" to display none
  var sandElements = document.querySelectorAll('.allsand');
  sandElements.forEach(function(sandElement) {
    sandElement.style.display = 'none';
  });

  // Set the corresponding "sand" element to display block
  var sandElement = document.querySelector('.sand-' + number);
  if (sandElement) {
    sandElement.style.display = 'block';
  }
}

  

 // Replace spaces with non-breaking spaces
       var text = $('#fall-one').text().replace(/\s/g, '*');
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


// 


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



