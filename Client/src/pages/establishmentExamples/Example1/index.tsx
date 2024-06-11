import * as $ from './styles';
import NavBar from '../../../components/nav';

const McDonaldValeSul = () => {
  return (
    <>
      <NavBar />
      <$.Container>
        <$.Image src="https://i.imgur.com/W8Yx9eR.jpg" alt="Imagem do McDonald's Vale Sul" />
        <$.Content>
          <$.Title>Mcdonald's - Vale sul</$.Title>
          <$.Stars>★★★★★ (4,7)</$.Stars>
          <$.Description>
            <p>Lanches - 2,0 km</p>
            <p>Prazo estimado: 20 a 30 minutos</p>
          </$.Description>
          <$.Button>Contato</$.Button>
          <$.Button>Favoritos</$.Button>
          <$.ButtonsContainer>
            <$.Button>Próximo de você</$.Button>
            <$.Button>Próximo de você</$.Button>
            <$.Button>Próximo de você</$.Button>
            <$.Button>Próximo de você</$.Button>
          </$.ButtonsContainer>
          <$.Menu>
            <$.MenuItem>Lanches</$.MenuItem>
            <$.MenuItem>Combos</$.MenuItem>
            <$.MenuItem>Fritos</$.MenuItem>
            <$.MenuItem>Tortas</$.MenuItem>
            <$.MenuItem>Refrigerantes</$.MenuItem>
            <$.MenuItem>Sobremesas</$.MenuItem>
          </$.Menu>
          <$.Title>Mais populares</$.Title>
          <$.PopularItemsContainer>
            <$.PopularItem>
              <$.PopularItemImage src="https://i.imgur.com/kQ0H97Z.jpg" alt="Imagem do item popular" />
            </$.PopularItem>
            <$.PopularItem>
              <$.PopularItemImage src="https://i.imgur.com/kQ0H97Z.jpg" alt="Imagem do item popular" />
            </$.PopularItem>
            <$.PopularItem>
              <$.PopularItemImage src="https://i.imgur.com/kQ0H97Z.jpg" alt="Imagem do item popular" />
            </$.PopularItem>
          </$.PopularItemsContainer>
        </$.Content>
      </$.Container>
    </>
  );
};

export default McDonaldValeSul;