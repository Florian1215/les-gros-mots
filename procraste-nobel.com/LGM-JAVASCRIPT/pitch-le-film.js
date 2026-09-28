////// video pour le système qui play stop sur video youtube
console.log ("mai ");

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


//// nouveau script pour gérer la supperposition des images 

    const elements = document.querySelectorAll('.i-synop-24');

    // Fonction pour mettre le z-index à 99
    function setZIndex99(event) {
        event.target.style.zIndex = '99';
  
    }

    // Fonction pour remettre le z-index à auto
    function resetZIndex(event) {
        event.target.style.zIndex = 'auto';
    }

    // Ajouter les événements pour desktop
    elements.forEach(element => {
        element.addEventListener('mouseover', setZIndex99);
        element.addEventListener('mouseout', resetZIndex);
    });

    // Détecter la largeur de l'écran
    function isTabletWidth() {
        return window.innerWidth >= 767 && window.innerWidth <= 991;
    }

    // Ajouter les événements pour les tablettes
    function addTabletBehavior() {
        elements.forEach(element => {
            element.addEventListener('click', function(event) {
                // Mettre le z-index de tous les éléments à auto
                elements.forEach(el => {
                    el.style.zIndex = 'auto';
                });
                // Mettre le z-index de l'élément cliqué à 99
                event.currentTarget.style.zIndex = '99';
            });
        });
    }

    // Appliquer le comportement pour les tablettes si la taille de l'écran est correcte
    if (isTabletWidth()) {
        addTabletBehavior();
    }

    // Réagir au redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (isTabletWidth()) {
            addTabletBehavior();
        } else {
            // Réinitialiser les événements
            elements.forEach(element => {
                element.removeEventListener('click', addTabletBehavior);
            });
        }
    });





