export type User = {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
};


export type Store = {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  cep: number | undefined;
  storeName: string | undefined;
  description: string | undefined;
  contact: string | undefined;
  averageRating?: number | undefined;
  category: string | undefined;
};
