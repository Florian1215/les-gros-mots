



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         elements communs aux pages
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







console.log ("lent23");


// au lancement la valeur de l'image de background est mise dans un cocokie de cession donc no image et jaune

//sessionStorage.setItem('imageUrl', "no-image-url.jpg");
//sessionStorage.setItem('backgroundColor', "rgb(255, 255, 43)");



/// mettre le menu en display block
document.querySelector('.nav-all-element').style.display = 'block';

//son pour la poubelle

const trashSound = new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/window-corbeille.mp3'); // Replace with the path to your sound file

/// les Z index (upindex pour les Ã©lÃ©ment

let midindex=1000;





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         DRAGGABLE et resizable  de la fenetre agence
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Gestion des Ã©vÃ©nements pour les Ã©lÃ©ments .window-group
$('.window-group').each(function() {
    $(this).draggable({
        containment: 'parent',
        handle: $(this).find('.color-bar'),
        start: function(event, ui) {
            // Reset the cursor style on drag start
            $('body').css('cursor', '');
        },
        stop: function(event, ui) {

            // RÃ©cupÃ©rer la largeur de la fenÃªtre
            var windowWidth = $(window).width();

            // Convertir la position en vw
            var positionX_vw = (ui.position.left / windowWidth) * 100;

            // Mettre Ã  jour la position de l'Ã©lÃ©ment en vw
            $(this).css('left', positionX_vw + 'vw');
            // Reset the cursor style on drag stop
            $('body').css('cursor', '');
        }
    }).resizable({
        containment: 'parent',
        start: function(event, ui) {
            // Reset the cursor style on resize start
            $('body').css('cursor', '');
        },
        resize: function(event, ui) {
            const folderGroupHeight = $('.window-group').height();
            $('.open-window').height(folderGroupHeight - 50);

            // Set or update the custom cursor during resize
            $('body').css('cursor', currentCursorStyle);
        },
        stop: function(event, ui) {
            // Reset the cursor style on resize stop
            $('body').css('cursor', '');
        }
    });
});


