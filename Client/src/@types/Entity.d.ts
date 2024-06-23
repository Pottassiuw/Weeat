export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
}

interface Store {
  id?: number;
  name?: string;
  storeName?: string;
  storeNumber?: string;
  description?: string;
  email?: string;
  password?: string;
  contact?: string;
  banner?: string;
  logo?: string;
  category?: string;
  addresses?: {
    address?: string;
    zipCode?: string;
    neighborhood?: string;
    state?: string;
    city?: string;
    number?: number;
    complement?: string;
  };
}

// export interface UserAddress {}
