import * as $ from "./styles.ts";
import Image from "../../../assets/login_register.png";
<<<<<<< HEAD
import { TloginSchema, loginSchema } from "../../../@types/userForms.ts";
=======
import { TloginSchema, loginSchema } from "../../../lib/userForms.ts";
>>>>>>> develop
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NavBar from "../../../components/nav/index.tsx";
import { useUser } from "../../../context/userContext.tsx";
import FormButton from "../../../components/FormButton/index.tsx";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import Input from "../../../components/input/styles";
=======
import Input from "../../../components/input/styles.ts";
>>>>>>> develop
import ErrorMessage from "../../../components/errorMessage/styles.ts";
function Login() {
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TloginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (form: TloginSchema) => {
    await loginUser({ email: form.email, password: form.password });
    reset();
    navigate("/stores");
  };

  return (
    <$.Container>
      <NavBar sticky="false" />
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Login</$.Title>
        </$.WrapperTitle>
        <$.Form onSubmit={handleSubmit(handleLogin)}>
          <$.WrapperInput>
            <$.Label>Email</$.Label>
<<<<<<< HEAD
            <Input
              hasError={!!errors.email}
              {...register("email")}
              autoComplete="email"
            />
            {errors?.email && (
=======
            <Input {...register("email")} autoComplete="email" />
            {errors.email && (
>>>>>>> develop
              <ErrorMessage>{`${errors.email?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label>Senha</$.Label>
            <Input
<<<<<<< HEAD
              hasError={!!errors.password}
=======
>>>>>>> develop
              {...register("password")}
              type="password"
              autoComplete="current-password"
            />
<<<<<<< HEAD
            {errors?.password && (
=======
            {errors.password && (
>>>>>>> develop
              <ErrorMessage>{`${errors.password?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <FormButton disabled={isSubmitting}>
            {isSubmitting ? <p>...Logando</p> : <p>Entrar</p>}
          </FormButton>
          <$.RegisterText>
            Ainda não é cadastrado?{" "}
            <$.Links to="/users/register">Cadastre-se</$.Links>
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

export default Login;
