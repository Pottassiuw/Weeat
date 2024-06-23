import * as S from "./styles";
import Input from "../../../components/input/styles";
import { useForm } from "react-hook-form";
import NavBar from "../../../components/nav";
import { useState, useEffect } from "react";
import { TsignUpSchema, signUpSchema } from "../../../lib/userForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../../../context/userContext";

export default function index() {
  const { updateUser, user } = useUser();
  const [userD, setUserD] = useState<TsignUpSchema | null>(null);
  const [shouldFetchUserData, setShouldFetchUserData] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignUpSchema>({
    resolver: zodResolver(signUpSchema),
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
            <Input {...register("name")} />
            {errors?.name && (
              <S.ErrorMessage>{`${errors.name?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataInputWrapper>
            <S.DataLabel>Email</S.DataLabel>
            <Input {...register("email")} />
            {errors?.email && (
              <S.ErrorMessage>{`${errors.email?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataInputWrapper>
            <S.DataLabel>Senha</S.DataLabel>
            <Input type="password" {...register("password")} />
            {errors?.password && (
              <S.ErrorMessage>{`${errors.password?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataInputWrapper>
            <S.DataLabel>Confirmar Senha:</S.DataLabel>
            <Input type="password" {...register("confirmPassword")} />
            {errors?.confirmPassword && (
              <S.ErrorMessage>{`${errors.confirmPassword?.message}`}</S.ErrorMessage>
            )}
          </S.DataInputWrapper>
          <S.DataButtonWrapper>
            <S.DataButton type="submit" disabled={isSubmitting}>
              Atualizar
            </S.DataButton>
          </S.DataButtonWrapper>
        </S.DataForm>
      </S.DataSection>
    </S.Container>
  );
}