// Gestion des Ã©vÃ©nements pour les Ã©lÃ©ments .folder-z-index qui sont juste draggable pas resizable
$('.folder-z-index').each(function() {
    $(this).draggable({
        containment: 'parent',
        handle: $(this).find('.color-bar'), // Utiliser l'Ã©lÃ©ment '.color-bar' comme poignÃ©e
        start: function(event, ui) {
            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body au dÃ©but du glisser/dÃ©poser
        },
        stop: function(event, ui) {
            // RÃ©cupÃ©rer la largeur de la fenÃªtre
            var windowWidth = $(window).width();

            // Convertir la position en vw
            var positionX_vw = (ui.position.left / windowWidth) * 100;

            // Mettre Ã  jour la position de l'Ã©lÃ©ment en vw
            $(this).css('left', positionX_vw + 'vw');

            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body Ã  la fin du glisser/dÃ©poser
        }
    });
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////  La pluie de coeur coeur sur le curseurs coeur ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var colourTrail = "random";
var sparklesTrail = 100;
var animationRunning = false; // Variable to track animation state


var xTrail = oxTrail = 400;
var yTrail = oyTrail = 300;
var swideTrail = 800;
var shighTrail = 600;
var sleftTrail = sdownTrail = 0;
var tinyTrail = new Array();
var starTrail = new Array();
var starvTrail = new Array();
var starxTrail = new Array();
var staryTrail = new Array();
var tinyxTrail = new Array();
var tinyyTrail = new Array();
var tinyvTrail = new Array();

coloursTrail = new Array('#ff0000', '#00ff00', '#ffffff', '#ff00ff', '#ffa500', '#ffff00', '#00ff00', '#ffffff', 'ff00ff')

nTrail = 10;
yTrail = 0;
xTrail = 0;
n6Trail = (document.getElementById && !document.all);
nsTrail = (document.layers);
ieTrail = (document.all);
dTrail = (nsTrail || ieTrail) ? 'document.' : 'document.getElementById("';
aTrail = (nsTrail || n6Trail) ? '' : 'all.';
n6rTrail = (n6Trail) ? '")' : '';
sTrail = (nsTrail) ? '' : '.style';
//(nsTrail || n6Trail) ? window.captureEvents(Event.MOUSEMOVE) : 0;

function createHeartTrail(height, width) {
    var divTrail = document.createElement("div");
    divTrail.style.position = "absolute";
    divTrail.style.height = height + "px";
    divTrail.style.width = width + "px";
    divTrail.style.overflow = "visible";

    var heartTrail = document.createElement("div");
    heartTrail.style.position = "absolute";
    heartTrail.style.width = "100%";
    heartTrail.style.height = "100%";
    heartTrail.style.fontSize = Math.min(height, width) + "px";
    heartTrail.style.lineHeight = "1";
    heartTrail.style.textAlign = "center";
    heartTrail.style.color = newColourTrail();
    heartTrail.style.zIndex="99999";
    heartTrail.innerHTML = "&#x2665;";

    divTrail.appendChild(heartTrail);

    return divTrail;
}

function sparkleTrail() {
    clearTimeout(timeoutID);
    var cTrail;
    if (Math.abs(xTrail - oxTrail) > 1 || Math.abs(yTrail - oyTrail) > 1) {
        oxTrail = xTrail;
        oyTrail = yTrail;
        for (cTrail = 0; cTrail < sparklesTrail; cTrail++)
            if (!starvTrail[cTrail]) {
                starTrail[cTrail].style.left = (starxTrail[cTrail] = xTrail) + "px";
                starTrail[cTrail].style.top = (staryTrail[cTrail] = yTrail + 1) + "px";
                starTrail[cTrail].style.clip = "rect(0px, 20px, 20px, 0px)";
                starTrail[cTrail].childNodes[0].style.backgroundColor = starTrail[cTrail].childNodes[1].style.backgroundColor = "transparent";
                starTrail[cTrail].style.visibility = "visible";
                starvTrail[cTrail] = 50;
                break;
            }
    }
    for (cTrail = 0; cTrail < sparklesTrail; cTrail++) {
        if (starvTrail[cTrail]) update_starTrail(cTrail);
        if (tinyvTrail[cTrail]) update_tinyTrail(cTrail);
    }
    timeoutID = setTimeout(sparkleTrail, 40);
}

function update_starTrail(iTrail) {
    if (--starvTrail[iTrail] == 25) starTrail[iTrail].style.clip = "rect(1px, 20px, 20px, 1px)";
    if (starvTrail[iTrail]) {
        staryTrail[iTrail] += 1 + Math.random() * 3;
        starxTrail[iTrail] += (iTrail % 5 - 2) / 5;
        // Supprimez ou commentez la ligne suivante pour empÃªcher les coeurs de devenir invisibles
        // if (staryTrail[iTrail] < shighTrail + sdownTrail) {
        starTrail[iTrail].style.top = staryTrail[iTrail] + "px";
        starTrail[iTrail].style.left = starxTrail[iTrail] + "px";
        // }
    } else {
        tinyvTrail[iTrail] = 50;
        tinyTrail[iTrail].style.top = (tinyyTrail[iTrail] = staryTrail[iTrail]) + "px";
        tinyTrail[iTrail].style.left = (tinyxTrail[iTrail] = starxTrail[iTrail]) + "px";
        tinyTrail[iTrail].style.width = "20px";
        tinyTrail[iTrail].style.height = "20px";
        tinyTrail[iTrail].style.backgroundColor = starTrail[iTrail].childNodes[0].style.backgroundColor;
        starTrail[iTrail].style.visibility = "hidden";
        tinyTrail[iTrail].style.visibility = "visible";
    }
}


function update_tinyTrail(iTrail) {

}

document.onmousemove = mouseTrail;
function mouseTrail(e) {

    set_scrollTrail();
    yTrail = e.clientY + sdownTrail;
    xTrail = e.clientX + sleftTrail;
}

window.onscroll = set_scrollTrail;
function set_scrollTrail() {}



function createDivTrail(height, width) {
    var divTrail = document.createElement("div");
    divTrail.style.position = "absolute";
    divTrail.style.height = height + "px";
    divTrail.style.width = width + "px";
    divTrail.style.overflow = "visible";
    return divTrail;
}

function newColourTrail() {
    // Retourne la couleur rouge
    return "rgb(255, 0, 0)";
}









/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////  Grosse section des curseurs. ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// la variable avec le nom du curseur pour dÃ©terminer des actions ensuite 
// arrow list------ arrow finger cd heart fart cat fly key -----
let actualCursor ="";
// Pour les sons il faut gÃ©rer les nouveaux curseurs qui ne doivent pas faire de son au changement de curseur TODO
// pour gÃ©rer le style de curseur sur la fenÃªtyre resize on a besoin de stocker la valeru du curseur dans une variable globale 
var currentCursorStyle;
// Fonction pour mettre Ã  jour le curseur en fonction de l'ID du bouton
function updateCursor(cursorClass) {


    document.body.classList.remove( 'arrow-cursor','finger-cursor','cd-cursor','heart-cursor','fart-cursor','cat-cursor','fly-cursor','key-cursor'); // Supprimer toutes les classes de curseur

    /// mettre le bon curseur pour les liens

    const elementsWithLinks = document.querySelectorAll('a');

// Parcourez chaque Ã©lÃ©ment de lien pour Ã©couter les Ã©vÃ©nements de survol
    elementsWithLinks.forEach(linkElement => {
        // Ajoutez un gestionnaire d'Ã©vÃ©nement pour le survol de la souris
        linkElement.addEventListener('mouseover', () => {
            if (cursorClass=="arrow-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/659d51b61695f578cb15502a_fleche2.png\'), auto';
                currentCursorStyle='url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/659d51b61695f578cb15502a_fleche2.png\'), auto';
            }
            if (cursorClass=="finger-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/658079abf338cbf7c33cbd2c_fuck-32.png\'), auto';
                currentCursorStyle= 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/658079abf338cbf7c33cbd2c_fuck-32.png\'), auto';
            }
            if (cursorClass=="heart-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795aaf72567b6fa01fe3_ico%CC%82ne_coeur_barre_outils-32.png\'), auto';
                currentCursorStyle = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795aaf72567b6fa01fe3_ico%CC%82ne_coeur_barre_outils-32.png\'), auto';
            }
            if (cursorClass=="fart-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/659d51b63184ea5ea7646f2e_coussin2.png\'), auto';
                currentCursorStyle= 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/659d51b63184ea5ea7646f2e_coussin2.png\'), auto';
            }
            if (cursorClass=="cat-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795a42e3779455010aa7_ico%CC%82ne_chaT_barre-outils-32.png\'), auto';
                currentCursorStyle= 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795a42e3779455010aa7_ico%CC%82ne_chaT_barre-outils-32.png\'), auto';
            }
            if (cursorClass=="fly-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795aa061a4832736fa9a_ico%CC%82ne_papillion_barre_outils-32.png\'), auto';
                currentCursorStyle= 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795aa061a4832736fa9a_ico%CC%82ne_papillion_barre_outils-32.png\'), auto';
            }
            if (cursorClass=="cd-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795a08c58f4badd24813_ico%CC%82ne_CD_barre_outils-32.png\'), auto';
                currentCursorStyle = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/6580795a08c58f4badd24813_ico%CC%82ne_CD_barre_outils-32.png\'), auto';
            }
            if (cursorClass=="key-cursor"){linkElement.style.cursor = 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/65eef7418fac9b9b9ccbd378_clef3.png\'), auto';
                currentCursorStyle= 'url(\'https://uploads-ssl.webflow.com/62014dd97e014e5a161f0175/65eef7418fac9b9b9ccbd378_clef3.png\'), auto';

            }
        });
    });





    console.log (cursorClass);
    document.body.classList.add(cursorClass);

    //// pour les coeurs...
    if (cursorClass=='heart-cursor' && animationRunning ==false){

        /// lancement anim
        timeoutID = setTimeout(sparkleTrail, 40);
        for (var iTrail = 0; iTrail < sparklesTrail; iTrail++) {
            var tinyHeartTrail = createHeartTrail(0, 20);
            tinyHeartTrail.style.visibility = "hidden";
            tinyHeartTrail.style.zIndex = "9999";
            document.body.appendChild(tinyTrail[iTrail] = tinyHeartTrail);

            starvTrail[iTrail] = 0;
            tinyvTrail[iTrail] = 0;

            var starHeartTrail = createHeartTrail(20, 20);
            starHeartTrail.style.backgroundColor = "transparent";
            starHeartTrail.style.visibility = "hidden";
            starHeartTrail.style.zIndex = "9999";

            var rlefTrail = createHeartTrail(1, 5);
            var rdowTrail = createHeartTrail(5, 1);

            starHeartTrail.appendChild(rlefTrail);
            starHeartTrail.appendChild(rdowTrail);

            rlefTrail.style.top = "2px";
            rlefTrail.style.left = "0px";
            rdowTrail.style.top = "0px";
            rdowTrail.style.left = "2px";

            document.body.appendChild(starTrail[iTrail] = starHeartTrail);
        }
        //set_widthTrail();
        sparkleTrail();
        animationRunning = true; // Set animation state to running


    }else {    if (animationRunning==true && cursorClass!='heart-cursor') {
        // Stop the animation
        animationRunning = false;
        clearTimeout(timeoutID);

        // Remove elements created by sparkleTrail
        for (var iTrail = 0; iTrail < sparklesTrail; iTrail++) {
            document.body.removeChild(tinyTrail[iTrail]);
            document.body.removeChild(starTrail[iTrail]);
        }
    }
    }
}; /// fin de update cursor





// Get all elements with the class "cursor-bt"
const cursorButtons = document.querySelectorAll('.cursor-bt');

// Add mousedown event listener to each element
cursorButtons.forEach(button => {
    //console.log (button);
    button.addEventListener('mousedown', event => {
        // Get the ID of the clicked element directly
        actualCursor = event.target.id;

        // Appeler la fonction pour mettre Ã  jour le curseur en fonction de l'ID du bouton
        switch (actualCursor) {
            case 'arrow-cursor':
                updateCursor('arrow-cursor');
                break;
            case 'finger-cursor':
                updateCursor('finger-cursor');
                break;
            case 'cd-cursor':
                updateCursor('cd-cursor');
                break;
            case 'heart-cursor':
                updateCursor('heart-cursor');
                break;
            case 'fart-cursor':
                updateCursor('fart-cursor');
                break;
            case 'cat-cursor':
                updateCursor('cat-cursor');
                break;
            case 'fly-cursor':
                updateCursor('fly-cursor');
                break;
            case 'key-cursor':
                updateCursor('key-cursor');
                break;
            // Ajoutez des cas supplÃ©mentaires pour d'autres boutons avec leurs ID correspondants et classes de curseur
            default:
                break;
        }
    });
});


///init avec le arrow cursor
updateCursor('arrow-cursor');


//////////////////////Gestion des Ã©vÃ©nements sur les click///////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




const soundsArray = [
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/sound-one.mp3'),
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/sound-two.mp3'),
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/sound-three.mp3'),
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/sound-for.mp3'),
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/sound-five.mp3')
];

let currentSoundIndex = 0;
let currentAudio;

function playNextSound() {
    // ArrÃªter le son prÃ©cÃ©dent s'il est en cours de lecture
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Remettre le temps de lecture Ã  zÃ©ro pour le prochain play()
    }

    // CrÃ©er une nouvelle instance audio
    currentAudio = new Audio(soundsArray[currentSoundIndex].src);
    currentAudio.play();

    // Changer le son de maniÃ¨re cyclique
    currentSoundIndex = (currentSoundIndex + 1) % soundsArray.length;
}
console.log ("okkkkk");
// Appel des fonctions
//playNextSound(); // Joue le premier son

///// nouveau code pour les farts


const soundsArrayFart = [
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/fart-24.mp3'),
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/Prout_simple_2.mp3'),
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/Prout_long.mp3'),
    new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/Prout_simple.mp3')

];


let currentAudioFart;
let shuffledIndicesFart = []; // Tableau pour l'ordre alÃ©atoire
let currentShuffledIndexFart = 0;

// Fonction pour mÃ©langer les indices
function shuffleArrayFart(arrayFart) {
    for (let i = arrayFart.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayFart[i], arrayFart[j]] = [arrayFart[j], arrayFart[i]];
    }
}

