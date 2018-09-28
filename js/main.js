var SELECT 					= 'custom-select'
  , SELECTED 				= 'custom-select__selected'
  , SELECTED_ACTIVE 		= 'custom-select__selected_active'
  , SELECT_CONTAINER 		= 'custom-select__container'
  , SELECT_CONTAINER_HIDE 	= 'custom-select__container_hide'
  , SELECT_ITEMS 			= 'custom-select__item'
  , SELECTED_ITEM 			= 'custom-select__item_active';


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
 * Управление показом вводимого пароля
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


$(document).ready(function () {
	$('.mail-table__info').click(function (e) {
		if (e.target.tagName == 'INPUT')
			return;
		
		$(this).parent().toggleClass('active');
	})
	
	$('.tournament__slider').addClass('owl-carousel');
	$('.tournament__slider').addClass('owl-theme');
	$('.tournament__slider').owlCarousel({
		items: 3,
		margin: 30,
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
//		nav:true,
	})
	
	
	$('.header-banner__slider').addClass('owl-carousel').addClass('owl-theme').owlCarousel({
		items: 1,
		rtl: false,
		loop: true,
//		nav:true,
	})
	
	
	
	$('.achievement').addClass('owl-carousel');
	$('.achievement').owlCarousel({
		loop: true,
//		stagePadding: 10,
		items: 5,
		margin: 20,
		
		nav:true,
		navText: ['', ''],
		dots: false
	})
	$('.p-bonuses__slider').addClass('owl-carousel');
	$('.p-bonuses__slider').addClass('profile-theme');
	$('.p-bonuses__slider').owlCarousel({
		loop: true,
//		stagePadding: 10,
		items: 5,
		margin: 20,
		
		nav:true,
		navText: ['', ''],
		dots: false
	})
	
})