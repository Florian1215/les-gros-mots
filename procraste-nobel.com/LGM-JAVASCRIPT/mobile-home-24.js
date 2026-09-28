console.log ("run3");




// ========================================== FOLDERS NOUVEAU 2024


// pour le clic sur mobile-home-bottom-folder
window.addEventListener('load', function() {
    // Sélectionner tous les éléments avec la classe "mobile-home-bottom-folder"
    const folderElements = document.querySelectorAll('.mobile-home-bottom-folder');

    // Boucler sur chaque élément "mobile-home-bottom-folder"
    folderElements.forEach(function(folderElement) {
        // Ajouter un écouteur d'événement de clic
        folderElement.addEventListener('click', function() {
            // Récupérer la valeur de l'attribut data-folder-target
            const targetId = folderElement.getAttribute('folder-target');

            // Sélectionner l'élément avec l'ID récupéré
            const targetElement = document.getElementById(targetId);

            // Si l'élément cible existe, le rendre visible
            if (targetElement) {
                targetElement.style.display = 'block';
            } else {
                console.log('Element with ID ' + targetId + ' not found');
            }
        });
    });
    
    
    
    /// fermeture des fenêtres 
    
    
    // Sélectionner tous les éléments avec la classe "close-button2"
    const closeButtons = document.querySelectorAll('.close-button2');

    // Boucler sur chaque élément "close-button2"
    closeButtons.forEach(function(closeButton) {
        // Ajouter un écouteur d'événement de clic
        closeButton.addEventListener('click', function() {
            // Rechercher le premier parent avec la classe "mobile-window-box"
            let parentElement = closeButton.closest('.mobile-window-box');

            // Si l'élément parent existe, le mettre en display: none
            if (parentElement) {
                parentElement.style.display = 'none';
            } else {
                console.log('Parent element with class "mobile-window-box" not found');
            }
        });
    });
});

// ========================================== FOLDERS
/*
var currentFolder = null;
$('.mobile-home-bottom-folder').on('click', function() 
{
	if(menuIsOpen)
	{
		toggleMenu();
	}
	if(gameVisible)
	{
		_hideGame();
	}
	if($(this).is(currentFolder))
	{
		_closeCurrentFolder();
		return;
	}
	_selectFolder($(this));
	_selectWindow($(this).attr('folder-target'));
});
function _closeCurrentFolder()
{
	_hideWindow(currentWindow);
	_unSelectFolder(currentFolder);
	currentFolder = null;
	currentWindow = null;
}
function _selectFolder(__folder)
{
	if(currentFolder)
		_unSelectFolder(currentFolder);
	currentFolder = __folder;	
	$(currentFolder.children(".mobile-home-bottom-folder-icon")[0]).css("display", "none");
	$(currentFolder.children(".mobile-home-bottom-folder-icon-selected")[0]).css("display", "block");

	var txt = $(currentFolder.children("div:first")[0]);
	txt.css('background-color', '#2629eb');
}
function _unSelectFolder(__folder)
{
	$(currentFolder.children(".mobile-home-bottom-folder-icon")[0]).css("display", "block");
	$(currentFolder.children(".mobile-home-bottom-folder-icon-selected")[0]).css("display", "none");
	var txt = $(__folder.children("div:first")[0]);
	txt.css('background-color', '');
	
	if(currentWindow2)
	{
		_hideWindow(currentWindow2);
		_unSelectIcon(currentIcon);
		currentIcon = null;
		currentWindow2 = null;
		_showWindow(windowAgence);
	}
}



*/



// ========================================== WINDOWS

/*
var windowAgence = $("#window-agence");
var currentWindow = null;
function _selectWindow(__window)
{
	if(currentWindow)
		_hideWindow(currentWindow);
	currentWindow = $('#'+__window);
	_showWindow(currentWindow);
}
function _hideWindow(__window)
{
	__window.css("display", "none");
}
function _showWindow(__window)
{
	__window.css("display", "block");	
}
$('.close-button').on('click', function() {
	_closeCurrentFolder();
});
$('.close-button2').on('click', function() {
	_closeCurrentIcon();
});

*/

