


// ========================================== MENU
$('body').on('menuChanged', function(e, __menuIsOpen) 
{
	if(__menuIsOpen)
	{
		$("#rse-girlboos1").css("display", "none");
		$("#rse-girlboos2").css("display", "none");
		$("#rse-calc").css("display", "none");
		$("#rse-popups").css("visibility", "hidden");
	}else{
		$("#rse-girlboos1").css("display", "block");
		$("#rse-girlboos2").css("display", "block");	
		$("#rse-calc").css("display", "block");	
		$("#rse-popups").css("visibility", "visible");	
	}			
});



