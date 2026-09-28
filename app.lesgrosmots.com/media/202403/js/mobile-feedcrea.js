// ==========================================  ITEMS
var c = 0;
$('.mobile-feedcrea-lineitem').each(function() {
    _PrepareItem(c, this);
	c++;
});
var touchedItem = -1;

function _PrepareItem(__index, __item)
{
	$(__item).attr("data-index", __index);
}
var touchActive = false;
var touchLongActive = false;
$(".mobile-window-body-content-feedcrea").on("touchstart", function(event)
{
	if(event.originalEvent.touches.length > 1)
		return;
	touchActive = true;
	setTimeout(function(){
		if(touchActive)
		{
			touchLongActive = true;
		}
	}, 1000);
});
$(".mobile-window-body-content-feedcrea").on("touchend", function(event)
{
	if(event.originalEvent.touches.length > 1)
		return;
	touchActive = false;
	touchLongActive = false;
	_unSelectAll();
});
$(".mobile-window-body-content-feedcrea").on("touchmove", function(event)
{
	if(event.originalEvent.touches.length > 1)
		return;
	if(!touchLongActive)
		return;
	var touch = event.originalEvent.touches[0] || event.originalEvent.changedTouches[0];
    var x = touch.clientX;
    var y = touch.clientY;
	var elementUnderFinger = document.elementFromPoint(x, y);

	if ($(elementUnderFinger).hasClass('mobile-feedcrea-lineitem')) 
	{
	   _selectLine($(elementUnderFinger).attr("data-index"));
    }
});
var selectedLine = -1;
function _selectLine(__index)
{
	_unSelectAll();
	$($(".mobile-feedcrea-lineitem-left-label")[__index]).css("display", "none");
	$($(".mobile-feedcrea-lineitem-left-vector")[__index]).css("display", "block");
	
}
function _unSelectAll()
{
	$(".mobile-feedcrea-lineitem-left-label").css("display", "block");
	$(".mobile-feedcrea-lineitem-left-vector").css("display", "none");	
}







// ==========================================  scroll

var content = $(".mobile-window-body-content-feedcrea");
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



// ========================================== ENLEVER DATES
$('.mobile-feedcrea-lineitem-label-cap').each(function() {
    var txt = $(this).text();
	txt = txt.split(" – ")[0];
	$(this).html(txt);
});



// ========================================== MENU
$('body').on('menuChanged', function(e, __menuIsOpen) 
{
	scrollBar.css("display", __menuIsOpen ? "none" : "block");
	$("#window-feed").animate({
	  height: __menuIsOpen ? "230" : "450" 
	}, 200);
});


// ========================================== AUTO SCROLL TEXT
$(".mobile-feedcrea-lineitem-label").each(function()
{
	var parentW = $(this).parent().width();
	var w = $(this).width();
	var diff = w - parentW;
	if(diff > 0)
	{
		_startMove(this, diff + 20);
	}
});

function _startMove(__item, __distance)
{
	$(__item).animate(
	{
		marginLeft: -__distance 
	}, __distance * 100, function(){	
		_startMoveBack(__item, __distance);
	});
}
function _startMoveBack(__item, __distance)
{
	$(__item).animate(
	{
		marginLeft: 0 
	}, __distance * 100, function(){	
		_startMove(__item, - __distance);
	});
}