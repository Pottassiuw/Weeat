import { z } from "zod";
import { storeRegisterSchema } from "../../../lib/storeForms";
import { useState, useEffect, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { toast } from "react-toastify";
import { useStore } from "../../../context/storeContext";
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
  const navigate = useNavigate();
  const { registerStore } = useStore();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
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
        number: "",
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
  const handleData: SubmitHandler<Inputs> = async (data) => {
    try {
      const { information, storeInfo, address } = data;
      const logo = storeInfo.logo;
      const banner = storeInfo.banner;
      const images = await submitImages(logo, banner);
      if (images) {
        const logoUrl = images.logoUrl;
        const bannerUrl = images.bannerUrl;
        const store = {
          name: information.name,
          storeName: storeInfo.storeName,
          storeNumber: information.numeroCell,
          description: storeInfo.description,
          email: information.email,
          password: information.password,
          contact: storeInfo.contact,
          comercialnumber: storeInfo.number,
          banner: bannerUrl,
          logo: logoUrl,
          category: storeInfo.category,
          addresses: {
            address: address.endereco,
            zipCode: address.cep,
            neighborhood: address.bairro,
            city: address.cidade,
            state: address.estado,
            number: address.numero,
            complement: address.complemento,
          },
        };
        await registerStore(store);
        reset();
        navigate("/stores/login");
      }
    } catch (error) {
      console.error("Error registering store:", error);
      toast.error("Ocorreu um erro ao cadastrar a loja!");
    }
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    if (!fields) return;
    const output = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });
    if (!output) return;
    if (currentStep < steps.length - 1) {
      if (currentStep === 2) {
        await handleSubmit(handleData)();
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

  useEffect(() => {
    setValue("address.cep", cep);
    if (cep.length == 9) {
      handleFetchAddress(cep);
    }
  }, [handleFetchAddress, setValue, cep]);

  return {
    logo,
    banner,
    steps,
    register,
    errors,
    handleData,
    handleSubmit,
    prev,
    next,
    submitImages,
    currentStep,
  };
};
