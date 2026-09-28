
function initMenuEquipe()
{
    $('.team-debordement-equipe').children().each(function() {
		
		let name = $(this).children()[0].innerText.toLowerCase();
		name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		
		if(name=="camille2")
		{
			$(this).children()[0].innerText = "Camille";
		}
		
		$(this).on('click', function(){
			equipeMain = sessionStorage.setItem('equipe', name);
			window.location.href = window.location.origin + '/equipe';
		});


    });
}

initMenuEquipe();

