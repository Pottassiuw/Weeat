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
import { Url } from "../../../helper/URL";

type Inputs = z.infer<typeof productSchema>;

export const useProduct = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(productSchema),
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      description: "",
      photo: "",
    },
  });
  const image = watch("photo");
  const submitImage = async (image: any) => {
    let imageFile = image[0];
    try {
      console.log("image", image);
      const imageRef = ref(storage, `Products/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
      console.log(imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const registerProduct = useCallback(
    async (product: Product) => {
      try {
        const image = await submitImage(product.photo);
        if (image) {
          const imageUrl = image;
          const storeLocal = localStorage.getItem("store");
          if (!storeLocal) return;
          const store = JSON.parse(storeLocal);
          const storeId: number = store.id;
          const { photo, ...productWithoutPhoto } = product;
          const products = { ...productWithoutPhoto, storeId, photo: imageUrl };
          if (!products) return;
          const res = axios.post(Url + "products", products);
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
      toast.success("Produto cadastrado com sucesso!");
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
    submitImage,
    isSubmitting,
    image,
  };
};
