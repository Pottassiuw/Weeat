import { useContext, useMemo, useState } from "react";
import { createContext } from "react";
type AuthContextProps = {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  token?: string;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [token, setToken] = useState<string | undefined>(undefined);

  const value = useMemo(
    () => ({
      isSignedIn,
      token,
      setToken,
      setIsReady,
      setIsSignedIn,
    }),
    [isSignedIn]
  );
  return (
    <AuthContext.Provider value={value}>
      {isReady ? children : null}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }
  return context;
}
