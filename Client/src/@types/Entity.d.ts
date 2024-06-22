export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
}

export interface Store {
  id?: number;
  name: string;
  storeName: string;
  storeNumber: string;
  description: string;
  email: string;
  password: string;
  contact: string;
  banner: string;
  logo: string;
  averageRating?: number;
  category: string;
}

export interface StoreAddress {
  id?: number;
  cep?: number;
  storeId?: number;
  street?: string;
  address?: string;
  number?: number;
  complement?: string;
  //bairro (em inglês) colocar aqui!
  zip?: string;
}

// export interface UserAddress {}
