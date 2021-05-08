import { User } from './user';
import { Chip } from './chip';

export interface ITask {
    id?: string;
    creator?: User;
    executor?: User;
    createdAt?: Date;
    isDone?: boolean;
    isTaken?: boolean;
    chips?: Chip[];
    title?: string;
    description?: string;
}
export type Task = ITask | null;