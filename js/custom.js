jQuery.noConflict()(function ($) {
	"use strict";

	if ($("body").not(".paged").is(".home") || $("body").not(".paged").is(".page-template-blog_tmp")) {
		var logotop = $('.gr-logo').offset().top;
		$('.preloader').show();
		/*
		if (Function('@cc_on return document.documentMode===10@')()){
			window.onload = $(function(){
				$("html, body").animate({ scrollTop: 0 }, 1);
				$('.preloader').addClass('loaded').delay(900).fadeOut(500);
				if($('.preloader').hasClass('loaded')){
					$('.gr_preload_logo').css('top',logotop);
				}
			});
		}else{
			$( window ).load(function(){
				$("html, body").animate({ scrollTop: 0 }, 1);
				$('.preloader').addClass('loaded').delay(900).fadeOut(500);
				if($('.preloader').hasClass('loaded')){
					$('.gr_preload_logo').css('top',logotop);
				}
			});
		}
		*/
	}

	$(document).ready(function () {

		$("html, body").animate({ scrollTop: 0 }, 1);
		$('.preloader').addClass('loaded').delay(900).fadeOut(500);
		if ($('.preloader').hasClass('loaded')) {
			$('.gr_preload_logo').css('top', logotop);
		}

		$('body').css({
			'opacity': 1,
		});


		$('.gr_share_holder').on('click', '.gr_share_button', function () {
			$('.gr_share_holder .gr_share_cont').slideToggle(300);
		});


		$('.gr_compress').on("click", function () {
			$('.video_holder').toggleClass('video_expand');
			$(this).find('i').toggleClass('fa-compress').toggleClass('fa-expand');
		});






		/*	Box Search	*/

		$('.gr-search').on("click", function () {
			$('#gr_box_search.gr_box_overlay').addClass('gr_box_open_s');
			$('.gr_site_holder').addClass('gr_box_open');
		});
		$('#gr_box_search .gr_close, #gr_box_search .gr_close_over').on("click", function () {
			$('.gr_box_overlay').removeClass('gr_box_open_s');
			$('.gr_site_holder').removeClass('gr_box_open');
		});




		/*	Box Social	*/

		$('.gr-social').on("click", function () {
			$('#gr_box_social.gr_box_overlay').addClass('gr_box_open_s');
			$('.gr_site_holder').addClass('gr_box_open');
		});
		$('#gr_box_social .gr_close, #gr_box_social .gr_close_over').on("click", function () {
			$('#gr_box_social.gr_box_overlay').removeClass('gr_box_open_s');
			$('.gr_site_holder').removeClass('gr_box_open');
		});




		$("#load_more_port_masorny_posts").each(function () {
			$(this).click(function (e) {

				var url = tempurl + '/ajax.php';
				var $offset = $("#load_more_port_masorny_posts").attr('data-offset');
				var $load_posts_count = $("#load_more_port_masorny_posts").attr('data-load-posts_count');
				var $layout_mode = $("#load_more_port_masorny_posts").attr('data-layout-mode');
				var $style_mode = $("#load_more_port_masorny_posts").attr('data-style-mode');
				var $classs = $('.item').attr('class');

				$offset = parseInt($offset, 10)
				$load_posts_count = parseInt($load_posts_count, 10)

				var $gr_mas_post_count = $('.item').length;
				$('#load_more_port_masorny_posts:not(disabled)').html('<span style=""> <i class="fa fa-spinner fa-spin"></i></span>');
				$('#load_more_port_masorny_posts').addClass('do_not_hover');
				$.get(
					url, "gr_offset=" + $offset + "&gr_post_count=" + $gr_mas_post_count + "&gr_load_post_count=" + $load_posts_count + "&gr_style_mode=" + $style_mode + "&gr_layout_mode=" + $layout_mode + "&gr_classs=" + $classs,
					function (result, status) {

						$(result.new_posts).imagesLoaded(function () {

							$('.gr_grid_container').append($(result.new_posts));

							$offset = $("#load_more_port_masorny_posts").attr('data-offset', $offset + $load_posts_count);
							$('#gr_masorny_posts_per_page').html($('.item').length);
							$('#load_more_port_masorny_posts').html(result.loading)
							if (parseInt($('#gr_max_masorny_posts').html()) == $('.item').length) {
								$('#load_more_port_masorny_posts').html(result.all_loaded);
								$('#load_more_port_masorny_posts').addClass('disabled');
								$('.gr_load_more.disabled').click(function (e) {
									$('#load_more_port_masorny_posts:not(disabled)').html('<span style="">NO MORE PROJECTS</span>');
								})
							};



						});
					},
					"json"
				);
				setTimeout(function () {
					$('.gr_grid_container').isotope('reloadItems').isotope()

				}, 500);
				event.preventDefault();
			});
		});







		var owl = $('.owl-carousel');
		owl.owlCarousel({
			loop: true,
			autoplay: true,
			pagination: false,
			margin: 2,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
		});

		if ($('body').hasClass('search')) {
			$('.gr_sarch_table').css('height', $('.gr_media').outerHeight());
		}

		$('.wp-smiley').removeClass('img-responsive')
		$('.wp-caption img').removeAttr('height');
		$('.wp-caption img').removeAttr('width')
		$('.wp-caption').removeAttr('style');
		$('table:not(#wp-calendar)').addClass('table table-striped table-bordered')

		$('.gr_blog_post_content_holder img').addClass('img-responsive')
		$('.gr_blog_post_content_holder img').removeAttr('height');
		$('.gr_blog_post_content_holder img').removeAttr('width')

		$('.gr_widget_area img').addClass('img-responsive')
		$('.gr_widget_area img').removeAttr('height');
		$('.gr_widget_area img').removeAttr('width')

	});
});