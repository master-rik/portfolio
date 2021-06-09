const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: true,
	navPosition: 'bottom',
	autoHeight: false,


	responsive: {
		322: {
			nav: true,
			navPosition: 'bottom',
			edgePadding: 20,
			gutter: 20,
			items: 1,

		},
		992: {
			nav: true,
		}
	}
});
document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});



// меню

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.mastery__ratings-counter'),
	lines = document.querySelectorAll('.mastery__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});



$(document).ready(function () {

	//валидация

	$('.contacts__form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 30
			},
			text: {
				required: true,
				maxlength: 495
			},
			email: {
				required: true,
				email: true,
				maxlength: 100
			},
			checkbox: {
				required: true,
				minlength: 1
			},
		},

		errorLabelContainer: ".js-errors",

		messages: {
			"checkbox": "Пожалуйста, подтвердите ваше согласие",
			name: {
				required: "Введите свое имя",
				minlength: jQuery.validator.format("Введите не меньше {0} символов"),
				maxlength: jQuery.validator.format("Ограничьте свое сообщение {0} символами")
			},
			text: {
				required: "Введите текст",
				maxlength: jQuery.validator.format("Ограничьте свое сообщение {0} символами")
			},
			email: {
				required: "Введите свой e-mail",
				email: "Неправильно введен адресс почты",
				maxlength: jQuery.validator.format("Ограничьте свое сообщение {0} символами")
			}
		}
	});

	// отправка формы

	$('form').submit(function (e) {
		e.preventDefault();

		if (!$(this).valid()) {
			return;
		}


		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");


			$('form').trigger('reset');
		});
		//Modal
		$('.overlay, #thanks').fadeIn('slow');
		$('.modal__clouse').on('click', setTimeout(function () {
			$('.overlay,#thanks').fadeOut('slow');
		}, 4000));
		//end Modal
		return false;
	});

	//scroll

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1400) {
			$('.pageup').fadeIn();
		} else { $('.pageup').fadeOut(); }
	});

	$("a[href^='#']").click(function () {
		const _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});
});


