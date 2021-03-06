/*
 * Кастомный выпадающий список
 */

var SELECT = 'custom-select',
	SELECTED = 'custom-select__selected',
	SELECTED_ACTIVE = 'custom-select__selected_active',
	SELECT_CONTAINER = 'custom-select__container',
	SELECT_CONTAINER_HIDE = 'custom-select__container_hide',
	SELECT_ITEMS = 'custom-select__item',
	SELECTED_ITEM = 'custom-select__item_active';


function closeAllSelect(element) {
	var x, y, i, arrNo = [];

	x = document.getElementsByClassName(SELECT_CONTAINER);
	y = document.getElementsByClassName(SELECTED);

	for (i = 0; i < y.length; i++) {
		if (element === y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove(SELECTED_ACTIVE);
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add(SELECT_CONTAINER_HIDE);
		}
	}
}

var selectArr,
	j,
	i,
	selElmnt,
	selectedItem,
	selectContainer,
	selectItem;

selectArr = document.getElementsByClassName(SELECT);

for (i = 0; i < selectArr.length; i++) {
	selElmnt = selectArr[i].getElementsByTagName('select')[0];

	selectedItem = document.createElement('DIV');
	selectedItem.classList.add(SELECTED);
	selectedItem.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

	if (selElmnt.hasAttribute('disabled')) {
		selectedItem.classList.add('disabled');
	}

	selectArr[i].appendChild(selectedItem);

	selectContainer = document.createElement('DIV');
	selectContainer.classList.add(SELECT_CONTAINER, SELECT_CONTAINER_HIDE);

	for (j = 0; j < selElmnt.length; j++) {
		selectItem = document.createElement('DIV');
		selectItem.innerHTML = selElmnt.options[j].innerHTML;
		selectItem.classList.add(SELECT_ITEMS);

		selectItem.addEventListener('click', function () {
			var y, i, k, s, h;

			s = this.parentNode.parentNode.getElementsByTagName('select')[0];
			h = this.parentNode.previousSibling;

			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML === this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName(SELECTED_ITEM);
					for (k = 0; k < y.length; k++) {
						y[k].classList.remove(SELECTED_ITEM);
					}
					this.classList.add(SELECTED_ITEM);
					break;
				}
			}
			h.click();
		});

		selectContainer.appendChild(selectItem);
	}
	selectArr[i].appendChild(selectContainer);

	selectedItem.addEventListener('click', function (e) {
		e.stopPropagation();

		if (this.classList.contains('disabled'))
			return;

		closeAllSelect(this);
		this.nextSibling.classList.toggle(SELECT_CONTAINER_HIDE);
		this.classList.toggle(SELECTED_ACTIVE);
	});
}

document.addEventListener('click', closeAllSelect);




/*
 * Управление отображения вводимого пароля
 */

var passFields,
	i, btn;

passFields = document.getElementsByClassName('form-control__password');

for (i = 0; i < passFields.length; i++) {
	btn = document.createElement('BUTTON');
	btn.type = 'button';
	btn.classList.add('form-control__show-pass');
	btn.innerHTML = 'Показать пароль';

	passFields[i].appendChild(btn);

	btn.addEventListener('click', function (e) {
		e.stopPropagation();

		var field;

		field = this.parentNode.getElementsByTagName('input')[0];

		if (field.getAttribute('type') === 'password') {
			field.setAttribute('type', 'text');
			this.classList.add('form-control__show-pass_view');
			this.innerHTML = 'Скрыть пароль';
		} else {
			field.setAttribute('type', 'password');
			this.classList.remove('form-control__show-pass_view');
			this.innerHTML = 'Показать пароль';
		}
	})
}








var cur = {},
	monName = [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь'
	];

function each(e, t) {
	if (("[object Object]" === Object.prototype.toString.call(e)) || void 0 === e.length) {
		for (var n in e)
			if (Object.prototype.hasOwnProperty.call(e, n) && !1 === t.call(e[n], n, e[n]))
				break
	} else
		for (var r = 0, o = e.length; r < o; r++) {
			var i = e[r];
			if (!1 === t.call(i, r, i))
				break
		}
	return e;
}

