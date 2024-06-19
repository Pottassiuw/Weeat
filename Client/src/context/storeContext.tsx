import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from "react";
import { URL } from "../helper/URL";
import axios from "axios";
import type { Store } from "../@types/Entity";
import {
  TStoreRegisterSchema,
  TstoreLoginSchema,
  TStoreAdressSchema,
} from "../lib/storeForms";
import { useAuth } from "./authContext";
import { toast } from "react-toastify";

type StoreContextProps = {
  store: Partial<Store>;
  setStore: React.Dispatch<React.SetStateAction<Partial<Store>>>;
  loginStore: (data: TstoreLoginSchema) => void;
  registerStore: (data: TStoreRegisterSchema) => void;
  updateStore: (data: TStoreRegisterSchema) => void;
  logoutStore: () => void;
};

const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export function StoreProvider({ children }: { children: ReactNode }) {
  const { isSignedIn, setIsSignedIn } = useAuth();
  const [store, setStore] = useState<Partial<Store>>({});
  const { token, setToken } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const store = localStorage.getItem("store");
    const token = localStorage.getItem("token");
    if (store && token) {
      setStore(JSON.parse(store));
      setToken(token);
      setIsSignedIn(true);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);
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
      store,
      setStore,
      loginStore,
      registerStore,
      updateStore,
      logoutStore,
    }),
    [store, isSignedIn]
  );
  return (
    <StoreContext.Provider value={value}>
      {isReady ? children : null}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within an AuthProvider");
  }
  return context;
}
