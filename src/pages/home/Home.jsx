import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";

//images
import coca from "../../assets/images/coca.jpg";
import heineken from "../../assets/images/heineken.jpeg";
import Restaurant1 from "../../assets/images/mcDonalds.png";
import starIcon from "../../assets/images/starIcon.png";

import * as H from "./styles";
import * as N from "../../components/nav/styles";

export default function Home() {
  return (
    <H.Container>
      <NavBar />
      <H.Hero__section>
        <H.Box__section>
          <H.Text__div>
            <h1>
              Os melhores restaurantes a um <span>clique</span> de distância!
            </h1>
            <h2>
              Venha conhecer os restaurantes mais próximos de você em sua{" "}
              <span>região!</span>
            </h2>
          </H.Text__div>
          <H.Button__div>
            <N.link to="Estabelecimentos">
              <H.Button__Est>Restaurantes</H.Button__Est>
            </N.link>
          </H.Button__div>
        </H.Box__section>
      </H.Hero__section>

      {/* Products */}

      <H.Products__section>
        <H.Title__div>
          <h1>Experimente os melhores produtos dos melhores Restaurantes!</h1>
        </H.Title__div>
        <H.ProductsPrincipal__Wrapper>
          <H.ProductPrincipal__img src={coca} />
          <H.ProductPrincipal__img src={heineken} />
        </H.ProductsPrincipal__Wrapper>
      </H.Products__section>

      {/* Restaurants */}

      <H.Restaurants__section>
        <H.Title__div>
          <h1>Os restaurantes mais bem avaliados!</h1>
        </H.Title__div>
        <H.Restaurant__box>
          <H.Restaurant__box__itens>
            <H.Restaurant__itens__icon src={starIcon} />
            <H.Restaurant__itens__image src={Restaurant1} />
            <H.Restaurant__itens__text>
              <h1>Mc Donalds</h1>
              <p>Lanches</p>
            </H.Restaurant__itens__text>
          </H.Restaurant__box__itens>
          <H.Restaurant__box__itens>
            <H.Restaurant__itens__icon src={starIcon} />
            <H.Restaurant__itens__image src={Restaurant1} />
            <H.Restaurant__itens__text>
              <h1>Mc Donalds</h1>
              <p>Lanches</p>
            </H.Restaurant__itens__text>
          </H.Restaurant__box__itens>
          <H.Restaurant__box__itens>
            <H.Restaurant__itens__icon src={starIcon} />
            <H.Restaurant__itens__image src={Restaurant1} />
            <H.Restaurant__itens__text>
              <h1>Mc Donalds</h1>
              <p>Lanches</p>
            </H.Restaurant__itens__text>
          </H.Restaurant__box__itens>
          <H.Restaurant__box__itens>
            <H.Restaurant__itens__icon src={starIcon} />
            <H.Restaurant__itens__image src={Restaurant1} />
            <H.Restaurant__itens__text>
              <h1>Mc Donalds</h1>
              <p>Lanches</p>
            </H.Restaurant__itens__text>
          </H.Restaurant__box__itens>
        </H.Restaurant__box>

        <H.Discount__title>
          <h1>SUPER DESCONTOS!</h1>
        </H.Discount__title>
        <H.Discount__box>
          <H.Discount__box__itens color="red"></H.Discount__box__itens>
          <H.Discount__box__itens color="green"></H.Discount__box__itens>
          <H.Discount__box__itens color="yellow"></H.Discount__box__itens>
        </H.Discount__box>
      </H.Restaurants__section>

      {/* About */}

      <H.About__section>
        <H.About__title>
          <h1>Sobre nós</h1>
        </H.About__title>
        <H.About__title__text>
        <p>
          Nós somos uma modesta empresa que visa em primeiro lugar a satisfação
          dos nossos clientes e a ampliação para os nossos estabelecimentos
          sócios.
        </p>
      </H.About__title__text>
      </H.About__section>
      <Footer />
    </H.Container>
  );
}