var Calendar = {
	calGetEvent: function (num) { // Нажатие на мероприятние
		console.log(this);
		//		this.classList.add('calendar__day_active');
	},
	calGetCurEvents: function (e) {
		if (!cur.calEvents[cur.calMon]) {
			return [];
		}

		var a = cur.calEvents[cur.calMon][e],
			t = [],
			r = new Date,
			n = r.getFullYear();

		for (var key in a) {
			t.push(a[key])
		}
		return t;
	},
	calGetMonth: function (m) {
		cur.calMon += m;

		if (cur.calMon > 12) {
			cur.calMon = 1;
			cur.calYear++;
		} else if (cur.calMon < 1) {
			cur.calMon = 12;
			cur.calYear--;
		}


		var a = new Date(cur.calYear, cur.calMon, 0).getDate(), // Количество дней в текущем месяце
			b = new Date(cur.calYear, cur.calMon - 1, 0).getDate(), // Количество дней в предыдущем месяце
			t = new Date(cur.calYear, cur.calMon - 1, 1), // Начало месяца
			r = (t.getDay() + 6) % 7, // Порядок ячейки первого дня месяца
			n = a + r, // Порядок ячейки последнего дня месяца
			l = Math.ceil(n / 7), // Количество строк
			d = new Date, // Текущая дата
			calTable,
			calRow,
			calItem;

		d = new Date(d.getFullYear(), d.getMonth(), d.getDate());

		calTable = document.createElement('TABLE');
		calTable.classList.add('calendar__table');

		for (var s = 0; l > s; s++) {

			calRow = document.createElement('TR');
			calRow.classList.add('calendar__row');

			for (var i = 0; 7 > i; i++) {
				var u = 7 * s + i - r + 1;

				calItem = document.createElement('TD');
				calItem.classList.add('calendar__day');

				if (u > 0 && a >= u) {

					var g = new Date(cur.calYear, cur.calMon - 1, u),
						eventIdArr = Calendar.calGetCurEvents(u);

					if (d.toString() == g.toString()) {
						calItem.classList.add('calendar__day_today');
					}

					if (eventIdArr[0]) {
						calItem.classList.add('calendar__day_event');

						if (d > g) { // Если событие уже прошло
							calItem.classList.add('calendar__day_event-old');
						}

						calItem.setAttribute('data-event', eventIdArr.toString());
						calItem.addEventListener('click', function () {
							this.classList.add('calendar__day_active');
							console.log(this.getAttribute('data-event').split(','));
						})

					}

					calItem.innerHTML = '<span>' + u + '</span>';

				} else if (u <= 0) {

					calItem.classList.add('calendar__day_last');
					calItem.innerHTML = '<span>' + (u + b) + '</span>';

				} else {

					calItem.classList.add('calendar__day_last');
					calItem.innerHTML = '<span>' + (u - a) + '</span>';

				}

				calRow.appendChild(calItem);

			}

			calTable.appendChild(calRow);

		}

		document.getElementById("bd_calendar_header").innerHTML = monName[cur.calMon - 1];
		document.getElementById("bd_calendar_table_wrap").innerHTML = '';
		document.getElementById("bd_calendar_table_wrap").appendChild(calTable);

		return 0;
	},
	init: function (e, a, t) {
		cur = {
			calEvents: t,
			calMon: e,
			calYear: a,
			calEventsById: {},
		}
		each(cur.calEvents, function (e, a) {
			each(a, function (e, a) {
				each(a, function (e, a) {
					cur.calEventsById[a[0]] = a
				})
			})
		})
	}
};





$(document).ready(function () {
	$('.tournament-item__banner').click(function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
	})

	$('.m-tournament-item__banner').click(function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
	})

	$('.tournament-item__banner').hover(function () {
		$('.tournament-item__banner').addClass('tournament-item__banner_overlay');
		$(this).addClass('tournament-item__banner_active')
	}, function () {
		$('.tournament-item__banner').removeClass('tournament-item__banner_overlay');
		$(this).removeClass('tournament-item__banner_active');
	})



	$('.mail-table__info').click(function (e) {
		if (e.target.tagName == 'INPUT')
			return;

		$(this).parent().toggleClass('active');
	})



	$('.tournament__slider').addClass('owl-carousel');
	$('.tournament__slider').addClass('owl-theme');
	$('.tournament__slider').owlCarousel({
		items: 1,
		margin: 30,
		loop: true,
		//		nav:true,
	})

	$('.tournament__slider-mobile').addClass('owl-carousel');
	$('.tournament__slider-mobile').addClass('owl-theme');
	$('.tournament__slider-mobile').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		//		nav:true,
	})

	$('.new-game__slider').addClass('owl-carousel');
	$('.new-game__slider').addClass('owl-theme');
	$('.new-game__slider').owlCarousel({
		stagePadding: 10,
		items: 5,
		margin: 20,
		loop: true,
	})

	$('.new-game__slider-mobile').addClass('owl-carousel');
	$('.new-game__slider-mobile').addClass('owl-theme');
	$('.new-game__slider-mobile').owlCarousel({
		stagePadding: 0,
		items: 3,
		margin: 6,
		loop: true,
		responsive: {
			586: {
				items: 4,
			},

			736: {
				items: 5,
			},
		}
	})


	$('.header-banner__slider').addClass('owl-carousel').addClass('owl-theme').owlCarousel({
		items: 1,
		rtl: false,
		loop: true,
		//		nav:true,
	})



	$('.achievement-slider').addClass('owl-carousel');
	$('.achievement-slider').owlCarousel({
		loop: true,
		items: 5,
		margin: 20,
		nav: true,
		navText: ['', ''],
		dots: false
	})

	$('.achievement-slider-mobile').addClass('owl-carousel');
	$('.achievement-slider-mobile').owlCarousel({
		loop: false,
		items: 5,
		margin: 30,
		autoWidth: true,

		stagePadding: 20,

		nav: false,
		dots: false,
		//		
		//		responsive: {
		//			490: {
		//				items: 3,
		//			},
		//			610: {
		//				items: 5,
		//			},
		//			730: {
		//				items: 6,
		//			}
		//		}
	})

	$('.p-bonuses__slider').addClass('owl-carousel');
	$('.p-bonuses__slider').addClass('profile-theme');
	$('.p-bonuses__slider').owlCarousel({
		loop: true,
		//		stagePadding: 10,
		items: 5,
		margin: 20,

		nav: true,
		navText: ['', ''],
		dots: false
	})

})