// Initialisation des indices alÃ©atoires
function initializeShuffleFart() {
    shuffledIndicesFart = Array.from({ length: soundsArrayFart.length }, (_, i) => i);
    shuffleArrayFart(shuffledIndicesFart);
    currentShuffledIndexFart = 0;
}

function playNextSoundFart() {
    // RÃ©initialiser si tous les sons ont Ã©tÃ© jouÃ©s
    if (currentShuffledIndexFart >= shuffledIndicesFart.length) {
        initializeShuffleFart(); // RÃ©organiser l'ordre
    }

    // ArrÃªter le son prÃ©cÃ©dent s'il est en cours de lecture
    if (currentAudioFart) {
        currentAudioFart.pause();
        currentAudioFart.currentTime = 0;
    }

    // Lire le son correspondant Ã  l'index alÃ©atoire actuel
    const soundIndexFart = shuffledIndicesFart[currentShuffledIndexFart];
    currentAudioFart = new Audio(soundsArrayFart[soundIndexFart].src);
    currentAudioFart.play();

    // Passer Ã  l'index suivant
    currentShuffledIndexFart++;
}

// Appel initial pour mÃ©langer les sons
initializeShuffleFart();

console.log("Sons Fart mÃ©langÃ©s prÃªts Ã  Ãªtre jouÃ©s");