// ========================================== ICONS
var currentIcon = null;
var currentWindow2 = null;
$('.mobile-home-icon').on('click', function() 
{
	// HOT Exception
	if($(this).attr("icon-hot") == "true")
	{
		_doFlame($(this));
		return;
	}
	if($(this).attr("mobile-disabled") == "true")
	{
		return;
	}
	
	if($(this).is(currentIcon))
	{
		_closeCurrentIcon();
		return;
	}
	_selectIcon($(this));
	_selectWindow2($(this).attr('icon-target'));
	_hideWindow(windowAgence);
});
function _closeCurrentIcon()
{
	_hideWindow(currentWindow2);
	_unSelectIcon(currentIcon);
	currentIcon = null;
	currentWindow2 = null;
	_showWindow(windowAgence);
}
function _selectIcon(__icon)
{
	if(currentIcon)
		_unSelectIcon(currentIcon);
	currentIcon = __icon;	
	var txt = $(currentIcon.children("div:first")[0]);
	txt.css('background-color', '#2629eb');
	txt.css('color', '#FFFFFF');
}
function _unSelectIcon(__icon)
{
	var txt = $(__icon.children("div:first")[0]);
	txt.css('background-color', '');
	txt.css('color', '#000000');
}
function _selectWindow2(__window)
{
	if(currentWindow2)
		_hideWindow(currentWindow2);
	currentWindow2 = $('#'+__window);
	_showWindow(currentWindow2);
}
var flameRunning = false;
function _doFlame($__icon)
{
	if(flameRunning)
		return;
	
	var txt = $($__icon.children("div:first")[0]);
	txt.css('background-color', '#2629eb');
	txt.css('color', '#FFFFFF');
	console.log("_doFlame", $__icon);
	flameRunning = true;
	$("#window-flame").css("display", "block");
	$("#window-flame").css("opacity", "1");
	setTimeout(function (){
		$("#window-flame").animate(
		{
			opacity: 0 
		}, 500, function(){		
			$("#window-flame").css("display", "none");
			const src = $("#window-flame").children()[0].src;
			$("#window-flame").children()[0].src = "";
			$("#window-flame").children()[0].src = src;
			flameRunning = false;
			
			txt.css('background-color', '');
			txt.css('color', '#000000');
		});
	},4000);
}



// ========================================== MENU
$('body').on('menuChanged', function(e, __menuIsOpen) 
{
	if(gameVisible)
		return;
  if(currentWindow)
  {
	currentWindow.css("display", __menuIsOpen ? "none" : "block");
  }
});


// ========================================== VIDEO
$('#button-video-play').on('click', function() 


{
	$('#window-video').css("display","none");
	$('#window-home-video').css("display", "block");
	setTimeout(function(){
		$('#window-home-video').css("opacity", "1");
	}, 10);
	$('#home-video')[0].currentTime = 0;
	$('#home-video')[0].play();	
});
$('#video-button-close').on('click', function() 
{	
	$('#window-home-video').css("opacity", "0.5");
	setTimeout(function(){
		$('#window-home-video').css("display", "none");
	}, 500);
	
	$('#home-video')[0].currentTime = 0;
	$('#home-video')[0].pause();	
});



// ========================================== AGENCE scroll
$('.mobile-home-reglage-button1').on('click', function() 
{
  changeBackground(0);
});
$('.mobile-home-reglage-button2').on('click', function() 
{
  changeBackground(1);
});
$('.mobile-home-reglage-button3').on('click', function() 
{
  changeBackground(2);
});
$('.mobile-home-reglage-button4').on('click', function() 
{
  changeBackground(3);
});
$('.mobile-home-reglage-button5').on('click', function() 
{
  changeBackground(4);
});
$('.mobile-home-reglage-button6').on('click', function() 
{
  changeBackground(5);
});



// ========================================== AGENCE scroll

var content = $(".mobile-window-body-content-withscroll");
var scrollBar = $(".mobile-window-scrollbar-cursor");
var scrollArea = $(".mobile-window-scrollbar-cursorarea");
var visibleHeight = content.height();
var contentHeight = content[0].scrollHeight - visibleHeight;
var scrollHeight = scrollArea.height() - scrollBar.height();
var scrollStep = 20; 



