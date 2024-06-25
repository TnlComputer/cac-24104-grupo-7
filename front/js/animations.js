document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight * 0.3) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

let searchViewed = false;
let trendViewed = false;
let praiseViewed = false;

function handleScroll() {
  if (searchViewed && trendViewed && praiseViewed) {
    window.removeEventListener("scroll", handleScroll);
    return;
  }

  const searchSection = document.querySelector('.BusquedaPeliculas');
  const praiseSection = document.querySelector('.aclamadas');
  const trendSections = document.querySelectorAll('.tendencia .pelicula');

  if (!searchViewed && searchSection && isElementInViewport(searchSection)) {
    const toAnimate = document.querySelector('.buscador');
    if (toAnimate) toAnimate.classList.add('animationFromBottom');
    searchViewed = true;
  }

  if (!praiseViewed && praiseSection && isElementInViewport(praiseSection)) {
    const toAnimate = document.querySelector('.aclamadas');
    if (toAnimate) toAnimate.classList.add('animationFromBottom');
    praiseViewed = true;
  }

  if (!trendViewed && trendSections.length > 0) {
    const trendSectionStart = trendSections[0];
    const trendSectionEnd = trendSections[trendSections.length - 1];

    if (isElementInViewport(trendSectionStart) || isElementInViewport(trendSectionEnd)) {
      const toAnimate = document.getElementById('tendencia');
      if (toAnimate) toAnimate.classList.add('animationFromBottom');
      trendViewed = true;

      // Agrega la animación a cada película dentro de la sección de tendencias
      trendSections.forEach(pelicula => {
        pelicula.classList.add('animationFromBottom');
      });
    }
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
