var main = function() {
	$('.nav-icon').click(function() {
			console.log('icon clikced');
			$('.nav-icon').toggleClass('turn');
			$('nav ul').toggleClass('close');
	});
};

$(document).ready(main);