// document.addEventListener('DOMContentLoaded', () => {
// 	window.addEventListener("scroll", handleScroll);
// 	handleScroll();
// });

// let searchViewed, trendViewed, praiseViewed = false;
// function handleScroll() {
// 	const searchSection = document.querySelector('.BusquedaPeliculas');
// 	const praiseSection = document.querySelector('.peliculasAclamadas');
// 	const trendSection 	= document.querySelectorAll('.pelicula');

// 	if (searchViewed && trendViewed && praiseViewed) {
// 		window.removeEventListener("scroll", handleScroll);
// 		return;
// 	}
// 	if (!searchViewed && searchSection && isElementInViewport(searchSection)) {
// 		toAnimate = document.querySelector('.buscador');
// 		if (toAnimate) toAnimate.classList.add('animationFromBottom');
// 		searchViewed = true;
// 	}
// 	if (!praiseViewed && praiseSection && isElementInViewport(praiseSection)) {
// 		toAnimate = document.querySelector('.aclamadas');
// 		if (toAnimate) toAnimate.classList.add('animationFromBottom');
// 		praiseViewed = true;
// 	}

// 	if (!trendViewed) {
// 		const trendSectionStart 	= trendSection[0];
// 		const trendSectionMiddle 	= trendSection[Math.floor(trendSection.length / 2)];
// 		const trendSectionEnd 		= trendSection[trendSection.length - 1];

// 		if (trendSectionStart && isElementInViewport(trendSectionStart) ||
// 			trendSectionMiddle && isElementInViewport(trendSectionMiddle) ||
// 			trendSectionEnd && isElementInViewport(trendSectionEnd))
// 		{
// 			toAnimate = document.getElementById('tendencia');
// 			if (toAnimate) toAnimate.classList.add('animationFromBottom');
// 			trendViewed = true;
// 		}
// 	}
// }

// function isElementInViewport(el) {
// 	let rect = el.getBoundingClientRect();
// 	return (
// 		rect.top >= 0 &&
// 		rect.left >= 0 &&
// 		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// 	);
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const scrollToTopButton = document.getElementById("scrollToTop");

//   window.addEventListener("scroll", function () {
//     // Mostrar el botón después de hacer scroll un 30% de la pantalla
//     if (window.scrollY > window.innerHeight * 0.3) {
//       scrollToTopButton.style.display = "block";
//     } else {
//       scrollToTopButton.style.display = "none";
//     }
//   });

//   scrollToTopButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     // Desplazamiento suave hacia arriba
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Initialize scroll to top button functionality
  initScrollToTopButton();
});

let searchViewed, trendViewed, praiseViewed = false;

function handleScroll() {
  const searchSection = document.querySelector('.BusquedaPeliculas');
  const praiseSection = document.querySelector('.peliculasAclamadas');
  const trendSection = document.querySelectorAll('.pelicula');

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
    const trendSectionStart = trendSection[0];
    const trendSectionMiddle = trendSection[Math.floor(trendSection.length / 2)];
    const trendSectionEnd = trendSection[trendSection.length - 1];

    if (trendSectionStart && isElementInViewport(trendSectionStart) ||
      trendSectionMiddle && isElementInViewport(trendSectionMiddle) ||
      trendSectionEnd && isElementInViewport(trendSectionEnd)) {
      toAnimate = document.getElementById('tendencia');
      if (toAnimate) toAnimate.classList.add('animationFromBottom');
      trendViewed = true;
    }
  }

  // Handle scroll to top button visibility
  handleScrollToTopButtonVisibility();
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

function initScrollToTopButton() {
  const scrollToTopButton = document.getElementById("scrollToTop");

  scrollToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function handleScrollToTopButtonVisibility() {
  const scrollToTopButton = document.getElementById("scrollToTop");
  const scrollPosition = window.scrollY;
  const screenHeight = window.innerHeight;

  if (scrollPosition > screenHeight * 0.3) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }

  if (scrollPosition < screenHeight * 0.3) {
    scrollToTopButton.style.display = "none";
  }
}