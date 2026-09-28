/// mettre le menu en display block
document.querySelector('.nav-all-element').style.display = 'block';


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////  SystÃ¨me automatique de misa a jour des chiffre dans la version mobile ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SÃ©lection de tous les Ã©lÃ©ments avec la classe "mobile-feedcrea-lineitem-left-label"
const elements = document.querySelectorAll(".mobile-feedcrea-lineitem-left-label");

// Boucle Ã  travers chaque Ã©lÃ©ment
elements.forEach((element, index) => {
    // Changer le contenu texte en ajoutant 1 Ã  l'index
    element.textContent = (index + 1).toString();
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////  Resize et positionnement des Ã©lements ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Trigger the function when the window is resized



/// fonction pour rÃ©cupÃ©rer les positions des 3 folders et de l'Ã©lÃ©ment rÃ©glage et du tamagochi

let  greentrashPosition, yellowtrashPosition, bluetrashPosition;

function getElementsPositions() {
    // l'Ã©lÃ©ment servant Ã  l'ouverture Ã  juste le nom de l'Ã©lÃ©ment on repÃ¨re sa position


    greentrashElement=document.getElementById('green-trash');
    yellowtrashElement=document.getElementById('yellow-trash');
    bluetrashElement=document.getElementById('blue-trash');


    if (greentrashElement && yellowtrashElement && bluetrashElement ) {



        const greentrashRect = greentrashElement.getBoundingClientRect();
        greentrashPosition = {
            x: greentrashRect.left +10,
            y: greentrashRect.top+10
        };

        const yellowtrashRect = yellowtrashElement.getBoundingClientRect();
        yellowtrashPosition = {
            x: yellowtrashRect.left +10,
            y: yellowtrashRect.top+10
        };
        const bluetrashRect = bluetrashElement.getBoundingClientRect();
        bluetrashPosition = {
            x: bluetrashRect.left +10,
            y: bluetrashRect.top+10
        };



    } else {
        console.log('One or more elements not found.');
    }
}

// Call the function to get positions of the elements et au resize aussi
getElementsPositions();
window.addEventListener('resize', getElementsPositions);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// les anims spÃ©cifique de la page  crÃ©a /////
//////// les anims spÃ©cifique de la page  crÃ©a /////
//////// les anims spÃ©cifique de la page  crÃ©a /////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sÃ©lectionner toutes les crÃ©a et leur mettre des id pour correspondre aux id des
////initialisation des elements visuel pour les placer hors champs en bas
function visualId() {
    // SÃ©lectionner tous les Ã©lÃ©ments avec la classe "one-crea"
    var oneCreaElements = document.querySelectorAll('.visual-group');

    // Parcourir chaque Ã©lÃ©ment et mettre Ã  jour l'ID du parent
    oneCreaElements.forEach(function(element, index) {
        // Mettre Ã  jour l'ID du parent avec le numÃ©ro d'index et le suffixe "ceralist"
        var parentId = 'visual' + (index + 1);
        element.id = parentId;
        element.style.transform = 'translateY(90vh)';

    });
}

visualId();

function refreshNumbersAndId() {
    // SÃ©lectionner tous les Ã©lÃ©ments avec la classe "one-crea"
    var oneCreaElements = document.querySelectorAll('.one-crea');

    // Parcourir chaque Ã©lÃ©ment et mettre Ã  jour l'ID du parent
    oneCreaElements.forEach(function(element, index) {
        // Mettre Ã  jour l'ID du parent avec le numÃ©ro d'index et le suffixe "ceralist"
        var parentId = 'ceralist' + (index + 1);
        element.id = parentId;

        // SÃ©lectionner l'Ã©lÃ©ment avec la classe "number" Ã  l'intÃ©rieur du parent
        var numberElement = element.querySelector('.number');

        // Mettre Ã  jour le contenu textuel avec le chiffre (index + 1)
        numberElement.textContent = (index + 1).toString();
    });
}

// Appeler la fonction pour effectuer la mise Ã  jour
refreshNumbersAndId();

function refreshOnlyNumber(){
    // SÃ©lectionner tous les Ã©lÃ©ments avec la classe "one-crea"
    var oneCreaElements = document.querySelectorAll('.one-crea');

    // Parcourir chaque Ã©lÃ©ment et mettre Ã  jour l'ID du parent
    oneCreaElements.forEach(function(element, index) {


        // SÃ©lectionner l'Ã©lÃ©ment avec la classe "number" Ã  l'intÃ©rieur du parent
        var numberElement = element.querySelector('.number');

        // Mettre Ã  jour le contenu textuel avec le chiffre (index + 1)
        numberElement.textContent = (index + 1).toString();
    });
}


// l'effet over sur la liste des crÃ©as

// Select all elements with class "one crea"
var oneCreaElements = document.querySelectorAll('.one-crea');

oneCreaElements.forEach(function(element) {
    // Add event listener for hover in
    element.addEventListener('mouseenter', function() {
        var numberGroup = element.querySelector('.number-group');

        // Set background color on hover in
        numberGroup.style.backgroundColor = '#828282';

        // Set opacity of "number" to 0
        var numberElement = numberGroup.querySelector('.number');
        numberElement.style.opacity = 0;

        // Set opacity of "fleche-crea" to 1
        var flecheCreaElement = numberGroup.querySelector('.fleche-crea');
        flecheCreaElement.style.opacity = 1;

        // Get the ID of the current element
        var elementId = element.id;

        // Call the startAnim function with the element ID
        startAnim(elementId);
    });

    // Add event listener for hover out
    element.addEventListener('mouseleave', function() {
        var numberGroup = element.querySelector('.number-group');

        // Set background color on hover out
        numberGroup.style.backgroundColor = '#ccc8c9';

        // Set opacity of "number" to 1
        var numberElement = numberGroup.querySelector('.number');
        numberElement.style.opacity = 1;

        // Set opacity of "fleche-crea" to 0
        var flecheCreaElement = numberGroup.querySelector('.fleche-crea');
        flecheCreaElement.style.opacity = 0;

        // Get the ID of the current element
        var elementId = element.id;

        // Call the stopAnim function with the element ID
        stopAnim(elementId);
    });
});

// Function to start animation
function startAnim(elementId) {
    // Extract numeric part from element ID
    var numericPart = elementId.match(/\d+/);
    var numericValue = parseInt(numericPart[0]);
    // console.log('Start animation for element with numeric value:', numericValue);

    // Construct the ID of the element to be animated
    var wrapperToAnimateId = 'visual' + numericValue;

    // Select the element to be animated
    var wrapperToAnimate = document.getElementById(wrapperToAnimateId);



    // Check if the element is found
    if (wrapperToAnimate) {
        wrapperToAnimate.style.transform = 'translateY(90vh)';
        wrapperToAnimate.style.opacity="1";
        // wrapperToAnimate.style.display="none";
        // Select elements with classes "one-feed", "two-feed", "three-feed", and "for-feed"
        var oneFeedElement = wrapperToAnimate.querySelector('.one-feed');
        var twoFeedElement = wrapperToAnimate.querySelector('.two-feed');
        var threeFeedElement = wrapperToAnimate.querySelector('.three-feed');
        var forFeedElement = wrapperToAnimate.querySelector('.for-feed');
        var fiveFeedElement = wrapperToAnimate.querySelector('.five-feed');

        if (oneFeedElement){oneFeedElement.style.transform = 'translateY(10vh)'; }
        if (twoFeedElement){twoFeedElement.style.transform = 'translateY(20vh)'; }
        if (threeFeedElement){threeFeedElement.style.transform = 'translateY(30vh)'; }
        if (forFeedElement){forFeedElement.style.transform = 'translateY(35vh)'; }
        if (fiveFeedElement){fiveFeedElement.style.transform = 'translateY(37vh)'; }


        // Animate the element by setting translateY to 0 over 1 second
        wrapperToAnimate.style.transition = 'transform 1000ms';
        wrapperToAnimate.style.transform = 'translateY(0)';

        // element 111111111
        setTimeout(function () {
            if (oneFeedElement) {

                // Animate twoFeedElement with an elastic effect
                oneFeedElement.style.transition = 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)';
                oneFeedElement.style.transform = 'translateY(-20px)';


            }
        }, 200);
        setTimeout(() => {
            //DeuxiÃ¨me animation : Animer oneFeedElement pour revenir Ã  sa position initiale
            oneFeedElement.style.transition = 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)';
            oneFeedElement.style.transform = 'translateY(0px)'; // Revenir Ã  la position initiale
            console.log ("run B ")
        }, 800);


        // element 222222
        setTimeout(function () {
            if (twoFeedElement) {

                // Animate twoFeedElement with an elastic effect
                twoFeedElement.style.transition = 'transform 400ms cubic-bezier(0.22, 0.01, 0.25, 0.97)';
                twoFeedElement.style.transform = 'translateY(-40px)';
                console.log ("200");
            }
        }, 300);

        setTimeout(() => {
            //DeuxiÃ¨me animation : Animer oneFeedElement pour revenir Ã  sa position initiale
            twoFeedElement.style.transition = 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)';
            twoFeedElement.style.transform = 'translateY(0px)'; // Revenir Ã  la position initiale

        }, 700);


        // element 33333333333333
        setTimeout(function () {
            if (threeFeedElement) {

                // Animate twoFeedElement with an elastic effect
                threeFeedElement.style.transition = 'transform 400ms cubic-bezier(0.22, 0.01, 0.25, 0.97)';
                threeFeedElement.style.transform = 'translateY(-30px)';

            }
        }, 400);

        setTimeout(() => {
            //DeuxiÃ¨me animation : Animer oneFeedElement pour revenir Ã  sa position initiale
            threeFeedElement.style.transition = 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)';
            threeFeedElement.style.transform = 'translateY(0px)'; // Revenir Ã  la position initiale

        }, 800);
        // element 4444444444
        setTimeout(function () {
            if (forFeedElement) {

                // Animate twoFeedElement with an elastic effect
                forFeedElement.style.transition = 'transform 400ms cubic-bezier(0.22, 0.01, 0.25, 0.97)';
                forFeedElement.style.transform = 'translateY(-50px)';
            }
        }, 500);
        setTimeout(() => {
            //DeuxiÃ¨me animation : Animer oneFeedElement pour revenir Ã  sa position initiale
            forFeedElement.style.transition = 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)';
            forFeedElement.style.transform = 'translateY(0px)'; // Revenir Ã  la position initiale

        }, 900);



        // element 5555555
        setTimeout(function () {
            if (fiveFeedElement) {

                // Animate twoFeedElement with an elastic effect
                fiveFeedElement.style.transition = 'transform 400ms cubic-bezier(0.22, 0.01, 0.25, 0.97)';
                fiveFeedElement.style.transform = 'translateY(-40px)';
            }
        }, 600);


        setTimeout(() => {
            //DeuxiÃ¨me animation : Animer oneFeedElement pour revenir Ã  sa position initiale
            fiveFeedElement.style.transition = 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)';
            fiveFeedElement.style.transform = 'translateY(0px)'; // Revenir Ã  la position initiale

        }, 1000);

    } else {
        // Log a message if the element is not found
        console.log('Element with ID', wrapperToAnimateId, 'not found for animation.');
    }
}


