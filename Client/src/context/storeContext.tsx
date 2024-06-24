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
import type { Store, OnlyStore, OnlyAddress } from "../@types/Entity";
import { TstoreLoginSchema } from "../lib/storeForms";
import { useAuth } from "./authContext";
import { toast } from "react-toastify";

type StoreContextProps = {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
  loginStore: (data: TstoreLoginSchema) => void;
  registerStore: (data: Store) => void;
  updateStore: (
    StoreData: Partial<OnlyStore>,
    AddressData: Partial<OnlyAddress>
  ) => void;
  logoutStore: () => void;
};

const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export function StoreProvider({ children }: { children: ReactNode }) {
  const { isSignedIn, setIsSignedIn } = useAuth();
  const [store, setStore] = useState<Store>({} as Store);
  // ? chamar o token se precisar
  console.log("store", store);
  const { setToken } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const setStoreData = async () => {
      const token = localStorage.getItem("token");
      const stores = localStorage.getItem("store");
      if (token && stores) {
        console.log(stores);
        setToken(token);
        setStore(JSON.parse(stores));
        setIsSignedIn(true);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
    };
    setStoreData();
    setIsReady(true);
  }, []);
  const loginStore = async (data: TstoreLoginSchema) => {
    try {
      const res = await axios.post(Url + "stores/login", data);
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
      toast.error("Erro de login:");
      throw error;
    }
  };
  const registerStore = async (data: Store) => {
    try {
      const res = await axios.post(Url + "stores/register", data);
      if (res) {
        const responseData = await res.data;
        console.log(responseData);
        localStorage.setItem("token", responseData.token);
        toast.success("Store Created!");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.warn(`Error no registro: ${error.stack}`);
      }
    }
  };
  const updateStore = async (
    StoreData: Partial<OnlyStore>,
    AddressData: Partial<OnlyAddress>
  ) => {
    try {
      console.log("addressData", AddressData);
      console.log("StoreData", StoreData);
      const storeId = store.id;
      const resStoreData = await axios.put(
        Url + `stores/${storeId}`,
        StoreData
      );
      const resStoreAddress = await axios.put(
        Url + `stores/address/${store.id}`,
        AddressData
      );
      console.log(resStoreData);
      console.log(resStoreAddress);
      toast.success("Atualização feita com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error updating store:", error.message);
        toast.error("Ocorreu um erro ao tentar fazer o registro!");
      }
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
