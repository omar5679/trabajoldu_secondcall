let diccionario = {
	'Fundamentos básicos': "fundamentosBasicos",
	'Variables, tipos de datos y conversión': "variables",
	'Operadores y booleanos': "operadores",
	'Condicionales if-else y switch' : "bucles",
	'Bucles for y while' : "bucles",
	'Arrays y Strings' : "arrays",
	'Lectura desde teclado' : "leerTeclado",
	'Direccionamiento de memoria y punteros' : "punteros",
	'Funciones' : "funciones",
	'Ficheros' : "ficheros",
	'Enumerados' : "enumerados",
	'Autoevaluación en C' : "EjemploAutoevaluacion"
  };


document.addEventListener("DOMContentLoaded", function() {
	const profile = document.getElementById("profile");

	function showLast() {
		lastPage = sessionStorage.getItem('lastPage');
	  console.log("lastPage es: " + lastPage);
	  if (lastPage != null) {
		const newItem = document.createElement('h1');
		const linktext = document.createElement('a');
		linktext.setAttribute('href', '/Tutoriales/C/' + diccionario[lastPage] + ".html");
		console.log("El valor de " + lastPage + " en diccionario es " + diccionario[lastPage]);
		linktext.appendChild(document.createTextNode(lastPage));
		newItem.appendChild(document.createTextNode("Vuelve a: "));
		newItem.appendChild(linktext);
		profile.insertBefore(newItem, profile.children[1]);
	  } else {
		console.log("lastPage es nulo");
	  }
	}

	showLast();
  });
/*
  // Función para devolver el valor de la variable global
  function showLast() {
	console.log("lastPage es: " + sessionStorage.getItem('lastPage'));
	console.log("profile es: " + profile);
	if (sessionStorage.getItem('lastPage') != null)
	{
		const newItem = document.createElement('h1');
		newItem.appendChild(document.createTextNode("Vuelve a: " + sessionStorage.getItem('lastPage')));

		profile.appendChild(newItem);
	} else
	{
		console.log("lastPage es nulo");
	}
  }
*/
  function showPercentage(){
  }
