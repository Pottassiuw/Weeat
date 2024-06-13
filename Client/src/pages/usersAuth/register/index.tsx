import * as $ from "./styles";
import Image from "../../../assets/login_register.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { TsignUpSchema } from "../../../@types/userform";
import { signUpSchema } from "../../../@types/userform";
import { zodResolver } from "@hookform/resolvers/zod";
import NavBar from "../../../components/nav/index.tsx";

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
      <NavBar sticky="false" />
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Sign in</$.Title>
        </$.WrapperTitle>
        <$.Form onSubmit={handleSubmit(createUser)}>
          <$.WrapperInput>
            <$.Label htmlFor="name">Usuário</$.Label>
            <$.Input
              hasError={!!errors.name}
              id="name"
              {...register("name")}
              autoComplete="username"
            />
            {errors?.name && (
              <$.ErrorMessage>{`${errors.name?.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label htmlFor="email">Email</$.Label>
            <$.Input
              hasError={!!errors.email}
              id="email"
              {...register("email")}
              autoComplete="email"
            />
            {errors?.email && (
              <$.ErrorMessage>{`${errors.email?.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label htmlFor="password">Senha</$.Label>
            <$.Input
              hasError={!!errors.password}
              id="password"
              {...register("password")}
              type="password"
            />
            {errors?.password && (
              <$.ErrorMessage>{`${errors.password?.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label htmlFor="confirmPassword">Confirmar senha</$.Label>
            <$.Input
              hasError={!!errors.confirmPassword}
              id="confirmPassword"
              {...register("confirmPassword")}
              type="password"
            />
            {errors?.confirmPassword && (
              <$.ErrorMessage>{`${errors.confirmPassword?.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.SubmitButton disabled={isSubmitting} enableButton={isSubmitting}>
            {isSubmitting ? <p>...Loading</p> : <p>Cadastrar</p>}
          </$.SubmitButton>
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
