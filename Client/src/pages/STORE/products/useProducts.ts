import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { productSchema } from "../../../lib/productForm";
import { z } from "zod";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import type { Product } from "../../../@types/Entity";
import { useCallback } from "react";
import { toast } from "react-toastify";
type Inputs = z.infer<typeof productSchema>;

export const useProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(productSchema),
  });
  const submitImages = async (image: any) => {
    const imageFile = image[0];
    console.log(image);
    try {
      const imageRef = ref(storage, `Products/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);
      return { imageUrl };
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  const registerProduct = useCallback(
    async (product: Partial<Product>) => {
      try {
        const image = await submitImages(product.photo);
        if (image) {
          const storeLocal = localStorage.getItem("store");
          if (!storeLocal) return;
          const store = JSON.parse(storeLocal);
          const storeId: number = store.id;
          const products = { ...product, storeId };
          const res = axios.post("/products", { products });
          if (res) {
            return res;
          } else {
            console.log("Error registering product");
          }
        }
      } catch (error) {
        console.error("Error registering product:", error);
      }
    },
    [localStorage, axios]
  );

  const handleData = async (data: Inputs) => {
    try {
      if (!data) return;
      await registerProduct(data);
    } catch (error) {
      console.error("Error registering product:", error);
      toast.error("Ocorreu um erro ao cadastrar o produto!");
    }
  };
  return {
    register,
    errors,
    handleSubmit,
    handleData,
  };
};
