function ejercicio1(){
	function alumno(nombre, apellidos, edad){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
	}
	
	var AlumnoUno = new alumno('Regino','Fdez',31);
	
	document.write(typeof(AlumnoUno));
	document.write(typeof(AlumnoUno) == 'object');

	document.write(AlumnoUno instanceof Object);	
	document.write(AlumnoUno instanceof alumno);
}