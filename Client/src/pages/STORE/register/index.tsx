import * as $ from "./styles";
import NavBar from "../../../components/nav";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TStoreRegisterSchema,
  storeRegisterSchema,
} from "../../../@types/storeForms";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../../components/input/styles";
import FormButton from "../../../components/FormButton";
import ErrorMessage from "../../../components/errorMessage/styles";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TStoreRegisterSchema>({
    resolver: zodResolver(storeRegisterSchema),
  });

  const handleData = async (data: TStoreRegisterSchema) => {};

  return (
    <$.Screen>
      <NavBar sticky="true" />
      <$.Container>
        <$.Wrapper>
          <$.WrapperTitle>
            <$.Title>Cadastre sua loja!</$.Title>
            <$.Subtitle>Seja um sócio weeat e expanda seu comércio</$.Subtitle>
          </$.WrapperTitle>
          <$.Form onSubmit={handleSubmit(handleData)}>
            <$.WrapperInput>
              <$.Label>Nome</$.Label>
              <Input
                {...register("name")}
                hasError={!!errors.name}
                type="text"
                placeholder="john Doe"
                autoComplete="name"
              />
              {errors?.name && (
                <ErrorMessage>{`${errors.name?.message}`}</ErrorMessage>
              )}
            </$.WrapperInput>
            <$.WrapperInput>
              <$.Label>Email</$.Label>
              <$.InputIconWrapper>
                <Input
                  {...register("email")}
                  hasError={!!errors.email}
                  type="text"
                  placeholder="Ex: email@email.com"
                  autoComplete="email webauthn"
                />
              </$.InputIconWrapper>
              {errors?.email && (
                <ErrorMessage>{`${errors.email?.message}`}</ErrorMessage>
              )}
            </$.WrapperInput>
            <$.WrapperInput>
              <$.Label>Senha</$.Label>
              <$.InputIconWrapper>
                <Input
                  {...register("password")}
                  hasError={!!errors.password}
                  type="password"
                  placeholder="Ex: 12345678"
                  autoComplete="current-password webauthn"
                />
              </$.InputIconWrapper>
              {errors?.password && (
                <ErrorMessage>{`${errors.password?.message}`}</ErrorMessage>
              )}
            </$.WrapperInput>
            <FormButton disabled={isSubmitting}>Continuar</FormButton>
          </$.Form>
        </$.Wrapper>
        <$.encapsular>
          <$.PolicyText2>
            Já é cadastrado?
            <$.Links to="/stores/login">Entre com sua loja</$.Links>
          </$.PolicyText2>
        </$.encapsular>
      </$.Container>
    </$.Screen>
  );
}
