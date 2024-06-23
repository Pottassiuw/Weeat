import * as $ from "./styles";
import NavBar from "../../../components/nav";
import { useProduct } from "./useProducts";
import ErrorMessage from "../../../components/errorMessage/styles";
import FormButton from "../../../components/FormButton";
export default function ProductForm() {
  const { handleSubmit, register, errors, handleData } = useProduct();
  return (
    <$.Container>
      <NavBar sticky="true" />
      <$.Title>Cadastre seus produtos</$.Title>
      <$.Form onSubmit={handleSubmit(handleData)}>
        <$.Label htmlFor="name">Nome do produto*</$.Label>
        <$.Input
          {...register("name")}
          type="text"
          id="name"
          placeholder="Exemplo: Coxinha, arroz com feijão, etc..."
        />
        {errors.name?.message && (
          <ErrorMessage>{`${errors.name.message}`}</ErrorMessage>
        )}
        <$.Label htmlFor="description">Descrição do produto</$.Label>
        <$.DescriptionInput
          {...register("description")}
          id="description"
          placeholder="Exemplo: Coxinha com frango e catupiry..."
        />
        {errors.description?.message && (
          <ErrorMessage>{`${errors.description.message}`}</ErrorMessage>
        )}
        <$.ContentContainer>
          <$.PriceAndImageWrapper>
            <$.Label htmlFor="price">Preço(R$)*</$.Label>
            <$.PriceInput
              {...register("price")}
              type="number"
              id="price"
              placeholder="Exemplo: 10,99"
            />
            {errors.price?.message && (
              <ErrorMessage>{`${errors.price.message}`}</ErrorMessage>
            )}
            <div>
              <$.Label htmlFor="photo">Foto do produto</$.Label>
              <$.LabelFile>
                <$.CrossIcon />
                <$.InputFile
                  {...register("photo")}
                  type="file"
                  accept="image/*"
                />
              </$.LabelFile>
              {errors.photo?.message && (
                <ErrorMessage>{`${errors.photo.message}`}</ErrorMessage>
              )}
            </div>
          </$.PriceAndImageWrapper>
          <$.ImageWrapper>
            <$.ImagePreview alt="Preview" />
          </$.ImageWrapper>
        </$.ContentContainer>
        <FormButton type="submit">Salvar</FormButton>
      </$.Form>
    </$.Container>
  );
}
