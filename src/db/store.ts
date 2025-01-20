export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
}

export type StoreContextType = {
    users: IUser[];
    addNewUser: (user: IUser) => void
    clear: () => void
}