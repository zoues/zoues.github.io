jQuery.noConflict()(function ($) {
	"use strict";


	var ww = $('.gr_menu_holder').outerWidth() / 2;
	$('.gr_menu_holder').css('margin-left', -$('.gr_menu_holder').outerWidth() / 2);



	$('.gr_menu_holder').on('click', '.gr_menu_button.gr_active', function () {

		$('.gr_header_menu li').removeClass('gr_open_ul').removeClass('one_click');
		$(this).text('menu');
		$('.gr_header_menu').slideToggle(300);
		$(this).removeClass('gr_active');
		$(".gr_menu_holder").animate({
			marginLeft: -ww,
			width: ww * 2
		}, 300, function () {
			$('.gr_header_menu li a').css('opacity', 1);
		});
	});



	$('.gr_menu_holder').on('click', '.gr_menu_button:not(.gr_active)', function () {
		$(this).text('close');
		$(this).addClass('gr_active');
		$('.gr_menu_holder ul').show(0);
		var maxWidth = Math.max.apply(null, $('.gr_header_menu li a').map(function () {
			return $(this).outerWidth(true);
		}).get());

		maxWidth = maxWidth + 80;

		$('.gr_menu_holder ul').hide(0);
		$('.gr_header_menu').slideToggle(300);

		$(".gr_menu_holder").animate({
			marginLeft: -maxWidth / 2,
			width: maxWidth
		}, 300, function () {
			// Animation complete.
		});


		$(function () {
			$('.gr_header_menu li a').each(function (index) {
				setTimeout(function (el) {
					el.css('opacity', 1);
				}, index * 30, $(this));
			});
		});
	});


	$('.gr_header_menu > li').on('click', 'a', function (e) {
		if ($(this).parent().has("ul").length > 0 && !$(this).parent().hasClass('one_click')) {

			$(this).parent().children('ul').slideToggle(300);
			$(this).parent().toggleClass('gr_open_ul');
			if ($(this).attr('href') != '#') {
				$(this).parent().toggleClass('one_click');
			};



			e.preventDefault();
			return false;
		};
	});

});