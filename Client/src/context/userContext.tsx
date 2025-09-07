import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from "react";
import { Url } from "../helper/URL";
import axios from "axios";
import type { User } from "../@types/Entity";
import { TloginSchema, TsignUpSchema, TUpdateSchema } from "../lib/userForms";
import { toast } from "react-toastify";
import { useAuth } from "./authContext";
type UserContextProps = {
  user: User;
  loginUser: (data: TloginSchema) => void;
  registerUser: (data: TsignUpSchema) => void;
  updateUser: (data: Partial<TUpdateSchema>) => void;
  logoutUser: () => void;
};

const userContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({} as User);
  const { token, setToken, isSignedIn, setIsSignedIn } = useAuth();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      setIsSignedIn(true);
    }
    setIsReady(true);
  }, []);
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [token]);

  const loginUser = async (data: TloginSchema) => {
    try {
      const res = await axios.post(Url + "users/login", data);
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
      if (error instanceof Error) {
        const message = error.message;
        toast.error(`Login error: ${message}`);
        throw error;
      }
    }
  };
  const registerUser = async (data: TsignUpSchema) => {
    try {
      const res = await axios.post(Url + "users/register", data);
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
  const updateUser = async (data: Partial<TUpdateSchema>) => {
    try {
      const user = localStorage.getItem("user");
      if (!user) {
        return null;
      }
      const userObj = JSON.parse(user);
      const userId = userObj.id;
      const { confirmPassword: _, ...datas } = data;
      const res = await axios.put(Url + "users/update/" + userId, datas);
      if (res) {
        const responseData = await res.data;
        const jsonData = JSON.stringify(responseData);
        console.log(jsonData);
        if (jsonData) {
          localStorage.setItem("user", jsonData);
          setUser(JSON.parse(jsonData));
          console.log(JSON.parse(jsonData));
          toast.success("User updated!");
        }
      }
    } catch (error: any) {
      toast.warning("Update error: ", error);
      throw error;
    }
  };
  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({});
    setToken("");
    setIsSignedIn(false);
    toast.info("Usuário deslogado!");
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loginUser,
      registerUser,
      updateUser,
      logoutUser,
    }),
    [user, isSignedIn]
  );

  return (
    <userContext.Provider value={value}>
      {isReady ? children : null}
    </userContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("useUser must be used within an AuthProvider");
  }

  return context;
};
