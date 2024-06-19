import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/nav";
import * as $ from "./styles";
import { useForm } from "react-hook-form";
import Input from "../../../components/input/styles";
import FormButton from "../../../components/FormButton";
import { TstoreLoginSchema, storeLoginSchema } from "../../../lib/storeForms";
import { useAuth } from "../../../context/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../../../components/errorMessage/styles";
export default function LoginEstablishment() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TstoreLoginSchema>({
    resolver: zodResolver(storeLoginSchema),
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const { loginStore } = useAuth();
  const navigate = useNavigate();
  const handleData = async (form: TstoreLoginSchema) => {
    await loginStore({ email: form.email, password: form.password });
    reset();
    navigate("/stores");
  };

  return (
    <$.Screen>
      <NavBar sticky="true" />
      <$.Container>
        <$.Wrapper>
          <$.WrapperTitle>
            <$.Title>Entre com sua loja!</$.Title>
            <$.Subtitle>Seja um sócio weeat e expanda seu comércio</$.Subtitle>
          </$.WrapperTitle>
          <$.Form onSubmit={handleSubmit(handleData)}>
            <$.WrapperInput>
              <$.Label>Email</$.Label>
              <Input
                {...register("email")}
                has_error={!!errors.email}
                type="text"
                placeholder="Ex: email@email.email"
                autoComplete="email"
              />
              {errors.email && (
                <ErrorMessage>{`${errors.email?.message}`}</ErrorMessage>
              )}
            </$.WrapperInput>
            <$.WrapperInput>
              <$.Label>Senha</$.Label>
              <$.InputIconWrapper>
                <Input
                  {...register("password")}
                  has_error={!!errors.password}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Ex: 12345678"
                  autoComplete="current-password webauthn"
                />
                <$.EyeDiv onClick={togglePasswordVisibility}>
                  {passwordVisible ? <$.Eye_off /> : <$.Eye_on />}
                </$.EyeDiv>
              </$.InputIconWrapper>
              {errors.password && (
                <ErrorMessage>{`${errors.password?.message}`}</ErrorMessage>
              )}
            </$.WrapperInput>
            <FormButton disabled={isSubmitting}>Entrar</FormButton>
            <$.PolicyText>
              Ao continuar, você concorda em receber comunicações promocionais
              da Weeat.
            </$.PolicyText>
          </$.Form>
        </$.Wrapper>
        <$.encapsular>
          <$.PolicyText2>
            Ainda não tem cadastro?
            <$.Links to="/stores/register">Cadastre sua loja</$.Links>
          </$.PolicyText2>
        </$.encapsular>
      </$.Container>
    </$.Screen>
  );
}
