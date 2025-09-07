import * as S from "./styles";
import Input from "../../../components/input/styles";
import { useForm } from "react-hook-form";
import NavBar from "../../../components/nav";
import { useState, useEffect } from "react";
<<<<<<< HEAD
import { TsignUpSchema, signUpSchema } from "../../../@types/userForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../../context/authProvider";

export default function index() {
  const { updateUser, user } = useAuth();
  const [userD, setUserD] = useState<TsignUpSchema | null>(null);
=======
import { TUpdateSchema, updateSchema } from "../../../lib/userForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../../context/userContext";

export default function index() {
  const { updateUser, user, logoutUser } = useUser();
  const [userD, setUserD] = useState<TUpdateSchema | null>(null);
>>>>>>> develop
  const [shouldFetchUserData, setShouldFetchUserData] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
<<<<<<< HEAD
  } = useForm<TsignUpSchema>({
    resolver: zodResolver(signUpSchema),
=======
  } = useForm<TUpdateSchema>({
    resolver: zodResolver(updateSchema),
    criteriaMode: "all",
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      password: "",
      confirmPassword: "",
    },
>>>>>>> develop
  });
  const fetchUserData = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUserD(parsedUser);
        setValue("name", parsedUser.name);
        setValue("email", parsedUser.email);
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
      }
    }
  };
  useEffect(() => {
    if (shouldFetchUserData) {
      fetchUserData();
      setShouldFetchUserData(false);
    }
  }, [shouldFetchUserData, setValue]);

<<<<<<< HEAD
  const handleUpdate = async (user: TsignUpSchema) => {
    try {
      await updateUser({
        name: user.name,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
      });
      reset();
      setShouldFetchUserData(true);
=======
  const handleUpdate = async (user: Partial<TUpdateSchema>) => {
    try {
      if (user) {
        await updateUser({
          name: user.name,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,
        });
        reset();
        setShouldFetchUserData(true);
      }
>>>>>>> develop
    } catch (error) {
      console.error("Failed to update User: ", error);
    }
  };

  return (
    <S.Container>
      <NavBar sticky="true" />
      <S.DataSection>
        <S.DataForm onSubmit={handleSubmit(handleUpdate)}>
          <S.DataTitle>Dados do usuário</S.DataTitle>
          <S.DataInputWrapper>
            <S.DataLabel>Nome</S.DataLabel>
<<<<<<< HEAD
            <Input {...register("name")} hasError={!!errors.name} />
=======
            <Input {...register("name")} />
>>>>>>> develop
            {errors?.name && (
              <S.ErrorMessage>{`${errors.name?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataInputWrapper>
            <S.DataLabel>Email</S.DataLabel>
<<<<<<< HEAD
            <Input {...register("email")} hasError={!!errors.email} />
=======
            <Input {...register("email")} />
>>>>>>> develop
            {errors?.email && (
              <S.ErrorMessage>{`${errors.email?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataInputWrapper>
            <S.DataLabel>Senha</S.DataLabel>
<<<<<<< HEAD
            <Input
              type="password"
              {...register("password")}
              hasError={!!errors.password}
            />
=======
            <Input type="password" {...register("password")} />
>>>>>>> develop
            {errors?.password && (
              <S.ErrorMessage>{`${errors.password?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataInputWrapper>
            <S.DataLabel>Confirmar Senha:</S.DataLabel>
<<<<<<< HEAD
            <Input
              type="password"
              {...register("confirmPassword")}
              hasError={!!errors.confirmPassword}
            />
=======
            <Input type="password" {...register("confirmPassword")} />
>>>>>>> develop
            {errors?.confirmPassword && (
              <S.ErrorMessage>{`${errors.confirmPassword?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataButtonWrapper>
            <S.DataButton type="submit" disabled={isSubmitting}>
              Atualizar
            </S.DataButton>
          </S.DataButtonWrapper>
<<<<<<< HEAD
=======
          <S.LogouButton onClick={logoutUser}>Sair</S.LogouButton>
>>>>>>> develop
        </S.DataForm>
      </S.DataSection>
    </S.Container>
  );
}
