import * as $ from "./styles";
import NavBar from "../../../components/nav";

export default function ProductForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <$.Container>
      <NavBar sticky="true" />
      <$.Title>Cadastre seus produtos</$.Title>
      <$.Form onSubmit={handleSubmit}>
        <$.Label htmlFor="name">Nome do produto*</$.Label>
        <$.Input
          type="text"
          id="name"
          placeholder="Exemplo: Coxinha, arroz com feijão, etc..."
        />
        <$.Label htmlFor="description">Descrição do produto</$.Label>
        <$.DescriptionInput
          id="description"
          placeholder="Exemplo: Coxinha com frango e catupiry..."
        />
        <$.ContentContainer>
          <$.PriceAndImageWrapper>
            <$.Label htmlFor="price">Preço(R$)*</$.Label>
            <$.PriceInput
              type="number"
              id="price"
              placeholder="Exemplo: 10,99"
            />
            <div>
              <$.Label htmlFor="photo">Foto do produto</$.Label>
              <$.LabelFile>
                <$.CrossIcon />
                <$.InputFile type="file" accept="image/*" />
              </$.LabelFile>
            </div>
          </$.PriceAndImageWrapper>
          <$.ImageWrapper>
            <$.ImagePreview alt="Preview" />
          </$.ImageWrapper>
        </$.ContentContainer>

        <$.Button type="submit">Continuar</$.Button>
        <$.ErrorMessage>
          Preencha os campos obrigatórios para continuar.
        </$.ErrorMessage>
      </$.Form>
    </$.Container>
  );
}
