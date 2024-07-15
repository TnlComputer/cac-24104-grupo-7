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

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (formButton.innerHTML === "Cerrar Sesión") {
      window.sessionStorage.setItem("cac_java_logged", "false");
      window.sessionStorage.removeItem("cac_java_uid");
      window.location.href = '../index.html';
    } else {
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

      try {
        const response = await fetch('http://localhost:8080/apimovies/usuarios', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const users = await response.json();

        const user = users.find(user => user.email === emailInput.value.trim());

        if (user && user.clave === passwordInput.value.trim()) {
          window.sessionStorage.setItem("cac_java_logged", "true");
          window.sessionStorage.setItem("cac_java_isAdmin", user.isAdmin);
          window.location.href = '../index.html';
        } else {
          emailError.style.display = "block";
          passwordError.style.display = "block";
          emailError.innerHTML = "Email o contraseña incorrectos";
          passwordError.innerHTML = "Email o contraseña incorrectos";
        }
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
  });
});
