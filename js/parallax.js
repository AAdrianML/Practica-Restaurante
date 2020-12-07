
$(document).ready(function(){

	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				/*scroll / 2 es la velocidad a la que baja en este caso la del scroll
				entre dos osea a la mitad de velocidad del scroll*/
				'transform': 'translate(0px ,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				/*scroll / 4 es la velocidad a la que baja en este caso la del scroll
				entre cuatro osea un cuarto de la velocidad del scroll*/
				//ocupo poner el menos para que suba el lugar de bajar
				'transform': 'translate(0px , -' + scroll / 4 + '%)'
			});

		}
	});

	//prevenir que pete la pagina cuando el usuario gire una tableta muy grande
	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth <= 800){ 
			$('.acerca-de article').css({
				'transform': 'translate(0px , 0px)'
			});
			$('header .textos').css({
				'transform': 'translate(0px , 0px)'
			});
		}
	});
});