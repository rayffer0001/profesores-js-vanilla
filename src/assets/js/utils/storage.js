//it accesses to the local storage of the navegador
//para guardar en el local storage del navegador

//localStorage.setItem('teachers', 'Hola base de datos estudiantes');
//const teachers = localStorage.getItem('teachers');

//console.log(teachers);

//localStorage.removeItem('teachers');

//sintaxis de una funcion

export function getDatabase(dbName) {
    const database = JSON.parse(localStorage.getItem(dbName));
    return database === null ? [] : database
}

export function setDatabase(dbName, jsonData){
    localStorage.setItem('dbName', JSON.stringify(jsonData));

}


