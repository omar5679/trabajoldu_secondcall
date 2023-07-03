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
		showPercentage();
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

function showPercentage() {
  if (!visitedCPages) {
    sessionStorage.setItem('visitedCPages', JSON.stringify([]));
  }

  visitedCPages = JSON.parse(sessionStorage.getItem('visitedCPages'));
  const progressBars = document.querySelectorAll('.progress-bar');
  const percentageNumbers = document.querySelectorAll('.percentage-number');

  if (progressBars && visitedCPages && visitedCPages.length > 0) {
    progressBars.forEach((progressBar, index) => {
      const percentageNumber = percentageNumbers[index];
      const completionRate = Math.floor((visitedCPages.length / tutosC) * 100);

      if (progressBar && percentageNumber) {
        progressBar.value = completionRate;
        percentageNumber.textContent = completionRate.toFixed(0) + "%";

        console.log(`Completion rate for progress bar ${index + 1}: ${completionRate}%. Visited pages: ${visitedCPages.length}`);
      }
    });
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
			enlacesC.push("C/" + diccionario[val] + ".html");
			sessionStorage.setItem('enlacesC', JSON.stringify(enlacesC));

			console.log("Añadido " + val + " a lista de C. Num elementos: " + visitedCPages.length);
			console.log("Añadido " + diccionario[val] + ".html a lista de enlacesC. Num elementos: " + enlacesC.length);
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

				enlacesC.push("C/" + diccionario[val] + ".html");
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
			else
				console.log(lista[i].getAttribute('href') + " no visitado (!=" + enlacesC + ")");
		}
	} else
		console.log("Sin sesion iniciada");
}

  
  
