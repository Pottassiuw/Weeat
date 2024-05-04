import styled from "styled-components";
import Cimage1 from "../assets/images/C-image1.jpg";
import {Container as cont} from "../styles/Common-styles"


export const Container = styled(cont)`
    background-image: url(${Cimage1});
`
export const HeroTitle = styled.h1`
    color: ${(props) => props.theme.colors.white}
`