///// nouveau code pour les farts





//on met un ecouteur sur le body qui ser donc le mÃªme pour tous les curseurs qui changent d'apparence
document.body.addEventListener('mousedown', event => {
    handleCursorClick();
});

const catsounds = ['/procraste-nobel.com/LGM-JAVASCRIPT/sounds/chat-miaulement-1.mp3', '/procraste-nobel.com/LGM-JAVASCRIPT/sounds/chat-miaulement-2.mp3', '/procraste-nobel.com/LGM-JAVASCRIPT/sounds/chat-feulement.mp3', '/procraste-nobel.com/LGM-JAVASCRIPT/sounds/chat-bagarre.mp3','/procraste-nobel.com/LGM-JAVASCRIPT/sounds/chat-ronronnement.mp3'];

// DÃ©finissez une variable pour suivre le son actuel
let catcurrentSoundIndex = 0;
let cataudio; // DÃ©clarer la variable audio en dehors des fonctions

// Fonction pour jouer le son actuel
function playCurrentSoundCat() {
    // ArrÃªter le son prÃ©cÃ©dent s'il est en cours de lecture
    if (cataudio) {
        cataudio.pause();
        cataudio.currentTime = 0; // Remettre le temps de lecture Ã  zÃ©ro pour le prochain play()
    }

    // CrÃ©er une nouvelle instance audio
    cataudio = new Audio(catsounds[catcurrentSoundIndex]);
    cataudio.play();
}

