import styled from "styled-components";
import Cimage1 from "../assets/images/C-image1.jpg";
import {Container as cont} from "../styles/Common-styles"


export const Container = styled(cont)`
    display: flex;
`
export const HeroSection = styled(cont)`
    background-image: url(${Cimage1});
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
`
export const Box__Section = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 5rem;
    max-width: 30%;

`

export const Text__div = styled.div`
    h1 {
            color: ${(props) => props.theme.colors.white};
            font-size: ${(props) => props.theme.fontSize.giant};
            & span {
                color: ${(props) => props.theme.colors.primary};
            }
        }

    h2 {
            color: ${(props) => props.theme.colors.white};
            padding: 2rem 0rem;
            width: 100%;
            font-size: ${(props) => props.theme.fontSize.small};
        }
`
export const Button__