import { createContext, useState, type ReactNode } from "react"
import type { IAuthContext } from "../types/context"
import type { ILoginData, IUser } from "../types/user"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

type Props = {
    children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<IUser>({} as IUser)
    const navigate = useNavigate()

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.get(`users?email=${encodeURIComponent(loginData.email)}`)

            if (!data.length) {
                alert("E-mail inválido")
                return
            }

            const [user] = data

            if (loginData.password !== user.password) {
                alert("Senha inválida")
                return
            }

            setUser(data[0])
            navigate("/feed")
        } catch {
            alert("Houve um erro, tente novamente.")
        }
    }

    const handleLogout = () => {
        setUser({} as IUser)
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}