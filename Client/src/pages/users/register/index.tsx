import * as $ from "./styles";
import Image from "../../../assets/login_register.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { TsignUpSchema } from "../../../@types/types.d.ts";
import { signUpSchema } from "../../../@types/types.ts";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Register() {
  const URL = "http://localhost:4040/users/register";
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, 
    reset,
  } = useForm<TsignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const createUser = async (data: TsignUpSchema) => {
    const response = await axios.post(URL, data);
    const responseData = await response.data;

    reset();
    return responseData;
  };

  return (
    <$.Container>
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Sign in</$.Title>
        </$.WrapperTitle>
        <$.Form onSubmit={handleSubmit(createUser)}>
          <$.WrapperInput>
            <$.Input
              id="name"
              {...register("name")}
              type="text"
              autoComplete="username"
            />
            <$.Label htmlFor="name">Usuário</$.Label>
            {errors.name && (
              <$.ErrorMessage>{`${errors.name.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input
              id="email"
              {...register("email")}
              type="text"
              autoComplete="email"
            />
            <$.Label htmlFor="email">Email</$.Label>
            {errors.email && (
              <$.ErrorMessage>{`${errors.email.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input id="password" {...register("password")} type="password" />
            <$.Label htmlFor="password">Senha</$.Label>
            {errors.password && (
              <$.ErrorMessage>{`${errors.password.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
            />
            <$.Label htmlFor="confirmPassword">Confirmar senha</$.Label>
            {errors.confirmPassword && (
              <$.ErrorMessage>{`${errors.confirmPassword.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperCheckbox>
            <$.Checkbox id="remember" type="checkbox" />{" "}
            <$.Span>Lembrar de mim</$.Span>
          </$.WrapperCheckbox>
          <$.SubmitButton disabled={isSubmitting}>Cadastrar</$.SubmitButton>
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
