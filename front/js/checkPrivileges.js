document.addEventListener('DOMContentLoaded', () => {
	const elem = document.getElementById('adminButtonFooter');
	elem.classList.add('hideAdmButton');

	const isLogged = window.sessionStorage.getItem("cac_java_logged")
	if (!isLogged || isLogged === "false") return;

	const isAdmin = window.sessionStorage.getItem("cac_java_isAdmin");
	if (!isAdmin || isAdmin === "false") return;

	elem.classList.remove('hideAdmButton');
});