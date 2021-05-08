interface IUser {
    uid: string | null;
    email: string | null;
    displayName: string | null;
}

export type User = IUser | null;