// Racine media/202403/ déduite du src du script (fonctionne en file:// comme en http)
var MEDIA_BASE = document.currentScript.src.replace(/js\/[^\/]*$/, "");
// Agence logos
var logoFiles = [
	"cniel.webp",
	"sinalaf.webp",
	"lemonde.png",
	"pitch.png",
	"pasquier.png",
	"speedy.png",
	"citadium.png",
	"habitat.png",
	"flunch.png",
	"pago.png",
	"interfel.png",
	"laforet.png",
	"ca.png",
	"auchan.png",
	"durex.png",
	"babyliss.png",
	"chauffeur.png",
	"saintgobain.png",
	"puydufou.png",
	"pavillon.png",
	"saveol.png",
	"monuments.png",
	"coyote.png",
	"giraudy.png",
	"legrand.png",
	"vinsta.png",
	"armani.png",
	"christofle.png",
	"bricodepot.png",
	"bridgestone.png",
	"interbev.png",
	"placo.png",
	"isover.png",
	"valdeloire.png",
	"compagnie.png"
];
var logoBaseUrl = MEDIA_BASE + "logos/";
var logosParent = $("#agence-logos");
var marquesParent = $("#agence-marques");
var logoImg = $(".mobile-agence-logoimg");

var marques = [];
for(var i=0; i < marquesParent.children().length; i++)
{
	marques.push(marquesParent.children()[i]);
	_prepareMarque(i, marquesParent.children()[i]);
}


var lastLogoIndex = -1;


function _prepareMarque(__index, __logo)
{
	$(marques[__index]).attr("data-index", i);
	$(marques[__index]).click(function(){
		_showLogo($(this).attr("data-index"));
	});
	
}
function _showLogo(__index)
{
	if(lastLogoIndex != -1)
	{
		$(marques[lastLogoIndex]).children(".mobile-agence-confiance-label").first().css("background-color", "");
		$(marques[lastLogoIndex]).children(".mobile-agence-confiance-label").first().css("color", "#000000");
	}
	lastLogoIndex = __index;
	logoImg.css("display", "block");
	
	var url = logoBaseUrl + logoFiles[__index];
	logoImg.css("background-image", "url("+url+")");
	
	$(marques[lastLogoIndex]).children(".mobile-agence-confiance-label").first().css("background-color", "#001aff");
	$(marques[lastLogoIndex]).children(".mobile-agence-confiance-label").first().css("color", "#FFFFFF");
	$("#window-logos").css("display", "block");
}
$("#window-logos").find(".mobile-window-button-close").first().click(function(){
	$("#window-logos").css("display", "none");
	
	logoImg.css("display", "none");
	$(marques[lastLogoIndex]).children(".mobile-agence-confiance-label").first().css("background-color", "");
	$(marques[lastLogoIndex]).children(".mobile-agence-confiance-label").first().css("color", "#000000");
	lastLogoIndex = -1;
});


