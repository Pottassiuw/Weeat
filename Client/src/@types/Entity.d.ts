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
  addresses: {
    id?: number;
    zipCode: string;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    number?: string;
    complement?: string;
  };
}

// export interface UserAddress {}