// Fonction pour changer le son actuel
function changeCurrentSoundCat() {
    // Vous pouvez ajouter ici une logique pour changer le son comme vous le souhaitez
    // Par exemple, si vous voulez jouer les sons de maniÃ¨re alÃ©atoire, vous pouvez utiliser Math.random()

    // Changer le son de maniÃ¨re cyclique
    catcurrentSoundIndex = (catcurrentSoundIndex + 1) % catsounds.length;
}





// Function tpour gÃ©rer toutes les interactions au clicke en fonction du type de curseur
function handleCursorClick() {

//console.log ('actualCursor',actualCursor);
    if (actualCursor === 'cat-cursor') {

        console.log ("cat-cursor");
        // on vire la classe flycursor
        document.body.classList.remove('cat-cursor');
        // on ajoute la classe avec le curseur de transition
        document.body.classList.add('cat-two-cursor');

        // Listen for mouseup event to revert the cursor image
        document.body.addEventListener('mouseup', revertCursorCat);

        // Jouer le son actuel
        playCurrentSoundCat();

        // Changer le son pour le prochain clic
        changeCurrentSoundCat();
    }


    if (actualCursor === 'fly-cursor') {


        // on vire la classe flycursor
        document.body.classList.remove('fly-cursor');
        // on ajoute la classe avec le curseur de transition
        document.body.classList.add('fly-two-cursor');

        // Listen for mouseup event to revert the cursor image
        document.body.addEventListener('mouseup', revertCursorFly);
    }

    if (actualCursor === 'finger-cursor') {

        console.log("finger detected");
        // on vire la classe flycursor
        document.body.classList.remove('finger-cursor');
        // on ajoute la classe avec le curseur de transition
        document.body.classList.add('finger-two-cursor');

        // Listen for mouseup event to revert the cursor image
        document.body.addEventListener('mouseup', revertCursorFinger);
    }
    /// son pour les pets
    if (actualCursor === 'fart-cursor') {

        playNextSoundFart();
    }

    if (actualCursor === 'cd-cursor') {

        playNextSound();

    }



};// fin handleCursorClick()

