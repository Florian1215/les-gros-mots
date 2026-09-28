													/// trigger sur les bouton play pause en version descktop//////////////
													

console.log ("ready");
  
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
