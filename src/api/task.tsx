import { db } from '../services/firebase';
import { Task, ITask } from '../models/task';

export const getAllTasks = () => {
    return db.collection('tasks')
        .get()
        .then(snapshot => {
            const tasks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            return tasks;
        });        
}

export const getReqs = () =>  {
    return db.collection('reqs')
    .get()
    .then(snapshot => {
        return snapshot.docs.map(doc => ({
            ...doc.data()
        }))
    } 
    );
}

export const createTask = (task: Task): Promise<ITask|null|{id:string}> => {
    return db.collection('tasks').add({
        ...task
        })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }));
}

export const updateTask = (task: ITask) => {
    return db.collection('tasks').doc(task.id).update(task)
    .then(() => ({
        ...task
    }))
}

export const deleteTask = (task: ITask) => {
    return db.collection('tasks').doc(task.id).delete();
}