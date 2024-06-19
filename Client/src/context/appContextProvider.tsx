import { PropsWithChildren } from "react";
import { AuthProvider } from "./authContext";
import { UserProvider } from "./userContext"; // Correct import
import { StoreProvider } from "./storeContext"; // Correct import

const AppContextProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <AuthProvider>
      <UserProvider>
        <StoreProvider>{children}</StoreProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default AppContextProvider;
