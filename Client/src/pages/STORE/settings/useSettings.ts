import { z } from "zod";
import { storeRegisterSchema } from "../../../lib/storeForms";
import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { useStore } from "../../../context/storeContext";
import { Url } from "../../../helper/URL";
type Inputs = z.infer<typeof storeRegisterSchema>;
type FieldName = keyof Inputs;

type CepDataFieldProps = {
  uf: string;
  localidade: string;
  bairro: string;
  logradouro: string;
};
const steps = [
  {
    id: 1,
    name: "Registro de informações",
    fields: [
      "information.name",
      "information.email",
      "information.password",
      "information.confirmPassword",
    ],
  },
  {
    id: 2,
    name: "Registro de endereço",
    fields: [
      "address.cep",
      "address.bairro",
      "address.endereco",
      "address.numero",
      "address.complemento",
      "address.cidade",
      "address.estado",
    ],
  },
  {
    id: 3,
    name: "Registro Final",
    fields: [
      "storeInfo.storeName",
      "storeInfo.description",
      "storeInfo.category",
      "storeInfo.banner",
      "storeInfo.logo",
      "storeInfo.contact",
    ],
  },
];
export const useRegister = () => {
  const { updateStore, store } = useStore();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>({
    resolver: zodResolver(storeRegisterSchema),
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      information: {
        name: "",
        email: "",
        numeroCell: "",
        password: "",
        confirmPassword: "",
      },
      address: {
        cep: "",
        bairro: "",
        endereco: "",
        complemento: "",
        cidade: "",
        estado: "",
      },
      storeInfo: {
        contact: "",
        storeName: "",
        description: "",
        category: "",
        logo: "",
        banner: "",
      },
    },
  });
  const cep = watch("address.cep");
  const logo = watch("storeInfo.logo");
  const banner = watch("storeInfo.banner");
  const [currentStep, setCurrentStep] = useState(0);
  const submitImages = async (logo: any, banner: any) => {
    const logoFile = logo[0];
    const bannerFile = banner[0];
    console.log(logoFile, bannerFile);
    try {
      const logoRef = ref(storage, `Logos/${logoFile.name}`);
      const bannerRef = ref(storage, `Banners/${bannerFile.name}`);
      await uploadBytes(logoRef, logoFile);
      await uploadBytes(bannerRef, bannerFile);
      const logoUrl = await getDownloadURL(logoRef);
      const bannerUrl = await getDownloadURL(bannerRef);
      console.log(logo, banner);
      return { logoUrl, bannerUrl };
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  // ! Enviar para o backend

  const next = async () => {
    const fields = steps[currentStep].fields;
    if (!fields) return;
    const output = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;
    if (currentStep < steps.length - 1) {
      if (currentStep === 2) {
        await handleSubmit(handleUpdate)();
      }
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  const handleFetchData = useCallback(
    async (data: CepDataFieldProps) => {
      if (!data) return;
      setValue("address.bairro", data.bairro);
      setValue("address.cidade", data.localidade);
      setValue("address.estado", data.uf);
      setValue("address.endereco", data.logradouro);
      trigger("address.bairro");
      trigger("address.cidade");
      trigger("address.estado");
      trigger("address.endereco");
    },
    [setValue]
  );
  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      if (zipCode.length < 8) return;
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${zipCode}/json`
        );
        handleFetchData(data);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    },
    [handleFetchData]
  );
  const getStoreAddress = useCallback(
    async (storeId: number) => {
      try {
        const res = await axios.get(Url + `stores/address/store/${storeId}`);
        console.log(res);
        return res.data;
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching store address:", error.message);
        }
      }
    },
    [store]
  );

  const handleUpdate = async (data: Inputs) => {
    if (store) {
      const images = await submitImages(
        data.storeInfo.logo,
        data.storeInfo.banner
      );
      if (!images) return;
      const logo = images?.logoUrl;
      const banner = images?.bannerUrl;
      const { name, email, numeroCell, password } = data.information;
      const { numero, bairro, cep, cidade, complemento, endereco, estado } =
        data.address;
      const { category, contact, description, storeName } = data.storeInfo;
      const NewStoreData = {
        name,
        email,
        storeNumber: numeroCell,
        password,
        contact,
        category,
        description,
        logo,
        banner,
        storeName,
      };
      const NewAddressData = {
        storeNumber: numero,
        neighborhood: bairro,
        zipCode: cep,
        city: cidade,
        address: endereco,
        complement: complemento,
        state: estado,
      };
      updateStore(NewStoreData, NewAddressData);
    }
  };
  useEffect(() => {
    setValue("address.cep", cep);
    if (cep.length == 9) {
      handleFetchAddress(cep);
    }
    if (!getStoreAddress) return;
    const storeAddress = getStoreAddress(store?.id!)
      .then((res) => {
        const address = res;
        const street = address.address;
        const number = address.number;
        const neighborhood = address.neighborhood;
        const city = address.city;
        const state = address.state;
        const zipCode = address.zipCode;
        setValue("address.endereco", street);
        setValue("address.numero", number);
        setValue("address.bairro", neighborhood);
        setValue("address.cidade", city);
        setValue("address.estado", state);
        setValue("address.cep", zipCode);
      })
      .catch((error) => {
        console.error("Error fetching store address:", error);
      });
    if (store) {
      setValue("information.name", store?.name!);
      setValue("information.email", store?.email!);
      setValue("information.numeroCell", store?.storeNumber!);
      setValue("storeInfo.storeName", store?.storeName!);
      setValue("storeInfo.logo", store?.logo!);
      setValue("storeInfo.description", store?.description!);
      setValue("storeInfo.banner", store?.banner!);
      setValue("storeInfo.category", store?.category!);
      setValue("storeInfo.contact", store?.contact!);
    }
  }, [handleFetchAddress, setValue, cep, store]);

  return {
    logo,
    banner,
    steps,
    register,
    handleSubmit,
    prev,
    next,
    submitImages,
    handleUpdate,
    currentStep,
    errors,
  };
};
