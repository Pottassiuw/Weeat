import * as $ from "./styles";
import NavBar from "../../../../components/nav";
import { useRegister } from "../useSettings";
import Input from "../../../../components/input/styles";
import InputWithMask from "../../../../components/MaskInput/styled";
import ErrorMessage from "../../../../components/errorMessage/styles";
import SelectCategory from "../../../../components/Category/styles";

export default function updateStore() {
  const {
    errors,
    register,
    handleSubmit,
    prev,
    next,
    currentStep,
    logo,
    banner,
    handleUpdate,
  } = useRegister();
  return (
    <$.Section>
      <NavBar sticky="true" />
      <$.Container>
        <$.Form onSubmit={handleSubmit(handleUpdate)}>
          {currentStep === 0 && (
            <>
              <$.FormTexts>
                <h1>Atualizar a loja</h1>
                <p>Seus dados pessoais</p>
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
                <h1>Atualizar o endereço da loja!</h1>
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
                <h1>Atualizar os dados do Estabelecimento</h1>
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
                <SelectCategory >
                  <option value="">...</option>
                  <option value="">Lanchonete</option>
                  <option value="">Restaurante Árabe</option>
                  <option value="">Restaurante Japonês</option>
                  <option value="">Sobremesas</option>
                  <option value="">Pizzarial</option>
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
                <SelectCategory>
                  <option value="">Whatsapp</option>
                  <option value="">Instagram</option>
                  <option value="">facebook</option>
                  <option value="">Telegram</option>
                </SelectCategory>
              </$.InputWrapper>
              <$.filetitletext>
                <h1>Imagens</h1>
              </$.filetitletext>
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
                  {logo && <p>Uploaded logo: {logo[0].name}</p>}
                  {errors.storeInfo?.logo?.message && (
                    <ErrorMessage>{`${errors.storeInfo.logo.message}`}</ErrorMessage>
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
                  {banner && <p>Uploaded banner: {banner[0].name}</p>}
                  {errors.storeInfo?.banner?.message && (
                    <ErrorMessage>{`${errors.storeInfo.banner.message}`}</ErrorMessage>
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
