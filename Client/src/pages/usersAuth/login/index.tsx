import * as $ from "./styles";
import Image from "../../../assets/login_register.png";
import { TloginSchema } from "../../../@types/userform";
import { loginSchema } from "../../../@types/userform";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NavBar from "../../../components/nav/index.tsx";
import { useAuth } from "../../../context/authProvider.tsx";

function Login() {
  const { loginUser } = useAuth();
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
            <$.Input hasError={!!errors.email} {...register("email")} />
            {errors?.email && (
              <$.ErrorMessage>{`${errors.email?.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Label>Senha</$.Label>
            <$.Input
              hasError={!!errors.password}
              {...register("password")}
              type="password"
              autoComplete="current-password"
            />
            {errors?.password && (
              <$.ErrorMessage>{`${errors.password?.message}`}</$.ErrorMessage>
            )}
          </$.WrapperInput>
          <$.WrapperCheckbox>
            <$.Checkbox type="checkbox" /> <$.Span>Lembrar de mim</$.Span>
          </$.WrapperCheckbox>
          <$.SubmitButton disabled={isSubmitting}>
            {isSubmitting ? <p>...Logando</p> : <p>Entrar</p>}
          </$.SubmitButton>
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