// Function to stop animation
function stopAnim(elementId) {
    // Extract numeric part from element ID
    var numericPart = elementId.match(/\d+/);
    var numericValue = parseInt(numericPart[0]);
    // console.log('Stop animation for element with numeric value:', numericValue);

    // Construct the ID of the element to be animated
    var wrapperToAnimateId = 'visual' + numericValue;

    // Select the element to be animated
    var wrapperToAnimate = document.getElementById(wrapperToAnimateId);

    // Check if the element is found
    if (wrapperToAnimate) {
        // Animate the element by setting translateY to 90vw over 300 milliseconds
        wrapperToAnimate.style.transition = 'transform 300ms';
        wrapperToAnimate.style.transform = 'translateY(90vw)';
    } else {
        // Log a message if the element is not found
        console.log('Element with ID', wrapperToAnimateId, 'not found for animation.');
    }
}




/// mettre les Ã©lÃ©ments  en liste alphabÃ©tique des clientinside "client-group" elements

function sortListAlphabetically() {
    // Get the parent container
    var container = document.querySelector('.crea-list-group');

    // Get all the list elements inside the container and convert them to an array
    var listItems = Array.from(container.querySelectorAll('.one-crea'));

    // Sort the array based on the text inside "client-group" elements
    listItems.sort(function(a, b) {
        var textA = a.querySelector('.client-group .crea-list-text').textContent.toUpperCase();
        var textB = b.querySelector('.client-group .crea-list-text').textContent.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    // Empty the container and append sorted elements
    container.innerHTML = '';
    listItems.forEach(function(item) {
        container.appendChild(item);
    });
    refreshOnlyNumber ();
    document.getElementById('alpha').classList.remove('unchecked');
    document.getElementById('chrono').classList.add('unchecked');

}

function sortListChronologically() {
    // Get the parent container
    var container = document.querySelector('.crea-list-group');

    // Get all the list elements inside the container and convert them to an array
    var listItems = Array.from(container.querySelectorAll('.one-crea'));

    // Sort the array based on the numerical part of the ID
    listItems.sort(function(a, b) {
        var idA = parseInt(a.id.replace('ceralist', ''));
        var idB = parseInt(b.id.replace('ceralist', ''));
        return idA - idB;
    });

    // Empty the container and append sorted elements
    container.innerHTML = '';
    listItems.forEach(function(item) {
        container.appendChild(item);
    });
    refreshOnlyNumber ();
    document.getElementById('chrono').classList.remove('unchecked');
    document.getElementById('alpha').classList.add('unchecked');
}

// Add click event listeners to the buttons
document.getElementById('alpha').addEventListener('click', sortListAlphabetically);
document.getElementById('chrono').addEventListener('click', sortListChronologically);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         copier coller des textes au click sur les emails
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         son sur les dossier quand on veut les ouvrir
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SÃ©lectionner tous les Ã©lÃ©ments avec la classe "one-folder"
// SÃ©lectionner tous les Ã©lÃ©ments avec la classe "one-folder"
// SÃ©lectionner tous les Ã©lÃ©ments avec la classe "one-folder"
var folderElements = document.querySelectorAll('.one-folder');

// CrÃ©er un Ã©lÃ©ment audio
const cord = new Audio('/procraste-nobel.com/LGM-JAVASCRIPT/sounds/erro.mp3');
cord.volume = 0.2;

// Charger le son en mÃ©moire
cord.load();

// Ajouter un gestionnaire d'Ã©vÃ©nements Ã  chaque Ã©lÃ©ment
folderElements.forEach(function(folderElement) {
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

/// scroll horizontal sur les Ã©lÃ©ments

document.querySelectorAll('.crea-list-text[long]').forEach(function (element) {
    // Set the transition time in seconds
    const transitionTime = 30;



    element.addEventListener('mouseenter', function () {
        // Replace text with the content of the "long" attribute
        const longText = element.getAttribute('long');
        element.innerText = longText;

        // Apply translation only if the custom attribute is present
        if (element.hasAttribute('long')) {
            // Delay the application of the transform to allow the transition to take effect
            setTimeout(function () {
                // Apply the transition property in CSS using JavaScript
                element.style.transition = `transform ${transitionTime}s linear`;
                element.style.transform = 'translateX(-2000px)';
            }, 100); // Adjust the delay time as needed
        }
    });

    element.addEventListener('mouseleave', function () {
        // Replace text with the content of the "short" attribute
        const shortText = element.getAttribute('short');
        element.innerText = shortText;

        // Reset translation only if the custom attribute is present
        if (element.hasAttribute('long')) {
            // Delay the reset of the transform to allow the transition to take effect
            setTimeout(function () {
                element.style.transition = `transform 0s linear`;
                element.style.transform = 'translateX(8px)';
            }, 100); // Adjust the delay time as needed
        }
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         DRAGGABLE et resizable
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Gestion des Ã©vÃ©nements pour les Ã©lÃ©ments .folder-z-index
$('.folder-z-index').each(function() {
    $(this).draggable({
        containment: 'parent',
        handle: $(this).find('.color-bar'), // Utiliser l'Ã©lÃ©ment '.color-bar' comme poignÃ©e
        start: function(event, ui) {
            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body au dÃ©but du glisser/dÃ©poser
        },
        stop: function(event, ui) {
            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body Ã  la fin du glisser/dÃ©poser
        }
    });
});

// Gestion des Ã©vÃ©nements pour les Ã©lÃ©ments .warning-window
$('.warning-window').each(function() {
    $(this).draggable({
        containment: 'parent',
        handle: $(this).find('.color-bar'), // Utiliser l'Ã©lÃ©ment '.color-bar' comme poignÃ©e
        start: function(event, ui) {
            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body au dÃ©but du glisser/dÃ©poser
        },
        stop: function(event, ui) {
            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body Ã  la fin du glisser/dÃ©poser
        }
    });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////        //// pour les anim + drag sur les noms des membres de l'Ã©quipe////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get all elements with the class "team-txt"
const teamTextElements = document.querySelectorAll('.team-txt');

// Add the class "cache" to all elements with the class "team-txt" at launch
teamTextElements.forEach(element => {
    element.classList.add('cache-moi');
});



/// texte et Z index pour le over sur les Ã©lÃ©ments Ã©quipe
let lowZindex = 100;
let clicked = false; // Variable pour suivre l'Ã©tat du clic

// Add mouseover and mouseout event listeners to the elements with class "one-team-ele"
const teamElements = document.querySelectorAll('.one-team-ele');

teamElements.forEach(teamElement => {
    let originalZIndex;

    teamElement.style.zIndex = lowZindex;
    lowZindex++;

    teamElement.addEventListener('mousedown', function () {
        // Mettre Ã  jour le Z-index de l'Ã©lÃ©ment cliquÃ©
        console.log ("clikkddkkkk");
        $(this).css('z-index', lowZindex);

        // IncrÃ©menter la variable lowZindex
        lowZindex++;

        // Mettre Ã  jour l'Ã©tat du clic
        clicked = true;
    });

    teamElement.addEventListener('mouseover', function () {
        // Si l'Ã©lÃ©ment n'a pas Ã©tÃ© cliquÃ©, alors procÃ©der comme d'habitude
        if (!clicked) {
            originalZIndex = teamElement.style.zIndex;
            teamElement.style.zIndex = lowZindex + 1;
            this.querySelectorAll('.team-txt').forEach(child => {
                child.classList.remove('cache-moi');

            });
        }
    });

    teamElement.addEventListener('mouseout', function () {
        // Si l'Ã©lÃ©ment n'a pas Ã©tÃ© cliquÃ©, alors procÃ©der comme d'habitude
        if (!clicked) {
            console.log ("notclickekekek");
            teamElement.style.zIndex = originalZIndex;
            this.querySelectorAll('.team-txt').forEach(child => {
                child.classList.add('cache-moi');
            });
        }else { teamElement.style.zIndex = lowZindex;clicked = false; lowZindex++;
            this.querySelectorAll('.team-txt').forEach(child => {
                child.classList.add('cache-moi');
            });
        }

    });

    teamElement.addEventListener('mouseup', function () {
        // RÃ©initialiser l'Ã©tat du clic aprÃ¨s le relÃ¢chement de la souris
        //clicked = false;
    });
});


$('.one-team-ele').each(function() {
    let isDragging = false;
    let dragStart;

    $(this).draggable({
        // Utiliser l'Ã©lÃ©ment '.color-bar' comme poignÃ©e
        start: function(event, ui) {
            isDragging = true;
            dragStart = event.timeStamp;
            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body au dÃ©but du glisser/dÃ©poser
        },
        stop: function(event, ui) {
            isDragging = false;
            $('body').css('cursor', ''); // RÃ©initialisation du style de curseur sur le body Ã  la fin du glisser/dÃ©poser
        }
    });

    // Ã‰vÃ©nement dragstop pour mettre Ã  jour le Z-index aprÃ¨s le glisser/dÃ©poser
    $(this).on('dragstop', function(event, ui) {

    });

    $(this).click(function(event) {
        if (isDragging) {
            // Si le clic est associÃ© au glisser/dÃ©poser, ne faites rien
            return;
        }

        // Votre logique de redirection ici
        window.location.href = "/equipe";
    });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////         son sur la fenÃªtre "agence  quand on veut la fermer
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Charger le son en mÃ©moire
// Create an audio element
document.getElementById("close-ico-group").addEventListener("click", function() {

    // Play the audio
    cord.play()
        .then(() => {
            console.log('Audio played successfully');
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
});