function updateScrollBar() 
{
	var scrollPosition = content.scrollTop();
	var scrollBarPosition = (scrollPosition / contentHeight) * scrollHeight;
	scrollBar.css('top', scrollBarPosition);
}
function scrollContent(step) 
{
	content.scrollTop(content.scrollTop() + step);
	updateScrollBar();
}

content.on('mousewheel DOMMouseScroll', function(e) 
{
	var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
	scrollContent((delta >= 0 ? -1 : 1) * scrollStep);
	e.preventDefault();
});
scrollBar.draggable(
{ 
	axis: "y", 
	containment: "parent",
	drag: function(event, ui) 
	{
	  var scrollPercentage = ui.position.top / scrollHeight;
	  content.scrollTop(scrollPercentage * contentHeight);
	}
});
content.scroll(function() 
{
	updateScrollBar();
});
updateScrollBar();




// ========================================== PHOTOTHEQUE
const photosNB = 61;
const baseUrl = "/app.lesgrosmots.com/media/202403/photos-home/";
const photoArea = $(".mobile-home-phototheque-photoarea");
const photoThumbs = $(".mobile-home-phototheque-thumb");
const photoItems = $(".mobile-home-phototheque-items");
const photoScrollarea = $(".mobile-home-phototheque-scrollarea");
var template = $('.mobile-home-phototheque-thumb').first().clone();

$('.mobile-home-phototheque-thumb').remove();

function _preparePhototheque()
{
	for(var i=0; i < photosNB; i++)
	{
		var newItem = template.clone();
		var url = baseUrl + "photo_"+(i+1)+"-thumb.jpg";
		$(newItem).attr("photoIndex", i);
		$(newItem).css("background-image", "url("+url+")");
		$(newItem).click(function(){
			_photothequeClick($(this).attr("photoIndex"));
		});
		$('.mobile-home-phototheque-items').append(newItem);
	}
}
function _photothequeClick(__photoIndex)
{
	__photoIndex = parseInt(__photoIndex);
	var url = baseUrl + "photo_" + (__photoIndex+1) + ".jpg";
	$(photoArea).css("background-image", "url("+url+")");
	$('.mobile-home-phototheque-thumb').css("border", "none");
	$($('.mobile-home-phototheque-thumb').get(__photoIndex)).css("border", "3px solid #2629eb");

}
_preparePhototheque();
_photothequeClick(0);

const scrollOffset = 30;
$(".mobile-home-phototheque-arrow-left").click(function()
{
	var v = parseInt($(photoItems[0]).css("left"));
	v += scrollOffset;
	v = Math.min(v, 0);
	$(photoItems[0]).css("left", v);
});
$(".mobile-home-phototheque-arrow-right").click(function()
{
	var max = photoScrollarea[0].offsetWidth - photoItems[0].offsetWidth;
	var v = parseInt($(photoItems[0]).css("left"));
	v -= scrollOffset;
	v = Math.max(v, max);
	$(photoItems[0]).css("left", v);
});



// ========================================== CLOSE SNAKE
var gameVisible = false;
$(".mochi-main-top-mobile").css("pointer-events", "none");
$("#button-close-snake").click(function()
{
	_hideGame();
});
$(".mobile-home-button-start").click(function()
{
	_showGame();
});

function _showGame()
{
	gameVisible = true;
	$("#window-game-full").css("display", "block");
	$("#window-game").css("display", "none");
	$("#window-sanstitre").css("display", "none");
}
function _hideGame()
{
	gameVisible = false;
	$("#window-game-full").css("display", "none");
	$("#window-game").css("display", "block");
	$("#window-sanstitre").css("display", "block");
}


// ========================================== LANDING pageX
var landingDone = sessionStorage.getItem("mobile-landing-done") || 0;
if(landingDone == 1)
{
	$(".mobile-landingpge").css("display", "none");
}else{
	$(".mobile-landingpge").css("display", "block");
	$("#landingVideo")[0].play();
}
$(".mobile-landingpge").click(function(){
	$(".mobile-landingpge").css("display", "none");
	sessionStorage.setItem("mobile-landing-done", 1);
});
$("#landingVideo")[0].addEventListener('ended', function() {
	$(".mobile-landingpge").css("display", "none");
	sessionStorage.setItem("mobile-landing-done", 1);
});
 