$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
      $(".up").fadeIn(300);
		} else {
      $(".up").fadeOut(300);
    }
	});
});
