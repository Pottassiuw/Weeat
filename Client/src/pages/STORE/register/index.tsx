import * as $ from "./styles";
import NavBar from "../../../components/nav";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/input/styles";
import ErrorMessage from "../../../components/errorMessage/styles";
import { useStore } from "../../../context/storeContext";
import { useNavigate } from "react-router-dom";
import { storeRegisterSchema } from "../../../lib/storeForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodError, z } from "zod";

type Inputs = z.infer<typeof storeRegisterSchema>;
type FieldName = keyof Inputs;
interface ErrorAddress {
  bairro?: ZodError;
  cep?: ZodError;
  endereco?: ZodError;
  numero?: ZodError;
  complemento?: ZodError;
}

interface ErrorInformation {
  name?: ZodError;
  email?: ZodError;
  password?: ZodError;
  confirmPassword?: ZodError;
}

interface Errors {
  address?: ErrorAddress;
  information?: ErrorInformation;
}
export default function Register() {
  const { setStore } = useStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(storeRegisterSchema),
    mode: "all",
    criteriaMode: "all",
  });

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
      ],
    },
    {
      id: 3,
      name: "Registro Final",
      fields: [

      ]
    }
    { id: 3, name: "Registro de categorias" },
  ];
  const [currentStep, setCurrentStep] = useState(0);

  const handleData = async (data: Inputs) => {
    console.log(data);
  };

  const next = async () => {
    const fields = steps[currentStep].fields;
    if (!fields) return;

    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;
    if (currentStep < steps.length - 1) {
      if (currentStep == steps.length - 2) {
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
  return (
    <$.Section>
      <NavBar sticky="true" />
      <$.Container>
        <$.FormPreview>
          {steps.map((step) => (
            <$.FormPreviewDiv key={step.id}>
              <h1>Passo {step.id}</h1>
              <p>{step.name}</p>
            </$.FormPreviewDiv>
          ))}
        </$.FormPreview>
        <$.Form onSubmit={handleSubmit(handleData)}>
          {currentStep === 0 && (
            <>
              <$.FormTexts>
                <h1>Cadastre sua loja!</h1>
                <p>Dados pessoais</p>
              </$.FormTexts>
              <$.InputWrapper>
                <$.Label>Nome</$.Label>
                <Input
                  {...register("information.name")}
                  type="text"
                  placeholder="john Doe"
                  autoComplete="name"
                />
                {errors.information?.name?.message && (
                  <ErrorMessage>{`${errors.information.name.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Email</$.Label>
                <$.InputIconWrapper>
                  <Input
                    {...register("information.email")}
                    type="text"
                    placeholder="Ex: email@email.com"
                    autoComplete="email webauthn"
                  />
                </$.InputIconWrapper>
                {errors.information?.email?.message && (
                  <ErrorMessage>{`${errors.information.email.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Senha</$.Label>
                <$.InputIconWrapper>
                  <Input
                    {...register("information.password")}
                    type="password"
                    placeholder="Ex: 12345678"
                    autoComplete="current-password webauthn"
                  />
                </$.InputIconWrapper>
                {errors.information?.password?.message && (
                  <ErrorMessage>{`${errors.information.password.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Confirmar Senha!</$.Label>
                <$.InputIconWrapper>
                  <Input
                    {...register("information.confirmPassword")}
                    type="password"
                    placeholder="Ex: 12345678"
                    autoComplete="current-password webauthn"
                  />
                </$.InputIconWrapper>
                {errors.information?.confirmPassword?.message && (
                  <ErrorMessage>{`${errors.information.confirmPassword.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.ButtonWrapper>
                <$.Button onClick={prev}>Voltar</$.Button>
                <$.Button onClick={next} disabled={isSubmitting}>
                  Continuar
                </$.Button>
              </$.ButtonWrapper>
            </>
          )}
          {currentStep === 1 && (
            <>
              <$.FormTexts>
                <h1>Endereço da loja!</h1>
                <p>Preencha as informações do seu estabelecimento</p>
              </$.FormTexts>
              <$.InputWrapper>
                <$.Label>CEP*</$.Label>
                <Input
                  {...register("address.cep")}
                  type="text"
                  maxLength={9}
                  placeholder="CEP"
                />
                {errors.address?.cep && (
                  <ErrorMessage>{`${errors.address.cep?.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputContentWrapper>
                <$.InputWrapper>
                  <$.Label>Estado*</$.Label>
                  <Input type="text" placeholder="Store Name" />
                </$.InputWrapper>
                <$.InputWrapper>
                  <$.Label>Cidade*</$.Label>
                  <Input type="text" placeholder="Description" />
                </$.InputWrapper>
              </$.InputContentWrapper>
              <$.InputWrapper>
                <$.Label>Bairro*</$.Label>
                <Input
                  {...register("address.bairro")}
                  type="text"
                  placeholder="CEP"
                />
                {errors.address?.bairro && (
                  <ErrorMessage>{`${errors.address.bairro.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Endereço*</$.Label>
                <Input
                  {...register("address.endereco")}
                  type="text"
                  placeholder="CEP"
                />
                {errors.address?.endereco && (
                  <ErrorMessage>{`${errors.address.endereco?.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputContentWrapper>
                <$.InputWrapper>
                  <$.Label>Número</$.Label>
                  <Input
                    {...register("address.numero")}
                    type="text"
                    placeholder="Store Name"
                  />
                </$.InputWrapper>
                <$.InputWrapper>
                  <$.Label>Complemento</$.Label>
                  <Input
                    {...register("address.complemento")}
                    type="text"
                    placeholder="Description"
                  />
                </$.InputWrapper>
              </$.InputContentWrapper>
              <$.ButtonWrapper>
                <$.Button onClick={prev}>Voltar</$.Button>
                <$.Button onClick={next} disabled={isSubmitting}>
                  Continuar
                </$.Button>
              </$.ButtonWrapper>
            </>
          )}
          {currentStep === 2 && (
          <>
          <$.FormTexts>
            <h1>Dados do Estabelecimento</h1>
            <p>Preencha os dados de seu estabelecimento</p>
          </$.FormTexts>
          </>)}
        </$.Form>
      </$.Container>
      <$.LinesContainer>
        <$.Line color="#FF0000"></$.Line>
        <$.Line color="#FFA07A"></$.Line>
        <$.Line color="#FFFF00"></$.Line>
      </$.LinesContainer>
    </$.Section>
  );
}
