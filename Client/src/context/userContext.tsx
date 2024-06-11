import { createContext, useContext } from "react";

interface User {}

export const context = createContext<User | undefined>(undefined);

export function userContext() {
  const user = useContext(context);

  if (user === undefined) {
    throw new Error("User Context Must be a Wrapper around (component)");
  }
  return user;
}
