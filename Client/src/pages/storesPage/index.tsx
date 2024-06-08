import Footer from "../../components/Footer";
import * as $ from "./styles";
export default function StorePage() {
  return (
    <$.Container>
      <$.CategoriesSection>
        <$.WeeatTitle>Weeat</$.WeeatTitle>
        <$.SearchContainer>
          <$.SearchBar></$.SearchBar>
        </$.SearchContainer>
      </$.CategoriesSection>
      <$.DiscountSection></$.DiscountSection>
      <$.StoresSection></$.StoresSection>
      <Footer />
    </$.Container>
  );
}
