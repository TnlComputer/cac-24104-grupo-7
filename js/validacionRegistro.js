document.addEventListener("DOMContentLoaded", function () {
  // TODO: constantes para acceder al contenido de los input y verificar los datos.
  const form = document.querySelector("#registerForm");
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const dateInput = document.getElementById("dateOfBirth");
  const countrySelect = document.getElementById("country");
  const termsCheckbox = document.getElementById("terms");

  //  TODO: constantes para posicionarme en la parrafos para mostrar los errores
  const nameError = document.getElementById("nameError");
  const surnameError = document.getElementById("surnameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const dateError = document.getElementById("dateError");
  const countryError = document.getElementById("countryError");
  const termsError = document.getElementById("termsError");

  // Todo: pattern para verificar el nombe y apellido, email y contraseña
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // TODO: Validación del nombre
    if (!namePattern.test(nameInput.value.trim())) {
      nameError.style.display = "block";
      return;
    } else {
      nameError.style.display = "none";
    }

    // TODO: Validación del apellido
    if (!namePattern.test(surnameInput.value.trim())) {
      surnameError.style.display = "block";
      return;
    } else {
      surnameError.style.display = "none";
    }

    // TODO: Validación del email
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      return;
    } else {
      emailError.style.display = "none";
    }

    // TODO: Validación de la contraseña
    if (!passwordPattern.test(passwordInput.value.trim())) {
      passwordError.style.display = "block";
      return;
    } else {
      passwordError.style.display = "none";
    }

    // TODO: Validación de la fecha de nacimiento
    if (dateInput.value.trim() === "") {
      dateError.style.display = "block";
      return;
    } else {
      dateError.style.display = "none";
    }

    // TODO: Validación del país
    if (countrySelect.value === "") {
      countryError.style.display = "block";
      return;
    } else {
      countryError.style.display = "none";
    }

    // TODO: Validación de los términos y condiciones
    if (!termsCheckbox.checked) {
      termsError.style.display = "block";
      return;
    } else {
      termsError.style.display = "none";
    }

    // Guarda el usuario creado en session storage, redirecciona a login
    if(sessionStorage.getItem(email.value.trim())){
      // TODO: deberia mostrar un error de que ya existe ese usuario
      console.error('ya existe');
      return;
    }
    sessionStorage.setItem(email.value.trim(), password.value.trim());
    window.location.href = '../pages/login.html'; // Ruta de la página de login
  });
});