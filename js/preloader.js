
$(document).ready(function() {
	
	setTimeout(function() {
		console.log("Disabling preloader...")
		$('body').addClass('loaded');
	}, 3000);
	
});