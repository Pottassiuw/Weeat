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
import type { User, Store } from "../@types/Entity";
import { TloginSchema, TsignUpSchema } from "../lib/userForms";
import { toast } from "react-toastify";
import { TStoreRegisterSchema, TstoreLoginSchema } from "../lib/storeForms";
type  UserContextProps = {
  user?: User;
  isSignedIn: boolean;
  token?: string;
  loginUser: (data: TloginSchema) => void;
  registerUser: (data: TsignUpSchema) => void;
  updateUser: (data: TsignUpSchema) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<UserContextProps>({} as UserContextProps);

type UserProviderProps = PropsWithChildren;

export default function AuthProvider({ children }: UserProviderProps) {

  const [user, setUser] = useState<User>({} as User);

  //********MUDAR SE ESTIVER NA ETEC PARA ----> TRUE***********
  const [isSignedIn, setIsSignedIn] = useState(false);
  //******************************************************************
  
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const store = localStorage.getItem("store");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      setIsSignedIn(true);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else if (store && token) {
      setStore(JSON.parse(store));
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
      if (error instanceof Error) {
        const message = error.stack;
        toast.error(`Login error: ${message}`);
        throw error;
      }
    }
  };
  const registerUser = async (data: TsignUpSchema) => {
    try {
      const res = await axios.post(URL + "users/register", data);
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
  const updateUser = async (data: TsignUpSchema) => {
    try {
      const user = localStorage.getItem("user");
      if (!user) {
        return null;
      }
      const userObj = JSON.parse(user);
      const userId = userObj.id;
      const { confirmPassword: _, ...datas } = data;
      const res = await axios.put(URL + "users/update/" + userId, datas);
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
  const loginStore = async (data: TstoreLoginSchema) => {
    try {
      const res = await axios.post(URL + "stores/login", data);
      if (res) {
        const responseData = await res.data;
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("store", JSON.stringify(responseData.store));
        setToken(responseData?.token!);
        setStore(responseData.store);
        toast.success("Estabelecimento Logado!");
        setIsSignedIn(true);
        setIsReady(true);
      }
    } catch (error: any) {
      toast.error("Login error:", error);
      throw error;
    }
  };
  const registerStore = async (data: TStoreRegisterSchema) => {
    try {
      const res = await axios.post(URL + "stores/register", data);
      if (res) {
        const responseData = await res.data;
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("store", JSON.stringify(responseData.store));
        setToken(responseData.token!);
        setStore(responseData.store);
        toast.success("Store Created!");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.warn(`Error no registro: ${error.stack}`);
      }
    }
  };
  const updateStore = async (data: TStoreRegisterSchema) => {
    try {
      const store = localStorage.getItem("store");
      if (!store) {
        return null;
      }
      const storeObj = JSON.parse(store);
      const storeId = storeObj.id;
      const { confirmPassword: _, ...datas } = data;
      const res = await axios.put(URL + "stores/update/" + storeId, datas);
      if (res) {
        const responseData = await res.data;
        const jsonData = JSON.stringify(responseData);
        console.log(jsonData);
        if (jsonData) {
          localStorage.setItem("store", jsonData);
          setStore(JSON.parse(jsonData));
          console.log(JSON.parse(jsonData));
          toast.success("Store updated!");
        }
      }
    } catch (error: any) {
      toast.warning("Update error: ", error);
      throw error;
    }
  };
  const logoutStore = () => {
    if (!store) {
      return null;
    }
    setStore({});
    setToken("");
    localStorage.removeItem("store");
    localStorage.removeItem("token");
    setIsSignedIn(false);
    toast.info("Loja deslogada!");
  };
  const value = useMemo(
    () => ({
      user,
      loginUser,
      registerUser,
      updateUser,
      logoutUser,
      store,
      loginStore,
      registerStore,
      updateStore,
      logoutStore,
      setStore,
      isSignedIn,
      token,
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
