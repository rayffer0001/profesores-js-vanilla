//It will save, update, read or delete the data in the storage
import {getDatabase, setDatabase} from './../utils/storage'



const dbName = 'db_teachers';

export function createTeacher(teacher) {
    const arrayTeachers = getDatabase(dbName);
    arrayTeachers.push(teacher);
    setDatabase(dbName, arrayTeachers);
}