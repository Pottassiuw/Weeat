import * as $ from "./styles";

const Error404 = () => {
  return (
    <$.Error404Container>
      <$.Title>Weeat</$.Title>
      <$.ErrorText>
        Error 404! Ops! Algo inesperado aconteceu, esta página está
        indisponível.
      </$.ErrorText>
    </$.Error404Container>
  );
};

export default Error404;
