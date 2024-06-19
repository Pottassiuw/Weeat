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

type StoreContextProps = {
    store: Partial<Store>;
    setStore: React.Dispatch<React.SetStateAction<Partial<Store>>>;
    loginStore: (data: TstoreLoginSchema) => void;
    registerStore: (data: TStoreRegisterSchema) => void;
    updateStore: (data: TStoreRegisterSchema) => void;
    logoutStore: () => void;
}

const storeContext = createContext<StoreContextProps>({} as StoreContextProps);

type StoreProviderProps = PropsWithChildren;
export default function storeProvider({ children }: StoreProviderProps) {
    const [store, setStore] = useState<Partial<Store>>({});


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



}   