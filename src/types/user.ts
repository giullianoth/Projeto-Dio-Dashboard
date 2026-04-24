export interface IUser {
    name: string
    email: string
    password: string
    id: number
}

export type ILoginData = Omit<IUser, "name" | "id">