document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener("scroll", handleScroll);
	handleScroll();
});

let searchViewed, trendViewed, praiseViewed = false;
function handleScroll() {
	const searchSection = document.querySelector('.BusquedaPeliculas');
	const praiseSection = document.querySelector('.peliculasAclamadas');
	const trendSection 	= document.querySelectorAll('.pelicula');

	if (searchViewed && trendViewed && praiseViewed) {
		window.removeEventListener("scroll", handleScroll);
		return;
	}
	if (!searchViewed && searchSection && isElementInViewport(searchSection)) {
		toAnimate = document.querySelector('.buscador');
		if (toAnimate) toAnimate.classList.add('animationFromBottom');
		searchViewed = true;
	}
	if (!praiseViewed && praiseSection && isElementInViewport(praiseSection)) {
		toAnimate = document.querySelector('.aclamadas');
		if (toAnimate) toAnimate.classList.add('animationFromBottom');
		praiseViewed = true;
	}

	if (!trendViewed) {
		const trendSectionStart 	= trendSection[0];
		const trendSectionMiddle 	= trendSection[Math.floor(trendSection.length / 2)];
		const trendSectionEnd 		= trendSection[trendSection.length - 1];

		if (trendSectionStart && isElementInViewport(trendSectionStart) ||
			trendSectionMiddle && isElementInViewport(trendSectionMiddle) ||
			trendSectionEnd && isElementInViewport(trendSectionEnd))
		{
			toAnimate = document.getElementById('tendencia');
			if (toAnimate) toAnimate.classList.add('animationFromBottom');
			trendViewed = true;
		}
	}
}

function isElementInViewport(el) {
	let rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}