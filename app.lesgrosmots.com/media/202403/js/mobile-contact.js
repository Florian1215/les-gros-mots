// ==========================================  ITEMS
var windowMails = $("#window-mails");
var windowAdress = $("#window-adress");
var windowTel = $("#window-tel");

$("#icon-mail").click(function(){
	if(currentWindow == windowMails)
	{
		_hideWindows();
		currentWindow = null;
		return;
	}
	_selectWindow(windowMails);
});
$("#icon-home").click(function(){
	if(currentWindow == windowAdress)
	{
		_hideWindows();
		currentWindow = null;
		return;
	}
	_selectWindow(windowAdress);
});
$("#icon-tel").click(function(){
	if(currentWindow == windowTel)
	{
		_hideWindows();
		currentWindow = null;
		return;
	}
	_selectWindow(windowTel);
});

var currentWindow = null
function _selectWindow(__window)
{
	if(menuIsOpen)
		return;
	currentWindow = __window;
	_hideWindows();
	__window.css("display", "block");
}
function _hideWindows()
{
	windowMails.css("display", "none");
	windowAdress.css("display", "none");
	windowTel.css("display", "none");
}
_hideWindows();

// ==========================================  BUTTONS
$("#email1").click(function(){
	_showPopup(0);
	navigator.clipboard.writeText("contact@lesgrosmots.com");
});
$("#email2").click(function(){
	_showPopup(0);
	navigator.clipboard.writeText("recrutement@lesgrosmots.com");
});
$("#email3").click(function(){
	_showPopup(0);
	navigator.clipboard.writeText("newbiz@lesgrosmots.com");
});


// ==========================================  BUTTONS
$("#button-address").click(function(){
	_showPopup(1);
	navigator.clipboard.writeText("42 rue des jeûneurs\n75002 Paris\nFRANCE");
});
$("#button-tel").click(function(){
	_showPopup(2);
	navigator.clipboard.writeText("01 55 20 01 01");
	window.location.href = 'tel:+33155290101';
});

// ==========================================  POPUP
function _showPopup(__index)
{
	$($("#popup").children()[1]).css("display", __index == 0 ? "block" : "none");
	$($("#popup").children()[2]).css("display", __index == 1 ? "block" : "none");
	$($("#popup").children()[3]).css("display", __index == 2 ? "block" : "none");
	$("#popup").animate({
	  bottom: "128px" 
	}, 200);
	setTimeout(_hidePopup, 2000);
}
function _hidePopup()
{
	$("#popup").animate({
	  bottom: "-50px" 
	}, 200);
}


$(".mobile-window-button-close").click(function(){
	currentWindow = null;
	_hideWindows();
});


var menuIsOpen = false;
// ========================================== MENU
$('body').on('menuChanged', function(e, __menuIsOpen) 
{
	menuIsOpen = __menuIsOpen;
	if(__menuIsOpen)
		_hideWindows();
	else
		_selectWindow(currentWindow);
	
});
