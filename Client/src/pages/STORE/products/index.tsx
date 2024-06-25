import * as $ from "./styles";
import NavBar from "../../../components/nav";
import { useProduct } from "./useProducts";
import ErrorMessage from "../../../components/errorMessage/styles";
import FormButton from "../../../components/FormButton";
export default function ProductForm() {
  const { handleSubmit, register, errors, handleData, image, isSubmitting } =
    useProduct();

  return (
    <$.Container>
      <NavBar sticky="true" />
      <$.Title>Cadastre seus produtos</$.Title>
      <$.Form onSubmit={handleSubmit(handleData)}>
        <$.InputWrapper>
          <$.Label htmlFor="namse">Nome do produto*</$.Label>
          <$.Input
            {...register("name")}
            type="text"
            id="namse"
            placeholder="Exemplo: Coxinha, arroz com feijão, etc..."
          />
          {errors.name?.message && (
            <ErrorMessage>{`${errors.name.message}`}</ErrorMessage>
          )}
        </$.InputWrapper>
        <$.InputWrapper>
          <$.Label htmlFor="description">Descrição do produto</$.Label>
          <$.DescriptionInput
            {...register("description")}
            id="description"
            placeholder="Exemplo: Coxinha com frango e catupiry..."
          />
          {errors.description?.message && (
            <ErrorMessage>{`${errors.description.message}`}</ErrorMessage>
          )}
        </$.InputWrapper>
        <$.ContentContainer>
          <$.PriceAndImageWrapper>
            <$.InputWrapper>
              <$.Label htmlFor="price">Preço(R$)*</$.Label>
              <$.PriceInput
                {...register("price")}
                id="price"
                placeholder="Exemplo: 10,99"
              />
              {errors.price?.message && (
                <ErrorMessage>{`${errors.price.message}`}</ErrorMessage>
              )}
            </$.InputWrapper>
            <div>
              <$.InputWrapper>
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
                {image && <p>Uploaded image: {image[0].name}</p>}
              </$.InputWrapper>
            </div>
          </$.PriceAndImageWrapper>
        </$.ContentContainer>
        <FormButton disabled={isSubmitting} type="submit">
          {isSubmitting ? <p>...Cadastrando</p> : <p>Cadastrar!</p>}
        </FormButton>
      </$.Form>
    </$.Container>
  );
}
