import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  StoreAddressSchema,
  TStoreAdressSchema,
} from "../../../lib/storeForms";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/input/styles";
import FormButton from "../../../components/FormButton";
import ErrorMessage from "../../../components/errorMessage/styles";
import styled from "styled-components";
import { flexCenter } from "../../../styles/mixins";
import NavBar from "../../../components/nav";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const WeeatTitle = styled.div`
  ${flexCenter}
  height: 50px;

  h1 {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: ${({ theme }) => theme.font.title};
    font-weight: 500;
  }
  padding: 5rem;
  border-bottom: 1rem solid #e8e8e8;
  margin-bottom: 5rem;
`;
const Form = styled.form`
  display: flex;
  width: 35%;
  margin: 0 auto;
  flex-flow: column nowrap;
  margin-bottom: 5rem;
`;
const FormTexts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  h1 {
    font-size: ${({ theme }) => theme.font.subtitleG};
  }
  p {
    font-size: ${({ theme }) => theme.font.text};
  }
`;
const InputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 1rem 0;
  input {
    width: 100%;
  }
`;
const InputContentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
  :nth-child(2) {
    margin-bottom: 1rem;
  }
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.font.text};
`;
export default function RegisterContinuation() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TStoreAdressSchema>({
    resolver: zodResolver(StoreAddressSchema),
  });

  const handleAddressSubmit = async (data: TStoreAdressSchema) => {
    console.log("Final form data: ", data);
  };

  return (
    <Container>
      <NavBar sticky="true" />
      <WeeatTitle>
        <h1>Weeat</h1>
      </WeeatTitle>
      <Form onSubmit={handleSubmit(handleAddressSubmit)}>
        <FormTexts>
          <h1>Endereço da loja!</h1>
          <p>Preencha as informações do seu estabelecimento</p>
        </FormTexts>
        <InputWrapper>
          <Label>CEP*</Label>
          <Input
            {...register("cep")}
            has_error={!!errors.cep}
            type="text"
            placeholder="CEP"
          />
          {errors.cep && (
            <ErrorMessage>{`${errors.cep?.message}`}</ErrorMessage>
          )}
        </InputWrapper>
        <InputContentWrapper>
          <InputWrapper>
            <Label>Estado*</Label>
            <Input type="text" has_error={false} placeholder="Store Name" />
          </InputWrapper>
          <InputWrapper>
            <Label>Cidade*</Label>
            <Input has_error={false} type="text" placeholder="Description" />
          </InputWrapper>
        </InputContentWrapper>
        <InputWrapper>
          <Label>Bairro*</Label>
          <Input
            {...register("bairro")}
            has_error={!!errors.bairro}
            type="text"
            placeholder="CEP"
          />
          {errors.bairro && (
            <ErrorMessage>{`${errors.bairro?.message}`}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label>Endereço*</Label>
          <Input
            {...register("endereco")}
            has_error={!!errors.endereco}
            type="text"
            placeholder="CEP"
          />
          {errors.endereco && (
            <ErrorMessage>{`${errors.endereco?.message}`}</ErrorMessage>
          )}
        </InputWrapper>
        <InputContentWrapper>
          <InputWrapper>
            <Label>Número</Label>
            <Input has_error={false} type="text" placeholder="Store Name" />
          </InputWrapper>
          <InputWrapper>
            <Label>Complemento</Label>
            <Input has_error={false} type="text" placeholder="Description" />
          </InputWrapper>
        </InputContentWrapper>
        <FormButton disabled={isSubmitting}>Continuar</FormButton>
      </Form>
    </Container>
  );
}
