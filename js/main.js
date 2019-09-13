//nav animation
var t1 = new TimelineMax({
	paused: true
});

t1.to(".one", 0.4, {
	y: 6,
	rotation: 45,
	ease: Expo.easeInOut
});
t1.to(".two", 0.4, {
	y: -6,
	rotation: -45,
	ease: Expo.easeInOut,
	delay: -0.4
});

t1.to(".menu", 1, {
	top: "0%",
	ease: Expo.easeInOut,
	delay: -1
});

t1.staggerFrom(".menu ul li", 1, {
	x: -100,
	opacity: 0,
	ease: Expo.easeOut
}, 0.05);

t1.reverse();
$(document).on("click", ".toggle-btn", function () {
	t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function () {
	t1.reversed(!t1.reversed());
});

//intro text animation
var textWrapper = document.querySelector('.m13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false})
	.add({
		targets: '.m13 .letter',
		opacity: [0, 1],
		easing: "easeInOutQuad",
		duration: 1550,
		delay: (el, i) => 150 * (i + 1)
	}).add({
		targets: '.ml3',
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	   });
	   
//page transitions
let swupoptions = {
	animationSelector: '[class*="swup-transition-"]',
	cache:true,
	pageClassPrefix:'',
}