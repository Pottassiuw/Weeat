export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  userAddress?: number[];
  favorites?: number[];
  productReview?: number[];
};

export type Store = {
  id: number;
  name: string;
  email: string;
  password: string;
  cep: number;
  storeName: string;
  description: string;
  contact: string;
  averageRating?: number;
  category: string;
};
