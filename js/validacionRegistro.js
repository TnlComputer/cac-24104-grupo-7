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
    let isValid = true;

    // TODO: Validación del nombre
    if (!namePattern.test(nameInput.value.trim())) {
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    // TODO: Validación del apellido
    if (!namePattern.test(surnameInput.value.trim())) {
      surnameError.style.display = "block";
      isValid = false;
    } else {
      surnameError.style.display = "none";
    }

    // TODO: Validación del email
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // TODO: Validación de la contraseña
    if (!passwordPattern.test(passwordInput.value.trim())) {
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }

    // TODO: Validación de la fecha de nacimiento
    if (dateInput.value.trim() === "") {
      dateError.style.display = "block";
      isValid = false;
    } else {
      dateError.style.display = "none";
    }

    // TODO: Validación del país
    if (countrySelect.value === "") {
      countryError.style.display = "block";
      isValid = false;
    } else {
      countryError.style.display = "none";
    }

    // TODO: Validación de los términos y condiciones
    if (!termsCheckbox.checked) {
      termsError.style.display = "block";
      isValid = false;
    } else {
      termsError.style.display = "none";
    }

    // TODO: prevengo que el boton registrarse se ejecute si no se cumplen las codiciones
    if (!isValid) {
      event.preventDefault();
    }
  });
});