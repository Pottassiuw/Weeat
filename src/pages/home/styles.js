import styled from "styled-components";
import Cimage1 from "../../assets/images/C-image1.jpg";
import {Container as cont} from "../../styles/styles";


//container for the page
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`
export const Hero__section = styled(cont)`
    background-image: url(${Cimage1});
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
`
export const Box__section = styled.div`

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
export const Button__div = styled.div`
    display: flex;
`

export const Button__Est = styled.button`
    border: none;
    border-radius: ${(props) => props.theme.borderRadius.button};
    padding: 1rem;
    width: 200px;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSize.small};
    transition: 200ms all ease;


    &:hover {
        cursor: pointer;
        scale: 0.97;
        background: ${(props) => props.theme.colors.primaryDark}
    }
`


//Section Products

export const Products__section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;

`
export const Title__div = styled.div`
    display: flex;
    justify-content: center;

    padding: 2rem;
`

export const ProductsPrincipal__Wrapper = styled.div`
    display: flex;
    align-items: center;

    justify-content: space-evenly;
    

`

export const ProductPrincipal__img = styled.img`
    width: 400px;
    height: 300px;
    margin: 2rem;
    border-radius: 2rem;
    image-rendering: crisp-edges;
    object-fit: cover;
`