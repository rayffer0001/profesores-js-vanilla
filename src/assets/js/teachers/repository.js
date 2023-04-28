//It will save, update, read or delete the data in the storage
import { getDatabase, setDatabase } from './../utils/storage'



const dbName = 'db_teachers';

export function createTeacher(teacher) {
    const arrayTeachers = getDatabase(dbName);
    arrayTeachers.push(teacher);
    setDatabase(dbName, arrayTeachers);
}

export function readTeachers() {
    return getDatabase(dbName);
}

// export function updateTeacher(teacherUpdated){

//     const database = readTeachers().map(( teacher ) =>{
//         if (teacher.id === teacherUpdated.id){

//             const UpdatedTeacher = {...Teacher, ...teacherUpdated};

//         }else{
//             return UpdatedTeacher;
//         }
//     })
// }

export function updateTeacher(teacherUpdated) {

    const database = readTeachers().map((teacher) =>
        (teacher.id === teacherUpdated.id) ? {...teacher, ...teacherUpdated } : teacher
    );
    setDatabase(dbName, database);
}

export function deleteTeacher( idTeacher ){
    const database = readTeachers();
    const teacherIndex = database.findIndex(({id}) => id === idTeacher)//destructuracion
    if (teacherIndex !== -1){
        database.splice(teacherIndex, 1);
        setDatabase(dbName, database);
    }
}


export function findTeacherById(idTeacher) {
    return readTeachers().find(({ id }) => id === idTeacher);

}

