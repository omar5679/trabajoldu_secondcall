let diccionario = {
	'Fundamentos básicos': "fundamentosBasicos",
	'Variables, tipos de datos y conversión': "variables",
	'Operadores y booleanos': "operadores",
	'Condicionales if-else y switch' : "condicionales",
	'Bucles for y while' : "bucles",
	'Arrays y Strings' : "arrays",
	'Lectura desde teclado' : "leerTeclado",
	'Direccionamiento de memoria y punteros' : "punteros",
	'Funciones' : "funciones",
	'Ficheros' : "ficheros",
	'Estructuras' : "estructuras",
	'Enumerados' : "enumerados",
	'Autoevaluación de C' : "EjemploAutoevaluacion"
  };

const tutosC = 13;
let visitedCPages = [];
let enlacesC = [];

//Al cargar la pagina, si estamos en Cuenta, recoge el componente perfil y lo actualiza si es necesario
document.addEventListener("DOMContentLoaded", function() {
	if (window.location.pathname == '../Cuenta/Cuenta.html')
	{
		const profile = document.getElementById("profile");

		showLast();
		showPercentage();
	} else if (window.location.pathname == '../Tutoriales/ProgramacionImperativa.html')
	{
		addCheck();
	} else
		console.log("Estoy en ubicacion: " + window.location.pathname);
});

function showLast() {
	lastPage = sessionStorage.getItem('lastPage');
  console.log("lastPage es: " + lastPage);

  if (lastPage != null) {
	const newItem = document.createElement('h1');
	const linktext = document.createElement('a');
	linktext.setAttribute('href', '../Tutoriales/C/' + diccionario[lastPage] + ".html");
	console.log("El valor de " + lastPage + " en diccionario es " + diccionario[lastPage]);
	linktext.appendChild(document.createTextNode(lastPage));
	newItem.appendChild(document.createTextNode("Vuelve a: "));
	newItem.appendChild(linktext);
	profile.insertBefore(newItem, profile.children[1]);
  } else {
	console.log("lastPage es nulo");
  }
}

function showPercentage(){
	//if(!visitedCPages)
	//	sessionStorage.setItem('visitedCPages', JSON.stringify([]));
	visitedCPages = JSON.parse(sessionStorage.getItem('visitedCPages'));
	let barraProgreso = document.getElementById('progressBar');
	let percentageNumber = document.createElement('span');
	if(!barraProgreso && visitedCPages && visitedCPages.length > 0)
	{
		const newItem = document.createElement('a');
		newItem.innerText = "Progreso actual en C";

		barraProgreso = document.createElement('progress');
		barraProgreso.setAttribute('id', 'progressBar');
		barraProgreso.setAttribute('value', '0');
		barraProgreso.setAttribute('max', '100');
		barraProgreso.style.marginLeft = "20px";

		percentageNumber.innerText = "0%";
		percentageNumber.style.marginLeft = "20px";

		newItem.appendChild(barraProgreso);
		newItem.appendChild(percentageNumber);

		console.log("Numero hijos de profile: " + profile.children.length);
		profile.insertBefore(newItem, profile.children[profile.children.length - 3]); //parece que el boton es el antepenultimo o algo
		profile.insertBefore(document.createElement('br'), profile.children[profile.children.length - 3]);
	}
	if(barraProgreso)
	{
		barraProgreso.setAttribute('value', visitedCPages.length / tutosC * 100);
		percentageNumber.innerText = (visitedCPages.length / tutosC * 100).toFixed(1) + "%";
		console.log("Llevas un " + visitedCPages.length / tutosC * 100 + "% completo de la lección de C. Lecciones: " + visitedCPages.length);
	}
}

function addPage(val){
	const cuenta = JSON.parse(sessionStorage.getItem("cuenta"));
	if (cuenta && cuenta.sesionActiva)
	{
		visitedCPages = JSON.parse(sessionStorage.getItem('visitedCPages'));
		enlacesC = JSON.parse(sessionStorage.getItem('enlacesC'));
		//console.log("Numero elementos en array: " + visitedCPages.length);
		if(visitedCPages === null)
		{
			console.log("ENTRO EN NULL");
			visitedCPages = [];
			visitedCPages.push(val);
			sessionStorage.setItem('visitedCPages', JSON.stringify(visitedCPages));

			enlacesC = [];
			enlacesC.push("/Tutoriales/C/" + diccionario[val] + ".html");
			sessionStorage.setItem('enlacesC', JSON.stringify(enlacesC));

			console.log("Añadido " + val + " a lista de C. Num elementos: " + visitedCPages.length);
		}
		else
		{
			visitedCPages = JSON.parse(sessionStorage.getItem('visitedCPages'));
			enlacesC = JSON.parse(sessionStorage.getItem('enlacesC'));
			console.log("visitedCPages es " + visitedCPages);
			console.log("enlacesC es " + enlacesC);
			if(!visitedCPages.includes(val))
			{
				visitedCPages.push(val);
				sessionStorage.setItem('visitedCPages', JSON.stringify(visitedCPages));

				enlacesC.push("/Tutoriales/C/" + diccionario[val] + ".html");
				sessionStorage.setItem('enlacesC', JSON.stringify(enlacesC));

				console.log("Añadido " + val + " a lista de C. Num elementos: " + visitedCPages.length);
			}
		}
	}
}

function addCheck(){
	const cuenta = JSON.parse(sessionStorage.getItem("cuenta"));
	if (cuenta && cuenta.sesionActiva)
	{
		const lista = document.querySelectorAll('a');
		enlacesC = JSON.parse(sessionStorage.getItem('enlacesC'));

		for(let i = 0; i < lista.length; i++){
			read = lista[i].getAttribute('id');
			if ((!read && read != 'read') && enlacesC.includes(lista[i].getAttribute('href')))
			{
				let check = document.createElement("img");
				check.setAttribute('src', '/Recursos/Green-Tick-Vector.png');
				check.setAttribute('alt', 'Tutorial leido');
				check.setAttribute('id', 'checkMark');

				lista[i].appendChild(check);
				lista[i].setAttribute('id', 'read');
				console.log("Añadido check a: " + lista[i].getAttribute('href'));
			}
		}
	}
}
