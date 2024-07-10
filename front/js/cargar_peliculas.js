// const ITEMSPERPAGE = 12;

// document.addEventListener('DOMContentLoaded', () => {
// 	const allPages = calculatePagination();
// 	addMovies(allPages[0]);

// 	let page = 0;

// 	const pagination = document.querySelector('.pagination');
// 	const botonAnterior = document.querySelector('.botonAnterior');
// 	const botonSiguiente = document.querySelector('.botonSiguiente');

// 	pagination.innerHTML = `${page + 1}/${allPages.length}`;

// 	if(allPages.length === 1){
// 		botonAnterior.style.display = 'none';
// 		botonSiguiente.style.display = 'none';
// 		pagination.innerHTML = '';
// 		return;
// 	}

// 	botonAnterior.addEventListener('click', () => {
// 		page--;
// 		if(page < 0) page = allPages.length - 1;
// 		addMovies(allPages[page]);
// 		pagination.innerHTML = `${page + 1}/${allPages.length}`;
// 	});

// 	botonSiguiente.addEventListener('click', () => {
// 		page++;
// 		if(page > allPages.length - 1) page = 0;
// 		addMovies(allPages[page]);
// 		pagination.innerHTML = `${page + 1}/${allPages.length}`;
// 	});
// });

// function addMovies(pageArray){
// 	const moviesContainer = document.querySelector('.peliculas');
// 	moviesContainer.innerHTML = '';

// 	pageArray.forEach(movie => {
// 		const imageElem = document.createElement('img');
// 		imageElem.src = movie.imagelink;
// 		imageElem.alt = movie.title;
// 		imageElem.classList.add('imgTendencia');
// 		imageElem.setAttribute('loading', 'lazy');

// 		const titleElem = document.createElement('h3');
// 		titleElem.innerHTML = movie.title;

// 		const url = './pages/detalle.html?movid=' + movie.id;
// 		const anchorElem = document.createElement('a');
// 		anchorElem.href = url;

// 		const movieDiv = document.createElement('div');
// 		movieDiv.classList.add('pelicula');

// 		anchorElem.appendChild(imageElem);
// 		anchorElem.appendChild(titleElem);
// 		movieDiv.appendChild(anchorElem);
// 		moviesContainer.appendChild(movieDiv);
// 	});
// }

// function calculatePagination(){
// 	const allMovies = mockDB();

// 	let fullPage = [];
// 	let moviesArray = [];
// 	let moviesCounter = 0;

// 	allMovies.forEach(movie => {
// 		fullPage.push(movie);
// 		moviesCounter++;
// 		if(moviesCounter === ITEMSPERPAGE || movie === allMovies[allMovies.length - 1]){
// 			moviesArray.push(fullPage);
// 			fullPage = [];
// 			moviesCounter = 0;
// 		}
// 	});

// 	return moviesArray;
// }

