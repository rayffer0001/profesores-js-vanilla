//it accesses to the local storage of the navegador
//para guardar en el local storage del navegador

//localStorage.setItem('teachers', 'Hola base de datos estudiantes');
//const teachers = localStorage.getItem('teachers');

//console.log(teachers);

//localStorage.removeItem('teachers');

//sintaxis de una funcion

export function getDatabase() {
    return localStorage.getItem('db_teachers')
}

export function setDatabase(teachers){
    localStorage.setItem('db_teachers', teachers);
}
