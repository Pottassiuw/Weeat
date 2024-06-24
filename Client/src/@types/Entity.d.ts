export type User = {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
};

export type Store = {
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
};
export type OnlyStore = {
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
};
export type OnlyAddress = {
  address?: string;
  zipCode?: string;
  neighborhood?: string;
  state?: string;
  city?: string;
  number?: number;
  complement?: string;
};
export type Product = {
  id?: number;
  name?: string;
  description?: string;
  photo?: string;
  price?: number;
  storeId?: number;
};

// export interface UserAddress {}