// function mockDB(){
// 	return [
// 		{
// 			id: 1,
// 			title: "The Beekeeper",
// 			imagelink: "./assets/img/peli_2.jpg"
// 		},
// 		{
// 			id: 2,
// 			title: "Badlan Hunters",
// 			imagelink: "./assets/img/peli_2.jpg"
// 		},
// 		{
// 			id: 3,
// 			title: "The Marvel 5",
// 			imagelink: "./assets/img/peli_3.jpg"
// 		},
// 		{
// 			id: 4,
// 			title: "Wonka",
// 			imagelink: "./assets/img/peli_4.jpg"
// 		},
// 		{
// 			id: 5,
// 			title: "Aquaman",
// 			imagelink: "./assets/img/peli_5.jpg"
// 		},
// 		{
// 			id: 6,
// 			title: "Migration",
// 			imagelink: "./assets/img/peli_6.jpg"
// 		},
// 		{
// 			id: 7,
// 			title: "60 Minutes",
// 			imagelink: "./assets/img/peli_7.jpg"
// 		},
// 		{
// 			id: 8,
// 			title: "Wish",
// 			imagelink: "./assets/img/peli_8.jpg"
// 		},
// 		{
// 			id: 9,
// 			title: "The Masked Saint",
// 			imagelink: "./assets/img/peli_9.jpg"
// 		},
// 		{
// 			id: 10,
// 			title: "Due Justice",
// 			imagelink: "./assets/img/peli_10.jpg"
// 		},
// 		{
// 			id: 11,
// 			title: "Orion and The Dark",
// 			imagelink: "./assets/img/peli_11.jpg"
// 		},
// 		{
// 			id: 12,
// 			title: "Infierno Chino",
// 			imagelink: "./assets/img/peli_12.jpg"
// 		},
// 		{
// 			id: 13,
// 			title: "Lift",
// 			imagelink: "./assets/img/peli_13.jpg"
// 		},
// 		{
// 			id: 14,
// 			title: "Attak",
// 			imagelink: "./assets/img/peli_14.jpg"
// 		},
// 		{
// 			id: 15,
// 			title: "Mutant Ghost Wargirl",
// 			imagelink: "./assets/img/peli_15.jpg"
// 		},
// 		{
// 			id: 16,
// 			title: "Poor Things",
// 			imagelink: "./assets/img/peli_16.jpg"
// 		},
// 		{
// 			id: 17,
// 			title: "The Five",
// 			imagelink: "./assets/img/peli_17.jpg"
// 		},
// 		{
// 			id: 18,
// 			title: "Trunk Locked In",
// 			imagelink: "./assets/img/peli_18.jpg"
// 		},
// 		{
// 			id: 19,
// 			title: "Anyone But You",
// 			imagelink: "./assets/img/peli_19.jpg"
// 		}
// 	];
// }

const ITEMSPERPAGE = 12;

document.addEventListener('DOMContentLoaded', () => {
  fetchMovies().then(allMovies => {
    const allPages = calculatePagination(allMovies);
    addMovies(allPages[0]);
    console.log(allMovies);
    let page = 0;

    const pagination = document.querySelector('.pagination');
    const botonAnterior = document.querySelector('.botonAnterior');
    const botonSiguiente = document.querySelector('.botonSiguiente');

    pagination.innerHTML = `${page + 1}/${allPages.length}`;

    if (allPages.length === 1) {
      botonAnterior.style.display = 'none';
      botonSiguiente.style.display = 'none';
      pagination.innerHTML = '';
      return;
    }

    botonAnterior.addEventListener('click', () => {
      page--;
      if (page < 0) page = allPages.length - 1;
      addMovies(allPages[page]);
      pagination.innerHTML = `${page + 1}/${allPages.length}`;
    });

    botonSiguiente.addEventListener('click', () => {
      page++;
      if (page > allPages.length - 1) page = 0;
      addMovies(allPages[page]);
      pagination.innerHTML = `${page + 1}/${allPages.length}`;
    });
  }).catch(error => {
    console.error('Error fetching movies:', error);
  });
});

function fetchMovies() {
  return fetch('http://localhost:8080/apimovies/peliculas')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
      return [];
    });
}

function addMovies(pageArray) {
  const moviesContainer = document.querySelector('.peliculas');
  moviesContainer.innerHTML = '';

  pageArray.forEach(movie => {
    const imageElem = document.createElement('img');
    imageElem.src = movie.imagen;
    imageElem.alt = movie.title;
    imageElem.classList.add('imgTendencia');
    imageElem.setAttribute('loading', 'lazy');

    const titleElem = document.createElement('h3');
    titleElem.innerHTML = movie.titulo;

    const url = './pages/detalle.html?movid=' + movie.id;
    const anchorElem = document.createElement('a');
    anchorElem.href = '../d:\Users\Central\Downloads\tnlcom55_cac24104.sqlassets/img/' + url;

    const movieDiv = document.createElement('div');
    movieDiv.classList.add('pelicula');

    anchorElem.appendChild(imageElem);
    anchorElem.appendChild(titleElem);
    movieDiv.appendChild(anchorElem);
    moviesContainer.appendChild(movieDiv);
  });
}

function calculatePagination(allMovies) {
  let fullPage = [];
  let moviesArray = [];
  let moviesCounter = 0;

  allMovies.forEach(movie => {
    fullPage.push(movie);
    moviesCounter++;
    if (moviesCounter === ITEMSPERPAGE || movie === allMovies[allMovies.length - 1]) {
      moviesArray.push(fullPage);
      fullPage = [];
      moviesCounter = 0;
    }
  });

  return moviesArray;
}
