import { observable, computed, action, makeObservable } from 'mobx';
import { getAllTasks, createTask, updateTask, deleteTask} from '../api/task';
import { Task, ITask } from '../models/task';
import { User } from '../models/user';
import { History, LocationState } from 'history'
import firebase from 'firebase';
import RootStore from './rootStore';

export default class TasksStore {
    
    tasks: Task[] = [];
    isLoading: boolean = false;
    error: string = '';      
    rootStore;

    constructor(rootStore: RootStore) {
        makeObservable(this, {
            tasks: observable,
            isLoading: observable,
            error: observable,
            create: action,
            taskDelete: action,
            taskUpdate: action,
            getAll: action,
            userTasks: computed
      });
      this.rootStore = rootStore;
    }

    create = async (task: ITask, user: User, history: History<LocationState>) => {
        task.creator = user;
        task.createdAt = new Date();
        task.chips = task.chips ? task.chips: [];
        task.isDone = false;
        task.isTaken = false;
        task.executor = null;
        this.isLoading = true;
        this.error = '';
        try {
            const data = await createTask(task);
            this.tasks = [...this.tasks, data];
            this.error = '';
            this.isLoading = false;
            history.push('/todo_list');
        } catch(error) {
            this.error = (error as firebase.FirebaseError).message;
            this.isLoading = false;
        }
    }
    
    taskDelete = async (task: ITask) => {
        try {
            await deleteTask(task);
            const index = this.tasks.findIndex(
                (item) => item?.id === task.id
            );
            this.tasks = [...this.tasks.slice(0, index), ...this.tasks.slice(index+1,this.tasks.length)]
        } catch (error) {
            this.error = (error as firebase.FirebaseError).message;
        }
    } 
    
    taskUpdate = async (task: ITask) => {
        try {
            await updateTask(task);
            this.tasks = this.tasks.map(
                (item) => { 
                    return task.id === item?.id ? task : item;
                }
              );
        } catch (error) {
            this.error = (error as firebase.FirebaseError).message;
        }
    }
    
    getAll = async () => {
        this.isLoading = true;
        this.error = '';
        this.tasks = [];
        try {
            this.tasks = await getAllTasks();
            this.error = '';
            this.isLoading = false;
        } catch(error) {
            this.error = (error as firebase.FirebaseError).message;
        }
    }

    get userTasks() {
        const {user} = this.rootStore.userStore;
        return this.tasks?.filter(task => task?.creator?.uid === user?.uid 
            || task?.executor?.uid === user?.uid);
    }
}