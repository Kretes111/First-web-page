$(document).ready(function () {


	//page load effects
	$("#wrapper").css("display", "block");
	$("#wrapper").addClass("animated fadeIn");

	setTimeout(function () {
		$(".carousel-caption h1").css("display", "block");
		$(".carousel-caption h1").addClass("animated slideInDown");
	}, 700);

	setTimeout(function () {
		$(".carousel-caption p").css("display", "block");
		$(".carousel-caption p").addClass("animated slideInUp");
	}, 700);

	setTimeout(function () {
		$(".carousel-caption h1, .carousel-caption p").removeClass("animated slideInUp");
	}, 1600);

	setTimeout(function () {
		$("nav li:nth-child(4)").css("display", "block");
		$("nav li:nth-child(4)").css("animation-duration", ".8s");
		$("nav li:nth-child(4").addClass("animated fadeInLeftBig");
	}, 1000);

	setTimeout(function () {
		$("nav li:nth-child(3)").css("display", "block");
		$("nav li:nth-child(3)").css("animation-duration", ".8s");
		$("nav li:nth-child(3").addClass("animated fadeInLeftBig");
	}, 1100);

	setTimeout(function () {
		$("nav li:nth-child(2)").css("display", "block");
		$("nav li:nth-child(2)").css("animation-duration", ".8s");
		$("nav li:nth-child(2").addClass("animated fadeInLeftBig");
	}, 1200);

	setTimeout(function () {
		$("nav li:nth-child(1)").css("display", "block");
		$("nav li:nth-child(1)").css("animation-duration", ".8s");
		$("nav li:nth-child(1").addClass("animated fadeInLeftBig");
	}, 1300);

	setTimeout(function () {
		$("#logo").css("display", "block");
		$("#logo").addClass("animated fadeInLeftBig");
	}, 1400);
	//	end page load effects



	//navbar and bottons effects
	//	$("#myNavbar a").click(function () {
	//		$("#myNavbar.activate").removeClass("activate");
	//		$(this).addClass("activate");
	//	});

	$(window).scroll(function () {
		let scrollDistance = $(window).scrollTop();
		$(".section").each(function (i) {
			if ($(this).position().top - 75 <= scrollDistance) {
				$(".nav-link.activate").removeClass("activate");
				$(".nav-link").eq(i).addClass("activate");
			}
		});

		if ($(window).scrollTop() > 10) {
			$(".navbar").addClass("solid");
		} else {
			$(".navbar").removeClass("solid");
		}
	});

	//end navbar and bottons effects
	
	

});
