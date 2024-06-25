import  { PropsWithChildren } from "react";
import { AuthProvider } from "./authContext";
import { UserProvider } from "./userContext";
import { StoreProvider } from "./storeContext";

const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <AuthProvider>
      <UserProvider>
        <StoreProvider>
          {children}
        </StoreProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default AppContextProvider;
