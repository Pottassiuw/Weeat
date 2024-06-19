import * as $ from "./styles";
import Image from "../../../assets/login_register.png";
import { TloginSchema, loginSchema } from "../../../lib/userForms.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NavBar from "../../../components/nav/index.tsx";
import { useAuth } from "../../../context/userContext.tsx";
import FormButton from "../../../components/FormButton";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/input/styles";
import ErrorMessage from "../../../components/errorMessage/styles.ts";
function Login() {
  const { loginUser } = useAuth();
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
            <Input
              has_error={!!errors.email}
              {...register("email")}
              autoComplete="email"
            />
            {errors.email && (
              <ErrorMessage>{`${errors.email?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label>Senha</$.Label>
            <Input
              has_error={!!errors.password}
              {...register("password")}
              type="password"
              autoComplete="current-password"
            />
            {errors.password && (
              <ErrorMessage>{`${errors.password?.message}`}</ErrorMessage>
            )}
          </$.WrapperInput>
          <FormButton disabled={isSubmitting}>
            {isSubmitting ? <p>...Logando</p> : <p>Entrar</p>}
          </FormButton>
          <$.RegisterText>
            Ainda não é cadastrado?{" "}
            <$.Links to="/users/register">registre</$.Links>
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
