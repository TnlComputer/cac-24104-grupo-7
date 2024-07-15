const api = "http://localhost:8080/apimovies";

document.addEventListener('DOMContentLoaded', () => {

  const isLogged = window.sessionStorage.getItem("cac_java_logged")
  if (!isLogged || isLogged === "false") window.location.href = '../pages/login.html';

  const isAdmin = window.sessionStorage.getItem("cac_java_isAdmin");
  if (!isAdmin || isAdmin === "false") window.location.href = '../pages/login.html';;

  // searchForm = document.getElementById('searchForm');
  // searchForm.addEventListener('submit', e => handleSearchForm(e));

  const buttonMovies = document.getElementById('moviesSectionButton');
  buttonMovies.addEventListener('click', () => selectMoviesButton());
  const buttonUsers = document.getElementById('usersSectionButton');
  buttonUsers.addEventListener('click', () => selectUsersButton());

  const editUserForm = document.getElementById('editUserForm');
  editUserForm.addEventListener('reset', () => selectUsersButton());
  editUserForm.addEventListener('submit', e => handleEditUserForm(e));

  selectMoviesButton();
});

async function handleSearchForm(e) {
  e.preventDefault();
  const searchText = document.getElementById('searchBox').value.trim();
  if (!searchText) return;
  // todo: display error or something

  const buttonMovies = document.getElementById('moviesSectionButton');
  const buttonUsers = document.getElementById('usersSectionButton');
  const searchTypeMovies = document.querySelector('#searchMovies:checked');
  if (searchTypeMovies) {
    const movies = await getMovies();
    if (!movies) return;
    // todo: display message saying no movies were found

    let myArr = [];
    movies.forEach(movie => {
      if (movie.titulo.includes(searchText)) myArr.push(movie);
    });
    displayMovies(myArr);
    buttonUsers.style.backgroundColor = bgColor;
    buttonMovies.style.backgroundColor = 'red';
  }
  else {
    const users = await getUsers();
    if (!users) return;
    // todo: display message saying no users were found

    let myArr = [];
    users.forEach(user => {
      if (user.nombre.includes(searchText)) myArr.push(user);
    });
    displayUsers(myArr);
    buttonMovies.style.backgroundColor = bgColor;
    buttonUsers.style.backgroundColor = 'red';
  }
}

const root = document.querySelector(':root');
const bgColor = getComputedStyle(root).getPropertyValue('--bg-color').trim();

async function selectMoviesButton() {
  const buttonMovies = document.getElementById('moviesSectionButton');
  const buttonUsers = document.getElementById('usersSectionButton');
  buttonUsers.style.backgroundColor = bgColor;
  buttonMovies.style.backgroundColor = 'red';
  const movies = await getMovies();
  displayMovies(movies);
}

async function selectUsersButton() {
  const buttonUsers = document.getElementById('usersSectionButton');
  const buttonMovies = document.getElementById('moviesSectionButton');
  buttonMovies.style.backgroundColor = bgColor;
  buttonUsers.style.backgroundColor = 'red';
  const users = await getUsers();
  displayUsers(users);
}


async function getMovies() {
  try {
    const response = await fetch('http://localhost:8080/apimovies/peliculas');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar las películas:', error);
    return [];
  }
}

async function getUsers() {
  try {
    const response = await fetch('http://localhost:8080/apimovies/usuarios');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los usuarios:', error);
    return [];
  }
}

function displayMovies(movies) {
  hideAll();
  const displayContainer = document.querySelector('.displaySection');
  displayContainer.style.display = 'block';

  const moviesContainer = document.createElement('div');
  moviesContainer.classList.add('moviesContainer');

  const crearPeliculaElement = document.createElement('div');
  crearPeliculaElement.classList.add('createMovieDiv');

  const addIconElement = document.createElement('i');
  addIconElement.classList.add('fas');
  addIconElement.classList.add('fa-plus');
  addIconElement.classList.add('fa-4x');
  crearPeliculaElement.appendChild(addIconElement);
  crearPeliculaElement.addEventListener('click', () => displayCreateMovie())

  moviesContainer.appendChild(crearPeliculaElement);

  movies.forEach(pelicula => {

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const imageElement = document.createElement('img');
    imageElement.classList.add('movieImg');
    imageElement.src = "../assets/img/" + pelicula.imagen;
    imageElement.alt = pelicula.titulo;
    movieElement.appendChild(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = pelicula.titulo;
    movieElement.appendChild(titleElement);

    const editIconElement = document.createElement('i');
    editIconElement.classList.add('fas');
    editIconElement.classList.add('fa-pen-to-square');
    editIconElement.addEventListener('click', () => displayEditMovie(pelicula));
    movieElement.appendChild(editIconElement);

    const deleteIconElement = document.createElement('i');
    deleteIconElement.classList.add('fas');
    deleteIconElement.classList.add('fa-trash');
    deleteIconElement.addEventListener('click', () => deleteMovie(pelicula.idPelicula, pelicula.titulo));
    movieElement.appendChild(deleteIconElement);

    moviesContainer.appendChild(movieElement);
  });

  displayContainer.appendChild(moviesContainer);
}

function displayUsers(users) {
  hideAll();
  const displayContainer = document.querySelector('.displaySection');
  displayContainer.style.display = 'block';

  const usersContainer = document.createElement('div');
  usersContainer.classList.add('usersContainer');

  users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.classList.add('user');

    if (user.isAdmin === 1) {
      userElement.classList.add('isAdmin');
    }

    const nombreElement = document.createElement('h3');
    nombreElement.innerHTML = `${user.nombre} ${user.apellido}`;
    userElement.appendChild(nombreElement);

    const editIconElement = document.createElement('i');
    editIconElement.classList.add('fas');
    editIconElement.classList.add('fa-pen-to-square');
    editIconElement.addEventListener('click', () => displayEditUser(user));
    userElement.appendChild(editIconElement);

    const deleteIconElement = document.createElement('i');
    deleteIconElement.classList.add('fas');
    deleteIconElement.classList.add('fa-trash');
    deleteIconElement.addEventListener('click', () => deleteUser(user.idUsuario, `${user.nombre} ${user.apellido}`));
    userElement.appendChild(deleteIconElement);

    usersContainer.appendChild(userElement);
  });

  displayContainer.appendChild(usersContainer);
}

