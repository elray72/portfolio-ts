const name = 'home';
const config = {
	direction: 'vertical',
	centeredSlides: true,
	containerModifierClass: `${name}__swiper--`,
	containerClass: `${name}__swiper`,
	wrapperClass: `${name}__swiper-wrapper`,
	slideClass: `${name}__section`,
	slideActiveClass: `${name}__section--active`,
	slideNextClass: `${name}__section--next`,
	pagination: {
		el: `.${name}__pagination`,
		clickable: true,
		bulletClass: `${name}__bullet`,
		bulletActiveClass: `${name}__bullet--active`,
		modifierClass: `${name}__pagination--`,
		clickableClass: `${name}__pagination--clickable`
	},
	a11y: {
		enabled: false
	},
	mousewheel: true
};

export default config;
