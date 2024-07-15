let currentPage = 1;
let currMovies = {};

document.addEventListener("DOMContentLoaded", () => {
  const botonAnterior = document.querySelector('.botonAnterior');
  const botonSiguiente = document.querySelector('.botonSiguiente');
  const botonTodas = document.querySelector('.botonTodas');

  botonAnterior.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      mostrarPeliculas(currentPage);
    }
  });

  botonSiguiente.addEventListener('click', () => {
    currentPage++;
    mostrarPeliculas(currentPage);
  });

  botonTodas.addEventListener('click', () => {
    obtenerPeliculas();
    botonTodas.classList.add('hideBotonTodas');
    const titleElem = document.querySelector('.tituloTendencia');
    titleElem.innerHTML = "Las tendencias de hoy";
  });

  obtenerPeliculas();

  const buscarPeli = document.getElementById('busquedaPeliculas');
  buscarPeli.addEventListener('submit', (e) => {
    e.preventDefault();

    let searchValue = document.getElementById('buscarForm').value;
    if (!searchValue || !searchValue.trim()) {
      console.error('Valor de busqueda vacio');
      return;
    }

    searchMovies(searchValue);
  });
});

function obtenerPeliculas() {
  fetch('http://localhost:8080/apimovies/peliculas')
    .then(response => response.json())
    .then(data => {
      currMovies = data;
      mostrarPeliculas(1);
    })
    .catch(error => console.error('Error al cargar las películas:', error));
}


function mostrarPeliculas(pagina) {
  const peliculasContainer = document.querySelector('.peliculas');

  const data = currMovies;

  if (!data || data.length < 1) {
    peliculasContainer.innerHTML = '';
    const emptyElem = document.createElement('h4');
    emptyElem.textContent = "No se encontraron peliculas";
    peliculasContainer.appendChild(emptyElem);
    return;
  }

  const moviesPerPage = 8;
  const startIndex = (pagina - 1) * moviesPerPage;
  const endIndex = pagina * moviesPerPage;

  if (data.length + moviesPerPage - (currentPage * moviesPerPage) < 0) {
    currentPage--;
    return;
  };

  peliculasContainer.innerHTML = '';
  const peliculasPagina = data.slice(startIndex, endIndex);

  peliculasPagina.forEach(pelicula => {
    const peliculaElement = document.createElement('div');
    peliculaElement.classList.add('pelicula');

    const imagenElement = document.createElement('img');
    imagenElement.classList.add('imgTendencia');
    imagenElement.src = './assets/img/' + pelicula.imagen;
    imagenElement.alt = pelicula.alt;
    peliculaElement.appendChild(imagenElement);

    const tituloElement = document.createElement('h3');
    tituloElement.textContent = pelicula.titulo;
    peliculaElement.appendChild(tituloElement);

    peliculaElement.addEventListener('click', () => {
      window.location.href = './pages/detalle.html';
    });

    peliculasContainer.appendChild(peliculaElement);
  });
}

async function searchMovies(searchValue) {
  const searchTerm = {
    searchString: searchValue
  };

  try {
    const response = await fetch("http://localhost:8080/apimovies/peliculas/buscar", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(searchTerm)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    document.getElementById('tendencia').scrollIntoView({ behavior: 'smooth' });
    const titleElem = document.querySelector('.tituloTendencia');
    titleElem.innerHTML = "Resultados de busqueda";

    const data = await response.json();
    currMovies = data;
    mostrarPeliculas(1);

    const todasButton = document.querySelector('.botonTodas');
    todasButton.classList.remove('hideBotonTodas');
  } catch (error) {
    console.error('Error al buscar películas:', error);
  }
}
