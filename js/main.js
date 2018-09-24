$(document).ready(function () {
	console.log("v 0.1");
	
	$('.tournament__slider').addClass('owl-carousel');
	$('.tournament__slider').addClass('owl-theme');
	$('.tournament__slider').owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
		rtl: false,
//		nav:true,
	})
	
	$('.new-game__slider').addClass('owl-carousel');
	$('.new-game__slider').addClass('owl-theme');
	$('.new-game__slider').owlCarousel({
		stagePadding: 10,
		items: 5,
		margin: 20,
		rtl: false,
		loop: true,
//		nav:true,
	})
})