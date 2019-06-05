var main = function() {
	$('.nav-icon').click(function() {
			console.log('icon clikced');
			$('.nav-icon').toggleClass('turn');
			$('nav ul').toggleClass('close');
			$('nav ul').toggleClass('open');
	});
};

$(document).ready(main);