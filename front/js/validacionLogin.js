document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const formButton = document.querySelector('#loginForm button');

  if (window.sessionStorage.getItem("cac_java_logged") === "true") {
    formButton.innerHTML = "Cerrar Sesión";
    emailInput.style.display = 'none';
    passwordInput.style.display = 'none';
    const loginTitle = document.querySelector('main section h1');
    const registerButton = document.querySelector('main section form > a');
    loginTitle.innerHTML = "Cerrar sesión";
    registerButton.style.display = 'none';
  }

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (formButton.innerHTML === "Cerrar Sesión") {
      window.sessionStorage.setItem("cac_java_logged", "false");
      window.location.href = './login.html';
    }
    else {
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.style.display = "block";
        return;
      } else {
        emailError.style.display = "none";
      }

      if (passwordInput.value.trim() === "") {
        passwordError.style.display = "block";
        return;
      } else {
        passwordError.style.display = "none";
      }

      const savedUser = window.sessionStorage.getItem(emailInput.value.trim());

      if (!savedUser) {
        // TODO: Deberia mostrar error que email o pass incorrecto
        console.error('mal email');
        return;
      }

      if (savedUser !== passwordInput.value.trim()) {
        // TODO: Deberia mostrar error que email o pass incorrecto
        console.error('mal pass');
        return;
      }

      window.sessionStorage.setItem("cac_java_logged", "true");
      window.location.href = '../index.html';
    }
  });
});