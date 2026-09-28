
/// code pour la video qui est maintenant en bas
// Listen for window resize events
window.addEventListener('resize', handlePlayPauseClick);
handlePlayPauseClick();

function handlePlayPauseClick() {
    console.log("playpause", window.innerWidth);

    if (window.innerWidth > 991) {
        var figure = $("#back-video").hover(function() {  
            $('video', this).get(0).play(); 
        }, function() {
            $('video', this).get(0).pause();
        }).each(function() {
            $('video', this).get(0).pause();
        });
    } else {
        $('video', $("#back-video")).get(0).play(); // for mobile
    }
}

////// video pour le système qui play stop sur video youtube


var playNow=false;
$('.trigger-video').click(function(){
  if (playNow==true){
	  console.log ("pause");
  	$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  playNow=false;
  return;
  }	

if (playNow==false){
	console.log ("play");
	$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  playNow=true;
  }

  
});


/// pour le jeux avec la bousole
const pullElement = document.getElementById('pull');
let isDragging = false;
let initialX = 0;
let offsetX = 0;
let deltaX = 0;
const short = document.getElementById("short");
const long = document.getElementById("long");

pullElement.style.userSelect = 'none'; // Add this line to make pullElement unselectable

/// version pour le desktrop
/*
pullElement.addEventListener('mousedown', (e) => {
	console.log("mousedown pull");
  isDragging = true;
  initialX = e.clientX;
  offsetX = pullElement.getBoundingClientRect().left;
});

pullElement.addEventListener('touchstart', (e) => {
  isDragging = true;
  initialX = e.touches[0].clientX;
  offsetX = pullElement.getBoundingClientRect().left;
});

pullElement.addEventListener('mousemove', (e) => {
  if (isDragging) {
    deltaX = e.clientX - initialX;
    if (deltaX < -100) {
      deltaX = -100;
    }
    if (offsetX + deltaX < offsetX) {
      pullElement.style.left = 0 + deltaX + 'px';
    }
  }
});

pullElement.addEventListener('touchmove', (e) => {
  if (isDragging) {
    deltaX = e.touches[0].clientX - initialX;
    if (deltaX < -100) {
      deltaX = -100;
    }
    if (offsetX + deltaX < offsetX) {
      pullElement.style.left = 0 + deltaX + 'px';
    }
  }
});

pullElement.addEventListener('mouseup', () => {
  isDragging = false;
  pullElement.style.left = 0 + 'px';
  if (deltaX > -60) {
    short.click();
  } else {
    long.click();
  }
});

pullElement.addEventListener('touchend', () => {
  isDragging = false;
  pullElement.style.left = 0 + 'px';
  if (deltaX > -60) {
    short.click();
  } else {
    long.click();
  }
});


/// version pour le mobile
// transformation des valeurs en % en valeur en px


offsetX = (pullElement.getBoundingClientRect().left)/2; // pour la valeur centrée
pullElement.addEventListener('touchstart', (e) => {
	
  isDragging = true;
  initialX = e.touches[0].clientX;
  
  console.log("touch start offsetX=",offsetX);
});


pullElement.addEventListener('touchmove', (e) => {
  if (isDragging) {
	  
    deltaX = e.touches[0].clientX - initialX;
    console.log("mouvement=",deltaX);
    
     pullElement.style.left = offsetX + deltaX  + 'px';
     
    
    // si mouvement à droite on bloque
    if(deltaX+offsetX>offsetX){
console.log ("mouvement à droite");
 pullElement.style.left = offsetX  + 'px';
    }
    // si mouvement à gauche
   if(deltaX+offsetX<offsetX) {
console.log ("gauche");
// si mouvement de plus de 100px sur la gauche on bloque
if (deltaX<-100){
	 pullElement.style.left = offsetX-100  + 'px';
	console.log("limite")}
	
	
    }// fin 
    


  }
});

/// relachement

pullElement.addEventListener('touchend', () => {
  isDragging = false;
  pullElement.style.left = offsetX + 'px';
  if (deltaX > -60) {
    short.click();
  } else {
    long.click();
  }
});


 // fin version mobile


*/														/// horizontal scroll/////////

//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////








