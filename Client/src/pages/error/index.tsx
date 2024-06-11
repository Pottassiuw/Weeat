import * as $ from './styles';

const Error404 = () => {
  return (
    <$.Error404Container>
      <$.Title>Weeat</$.Title>
      <$.ErrorText>Error 404! Ops! Algo inesperado aconteceu, esta página está indisponível.</$.ErrorText>
      <$.LinesContainer>
        <$.Line color="#FF0000" />
        <$.Line color="#FFA07A" />
        <$.Line color="#FFFF00" />
      </$.LinesContainer>
    </$.Error404Container>
  );
};

export default Error404;