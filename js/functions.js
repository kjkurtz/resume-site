$(document).ready(function(){
    //TODO: add userAgent handling

    $('#top-home').fadeIn('slow');
    $(window).bind("scroll", function(event) {
    	$(":in-viewport").each(function() {
    		if($(this).attr('id') == 'landing-page') {
    			$('#navigation-home').css('background-color', '#166BEC');
    			$('#home-arrow').show();

    			$('#navigation-about').css('background-color', '#333333');
    			$('#about-arrow').hide();

    			$('#navigation-experience').css('background-color', '#333333');
    			$('#experience-arrow').hide();

    			$('#navigation-education').css('background-color', '#333333');
    			$('education-arrow').hide();

    			$('#navigation-contact').css('background-color', '#333333');
    			$('#contact-arrow').hide();
    		};

    		if($(this).attr('id') == 'about') {
    			$('#navigation-home').css('background-color', '#333333');
    			$('#home-arrow').hide();

    			$('#navigation-about').css('background-color', '#166BEC');
    			$('#about-arrow').show();

    			$('#navigation-experience').css('background-color', '#333333');
    			$('#experience-arrow').hide();

    			$('#navigation-education').css('background-color', '#333333');
    			$('education-arrow').hide();

    			$('#navigation-contact').css('background-color', '#333333');
    			$('#contact-arrow').hide();
    		};

    		if($(this).attr('id') == 'experience') {
    			$('#navigation-home').css('background-color', '#333333');
    			$('#home-arrow').hide();

    			$('#navigation-about').css('background-color', '#333333');
    			$('#about-arrow').hide();

    			$('#navigation-experience').css('background-color', '#166BEC');
    			$('#experience-arrow').show();

    			$('#navigation-education').css('background-color', '#333333');
    			$('#education-arrow').hide();

    			$('#navigation-contact').css('background-color', '#333333');
    			$('#contact-arrow').hide();
    		};

    		if($(this).attr('id') == 'education') {
    			$('#navigation-home').css('background-color', '#333333');
    			$('#home-arrow').hide();

    			$('#navigation-about').css('background-color', '#333333');
    			$('#about-arrow').hide();

    			$('#navigation-experience').css('background-color', '#333333');
    			$('#experience-arrow').hide();

    			$('#navigation-education').css('background-color', '#166BEC');
    			$('#education-arrow').show();

    			$('#navigation-contact').css('background-color', '#333333');
    			$('#contact-arrow').hide();
    		};

    		if($(this).attr('id') == 'contact') {
    			$('#navigation-home').css('background-color', '#333333');
    			$('#home-arrow').hide();

    			$('#navigation-about').css('background-color', '#333333');
    			$('#about-arrow').hide();

    			$('#navigation-experience').css('background-color', '#333333');
    			$('#experience-arrow').hide();

    			$('#navigation-education').css('background-color', '#333333');
    			$('#education-arrow').hide();

    			$('#navigation-contact').css('background-color', '#166BEC');
    			$('#contact-arrow').show();
    		};
    	});
    });
    $('#navigation-bar').data("top", $('#navigation-bar').offset().top);
    $(window).scroll(fixNavigation);
    $('#navigation-home').css('background-color', '#166BEC');
    $('#home-arrow').show();

    $('#navigation-home').css('background-color', '#333333');
    $('#about-arrow').hide();

    $('#navigation-home').css('background-color', '#333333');
    $('#experience-arrow').hide();

    $('#navigation-home').css('background-color', '#333333');
    $('education-arrow').hide();

    $('.navigation').click(function() {
    	var id = $(this).attr('id');
    	switch(id) {
    		case 'navigation-home':
    			$('html, body').animate({
    				scrollTop: $('#landing-page').offset().top-40
    			}, 1000);
    			break;
    		case 'navigation-about':
    			$('html, body').animate({
    				scrollTop: $('#about').offset().top-40
    			}, 1000);
    			break;
    		case 'navigation-experience':
    			$('html, body').animate({
    				scrollTop: $('#experience').offset().top-40
    			}, 1000);
    			break;
    		case 'navigation-education':
    			$('html, body').animate({
    				scrollTop: $('#education').offset().top-40
    			}, 1000);
    			break;
    		case 'navigation-contact':
    			$('html, body').animate({
    				scrollTop: $('#contact').offset().top-40
    			}, 1000);
    			break;
    	}
    });
});

function fixNavigation() {
	var $div = $('#navigation-bar');
	if($(window).scrollTop() > $div.data("top")) {
		$('#navigation-bar').css({'position':'fixed', 'top':'0', 'width':'100%'});
	} else {
		$('#navigation-bar').css({'position':'static', 'top':'auto', 'width':'100%'});
	}
}