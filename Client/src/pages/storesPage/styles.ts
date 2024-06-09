import styled from "styled-components";
import { Search, Bell, ArrowRight, MapPinned, Sparkles } from "lucide-react";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  width: 100%;
  height: 100%;
`;
// --------------------Reusable----------------------------------
export const Divisor = styled.div`
  width: 100dvw;
  height: 10dvh;
  background-color: #e8e8e8;
  opacity: 0.7;
`;
export const SeeMore = styled.button``;
// --------------------------------------------------------------

//----------------Categories---------------------
export const CategoriesSection = styled.section`
  display: flex;
  width: 100dvw;
  height: 100dvh;
  flex-flow: column nowrap;
`;
export const WeeatTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WeeatTitle = styled.h1`
  font-size: ${(p) => p.theme.font.titleG};
  color: #d92121;
  font-weight: 500;
  text-align: center;
`;
export const CategoriesWrapper = styled.div`
  margin-top: 4%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 0 4%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  border-radius: 0.6rem;
  border: 1px solid black;
  padding: 0.4rem;
  align-items: center;
  width: 100%;
`;
export const SearchIcon = styled(Search)`
  color: red;
  margin-right: 5px;
`;
export const SearchBar = styled.input`
  height: 100%;
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;
export const BellIcon = styled(Bell)``;
export const GreetingsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;
export const Greetings = styled.h2`
  text-align: center;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
`;
export const CategoryButtonWrapper = styled.div``;
export const CategoryButton = styled.button`
  border-radius: 10px;
  border: 2px solid #eb4032;
  padding: 0.5rem;
  color: #eb4032;
  margin: 0px 20px 0px 0px;
`;
export const CategoryFavorites = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;

  ${CategoryButton} {
    padding-right: 5rem;
  }
`;
export const ArrowIcon = styled(ArrowRight)`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: tomato;
`;
export const StoresCategoryWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10%;
`;
export const StoresCategoryButton = styled.button`
  height: 350px;
  width: 250px;
  border-radius: 5px;
  border: 2px solid black;
  margin: 0 auto;
  color: #eb4032;
  background-color: transparent;
  &:nth-child(1) {
    width: 500px;
  }
`;
//----------------Categories---------------------

//----------------Discount---------------------
export const DiscountSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  margin-top: 10%;
`;
export const DiscountTitleWrapper = styled.div``;
export const DiscountTitle = styled.h1`
  font-size: 22pt;
  padding-left: 50px;
`;
export const DiscountCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
`;
export const DiscountCard = styled.div`
  position: relative;
  border: 3px solid #d9d9d9;
  border-radius: 1rem;
  width: 450px;
  height: 550px;
  margin: 0 auto;
`;
export const DiscountCardIconWrapper = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 3px solid #d9d9d9;
  display: flex;
  align-items: center;
`;
export const DiscountCardIcon = styled.img``;
export const DiscountCardImage = styled.img``;
export const DiscountCardNameWrapper = styled.div`
  width: 50%;
  height: 7%;
  border: 3px solid #d9d9d9;
  border-left: none;
  border-bottom: none;
  position: absolute;
  bottom: 0;
  border-top-right-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DiscountCardName = styled.p`
  font-size: 14pt;
`;
export const DiscountCardPriceWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1rem;
  width: 40%;
  align-items: center;
`;
export const DiscountCardOldPrice = styled.p`
  text-decoration: line-through;
  color: #797171;
  font-size: 20pt;
`;
export const DiscountCardNewPrice = styled.p`
  font-size: 20pt;
`;
//----------------Discount---------------------

//----------------Stores-----------------------
export const StoresSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  padding: 0 4%;
  flex-flow: column nowrap;
`;
export const StoresTitleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
export const StoresTitleContent = styled.div`
  display: flex;
  align-items: center;
`;
export const StoresTitle = styled.h1`
  font-size: 18pt;
  padding-right: 1rem;
`;
export const StoresSubtitle = styled.h2`
  color: #958a8a;
  font-size: 14pt;
`;
export const StoresMapIcon = styled(MapPinned)`
  color: #ebb134;
`;
export const StoresStarIcon = styled(Sparkles)`
  color: #ebb134;
`;
export const StoresCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;
export const StoresCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid #d9d9d9;
  width: 400px;
  height: 200px;
  border-radius: 12px;
  margin: 2rem 2rem 0 0;
`;
export const StoresCardLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const StoresCardNameWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
`;
export const StoresCardLogo = styled.img`
  width: 70px;
  height: 70px;
`;
export const StoresCardName = styled.p``;
export const StoresCardCategory = styled.p``;
//----------------Stores-----------------------
