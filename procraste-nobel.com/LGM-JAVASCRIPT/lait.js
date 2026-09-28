/// trigger sur les bouton play pause en version descktop//////////////

console.log("lait");





/////////////////// Le player C

//// Le player audio //////

const valueCElement = document.getElementById('value-c');
const buttonC = document.getElementById("range-slider-c");
const speakerC0 = document.getElementById('speaker-c-0');
const speakerC1 = document.getElementById('speaker-c-1');
const speakerC2 = document.getElementById('speaker-c-2');
const videoC = document.getElementById('sound-wave-c');
const playButtonC = document.getElementById('play-bt-c');
const pauseButtonC = document.getElementById('pause-bt-c');

// Initialisation
speakerC0.style.display = 'none';
speakerC1.style.display = 'block';
speakerC2.style.display = 'none';

// Fonction pour mettre à jour le volume de la vidéo
function updateVideoVolumeC(value) {
    const volume = parseFloat(value);
    if (!isNaN(volume) && isFinite(volume)) {
        videoC.volume = Math.min(Math.max(volume, 0), 1);
    }
}

function handleVolumeChangeC(event) {
    const valueC = valueCElement.innerHTML;
    console.log(valueC);
    
    updateVideoVolumeC(valueC);

    if (valueC < 0.2) {
        speakerC0.style.display = 'block';
        speakerC1.style.display = 'none';
        speakerC2.style.display = 'none';
    } else if (valueC > 0.2 && valueC <= 0.7) {
        speakerC0.style.display = 'none';
        speakerC1.style.display = 'block';
        speakerC2.style.display = 'none';
    } else if (valueC > 0.7) {
        speakerC0.style.display = 'none';
        speakerC1.style.display = 'none';
        speakerC2.style.display = 'block';
    }
}

buttonC.addEventListener("mousemove", event => {
    handleVolumeChangeC(event);
});

buttonC.addEventListener("touchmove", event => {
    handleVolumeChangeC(event);
});


playButtonC.addEventListener('click', () => {
    videoC.play();

   
});

pauseButtonC.addEventListener('click', () => {
    videoC.pause();
});

// Initialisation du volume
updateVideoVolumeC(valueCElement.innerHTML);




///// son sur les fenêtre des radio quand on veut les fermer


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         son sur la fenêtre "agence  quand on veut la fermer
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Charger le son en mémoire
    // Create an audio element
    const cord = new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/erro.mp3');
	  cord.volume = 0.2;
cord.load();


document.getElementById("close-ico-group-c").addEventListener("click", function() {

    // Play the audio
    cord.play()
        .then(() => {
            console.log('Audio played successfully');
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
});


    const icoGroups = document.querySelectorAll('.ico-group');

    icoGroups.forEach(icoGroup => {
        icoGroup.addEventListener('click', function() {
            const radioPlayer = this.closest('.radio-player');
            if (radioPlayer) {
                animate(radioPlayer);
            }
        });
    });

    function animate(element) {
        const keyframes = [
          
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0px)' }
        ];

        const timing = {
            duration: 200, // 4 * 50ms
            iterations: 1,
            easing: 'linear'
        };

        element.animate(keyframes, timing);
    }

 
  
  // Select all elements with class "mookup-mediatransport"
const mookupElements = document.querySelectorAll('.video-element-group .mookup-mediatransport');

// Iterate over each "mookup-mediatransport" element and add a mouseover listener

mookupElements.forEach(mookupElement => {
  // Find the associated "play-button" element
  const playButton = mookupElement.closest('.video-element-group').querySelector('.saveol-video .play-button');
  
  // Add a mouseover event listener to trigger a click on the "play-button" element
  mookupElement.addEventListener('mouseenter', () => {
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


// lancement



 
