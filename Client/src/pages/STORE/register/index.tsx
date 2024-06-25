import * as $ from "./styles";
import NavBar from "../../../components/nav";
import Input from "../../../components/input/styles";
import InputWithMask from "../../../components/MaskInput/styled";
import ErrorMessage from "../../../components/errorMessage/styles";
import ErrorMessage2 from "../../../components/errorMessage/styles";
import { useRegister } from "./useRegister";
import SelectCategory from "../../../components/Category/styles";
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
    logo,
    banner,
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
                <$.Label>Nome*</$.Label>
                <Input
                  {...register("information.name")}
                  type="text"
                  placeholder="Ex: john Doe"
                  autoComplete="name"
                />
                {errors.information?.name?.message && (
                  <ErrorMessage>{`${errors.information.name.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Email*</$.Label>
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
                <$.Label>
                  Número<span>(opcional)</span>
                </$.Label>
                <$.InputIconWrapper>
                  <InputWithMask
                    mask="(99) 99999-9999"
                    {...register("information.numeroCell")}
                    type="text"
                    placeholder="Ex: +55 (99) 999999999"
                    autoComplete="email webauthn"
                  />
                </$.InputIconWrapper>
                {errors.information?.numeroCell?.message && (
                  <ErrorMessage>{`${errors.information.numeroCell.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Senha*</$.Label>
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
                <$.Label>Confirmar Senha!*</$.Label>
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
                  {errors.address?.numero?.message && (
                    <ErrorMessage>{`${errors.address.numero.message}`}</ErrorMessage>
                  )}
                </$.InputWrapper>
                <$.InputWrapper>
                  <$.Label>
                    Complemento<span>(opcional)</span>
                  </$.Label>
                  <Input
                    {...register("address.complemento")}
                    type="text"
                    placeholder="Description"
                  />
                </$.InputWrapper>
              </$.InputContentWrapper>
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
                {errors.storeInfo?.storeName?.message && (
                  <ErrorMessage>{`${errors.storeInfo.storeName.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>Descrição da loja!*</$.Label>
                <$.DescriptionInput
                  {...register("storeInfo.description")}
                  placeholder="Descrição..."
                />
                {errors.storeInfo?.description?.message && (
                  <ErrorMessage>{`${errors.storeInfo.description.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>
                  Insira a categoria do seu Estabelecimento*
                  <p>Importante!</p>
                </$.Label>
                <SelectCategory {...register("storeInfo.category")}>
                  <option value="">...</option>
                  <option value="Lanchonete">Lanchonete</option>
                  <option value="Restaurante Árabe">Restaurante Árabe</option>
                  <option value="Restaurante Japonês">
                    Restaurante Japonês
                  </option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Pizzaria">Pizzarial</option>
                </SelectCategory>
                {errors.storeInfo?.category?.message && (
                  <ErrorMessage>{`${errors.storeInfo.category.message}`}</ErrorMessage>
                )}
              </$.InputWrapper>
              <$.InputWrapper>
                <$.Label>
                  Insira o(s) contato(s) de seu estabelecimento*
                  <p>Importante!</p>
                </$.Label>
                <SelectCategory {...register("storeInfo.contact")}>
                  <option value="Whatsapp">Whatsapp</option>
                </SelectCategory>
              </$.InputWrapper>
              <$.InputWrapper>
              <$.Label>
                Insira o número comercial da sua loja
              </$.Label>
              <$.NumberInput
                {...register("information.number")}
                placeholder="Número comercial"
                type="text"
              >
                
              </$.NumberInput>
              </$.InputWrapper>
              <h1>Imagens</h1>
              <$.FileInputWrapper>
                <$.InputWrapper>
                  <p>Logo</p>
                  <$.LabelFile>
                    <$.CrossIcon />
                    <$.InputFile
                      {...register("storeInfo.logo")}
                      type="file"
                      accept="image/*"
                    />
                  </$.LabelFile>
                  <$.AcceptedFileText>
                  {logo && <p>Sua logo foi inserida com sucesso!</p>}
                  </$.AcceptedFileText>
                  {errors.storeInfo?.logo?.message && (
                    <ErrorMessage2><p>O estabelecimento precisa de uma logo!</p></ErrorMessage2>
                  )}
                </$.InputWrapper>
                <$.InputWrapper>
                  <p>Banner</p>
                  <$.LabelFile>
                    <$.CrossIcon />
                    <$.InputFile
                      {...register("storeInfo.banner")}
                      type="file"
                      accept="image/*"
                    />
                  </$.LabelFile>
                  <$.AcceptedFileText>
                  {banner && <p>Seu banner foi inserido com sucesso!</p>}
                  </$.AcceptedFileText>
                  {errors.storeInfo?.banner?.message && (
                    <ErrorMessage2><p>O estabelecimento precisa de um banner!</p></ErrorMessage2>
                  )}
                </$.InputWrapper>
              </$.FileInputWrapper>
            </>
          )}
          <$.ButtonWrapper>
            <$.Button onClick={prev}>
              <$.ArrowLeftIcon />
            </$.Button>
            <$.Button onClick={next}>
              <$.ArrowRightIcon />
            </$.Button>
          </$.ButtonWrapper>
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
