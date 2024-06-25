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
  const [token, setToken] = useState<string | undefined>(undefined);

  const value = useMemo(
    () => ({
      isSignedIn,
      setIsSignedIn,
      token,
      setToken,
    }),
    [isSignedIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }
  return context;
}
