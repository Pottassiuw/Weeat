import { PropsWithChildren, createContext, useContext, useState } from "react";
import type { User } from "../@types/Entity";

const AuthContext = createContext<User | null>(null);

type isSignedIn = PropsWithChildren & {
  isSignedIn?: boolean;
};
export default function AuthProvider({ children, isSignedIn }: isSignedIn) {
  const [user] = useState<User | null>(
    isSignedIn
      ? {
          id: 0,
          name: "",
          email: "",
          password: "",
        }
      : null
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
