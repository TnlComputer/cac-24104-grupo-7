document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el contenedor de películas
  const peliculasContainer = document.querySelector('.peliculas');

  // Obtén los botones de paginación
  const botonAnterior = document.querySelector('.botonAnterior');
  const botonSiguiente = document.querySelector('.botonSiguiente');

  let currentPage = 1;
  const moviesPerPage = 8;

  // Función para cargar películas desde el JSON
  function cargarPeliculas(pagina) {
    fetch('./assets/data/peliculas.json') // Ruta actualizada
      .then(response => response.json())
      .then(data => {
        // Calcula el índice inicial y final de las películas a mostrar
        const startIndex = (pagina - 1) * moviesPerPage;
        const endIndex = pagina * moviesPerPage;

        // No avanza de pagina si no hay mas peliculas que no se mostraron
        if (data.length + moviesPerPage - (currentPage * moviesPerPage) < 0) {
          currentPage--;
          return;
        };

        // Filtra las películas que se mostrarán en la página actual
        const peliculasPagina = mockDB.slice(startIndex, endIndex);

        // Limpia el contenedor de películas
        peliculasContainer.innerHTML = '';

        // Muestra las películas en el contenedor
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

          // Agrega un evento de clic a la película para redirigir al usuario a la página de detalles
          peliculaElement.addEventListener('click', function () {
            window.location.href = './pages/detalle.html'; // Ruta de la página de detalles
          });

          peliculasContainer.appendChild(peliculaElement);
        });
      })
      .catch(error => console.error('Error al cargar las películas:', error));
  }

  // Carga las películas cuando se carga la página
  cargarPeliculas(1);

  // Event listener para el botón Anterior
  botonAnterior.addEventListener('click', function () {
    if (currentPage > 1) {
      currentPage--;
      cargarPeliculas(currentPage);
    }
  });

  // Event listener para el botón Siguiente
  botonSiguiente.addEventListener('click', function () {
    currentPage++;
    cargarPeliculas(currentPage);
  });
});