// DUPLICATE 3 times
const container = document.getElementById('agence-marques');
for(var x = 0; x < 5; x++)
{	
	var i = 0;
	Array.from(container.children).forEach(child => 
	{
		var newChild = child.cloneNode(true);	
		container.appendChild(newChild);		
		$(newChild).attr("data-index", i);
		$(newChild).click(function(){
			_showLogo($(this).attr("data-index"));
		});		
		i++;
		if(i == logoFiles.length)
			i = 0;
	});
}
i = 0;
Array.from(container.children).forEach(child => 
{
	if(i % 2 == 0)
	{
		$(child).removeClass("mobile-agence-confiance-line2");
	}else{
		$(child).addClass("mobile-agence-confiance-line2");
	}
	i++;
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


// ========================================== EXPERTISE
const expersiseData = [
	["Plateforme de marque", "Repositionnement", "Lancement produit.service", "", ""],
	["TV", "Presse", "Radio", "Affichage", ""],
	["Naming", "Identité visuelle", "Langage de marque", "", ""],
	["Digital", "Social media", "Influence", "Terrain", "Évenementiel"]
];
var expertiseButtons = $(".mobile-agene-expertise-button");
var expertiseLines = $(".mobile-agence-expertise-txt");
var expertiseLastIndex = 0;

for(var i=0; i < expertiseButtons.length; i++)
{
	$(expertiseButtons[i]).attr("data-index", i);
	$(expertiseLines[i]).attr("data-index", i);
	$(expertiseButtons[i]).click(function(){
		var index = $(this).attr("data-index");
		if(expertiseLastIndex != -1)
		{
			_unSelectExpertise(expertiseLastIndex);
		}
		expertiseLastIndex = index;
		_selectExpertise(expertiseLastIndex);
	});		
}
function _selectExpertise(__index)
{
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-txt").css("background-color", "#001aff");
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-txt").css("color", "#FFFFFF");
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-img").css("display", "none");
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-img-selected").css("display", "inline-block");
	$(expertiseLines[0]).text(expersiseData[__index][0]);
	$(expertiseLines[1]).text(expersiseData[__index][1]);
	$(expertiseLines[2]).text(expersiseData[__index][2]);
	$(expertiseLines[3]).text(expersiseData[__index][3]);
	$(expertiseLines[4]).text(expersiseData[__index][4]);
}
function _unSelectExpertise(__index)
{
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-txt").css("background-color", "");
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-txt").css("color", "#000000");
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-img").css("display", "inline-block");
	$(expertiseButtons[__index]).children(".mobile-agene-expertise-button-img-selected").css("display", "none");
}
_selectExpertise(0);


// ========================================== PHOTOTHEQUE
const photosNB = 18;
const baseUrl = MEDIA_BASE + "photos-locaux/";
const photoArea = $(".mobile-locauxphoto--photoarea");
const photoThumbs = $(".mbile-locauxphoto-thumb");
const photoItems = $(".mbile-locauxphoto-items");
const photoScrollarea = $(".mbile-locauxphoto--scrollarea");
photoScrollarea.on("touchstart", function(event){
	event.stopPropagation();
});
var template = $('.mbile-locauxphoto-thumb').first().clone();
$('.mbile-locauxphoto-thumb').remove();

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
		photoItems.append(newItem);
	}
}
function _photothequeClick(__photoIndex)
{
	__photoIndex = parseInt(__photoIndex);
	var url = baseUrl + "photo_" + (__photoIndex+1) + ".jpg";
	$(photoArea).css("background-image", "url("+url+")");
	$('.mbile-locauxphoto-thumb').css("border", "none");
	$($('.mbile-locauxphoto-thumb').get(__photoIndex)).css("border", "3px solid #2629eb");

}
_preparePhototheque();
_photothequeClick(0);

const scrollOffset = 30;
$(".mobile-locauxphoto--arrow-left").click(function()
{
	var v = parseInt($(photoItems[0]).css("left"));
	v += scrollOffset;
	v = Math.min(v, 0);
	$(photoItems[0]).css("left", v);
});
$(".mobile-locauxphoto--arrow-right").click(function()
{
	var max = photoScrollarea[0].offsetWidth - photoItems[0].offsetWidth;
	var v = parseInt($(photoItems[0]).css("left"));
	v -= scrollOffset;
	v = Math.max(v, max);
	$(photoItems[0]).css("left", v);
});

// ========================================== MENU
$('body').on('menuChanged', function(e, __menuIsOpen) 
{
	$("#window-video").css("display", __menuIsOpen ? "none" : "block");
	$("#window-logos").css("visibility", __menuIsOpen ? "hidden" : "visible");
	$("#window-confiance2").css("display", __menuIsOpen ? "none" : "block");
	$("#window-locos").css("height", __menuIsOpen ? "315" : "455");
	$(".mobile-locauxphoto--photoarea-bottom").css("display", __menuIsOpen ? "none" : "block");
	
	$("#window-marques").animate({
	  height: __menuIsOpen ? "230" : "430" 
	}, 200);
});


$(document).ready(function() {
    _selectExpertise(0);		
});





