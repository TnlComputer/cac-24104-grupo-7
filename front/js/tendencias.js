document.addEventListener("DOMContentLoaded", function () {
  const peliculasContainer = document.querySelector('.peliculas');

  const botonAnterior = document.querySelector('.botonAnterior');
  const botonSiguiente = document.querySelector('.botonSiguiente');

  let currentPage = 1;
  const moviesPerPage = 8;

  function cargarPeliculas(pagina) {
    fetch('./assets/data/peliculas.json')
      .then(response => response.json())
      .then(data => {
        const startIndex = (pagina - 1) * moviesPerPage;
        const endIndex = pagina * moviesPerPage;

        if (data.length + moviesPerPage - (currentPage * moviesPerPage) < 0) {
          currentPage--;
          return;
        };

        const peliculasPagina = data.slice(startIndex, endIndex);

        peliculasContainer.innerHTML = '';

        peliculasPagina.forEach(pelicula => {
          const peliculaElement = document.createElement('div');
          peliculaElement.classList.add('pelicula');

          const imagenElement = document.createElement('img');
          imagenElement.classList.add('imgTendencia');
          imagenElement.src = pelicula.imagen;
          imagenElement.alt = pelicula.alt;
          peliculaElement.appendChild(imagenElement);

          const tituloElement = document.createElement('h3');
          tituloElement.textContent = pelicula.titulo;
          peliculaElement.appendChild(tituloElement);

          peliculaElement.addEventListener('click', function () {
            window.location.href = './pages/detalle.html';
          });

          peliculasContainer.appendChild(peliculaElement);
        });
      })
      .catch(error => console.error('Error al cargar las películas:', error));
  }

  cargarPeliculas(1);

  botonAnterior.addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      cargarPeliculas(currentPage);
    }
  });

  botonSiguiente.addEventListener('click', function () {
    currentPage++;
    cargarPeliculas(currentPage);
  });
});

