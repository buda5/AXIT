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

// Activating a tab in the features section

$('.features__tab').on("click", function() {
	const clickedTab = $(this).data('tab');

	$('.features__content').removeClass('features__content--active');
	$(`.features__content[data-content="${clickedTab}"]`).addClass('features__content--active');

    $('.features__tab').removeClass('features__tab--active');
    $(this).addClass('features__tab--active');
});