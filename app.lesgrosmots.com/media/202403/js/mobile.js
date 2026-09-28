// ========================================== BACKGROUND
var backgrounds = [
	"/app.lesgrosmots.com/media/202403/backgrounds/fond_mobile_01.jpg", // CIEL
	"/app.lesgrosmots.com/media/202403/backgrounds/fond_mobile_02.jpg",
	"/app.lesgrosmots.com/media/202403/backgrounds/fond_mobile_03.jpg",
	"/app.lesgrosmots.com/media/202403/backgrounds/fond_mobile_04.jpg"
];

function refreshBackground()
{
	var bgIndex = sessionStorage.getItem("mobile-bg") || 0;
	var imageUrl = backgrounds[bgIndex];
	$(".mobile-all").css("background-image", "url("+imageUrl+")");


}
function changeBackground(bgIndex)
{
	sessionStorage.setItem("mobile-bg", bgIndex) 
	refreshBackground();
}
refreshBackground();




// ========================================== MENU
console.log("=================menu", $("#burger-menu"));

var menuIsOpen = false;
refreshMenu();
$("#mobile-burger-menu").click(toggleMenu);
$("#mobile-burger-menu-pressed").click(toggleMenu);
function toggleMenu()
{
	menuIsOpen = ! menuIsOpen;
	$("#mobile-menu").css("transition", "height 0.3s ease");
	refreshMenu();
	$('body').trigger('menuChanged', [menuIsOpen]);
}
function refreshMenu()
{
	if(menuIsOpen)
	{
		$("#mobile-burger-menu").css("display", "none");
		$("#mobile-burger-menu-pressed").css("display", "block");
		$("#mobile-menu").css("height", "192px");
	}else{
		$("#mobile-burger-menu").css("display", "block");
		$("#mobile-burger-menu-pressed").css("display", "none");
		$("#mobile-menu").css("height", "0");
	}
}
function afficherHeure() {
  const maintenant = new Date();
  let heures = maintenant.getHours();
  let minutes = maintenant.getMinutes();
  heures = heures < 10 ? '0' + heures : heures;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const heureActuelle = heures + ' : ' + minutes;
  document.getElementById('mobile-time').textContent = heureActuelle;
}
setInterval(afficherHeure, 1000);
afficherHeure();
