import NavBar from "../../components/nav/NavBar";

import coca from "../../assets/images/coca.jpg";
import heineken from "../../assets/images/heineken.jpeg";

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
      <H.Products__section>
        <H.Title__div>
          <h1>Experimente os melhores produtos dos melhores Restaurantes!</h1>
        </H.Title__div>
        <H.ProductsPrincipal__Wrapper>
          <H.ProductPrincipal__img src={coca} />
          <H.ProductPrincipal__img src={heineken} />
        </H.ProductsPrincipal__Wrapper>
      </H.Products__section>
    </H.Container>
  );
}

