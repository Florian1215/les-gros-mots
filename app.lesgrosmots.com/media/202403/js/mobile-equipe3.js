function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Cette regex vérifie les mots-clés utilisés typiquement par les mobiles
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}



var equipeMain = null;
var items = [];
var $parents = null;
var lastSelected = "";
var lastIcon = null;
var lastIndexSelected = 0;
var mainElement = null;


if(!isMobile())		
{
	console.log("desktop, exit mobile");

}else{
		
			
	function randomizeChildren()
	{
		var divs = [];
		$(".mobile-window-equipe-icons").each(function() 
		{
			var parent = $(this);
			divs.push(...parent.children().toArray());
		});	

		$(".mobile-window-equipe-icons").each(function() {
			var parent = $(this);
			for(var i = 0; i < 10; i++)
			{
				if(divs.length > 0)
				{
					var div = divs.splice(Math.floor(Math.random() * divs.length), 1)[0];
					var divName = $(div).attr("data-id");
					var content = $(".mob-" + divName);
					var newContainer = parent.parent().children()[1];
					parent.append(div);
					content.appendTo(newContainer);
				}
			}
		});
	}



	function _show(__item, __element)
	{
		console.log("show", __item);	
		var parent = $(".all-equipe-element");
		if(lastSelected != null)
		{
			$(".mob-" + lastSelected).css("display", "none");
			const videosStop = $(".mob-" + lastSelected).find("video");
			videosStop.each(function() {
				const video = $(this)[0]; 
				video.src = "";
				video.load(); 
			});
			$(parent.children().get(lastIndexSelected)).css("opacity", 1);
		}
		
		lastSelected = __item;
		$(".mob-" + __item).css("display", "block");
		
		const videos = $(".mob-" + __item).find("video");
		videos.each(function() {
			const video = $(this)[0]; 
			const videoSrc = $(video).attr("data-src");
			video.src = videoSrc;
			video.load(); 
			video.play();
		});
		
		parent.children().css("opacity", 1);
		$(__element).css("opacity", .5);
		if(lastIcon != null)
			$(lastIcon).css("opacity", 1);
		lastIcon = __element;
	}



	function _click(__item, __element)
	{
		_show(__item, __element);
	}

	function _out(__item)
	{
		_show(equipeMain, mainElement);
	}



	function sanitizeKey(input) {
		return input
			.normalize("NFD") // Décompose les caractères accentués en caractères simples et diacritiques
			.replace(/[\u0300-\u036f]/g, "") // Supprime tous les diacritiques (accents)
			.toLowerCase() // Convertit en minuscule
			.replace("_", "")
			.replace(/\s+/g, ""); // Supprime tous les espaces
	}



	(function() 
	{	
		
		equipeMain = sessionStorage.getItem('equipe', name);	
		console.log("equipe", equipeMain);

		items = [];
		//$items = $('.equipe-txt');
		$items = $('.mobile-all').find('.equipe-txt');
		var indexCount = 0;
		var mainIndex = 0;
		$items.each(function() 
		{
			var id = sanitizeKey($(this).text());
			if($(this).text() == "_Camille2")
			{
				id = "camille2";
				$(this).text("_Camille")
			}
			
			if($(this).text() == "_Nicolas2")
			{
				id = "nicolas2";
				$(this).text("_Nicolas")
			}
			
			if($(this).text() == "_Emma2")
			{
				id = "emma2";
				$(this).text("_Emma_G")
			}
			
			$(this).parent().attr("data-id", id);
			$(this).parent().attr("data-index", indexCount);
					
			$(this).parent().click(function () 
			{
				_click($(this).attr("data-id"), this);
			});	
			items.push(this);		
			indexCount++;
		});
		
		// randomizeChildren
		randomizeChildren();
		
		
		
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
		
		// IMAGES

		$('.equipe-mob-img').each(function() {
			let element = $(this);
			let startTime = new Date().getTime();

			// Vérifier si 'top' ou 'bottom' est déjà défini
			let initialTop = element.css('top') !== 'auto' ? parseFloat(element.css('top')) : null;
			let initialBottom = element.css('bottom') !== 'auto' ? parseFloat(element.css('bottom')) : null;

			function oscillateSinusoidally() {
				let currentTime = new Date().getTime();
				let elapsedTime = currentTime - startTime;
				let amplitude = 10; // Amplitude de l'oscillation en pixels
				let frequency = 0.002; // Fréquence de l'oscillation

				let newY = amplitude * Math.sin(frequency * elapsedTime);

				// Appliquer l'animation en fonction du style déjà utilisé
				if (initialTop !== null) {
					element.css('top', initialTop + newY + 'px');
				} else if (initialBottom !== null) {
					element.css('bottom', initialBottom + newY + 'px');
				}

				requestAnimationFrame(oscillateSinusoidally);
			}

			oscillateSinusoidally();
		});
	


		
		
	})();	


}
	
