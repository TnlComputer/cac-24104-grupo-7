const api = "google.com";

document.addEventListener('DOMContentLoaded', () => {

	searchForm = document.getElementById('searchForm');
	searchForm.addEventListener('submit', e => handleSearchForm(e));

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
			if(movie.titulo.includes(searchText)) myArr.push(movie);
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
			if(user.nombre.includes(searchText)) myArr.push(user);
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
		const response = await fetch('../assets/data/peliculas.json');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error al cargar las películas:', error);
		return [];
	}
}

async function getUsers() {
	try {
		const response = await fetch('../assets/data/usuarios.json');
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
        imageElement.src = pelicula.imagen;
        imageElement.alt = pelicula.alt;
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
		deleteIconElement.addEventListener('click', () => deleteMovie(pelicula.id, pelicula.titulo));
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

		if (user.id_role === 2) {
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
		deleteIconElement.addEventListener('click', () => deleteUser(user.id, `${user.nombre} ${user.apellido}`));
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
}

function displayEditMovie(movie) {
	hideAll();
	const displayContainer = document.querySelector('.displaySection');
	displayContainer.style.display = 'block';

	const editMovieElem = document.querySelector('.editMovie');
	editMovieElem.style.display = 'block';
}

async function deleteMovie(movieId, movieTitle) {
	if (confirm(`Esta seguro que desea eliminar la pelicula '${movieTitle}'?`)) {
		try {
			const response = await fetch(`${api}/movies/delete/${movieId}`);
			const data = await response.json();
			if (!data.includes('error')) {
				console.log('Pelicula eliminada exitosamente');
				window.location.href = '../pages/administracion.html';
			} else {
				throw new Error(JSON.stringify(data));
			}
		} catch (error) {
			console.error('Error al eliminar la pelicula:', error);
		}
	}
}

function displayEditUser(user) {
	hideAll();
	const displayContainer = document.querySelector('.displaySection');
	displayContainer.style.display = 'block';

	const editUserElem = document.querySelector('.editUser');
	editUserElem.style.display = 'block';

	const userFirstname = document.getElementById('editUserName');
	userFirstname.value = user.nombre;
	userFirstname.setAttribute('data-user-id', user.id);
	const userLastname = document.getElementById('editUserSurname');
	userLastname.value = user.apellido;
	const userEmail = document.getElementById('editUserEmail');
	userEmail.value = user.mail;
	const userDOB = document.getElementById('editUserDOB');
	userDOB.value = user.fecha_nacimiento;
	const userCountry = document.getElementById('editUserCountry');
	userCountry.value = user.pais;
	const userCreated = document.getElementById('editUserCreated');
	userCreated.value = user.created_at;
	const userUpdated = document.getElementById('editUserUpdated');
	userUpdated.value = user.updated_at;

	const userIsAdmin = document.getElementById('editUserAdmin');
	user.id_role === 2 ? userIsAdmin.checked = true : userIsAdmin.checked = false;
}

async function deleteUser(userId, fullname) {
	if (confirm(`Esta seguro que desea eliminar el usuario '${fullname}'?`)) {
		try {
			const response = await fetch(`${api}/users/delete/${userId}`);
			const data = await response.json();
			if (!data.includes('error')) {
				console.log('Usuario eliminado exitosamente');
				window.location.href = '../pages/administracion.html';
			} else {
				throw new Error(JSON.stringify(data));
			}
		} catch (error) {
			console.error('Error al eliminar al usuario:', error);
		}
	}
}

async function handleEditUserForm(e) {
	e.preventDefault();

	const validUser = validateEditUserData();
	if (Object.keys(validUser).length === 0) {
		return;
	}

	const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(validUser)
    };

	try {
		const response = await fetch(`${api}/users/edit`, requestOptions);
		const data = await response.json();
		if (!data.includes('error')) {
			console.log('Usuario editado exitosamente');
			window.location.href = '../pages/administracion.html';
		} else {
			throw new Error(JSON.stringify(data));
		}
	} catch (error) {
		console.error('Error al editar al usuario:', error);
	}
}

function validateEditUserData() {
	const userFirstname = document.getElementById('editUserName');
	const userLastname = document.getElementById('editUserSurname').value;
	const userEmail = document.getElementById('editUserEmail').value;
	const userPass = document.getElementById('editUserPassword').value;
	const userDOB = document.getElementById('editUserDOB').value;
	const userCountry = document.getElementById('editUserCountry').value;

	const userCreated = document.getElementById('editUserCreated').value;
	const userIsAdmin = document.getElementById('editUserAdmin').checked;

	const nameError = document.getElementById("editUserNameError");
	const surnameError = document.getElementById("editUserSurnameError");
	const emailError = document.getElementById("editUserEmailError");
	const passwordError = document.getElementById("editUserPasswordError");
	const dateError = document.getElementById("editUserDateError");
	const countryError = document.getElementById("editUserCountryError");

	const namePattern = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

	if (userFirstname.value && namePattern.test(userFirstname.value.trim())) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
		return {};
	}
	if (userLastname && namePattern.test(userLastname.trim())) {
		surnameError.style.display = "none";
	} else {
		surnameError.style.display = "block";
		return {};
	}
	if (userEmail && emailPattern.test(userEmail.trim())) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
		return {};
	}
	if (userPass) {
		if (passwordPattern.test(userPass.trim())) {
			passwordError.style.display = "none";
		} else {
			passwordError.style.display = "block";
			return {};
		}
	}
	if (userDOB && userDOB.trim() === "") {
		dateError.style.display = "block";
		return {};
	} else {
		dateError.style.display = "none";
	}
	if (userCountry === "") {
		countryError.style.display = "block";
		return {};
	} else {
		countryError.style.display = "none";
	}

	return {
		id: userFirstname.getAttribute('data-user-id'),
		id_role: userIsAdmin ? 2 : 1,
		nombre: userFirstname.value.trim(),
		apellido: userLastname.trim(),
		mail: userEmail.trim(),
		password: userPass ? userPass.trim() : "",
		fecha_nacimiento: userDOB.trim(),
		pais: userCountry,
		created_at: userCreated,
		updated_at: new Date().toISOString().slice(0, 10)
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