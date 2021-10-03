// Change active link in header

$('.header__link').on("click", function() {
    $('.header__link').removeClass('header__link--active');
    $(this).addClass('header__link--active');
});

// Burger manu

$('.header__btn').on("click", function() {
	$(this).toggleClass('open');
    $('.header__navbar').toggleClass('expand');
});

// Closing navigation bar when click on link on tablets and mobiles

$('.header__link').on("click", function(){
	$('.header__navbar').removeClass('expand');
	$('.header__btn').removeClass('open');
});

// Activating a tab in the features section

$('.features__tab').on("click", function() {
	const clickedTab = $(this).data('tab');

	$('.features__content-text').removeClass('features__content-text--active');
	$(`.features__content-text[data-text="${clickedTab}"]`).addClass('features__content-text--active');

    $('.features__tab').removeClass('features__tab--active');
    $(this).addClass('features__tab--active');
});

// Testimonials section carousel

$('.testimonials__carousel').slick({
	autoplay: true,
	autoplaySpeed: 7000,
	dots: true,
	arrows: false,
	appendDots: $('.testimonials__pagination')
});

// Smooth scrolling when clicking an link

$('.header__link').on('click', (event) => {
  	const hash = event.currentTarget.hash;
  	if (hash) {
		event.preventDefault();
		$('html, body').animate({scrollTop: $(hash).offset().top - 57}, 1000);
  	}
});