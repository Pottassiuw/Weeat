import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";
import type { User } from "../@types/Entity";

interface AuthContextProps {
  user: User | undefined;
  isSignedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = PropsWithChildren & {
  initialSignedIn: boolean;
};

export default function AuthProvider({
  children,
  initialSignedIn,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(
    initialSignedIn
      ? {
          id: undefined,
          name: undefined,
          email: undefined,
          password: undefined,
        }
      : undefined
  );
  const [isSignedIn, setIsSignedIn] = useState(initialSignedIn);

  const login = (user: User) => {
    setUser(user);
    setIsSignedIn(true);
  };

  const logout = () => {
    setUser(undefined);
    setIsSignedIn(false);
  };

  const value = useMemo(
    () => ({
      user,
      isSignedIn,
      login,
      logout,
    }),
    [user, isSignedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
