import type { ILoginData, IUser } from "./user"

export interface IAuthContext {
    user: IUser
    handleLogin: (loginData: ILoginData) => Promise<void>
    handleLogout: () => void
}