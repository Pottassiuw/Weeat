import { Request, Response } from "express";
import AuthService from "../services/authService";
import StoreService from "../services/storeService";
type TStore = {
  name: string;
  storeName: string;
  storeNumber: string | null;
  description: string;
  email: string;
  password: string;
  contact: string;
  banner: string;
  logo: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
};
type AddressData = {
  neighborhood: string;
  state: string;
  address: string;
  city: string;
  number: number;
  complement: string | null;
  zipCode: string;
};
export default class StoreController {
  async register(req: Request, res: Response) {
    try {
      if (req.body && req.body.addresses) {
        const {
          name,
          storeName,
          storeNumber,
          description,
          email,
          password,
          contact,
          banner,
          category,
          logo,
        } = req.body;

        const StoreData: TStore = {
          name,
          storeName,
          storeNumber,
          description,
          email,
          password,
          contact,
          banner,
          logo,
          category,
        };
        const {
          neighborhood,
          state,
          address,
          city,
          number,
          complement,
          zipCode,
        } = req.body.addresses;
        const AddressData: AddressData = {
          neighborhood,
          state,
          address,
          city,
          number,
          complement,
          zipCode,
        };
        console.log(req.body);
        const store = await StoreService.registerStore(StoreData, AddressData);
        const { password: _, ...storeData } = store;
        return res.status(201).json({ storeData, AddressData });
      }
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { token, store } = await AuthService.loginStore(email, password);
      res.status(201).json({ store, token });
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(500).json({ error: "Unauthorized" });
      }
      const store = await StoreService.updateStore(
        parseInt(req.params.id),
        req.body
      );
      res.status(201).json({ store });
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }

  async getById(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(500).json({ error: "Unauthorized" });
      }
      const store = await StoreService.getStoreById(parseInt(req.params.id));
      res.status(201).json({ store });
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }

  async getByCategory(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(500).json({ error: "Unauthorized" });
      }
      const { category } = req.body;
      const store = await StoreService.getStoresByCategory(category);
      res.status(201).json({ store });
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }

  async addAddress(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(500).json({ error: "Unauthorized" });
      }
      const { storeId, addressData } = req.body;
      const store = await StoreService.addStoreAddress(
        parseInt(storeId),
        addressData
      );
      res.status(201).json({ store });
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }

  async getAddress(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(500).json({ error: "Unauthorized" });
      }
      const store = await StoreService.getStoreAddressesById(
        parseInt(req.params.id)
      );
      res.status(201).json({ store });
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }

  async getStores(req: Request, res: Response) {
    try {
      if (!req.entity) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const store = await StoreService.getAllStores();
      res.status(201).json(store);
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;
        res.status(500).json({ message });
      }
    }
  }
}
