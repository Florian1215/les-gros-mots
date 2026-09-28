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
////  Les curseurs. ////
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

    if (actualCursor === 'cat-cursor') {

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

