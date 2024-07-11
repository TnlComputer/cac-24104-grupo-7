// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.querySelector("#registerForm");
//   const nameInput = document.getElementById("name");
//   const surnameInput = document.getElementById("surname");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");
//   const dateInput = document.getElementById("dateOfBirth");
//   const countrySelect = document.getElementById("country");
//   const termsCheckbox = document.getElementById("terms");

//   const nameError = document.getElementById("nameError");
//   const surnameError = document.getElementById("surnameError");
//   const emailError = document.getElementById("emailError");
//   const passwordError = document.getElementById("passwordError");
//   const dateError = document.getElementById("dateError");
//   const countryError = document.getElementById("countryError");
//   const termsError = document.getElementById("termsError");

//   const namePattern = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     if (!namePattern.test(nameInput.value.trim())) {
//       nameError.style.display = "block";
//       return;
//     } else {
//       nameError.style.display = "none";
//     }

//     if (!namePattern.test(surnameInput.value.trim())) {
//       surnameError.style.display = "block";
//       return;
//     } else {
//       surnameError.style.display = "none";
//     }

//     if (!emailPattern.test(emailInput.value.trim())) {
//       emailError.style.display = "block";
//       return;
//     } else {
//       emailError.style.display = "none";
//     }

//     if (!passwordPattern.test(passwordInput.value.trim())) {
//       passwordError.style.display = "block";
//       return;
//     } else {
//       passwordError.style.display = "none";
//     }

//     if (dateInput.value.trim() === "") {
//       dateError.style.display = "block";
//       return;
//     } else {
//       dateError.style.display = "none";
//     }

//     if (countrySelect.value === "") {
//       countryError.style.display = "block";
//       return;
//     } else {
//       countryError.style.display = "none";
//     }

//     if (!termsCheckbox.checked) {
//       termsError.style.display = "block";
//       return;
//     } else {
//       termsError.style.display = "none";
//     }

//     if (sessionStorage.getItem(email.value.trim())) {
//       console.error('ya existe');
//       return;
//     }
//     sessionStorage.setItem(email.value.trim(), password.value.trim());
//     window.location.href = '../pages/login.html';
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#registerForm");
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const dateInput = document.getElementById("dateOfBirth");
  const countrySelect = document.getElementById("country");
  const termsCheckbox = document.getElementById("terms");

  const nameError = document.getElementById("nameError");
  const surnameError = document.getElementById("surnameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const dateError = document.getElementById("dateError");
  const countryError = document.getElementById("countryError");
  const termsError = document.getElementById("termsError");

  const namePattern = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!namePattern.test(nameInput.value.trim())) {
      nameError.style.display = "block";
      return;
    } else {
      nameError.style.display = "none";
    }

    if (!namePattern.test(surnameInput.value.trim())) {
      surnameError.style.display = "block";
      return;
    } else {
      surnameError.style.display = "none";
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      return;
    } else {
      emailError.style.display = "none";
    }

    if (!passwordPattern.test(passwordInput.value.trim())) {
      passwordError.style.display = "block";
      return;
    } else {
      passwordError.style.display = "none";
    }

    if (dateInput.value.trim() === "") {
      dateError.style.display = "block";
      return;
    } else {
      dateError.style.display = "none";
    }

    if (countrySelect.value === "") {
      countryError.style.display = "block";
      return;
    } else {
      countryError.style.display = "none";
    }

    if (!termsCheckbox.checked) {
      termsError.style.display = "block";
      return;
    } else {
      termsError.style.display = "none";
    }

    const newUser = {
      nombre: nameInput.value.trim(),
      apellido: surnameInput.value.trim(),
      email: emailInput.value.trim(),
      clave: passwordInput.value.trim(),
      fecha_nacimiento: dateInput.value.trim(),
      pais: countrySelect.value
    };

    try {
      const response = await fetch('http://localhost:8080/apimovies/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Usuario registrado con éxito:', result);

      window.location.href = '../pages/login.html';
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  });
});