// on revient au premier curseur pour le PAPILLON 
function revertCursorFly() {
    // on vire la classe flycursor
    document.body.classList.remove('fly-two-cursor');
    // on ajoute la classe avec le curseur de transition
    document.body.classList.add('fly-cursor');

    // Remove the mouseup event listener
    document.body.removeEventListener('mouseup', revertCursorFly);
}

// on revient au premier curseur pour le Chat 
function revertCursorCat() {
    // on vire la classe flycursor
    document.body.classList.remove('cat-two-cursor');
    // on ajoute la classe avec le curseur de transition
    document.body.classList.add('cat-cursor');

    // Remove the mouseup event listener
    document.body.removeEventListener('mouseup', revertCursorCat);
}

// on revient au premier curseur pour le doigt 
function revertCursorFinger() {
    // on vire la classe flycursor
    document.body.classList.remove('finger-two-cursor');
    // on ajoute la classe avec le curseur de transition
    document.body.classList.add('finger-cursor');

    // Remove the mouseup event listener
    document.body.removeEventListener('mouseup', revertCursorFinger);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// le panel reglage  avec les images de fond et les couleurs :
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// au lancement on rÃ©cupÃ¨re les valeur enregistrÃ©es dans les cession storage

var imageUrl = sessionStorage.getItem('imageUrl');
var backgroundColor = sessionStorage.getItem('backgroundColor');
// VÃ©rification et affectation de valeurs par dÃ©faut si nÃ©cessaire
imageUrl = imageUrl || "no-image-url.jpg";
backgroundColor = backgroundColor || "#00ff3d";


//on lance la partie du script qui met a jour les valeurs

// Now you can use the imageUrl variable
console.log('Background Image URL:', imageUrl);
// Now you can use the imageUrl variable
console.log('backgroundColor:', backgroundColor);

/// changer color bar sur tous les Ã©lÃ©ments de la page

const colorBars = document.querySelectorAll('.color-bar');

// Set background color to grey for each element with class "color-bar"
colorBars.forEach(colorBar => {
    colorBar.style.backgroundColor = backgroundColor;
});

// Change background image of the body if imageUrl is available, else set background color
if (imageUrl!== "no-image-url.jpg") {
    document.body.style.backgroundImage = `url(${imageUrl})`;
} else {
    // document.body.style.backgroundImage = 'none'; // Clear any existing background image
    //document.body.style.backgroundColor = backgroundColor;
}


// console.log('Background Color:', backgroundColor);
// console.log('Image URL:', imageUrl);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////        //// Affichage de l'heure en bas Ã  droite ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function afficherHeure() {
    const maintenant = new Date();
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();

    // Ajoute un zÃ©ro devant les chiffres si nÃ©cessaire pour obtenir un format "HH : MM : SS"
    heures = heures < 10 ? '0' + heures : heures;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secondes = secondes < 10 ? '0' + secondes : secondes;

    const heureActuelle = heures + ' : ' + minutes + ' : ' + secondes;

    document.getElementById('time').textContent = heureActuelle;
}

// Mettre Ã  jour l'heure chaque seconde
setInterval(afficherHeure, 1000);

