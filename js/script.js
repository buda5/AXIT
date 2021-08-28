// Change active link in header

$('.header__link').on("click", function() {
    $('.header__link').removeClass('header__link--active');
    $(this).addClass('header__link--active');
});

// Burger manu

$('.header__btn').on("click", function() {
	$(this).toggleClass('open');
    $('.header__nav-bar').toggleClass('expand');
});