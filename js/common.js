$(function() {

	// Custom JS
	var buttons = document.getElementsByClassName('butt'),
	forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
	b.addEventListener('click', addElement);
});

function addElement(e) {
	var addDiv  = document.createElement('div'),
			mValue  = Math.max(this.clientWidth, this.clientHeight),
			rect    = this.getBoundingClientRect();
			sDiv    = addDiv.style,
			px      = 'px';

	sDiv.width  = sDiv.height = mValue + px;
	sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
	sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

	addDiv.classList.add('pulse');
	this.appendChild(addDiv);
}

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(this).parent().next().next().find(".main-mnu").slideToggle();
		return false;
	});

$('.parallax-window').parallax({imageSrc: '../img/octopus.jpg'});
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
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
		fixedContentPos: false,
		midClick: true
		
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

$(".modal-btn").each(function(i) {
		$(this).find("a").attr("href", "#callback");
	 });

	 $(".main-mnu a, .top").mPageScroll2id({ autoScrollSpeed: false });
	 
});

$(".mouse-icon").click(function() {
	$("html, body").animate({
		scrollTop : $("#print").offset().top
	}, 800);
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

$(window).on("load", function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
}); 

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
