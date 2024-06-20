import { ZodError, z } from "zod";
import { storeRegisterSchema } from "../../../lib/storeForms";
import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useStore } from "../../../context/storeContext";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

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
      "storeInfo.storeDescription",
      "storeInfo.category",
    ],
  },
];
export const useRegister = () => {
  const { setStore } = useStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<Inputs>({
    resolver: zodResolver(storeRegisterSchema),
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      information: {
        name: "",
        email: "",
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
        storeName: "",
        description: "",
        category: "",
      },
    },
  });
  const cep = watch("address.cep");

  const [currentStep, setCurrentStep] = useState(2);
  const handleData = async (data: Inputs) => {};
  const next = async () => {
    const fields = steps[currentStep].fields;
    if (!fields) return;

    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;
    if (currentStep < steps.length - 1) {
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
    steps,
    register,
    errors,
    handleData,
    handleSubmit,
    prev,
    next,
    currentStep,
  };
};
