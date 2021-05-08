import TasksStore from './tasksStore';
import UserStore from './userStore';
import UiStore from './uiStore';

export default class RootStore {
  tasksStore: TasksStore;
  userStore: UserStore;
  uiStore: UiStore;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.userStore = new UserStore();
    this.uiStore = new UiStore();
  }
}