// Afficher l'heure au chargement de la page
afficherHeure();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////  ouverture fermeture  manuelle  DU MENU de navigation////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SÃ©lectionnez l'Ã©lÃ©ment avec l'id "nav-all-element"
const navAllElement = document.getElementById("nav-all-element");
navAllElement.style.transform = "translateY(125px)";
navAllElement.style.display = "block";

// Initialisation de la variable menuOpen
let menuOpen = false;

// Ajoutez un gestionnaire d'Ã©vÃ©nements au clic sur l'Ã©lÃ©ment avec l'id "burger-menu"
document.getElementById("burger-menu").addEventListener("click", function () {
    // Modifiez le style de l'Ã©lÃ©ment "nav-all-element" en fonction de la valeur de menuOpen
    if (menuOpen == false) {
        navAllElement.style.transform = "translateY(0)";
    } else {
        navAllElement.style.transform = "translateY(125px)";
    }
    // Inversez la valeur de la variable menuOpen
    menuOpen = !menuOpen;
});

// Ajoutez un gestionnaire d'Ã©vÃ©nements au clic sur le document
document.addEventListener("click", function (event) {
    // VÃ©rifiez si le clic est en dehors de navAllElement lorsque le menu est ouvert
    if (menuOpen && !navAllElement.contains(event.target) && event.target.id !== "burger-menu") {
        navAllElement.style.transform = "translateY(125px)";
        menuOpen = false;
    }
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         son sur les dossier quand on veut les ouvrir
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SÃ©lectionner tous les Ã©lÃ©ments avec la classe "one-folder"

var LockedFolderElements = document.querySelectorAll('.one-folder, .trash-wrap');

// CrÃ©er un Ã©lÃ©ment audio
const cord = new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/erro.mp3');
cord.volume = 0.2;

// Charger le son en mÃ©moire
cord.load();

// Ajouter un gestionnaire d'Ã©vÃ©nements Ã  chaque Ã©lÃ©ment
LockedFolderElements.forEach(function(folderElement) {
    folderElement.addEventListener('click', function() {
        // VÃ©rifier si le son est en cours de lecture
        if (cord.currentTime > 0 && !cord.paused) {
            // Si en cours de lecture, mettre en pause
            cord.pause();
            cord.currentTime = 0; // RÃ©initialiser la position de lecture
        }

        // Jouer l'audio prÃ©chargÃ©
        cord.play()
            .then(() => {
                console.log('Audio played successfully');
            })
            .catch(error => {
                console.error('Error playing audio:', error);
            });
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         copier coller des textes au click sur les emails de la barre de nav
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

/*    
*/
// Function to copy text to clipboard
function copyTextToClipboard(text) {
    const elTempText = document.createElement('textarea');
    elTempText.value = text;
    document.body.appendChild(elTempText);
    elTempText.select();
    document.execCommand('copy');
    document.body.removeChild(elTempText);
}

// Function to handle click event
function handleClickCopy(event) {
    const textToCopy = event.target.textContent;
    copyTextToClipboard(textToCopy);

    const copyInfoElement = document.getElementById('copy-info');
    copyInfoElement.classList.remove('hide');

    setTimeout(() => {
        copyInfoElement.classList.add('hide');
    }, 2000);

}

// Add event listeners to elements with class 'copy-me'
const copyMeElements = document.querySelectorAll('.copy-me');
copyMeElements.forEach((copySingleEl) => {
    copySingleEl.addEventListener('click', handleClickCopy);
});



console.log ("decembre19.5");

(function()
{

    var equipeMain = null;
    var items = [];
    var $parents = null;
    var lastSelected = "";
    var lastIndexSelected = 0;
    var mainElement = null;


    equipeMain = sessionStorage.getItem('equipe', name);
    console.log("equipe", equipeMain);
    randomizeChildren();

    items = [];
    $items = $('.all-desk').find('.equipe-txt');
    var indexCount = 0;
    var mainIndex = 0;
    $items.each(function()
    {
        var name = sanitizeKey($(this).text());
        if($(this).text() == "_Camille2")
        {
            name = "camille2";
            $(this).text("_Camille")
        }

        if($(this).text() == "_Nicolas2")
        {
            name = "nicolas2";
            $(this).text("_Nicolas")
        }

        if($(this).text() == "_Emma2")
        {
            name = "emma2";
            $(this).text("_Emma_G")
        }

        $(this).parent().attr("data-id", name);
        $(this).parent().attr("data-index", indexCount);

        $(this).parent().mouseenter(function() {
            _hover($(this).attr("data-id"), this);
        }).mouseleave(function() {
            _out($(this).attr("data-id"));
        });
        items.push(this);
        indexCount++;
    });


    var foundIndex = 0;
    for(var i = 0; i < items.length; i++)
    {
        var name = $(items[i]).parent().attr("data-id");
        if(name == equipeMain)
        {
            mainElement = $(items[i]).parent();
            foundIndex = i;
        }
    }
    // passe le main en premiÃ¨re pos
    var parent = $(".all-equipe-element");
    parent.prepend(parent.children().get(foundIndex));


    const equipeMainLocal = equipeMain;
    const mainElementLocal = mainElement;
    setTimeout(() => {
        console.log("show", equipeMainLocal, mainElementLocal);
        _show(equipeMainLocal, mainElementLocal);
    }, 500);



    // VIDEOS
    const videos = document.querySelectorAll("video");
    videos.forEach(video =>
    {
        $(video).attr("data-src", video.currentSrc);
        video.autoplay = false;
        video.pause();
        video.currentSrc = "";
        video.src = "";
        video.load();
    });









    function _show(__item, __element)
    {
        var parent = $(".all-equipe-element");
        if(lastSelected != null)
        {
            $(".desk-" + lastSelected).css("display", "none");
            const videosStop = $(".desk-" + lastSelected).find("video");
            console.log ("lastselect= ",lastSelected);
            videosStop.each(function() {
                const video = $(this)[0];
                video.src = "";
                video.load();
            });
            $(parent.children().get(lastIndexSelected)).css("opacity", 1);
        }

        lastSelected = __item;
        $(".desk-" + __item).css("display", "block");

        const videos = $(".desk-" + __item).find("video");
        videos.each(function() {
            const video = $(this)[0];
            const videoSrc = $(video).attr("data-src");
            video.src = videoSrc;
            video.load();
            video.play();
        });

        parent.children().css("opacity", 1);
        $(__element).css("opacity", .5);

    }



    function _hover(__item, __element)
    {
        _show(__item, __element);
    }

    function _out(__item)
    {
        _show(equipeMain, mainElement);
    }




})();





function randomizeChildren()
{
    var parent = $(".all-equipe-element");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}




function sanitizeKey(input) {
    return input
        .normalize("NFD") // DÃ©compose les caractÃ¨res accentuÃ©s en caractÃ¨res simples et diacritiques
        .replace(/[\u0300-\u036f]/g, "") // Supprime tous les diacritiques (accents)
        .toLowerCase() // Convertit en minuscule
        .replace("_", "")
        .replace(/\s+/g, ""); // Supprime tous les espaces
}

// Animation camille2
$('.oscillate').each(function() {
    let element = $(this);
    let startTime = new Date().getTime();

    // VÃ©rifier si 'top' ou 'bottom' est dÃ©jÃ  dÃ©fini
    let initialTop = element.css('top') !== 'auto' ? parseFloat(element.css('top')) : null;
    let initialBottom = element.css('bottom') !== 'auto' ? parseFloat(element.css('bottom')) : null;

    function oscillateSinusoidally() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - startTime;
        let amplitude = 10; // Amplitude de l'oscillation en pixels
        let frequency = 0.002; // FrÃ©quence de l'oscillation

        let newY = amplitude * Math.sin(frequency * elapsedTime);

        // Appliquer l'animation en fonction du style dÃ©jÃ  utilisÃ©
        if (initialTop !== null) {
            element.css('top', initialTop + newY + 'px');
        } else if (initialBottom !== null) {
            element.css('bottom', initialBottom + newY + 'px');
        }

        requestAnimationFrame(oscillateSinusoidally);
    }

    oscillateSinusoidally();
});

/// annaelle etait visible au chargement et Ã§a ne venait pas des script !!
//document.querySelector('.desk-nicolas2').style.display = 'none';
//document.querySelector('.equipe-items').style.display = 'block';
