import Flickity from 'flickity/dist/flickity.pkgd.min';
import VanillaModal from 'vanilla-modal';
import 'es5-shim';



(function () {

	document.addEventListener("DOMContentLoaded", function(){

		function isEmpty(obj) {
			for(var key in obj) {
				if(obj.hasOwnProperty(key))
					return false;
			}
			return true;
		}

		// Hero Slider

		let elem = document.querySelector('.hero__slider');

		if(elem === null) {
		} else {
			let flkty = new Flickity( elem, {
				cellAlign: 'left',
				contain: true,
				prevNextButtons: false
			});

		}


	});




})();

(function () {


	document.addEventListener("DOMContentLoaded", function(){

		function isEmpty(obj) {
			for(var key in obj) {
				if(obj.hasOwnProperty(key))
					return false;
			}
			return true;
		}


		// Articles slider

		let elem = document.querySelector('.articles__list');


		if(elem === null) {
		} else {

			let flkty = new Flickity( elem, {
				wrapAround: false,
				cellAlign: 'left',
				contain: false,
				prevNextButtons: true,
				pageDots: false
			});
		}

	});


})();


(function () {

	document.addEventListener("DOMContentLoaded", function(){

		let elemA = document.querySelector('.product-card__slider');


		if(elemA === null) {
		} else {

			let flktyA = new Flickity( elemA, {
				pageDots: false,
				prevNextButtons: false,
				contain: false

			});
		}

		let elemB = document.querySelector('.product-card__thumbs');

		if(elemB === null) {
		} else {

			let flktyB = new Flickity( elemB, {
				asNavFor: '.product-card__slider',
				pageDots: false,
				prevNextButtons: false

			});
		}



	});

})();


(function () {

	document.addEventListener("DOMContentLoaded", function(){

		// Modal
		const modal = new VanillaModal({});

	});

})();


(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

document.addEventListener("DOMContentLoaded", function(){

	function accordion({el, item = '[data-accordion]', activeClass = 'cat__item_active'} = {}) {
		const container = document.querySelector(el);
		const items = container.querySelectorAll(item);
		const onClick = ({currentTarget}) => {
			currentTarget.classList.toggle(activeClass);
			items.forEach(item =>
				(item !== currentTarget) && item.classList.remove(activeClass)
			);
		}
		items.forEach(item => item.addEventListener('click', onClick));
	}

	const options = {
		el:'.cat__list'
	};

	let elem = document.querySelector('.cat__item_active');

	if(elem === null) {
	} else {
		accordion(options);
	}


});




(function () {

	document.addEventListener("DOMContentLoaded", function(){

		var value,
			quantity = document.getElementsByClassName('quant');

			function createBindings(quantityContainer) {
				var quantityAmount = quantityContainer.getElementsByClassName('quant__input')[0];
				var increase = quantityContainer.getElementsByClassName('quant__incr')[0];
				var decrease = quantityContainer.getElementsByClassName('quant__decr')[0];
				increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
				decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
			}

			function init() {
				for (var i = 0; i < quantity.length; i++ ) {
							createBindings(quantity[i]);
				}
			};

			function increaseValue(event, quantityAmount) {
				value = parseInt(quantityAmount.value, 10);

				// console.log(quantityAmount, quantityAmount.value);

				value = isNaN(value) ? 0 : value;
				value++;
				quantityAmount.value = value;
			}

			function decreaseValue(event, quantityAmount) {
				value = parseInt(quantityAmount.value, 10);

				value = isNaN(value) ? 0 : value;
				if (value > 0) value--;

				quantityAmount.value = value;
			}

			if(quantity === null) {
			} else {

				init();

			}


	});

})();



