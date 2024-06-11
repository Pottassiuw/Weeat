import { createContext, useContext } from "react";

interface Store {}

export const context = createContext<Store | undefined>(undefined);

export function userContext() {
  const store = useContext(context);

  if (store === undefined) {
    throw new Error("Store Context Must be a Wrapper around (component)");
  }
  return store;
}
