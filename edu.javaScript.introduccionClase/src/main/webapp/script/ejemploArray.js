/**
 * 
 */

 function ejemplo1(){
	
	let alumnos = ["Alfonso","Alberto","Carlos","José María"];
	let solucion = alumnos[3].charAt(2);
	let solucion2 = alumnos[3][2];	
	document.write(solucion + " " + solucion2);	
	
}

function ejemplo2(){
	let datos =[123,"Hola"];
	let solucion = datos[0][2];
	//let solucion = alumnos[3].charAt(2);
	let solucion2 = datos[1][2];
	//let solucion = alumnos[3].charAt(2);
	document.write(solucion + " " + solucion2 + " ");	
	document.write(typeof(datos[0]) + " " + typeof(datos[1]));		
}

function ejemplo3(){
	let lista = ["hola","adiós","hasta pronto"];
	let posicion1 = lista[0];
	let posicion2 = lista[1];
	let posicion3 = lista[2];
	document.write(posicion1 + " " + posicion2 + " "+ posicion3);
}

function ejemplo4(){
	let partes = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"];
	document.write(partes[2] + " "+ partes[0] + " "+ partes[6] + " "+ partes[3] + " "+ partes[1] + " "+ partes[5] + " "+ partes[6] + " " + partes[4]);
}