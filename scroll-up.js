$(document).ready(function () {
	$(".up").click(function () {
		$("body, html").animate(
			{
				scrollTop: "0px",
			},
			300
		);
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
      $(".up").fadeIn(300);
		} else {
      $(".up").fadeOut(300);
    }
	});
});
