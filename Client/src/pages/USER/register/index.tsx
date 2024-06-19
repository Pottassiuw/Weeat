import * as $ from "./styles";
import Image from "../../../assets/login_register.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { TsignUpSchema } from "../../../lib/userForms.ts";
import { signUpSchema } from "../../../lib/userForms.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import NavBar from "../../../components/nav/index.tsx";
import { FormButton } from "../../../components/FormButton/styles.ts";
import Input from "../../../components/input/styles";
import ErrorMessage from "../../../components/errorMessage/styles.ts";
import { useAuth } from "../../../context/userContext.tsx";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const URL = "http://localhost:4040/users/register";
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const navigate = useNavigate();

  const createUser = async (data: TsignUpSchema) => {
    await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    reset();
    navigate("/users/login");
  };

  return (
    <$.Container>
      <NavBar sticky="false" />
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Sign in</$.Title>
        </$.WrapperTitle>
        <$.Form onSubmit={handleSubmit(createUser)}>
          <$.WrapperInput>
            <$.Label htmlFor="name">Usuário</$.Label>
            <Input
              has_error={!!errors.name}
              id="name"
              {...register("name")}
              autoComplete="username"
            />
            {errors?.name && (
              <ErrorMessage>{`${errors.name?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label htmlFor="email">Email</$.Label>
            <Input
              has_error={!!errors.email}
              id="email"
              {...register("email")}
              autoComplete="email"
            />
            {errors?.email && (
              <ErrorMessage>{`${errors.email?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label htmlFor="password">Senha</$.Label>
            <Input
              has_error={!!errors.password}
              id="password"
              {...register("password")}
              type="password"
            />
            {errors?.password && (
              <ErrorMessage>{`${errors.password?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label htmlFor="confirmPassword">Confirmar senha</$.Label>
            <Input
              has_error={!!errors.confirmPassword}
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
            />
            {errors?.confirmPassword && (
              <ErrorMessage>{`${errors.confirmPassword?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <FormButton disabled={isSubmitting}>
            {isSubmitting ? <p>...Loading</p> : <p>Cadastrar</p>}
          </FormButton>
          <$.RegisterText>
            Já possuí uma conta? <$.Links to="/users/login">Logar</$.Links>
          </$.RegisterText>
        </$.Form>
      </$.Wrapper>
      <$.WrapperImage>
        <$.Title>Busque os melhores restaurantes</$.Title>
        <$.Image src={Image} />
      </$.WrapperImage>
      <$.BottomColor></$.BottomColor>
    </$.Container>
  );
}
