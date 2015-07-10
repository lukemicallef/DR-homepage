jQuery(document).ready(function($){

	$('.more-content').click(function(event) {
	    $(this).css('display','none');
	    $(this).parent().find('.half2').toggleClass('show');
	    $(this).parent().find('.half1').toggleClass('shrink');
	    $(this).parent().find('.less-content').css('display','block');
	    event.preventDefault();
	});

	$('.less-content').click(function(event) {
	    $(this).css('display','none');
	    $(this).parent().find('.half2').toggleClass('show');
	    $(this).parent().find('.half1').toggleClass('shrink');
	    $(this).parent().find('.more-content').css('display','block');
	    event.preventDefault();
	});


});