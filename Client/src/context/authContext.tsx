import { createContext } from "vm"

type AuthContextProps = {
    token?: string
    isSignedIn: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)