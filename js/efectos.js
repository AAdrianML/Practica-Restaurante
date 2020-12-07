//con esto puedo poner el script en el header
$(document).ready(function(){
	//alert();

	//efecto del menu
	$('.menu a').each(function(index,/*no lo estoy usando*/ elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		},2000 +(/*como un ciclo*/index*500));

	});


	//efecto del header
	if( $(window).width() >= 800 ){
		$('header .textos').css({
			/*invisible*/
			opacity: 0,
			/*lo bajamos*/
			marginTop:0
		});

		$('header .textos').animate({
			/*invisible*/
			opacity: 1,
			/*lo bajamos*/
			marginTop:'-52px'
		},1500);

	}/*fin del if*/


	//scroll elementos menu
	//nos agarra la posicion exacta del acercaDe
	var acercaDe = $('#acerca-de').offset().top;
	var menu = $('#platillos').offset().top;
	var galeria = $('#galeria').offset().top;
	var ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click',function(e){
		//para que no abra ningun enlace
		e.preventDefault();
		$('html, body').animate({
			//mover el scroll a esa posicion
			/*aqui no puse la variable de acerde porque como uso paralax la posicion
			va a ser diferente entonces pongo mejor un valor*/
			scrollTop: 380
		},500);
	});

	$('#btn-menu').on('click',function(e){
		//para que no abra ningun enlace
		e.preventDefault();
		$('html, body').animate({
			//mover el scroll a esa posicion
			scrollTop: menu
		},500);
	});

	$('#btn-galeria').on('click',function(e){
		//para que no abra ningun enlace
		e.preventDefault();
		$('html, body').animate({
			//mover el scroll a esa posicion
			scrollTop: galeria
		},500);
	});


	$('#btn-ubicacion').on('click',function(e){
		//para que no abra ningun enlace
		e.preventDefault();
		$('html, body').animate({
			//mover el scroll a esa posicion
			scrollTop: ubicacion
		},500);
	});
});