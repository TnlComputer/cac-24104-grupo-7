document.addEventListener('DOMContentLoaded', () => {
  const elem = document.getElementById('adminButtonFooter');
  elem.classList.add('hideAdmButton');

  const isLogged = window.sessionStorage.getItem("cac_java_logged");
  const isAdmin = window.sessionStorage.getItem("cac_java_isAdmin");

  if (isLogged === "true" && isAdmin === "true") {
    elem.classList.remove('hideAdmButton');
  }
});
