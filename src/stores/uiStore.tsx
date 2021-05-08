import { observable, action, makeObservable } from 'mobx';
import { getReqs } from '../api/task';
import { Chip } from '../models/chip';
import firebase from 'firebase';

export default class UserStore {

    chips: Chip[] = [];
    selectedChips: Chip[] = [];
    isLoading: boolean = false;
    error: string = '';      

    constructor() {
        makeObservable(this, {
            chips: observable,
            selectedChips: observable,
            isLoading: observable,
            error: observable,
            getChips: observable,
            addChip: action,
            deleteChip: action,
            clearChips: action
      });
    }

    getChips = async () => {
        try {
            const data = await getReqs();
            this.chips = data[0]['reqName'].map((item: any) => {return {name: item}});
        } catch(error) {
            this.error = (error as firebase.FirebaseError).message;
        }
    }
    
    addChip = (chip: Chip) => {
        this.selectedChips = this.selectedChips ? [...this.selectedChips, chip] : [chip]
    }
    
    deleteChip =  (chip: Chip) => {
        this.selectedChips = this.selectedChips.filter(item => chip?.name !== item?.name)
    }

    clearChips = () => {
        this.selectedChips = [];
    }
}