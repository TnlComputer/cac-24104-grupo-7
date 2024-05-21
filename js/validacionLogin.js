document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validación del email
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validación de la contraseña
    if (passwordInput.value.trim() === "") {
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});