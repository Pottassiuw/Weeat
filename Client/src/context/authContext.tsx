import { PropsWithChildren, useContext, useMemo, useState } from "react";
import { createContext } from "react"
type AuthContextProps = {
    isSignedIn: boolean;
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type AuthWithProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthWithProps) {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const value = useMemo(
        () => ({
            isSignedIn,
            setIsSignedIn,
        }), [isSignedIn])
    return (
        <AuthContext.Provider value={value} >
            {isReady ? children : null}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useUser must be used within an AuthProvider");
    }
    return context;

}