function displayCreateMovie() {
  hideAll();
  const displayContainer = document.querySelector('.displaySection');
  displayContainer.style.display = 'block';

  const createMovieElem = document.querySelector('.createMovie');
  createMovieElem.style.display = 'block';

  const form = document.createElement('form');
  form.id = 'createMovieForm';
  form.innerHTML = `
      <h2>Crear Nueva Película</h2>
      <input type="text" id="movieTitle" placeholder="Título" title="Ingrese el título de la película" required>
      <input type="file" id="movieImage" accept="image/*" title="Seleccione la imagen de la película" required>
      <input type="text" id="movieGenre" placeholder="Genero" title="Ingrese el Genero de la película" required>
      <input type="text" id="movieDirector" placeholder="Director" title="Ingrese el Director de la película" required>
      <div class="duration-input">
          <label for="movieDurationHours">Duración:</label>
          <input type="time" id="movieDuration" required>
      </div>
      <div class="release-date-input">
          <label for="movieReleaseDate">Fecha de estreno:</label>
          <input type="date" id="movieReleaseDate" required>
      </div>
      <textarea id="movieDescription" placeholder="Descripción" required title="Ingrese una descripción de la película"></textarea>
      <div class="form-buttons">
          <button type="submit">Crear película</button>
          <button type="button" id="cancelCreateMovie">Cancelar</button>
      </div>
  `;

  createMovieElem.innerHTML = '';
  createMovieElem.appendChild(form);

  form.addEventListener('submit', handleCreateMovieForm);

  document.getElementById('cancelCreateMovie').addEventListener('click', () => {
    selectMoviesButton();
  });
}
function getFileNameAndExtension(file) {
  const name = file.name;
  const lastDotIndex = name.lastIndexOf('.');
  return {
    name: name.substring(0, lastDotIndex),
    extension: name.substring(lastDotIndex + 1)
  };
}
async function handleCreateMovieForm(e) {
  e.preventDefault();

  const imageFile = document.getElementById('movieImage').files[0];
  const { name, extension } = getFileNameAndExtension(imageFile);
  const imageName = `${name}.${extension}`;

  const movieData = {
    titulo: document.getElementById('movieTitle').value,
    imagen: imageName,
    genero: document.getElementById('movieGenre').value,
    director: document.getElementById('movieDirector').value,
    duracion: document.getElementById('movieDuration').value + ":00",
    estreno: document.getElementById('movieReleaseDate').value,
    descripcion: document.getElementById('movieDescription').value,
    isActive: true
  };
  console.log('Datos a enviar:', JSON.stringify(movieData));

  try {
    const response = await fetch(`` + api + `/peliculas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(movieData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    console.log('Película creada exitosamente con ID:', data);
    selectMoviesButton();
  } catch (error) {
    console.error('Error al crear la película:', error);
  }
}

function displayEditMovie(movie) {
  hideAll();
  const displayContainer = document.querySelector('.displaySection');
  displayContainer.style.display = 'block';

  const editMovieElem = document.querySelector('.editMovie');
  editMovieElem.style.display = 'block';

  document.getElementById('editMovieId').value = movie.idPelicula;
  document.getElementById('editMovieTitle').value = movie.titulo;
  document.getElementById('editMovieGenre').value = movie.genero;
  document.getElementById('editMovieDirector').value = movie.director;
  document.getElementById('editMovieDuration').value = movie.duracion.slice(0, 5);
  document.getElementById('editMovieReleaseDate').value = movie.estreno;
  document.getElementById('editMovieDescription').value = movie.descripcion;
  document.getElementById('editMovieImage2').value = movie.imagen
  document.getElementById('isActive').checked = movie.isActive;

  //console.log(movie.idPelicula)

  document.getElementById('editMovieForm').addEventListener('submit', handleEditMovieForm);
  document.getElementById('editMovieCancel').addEventListener('click', selectMoviesButton);
}

async function handleEditMovieForm(e) {
  e.preventDefault();
  const movieId = parseInt(document.getElementById('editMovieId').value);
  console.log(movieId);
  const movieIsActive = document.getElementById('isActive');
  const x = movieIsActive ? movieIsActive.checked = true : movieIsActive.checked = false

  const movieData = {
    idPelicula: movieId,
    titulo: document.getElementById('editMovieTitle').value,
    imagen: document.getElementById('editMovieImage2').value,
    genero: document.getElementById('editMovieGenre').value,
    director: document.getElementById('editMovieDirector').value,
    duracion: document.getElementById('editMovieDuration').value + ":00",
    estreno: document.getElementById('editMovieReleaseDate').value,
    descripcion: document.getElementById('editMovieDescription').value,
    isActive: x
  };

  try {
    const response = await fetch("http://localhost:8080/apimovies/peliculas", {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(movieData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    console.log('Película actualizada exitosamente');
    selectMoviesButton(); // Volver a la lista de películas
  } catch (error) {
    console.error('Error al actualizar la película:', error);
  }
}

async function deleteMovie(idPelicula, name) {
  const movieData = {
    idPelicula,
  };
  console.log(movieData);

  if (confirm(`Esta seguro que desea eliminar la pelicula '${name}'?`)) {
    try {
      const response = await fetch("http://localhost:8080/apimovies/peliculas", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      console.log('Película fue eliminada exitosamente');
      selectMoviesButton(); // Volver a la lista de películas
    } catch (error) {
      console.error('Error al eliminar la película:', error);
    }
  }
}

function displayEditUser(user) {
  hideAll();
  const displayContainer = document.querySelector('.displaySection');
  displayContainer.style.display = 'block';

  const editUserElem = document.querySelector('.editUser');
  editUserElem.style.display = 'block';

  document.getElementById('editUserId').value = user.idUsuario;
  document.getElementById('editUserName').value = user.nombre;
  document.getElementById('editUserSurname').value = user.apellido;
  document.getElementById('editUserEmail').value = user.email;
  document.getElementById('editUserPassword').value = user.clave;
  document.getElementById('editUserDOB').value = user.fecha_nacimiento;
  document.getElementById('editUserCountry').value = user.id_pais;
  document.getElementById('editUserAdmin').checked = user.isAdmin;
  document.getElementById('editIsActive').checked = user.isActive;

  document.getElementById('editUserForm').addEventListener('submit', handleEditUserForm);
  document.getElementById('editUserCancel').addEventListener('click', selectUsersButton);
}

async function handleEditUserForm(e) {
  e.preventDefault();
  const userId = parseInt(document.getElementById('editUserId').value);
  // console.log(userId);
  const userIsAdmin = document.getElementById('editUserAdmin');
  const xUserAdmin = userIsAdmin ? userIsAdmin.checked = true : userIsAdmin.checked = false

  const userIsActive = document.getElementById('editIsActive');
  const xActive = userIsActive ? userIsActive.checked = true : userIsActive.checked = false

  const userData = {
    idUsuario: userId,
    nombre: document.getElementById('editUserName').value,
    apellido: document.getElementById('editUserSurname').value,
    email: document.getElementById('editUserEmail').value,
    clave: document.getElementById('editUserPassword').value,
    fecha_nacimiento: document.getElementById('editUserDOB').value,
    id_pais: document.getElementById('editUserCountry').value,
    isAdmin: xUserAdmin,
    isActive: xActive
  };

  try {
    const response = await fetch("http://localhost:8080/apimovies/usuarios", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    console.log(response)
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    console.log('Usuario actualizado exitosamente');
    selectUsersButton();
  } catch (error) {
    console.error('Error al actualizar el Usuario:', error);
  }
}

async function deleteUser(idUsuario, fullname) {
  const userData = {
    idUsuario,
  };

  console.log(userData);

  if (confirm(`¿Está seguro que desea eliminar al usuario '${fullname}'?`)) {
    try {
      const response = await fetch("http://localhost:8080/apimovies/usuarios", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      console.log('Usuario fue eliminado exitosamente');
      selectUsersButton();
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }
}

function hideAll() {
  const displayContainer = document.querySelector('.displaySection');
  const createMovieContainer = document.querySelector('.createMovie');
  const editMovieContainer = document.querySelector('.editMovie');
  const editUsersContainer = document.querySelector('.editUser');
  displayContainer.style.display = 'none';
  displayContainer.innerHTML = '';
  createMovieContainer.style.display = 'none';
  editMovieContainer.style.display = 'none';
  editUsersContainer.style.display = 'none';
}