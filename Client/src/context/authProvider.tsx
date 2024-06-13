import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { URL } from "../helper/URL";
import axios from "axios";
import type { User } from "../@types/Entity";
import { TloginSchema, TsignUpSchema } from "../@types/userform";
import { toast } from "react-toastify";
interface AuthContextProps {
  user: User | undefined;
  isSignedIn?: boolean;
  token: string | undefined;
  loginUser: (data: TloginSchema) => void;
  registerUser: (data: TsignUpSchema) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

type AuthProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  //MUDAR SE ESTIVER NA ETEC PARA TRUE

  const [isSignedIn, setIsSignedIn] = useState(true);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      setIsSignedIn(true);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const loginUser = async (data: TloginSchema) => {
    try {
      const res = await axios.post(URL + "users/login", data);
      if (res) {
        const responseData = await res.data;
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        setToken(responseData?.token!);
        setUser(responseData.user);
        toast.success("Usuário Logado!");
        setIsSignedIn(true);
        setIsReady(true);
      }
    } catch (error: any) {
      toast.error("Login error:", error);
      throw error;
    }
  };
  const registerUser = async (data: TsignUpSchema) => {
    try {
      const res = await axios.post(URL, data);
      if (res) {
        const responseData = await res.data;
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("user", JSON.stringify(responseData.user));
        setToken(responseData.token!);
        setUser(responseData.user);
        toast.success("User Created!");
      }
    } catch (error: any) {
      toast.warning("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(undefined);
    setToken("");
    setIsSignedIn(false);
  };

  const value = useMemo(
    () => ({
      user,
      isSignedIn,
      token,
      loginUser,
      registerUser,
      logout,
    }),
    [user, isSignedIn]
  );

  return (
    <AuthContext.Provider value={value}>
      {isReady ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
