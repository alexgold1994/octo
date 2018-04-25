$(function() {

	// Custom JS

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(this).parent().next().next().find(".main-mnu").slideToggle();
		return false;
	});

/*
$(".portfolio_animate_row1").animated("fadeInUp");
$(".portfolio_animate_row2").animated("fadeInUp");
$(".portfolio_animate_row3").animated("fadeInUp");
$(".portfolio_animate_row4").animated("fadeInUp");
$(".portfolio_animate_row5").animated("fadeInUp");
$(".portfolio_animate_row6").animated("fadeInUp");
$(".portfolio_animate_row7").animated("fadeInUp");
$(".portfolio_animate_row8").animated("fadeInUp");
*/

var mixer = mixitup('.container-mix', {
	selectors: {
		target: ".mix",
		control: ".filter1"
	}
});

var mixer = mixitup('.container-mix_2', {
	selectors: {
		target: ".mix2",
		control: ".filter2"
	}
});
	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$('.popup_content').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		midClick: true
		});

		
	$('.popup').magnificPopup({
		type: 'image',
		fixedContentPos: false,
		zoom: {
				enabled: true,
				duration: 400 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		}
		});

	$("a[href='#callback']").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});

$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	 });

	 $(".main-mnu a").mPageScroll2id();
	 
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

var settings = {
	//  set #id for validation email
	 emailID: '#inputEmail',
	//  set text for validation email
	 ErrorTextEmail: 'Введите коректный E-mail',
	 //  set #id for validation text
	 passwordID: '#inputText',
	 //  set #id for validation name
	 Custom: '#inputName',
	 //  set text for validation name
	ErrorTextCustom: 'Должно быть хотя бы 2 символа.',
	 //  set value required chars for validation custom form
	 MinCharsCustom: '2'
};
