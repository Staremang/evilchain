$(document).ready(function () {
	console.log("v 0.1");
	$('.mail-table__info').click(function (e) {
		if (e.target.tagName == "INPUT")
			return;
		
		$(this).parent().toggleClass('active');
	})
	
	$('.tournament__slider').addClass('owl-carousel');
	$('.tournament__slider').addClass('owl-theme');
	$('.tournament__slider').owlCarousel({
		items: 3,
		margin: 30,
		loop: true,
//		nav:true,
	})
	
	$('.new-game__slider').addClass('owl-carousel');
	$('.new-game__slider').addClass('owl-theme');
	$('.new-game__slider').owlCarousel({
		stagePadding: 10,
		items: 5,
		margin: 20,
		loop: true,
//		nav:true,
	})
	
	
	$('.header-banner__slider').addClass('owl-carousel').addClass('owl-theme').owlCarousel({
		items: 1,
		rtl: false,
		loop: true,
//		nav:true,
	})
	
	
	
	$('.achievement').addClass('owl-carousel');
	$('.achievement').owlCarousel({
		loop: true,
//		stagePadding: 10,
		items: 5,
		margin: 20,
		
		nav:true,
		navText: ['', ''],
		dots: false
	})
	$('.p-bonuses__slider').addClass('owl-carousel');
	$('.p-bonuses__slider').addClass('profile-theme');
	$('.p-bonuses__slider').owlCarousel({
		loop: true,
//		stagePadding: 10,
		items: 5,
		margin: 20,
		
		nav:true,
		navText: ['', ''],
		dots: false
	})
})