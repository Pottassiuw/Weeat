import * as $ from "./styles";
import NavBar from "../../../components/nav";
import Input from "../../../components/input/styles";
import InputWithMask from "../../../components/MaskInput/styled";
import ErrorMessage from "../../../components/errorMessage/styles";
import { useRegister } from "../../../hooks/useRegister";
export default function Register() {
  const {
    errors,
    register,
    steps,
    handleSubmit,
    handleData,
    prev,
    next,
    currentStep,
  } = useRegister();

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
                <$.Button onClick={next}>Continuar</$.Button>
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
                <InputWithMask
                  mask="99999-999"
                  {...register("address.cep")}
                  type="text"
                  placeholder="CEP"
                />
                {errors.address?.cep && (
                  <ErrorMessage>{`${errors.address.cep?.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputContentWrapper>
                <$.InputWrapper>
                  <$.Label>Estado*</$.Label>
                  <Input
                    {...register("address.estado")}
                    type="text"
                    placeholder="Store Name"
                  />
                  {errors.address?.estado && (
                    <ErrorMessage>{`${errors.address.estado.message}`}</ErrorMessage>
                  )}
                </$.InputWrapper>
                <$.InputWrapper>
                  <$.Label>Cidade*</$.Label>
                  <Input
                    {...register("address.cidade")}
                    type="text"
                    placeholder="Description"
                  />
                  {errors.address?.cidade && (
                    <ErrorMessage>{`${errors.address.cidade.message}`}</ErrorMessage>
                  )}
                </$.InputWrapper>
              </$.InputContentWrapper>
              <$.InputWrapper>
                <$.Label>Bairro*</$.Label>
                <Input
                  {...register("address.bairro")}
                  type="text"
                  placeholder="CEP"
                />
                {errors.address?.bairro?.message && (
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
                {errors.address?.endereco?.message && (
                  <ErrorMessage>{`${errors.address.endereco?.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputContentWrapper>
                <$.InputWrapper>
                  <$.Label>Número*</$.Label>
                  <Input
                    {...register("address.numero")}
                    type="text"
                    placeholder="Store Name"
                    maxLength={12}
                  />
                  {errors.address?.numero && (
                    <ErrorMessage>{`${errors.address.numero.message}`}</ErrorMessage>
                  )}
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
                <$.Button onClick={next}>Continuar</$.Button>
              </$.ButtonWrapper>
            </>
          )}
          {currentStep === 2 && (
            <>
              <$.FormTexts>
                <h1>Dados do Estabelecimento</h1>
                <p>Preencha os dados de seu estabelecimento</p>
              </$.FormTexts>
              <$.InputWrapper>
                <$.Label>Nome da loja*</$.Label>
                <Input
                  {...register("storeInfo.storeName")}
                  type="text"
                  placeholder="Nome da loja"
                />
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Nome da loja*</$.Label>
                <Input
                  {...register("storeInfo.storeName")}
                  type="text"
                  placeholder="Nome da loja"
                />
              </$.InputWrapper>
              <$.ButtonWrapper>
                <$.Button onClick={prev}>Voltar</$.Button>
                <$.Button onClick={next}>Continuar</$.Button>
              </$.ButtonWrapper>
            </>
          )}
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
