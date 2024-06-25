import { Request, Response } from "express";
import ProductService from "../services/productService";
import productService from "../services/productService";

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};
export default class ProductController {
  async create(req: Request, res: Response) {
    const body = req.body;
    console.log(body);
    try {
      const product = await ProductService.createProduct(body);
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async update(req: Request, res: Response) {
    const body = req.body;
    const id = parseInt(req.params.id);
    try {
      const product = await productService.updateProduct(id, body);
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const product = await productService.deleteProduct(id);
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async deleteFromStore(req: Request, res: Response) {
    try {
      const storeId = parseInt(req.params.storeId);
      const productId = parseInt(req.params.productId);
      await productService.delteProductFromStore(productId, storeId);
      res.status(204).send();
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const product = await productService.getProductById(id);
      res.status(201).json({ id });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const product = await productService.getAllProducts();
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
  async getInStore(req: Request, res: Response) {
    const storeId = parseInt(req.params.storeId);
    try {
      const product = await productService.getProductsInStore(storeId);
      res.status(201).json({ product });
    } catch (error) {
      const message = isError(error) ? error.message : "Unknown error";
      res.status(500).json({ message });
    }
  }
}
