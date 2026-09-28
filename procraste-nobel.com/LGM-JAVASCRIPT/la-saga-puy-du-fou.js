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




//// scroll des textes sur une bande horizontale ////////////







////////////////////////////////// les affiche sticky///////////////////////////////////////

const afficheElement = document.querySelector('.affiche');
const viewportHeight = window.innerHeight;
const afficheHeight = afficheElement.offsetHeight;
const dateElements = document.querySelectorAll('.date');

const offset = (viewportHeight - afficheHeight) / 2;
const afficheElements = document.querySelectorAll('.affiche');

// Appliquer les styles uniquement pour les écrans de plus de 991px
if (window.innerWidth > 991) {
  afficheElements.forEach(element => {
    element.style.position = 'sticky';
    
    // Calculer une valeur minimum de 100px pour les écrans > 1920px
    const topOffset = window.innerWidth > 1920 ? Math.max(offset, 100) : offset;
    element.style.top = `${topOffset}px`;
  });

  // Appliquer les styles aux éléments de date uniquement pour desktop
  dateElements.forEach(element => {
    element.style.position = 'sticky';

    const offsetDate = offset + 60;
    const dateTopOffset = window.innerWidth > 1920 ? Math.max(offsetDate, 100) : offsetDate;
    element.style.top = `${dateTopOffset}px`;
  });

  dateElements.forEach(element => {
    element.style.height = `${afficheHeight}px`;
  });
}





function changeTextOnScroll(elementId, firstText) {
  // Get the target element by ID
  var targetElement = document.getElementById(elementId);

  // Add scroll event listener to the window
  window.addEventListener('scroll', function () {
    var rect = targetElement.getBoundingClientRect();

    // Calculate the top position relative to the viewport
    var distFromTop = rect.top;
    
    
   //console.log (elementId,  distFromTop)

  
      if (distFromTop <= (offset+ 100)) {
      // Get all elements with the class "date"
      var dateElements = document.getElementsByClassName("date");
	  //console.log (  "trigger text first "+ elementId);
      // Loop through each date element and update the text content
      for (let i = 0; i < dateElements.length; i++) {
        dateElements[i].textContent = firstText;
      }
     
    }


  });
}
changeTextOnScroll("affiche-one", "2015");
changeTextOnScroll("affiche-two", "2016");
changeTextOnScroll("affiche-three", "2017");
changeTextOnScroll("affiche-for", "2018");
changeTextOnScroll("affiche-five", "2019");



//////////////////////////////////////////////////////// image magnifer///////////////////////////////
function magnify(imgID, zoom) {
  console.log("magnifier");

  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /* Handle touch events for touchscreens: */
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Check if the event is a touch event */
    if (e.type === "touchmove") {
      /* Get the touch position relative to the image */
      pos = getTouchPos(e);
      x = pos.x;
      y = pos.y;
    } else {
      /* Get the cursor's x and y positions for mouse events */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
    }
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x: x, y: y};
  }

  function getTouchPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the touch position relative to the image: */
    a = img.getBoundingClientRect();
    x = e.touches[0].clientX - a.left;
    y = e.touches[0].clientY - a.top;
    return {x: x, y: y};
  }
}

/* Execute the magnify function: */

let magnifierOn = false;
window.addEventListener('scroll', function() {
  const magWrapper = document.getElementById("saga");
  let magRect = magWrapper.getBoundingClientRect();
  if (magRect.y > 0 && !magnifierOn) {
    magnify("saga", 3);
    magnifierOn = true;
  }
});


 function mouseEnterHandler() {
    cursor.style.width = '60px';
    cursor.style.height = '60px';
    plusCursor.style.width = '40px';
    plusCursor.style.height = '40px';
    plusCursor.style.opacity = '1';
   
    cursor.style.transition = 'all 200ms';
    plusCursor.style.transition = 'all 200ms';
  }

  // Function to handle mouseleave event
  function mouseLeaveHandler() {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
    plusCursor.style.width = '0px';
    plusCursor.style.height = '0px';
    plusCursor.style.opacity = '0';
    cursor.style.opacity='1';

    cursor.style.transition = 'all 100ms';
    plusCursor.style.transition = 'all 100ms';
  }
  
      function CursorSizeReduce() {
    /* Reset cursor size */
    //cursor.style.width = "0px";
    //cursor.style.height = "0px";
    cursor.style.opacity='0';
    //cursor.style.transition = "all 0.5s ease-in";
  }



											/// horizontal scroll/////////

//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////


/// version pour plusieurs sections
function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, horLength) {
  var windowWidth = window.innerWidth;

  // condition de taille écran sinon c'est géré en CSS sur mobile
  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass);
    var horizontalSection = document.querySelector(horizontalSectionClass);

    var distFromTop = horizontalSection.offsetTop; // la section qui contient tout l'élément pas de hauteur static

    //console.log ("horLength "+horLength)
    //console.log ("distFromTop "+distFromTop)
    //horLength = 2500; // pour voir la dernière photo ATTENTION IMPORTANT
    //console.log ("horLength "+horLength)

    var scrollDistance = distFromTop + horLength - windowWidth;

    // on soustrait une valeur pour que la section ne soit pas trop haute
    // sinon enorme vide sous la section
    horizontalSection.style.height = horLength - 600 + "px";

    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset;
      //console.log ("scroll ONE");
      if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        elementWrapper.style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
      }
    });
  }
}

// lancement
//handleHorizontalScroll('.element-wrapper', '.horizontal-section', 4000);





