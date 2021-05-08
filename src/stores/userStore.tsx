import { observable, action, makeObservable } from 'mobx';
import { login, logout, initUser, register} from '../api/user';
import { User } from '../models/user';
import { History, LocationState } from 'history';
import firebase from 'firebase';

export default class UserStore {
    
    user: User = null;
    isLoading: boolean = false;
    isAuth: boolean = false;
    error: string = '';      

    constructor() {
        makeObservable(this, {
            user: observable,
            isLoading: observable,
            error: observable,
            isAuth: observable,
            logInUser: action,
            signOutUser: action,
            registerUser: action,
            initAuth: action
      });
    }

    logInUser = async (userEmail: string, userPassword: string, history: History<LocationState>) => {
        this.isLoading = true;
        this.user = null;
        this.error = '';
        try {
            const {user} = await login(userEmail, userPassword);
            const {displayName, email, uid} = user as firebase.User;
            this.user = {
                displayName,
                email,
                uid
            }
            this.isLoading = false;
            this.error = '';
            history.push('/todo_list');
        } catch(error) {
            this.error = (error as firebase.FirebaseError).message;
            this.isLoading = false;
        }
    }
    
    signOutUser = async () => {
        await logout();
        this.user = null;
    }
    
    registerUser = async (userEmail: string, userPassword: string, history: History<LocationState>) => {
        this.isLoading = true;
        this.user = null;
        this.error = '';       
        try {
            const data = await register(userEmail, userPassword);
            const {user} = data;
            const {displayName, email, uid} = user as firebase.User;
            this.user = {
                displayName,
                email,
                uid
            };
            this.isLoading = false;
            this.error = '';
            history.push('/');
        } catch(error) {
            this.error = (error as firebase.FirebaseError).message;
            this.isLoading = false;
        }
    }
    
    initAuth = async (history: History<LocationState>) => {
        this.isLoading = true;
        this.user = null;
        this.error = '';
        await initUser((data: firebase.User | null) => {
            if (data) {
                const {email, displayName, uid} = data;
                if (email) {
                    this.user = {
                        displayName,
                        email,
                        uid
                    };
                    this.isLoading = false;
                    this.error = '';
                }
            } 
            else {
                this.user = null;
                this.isLoading = false;
                this.error = '';
                history.location.pathname === '/register' ?
                    history.push('/register') :
                    history.push('/login')
            }
        });
    }
}