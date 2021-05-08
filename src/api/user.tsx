import { auth } from '../services/firebase';

export const login = (email:string, password:string) => {
    return auth.signInWithEmailAndPassword(email, password);
}

export const logout = () => {
    return auth.signOut();
}

export const register = (email:string, password:string) => {
    return auth.createUserWithEmailAndPassword(email, password);
}

export const initUser = (onAuth:any) => {
    return auth.onAuthStateChanged(onAuth);
}