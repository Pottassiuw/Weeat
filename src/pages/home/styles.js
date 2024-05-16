import styled from "styled-components";
import Cimage1 from "../../assets/images/C-image1.jpg";


//container for the page
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;

`
export const Hero__section = styled.section`
    background-image: url(${Cimage1});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    display: flex;
`
export const Box__section = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 3rem;
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


//Section Get to Know us

export const Title__div = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    font-size: ${(props) => props.theme.fontSize.medium};
`
export const Know__section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    background-image: none;
    width: 100dvw;
`
export const Know__title = styled(Title__div)`
    margin-top: 2rem;
`
export const Know__box = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    
`

export const Know__card__wrapper = styled.div`
    grid-row: 1;
    

`

//Section Restaurants

export const Restaurants__section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    background-image: none;
    width: 100dvw;


`

export const Restaurant__box = styled.div`
    margin-top: 5rem;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5rem;
`

export const Restaurant__box__itens = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid rgba(0,0,0,0.2);
    align-items: center;
    padding: 3rem;
    border-radius: ${(props) => props.theme.borderRadius.wrappers};
    position: relative;

`

export const Restaurant__itens__text = styled.div`
    padding-left: ${(props) => props.theme.paddings.medium};

`

export const Restaurant__itens__image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 2rem;
    object-fit: cover;
    

`

export const Restaurant__itens__icon = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    object-fit: cover;
    top: 5%;
    right: 5%;

`

export const Discount__title = styled(Title__div)`
    margin-top: 8rem;

    h1 {
        color: ${(props) => props.theme.colors.primary};
        font-size: ${(props) => props.theme.fontSize.great};
        font-weight: 500;
    }
`

export const Discount__box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr ;
    grid-gap: 5rem;

    margin-top: 5rem;
`

export const Discount__box__itens = styled.div`
    background-color: ${(props) => props.color == "red" ? "red" : 
    props.color == "yellow" ? "yellow" : 
    props.color == "green" ? "green" : "white"
    };
    grid-row: 1;
    width: 400px;
    height: 400px;

`

//Section About

export const About__section = styled.div`
    height: 100dvh;
    width: 100dvw;

`

export const About__title = styled(Title__div)`
    margin-top: 8rem;
    

    h1 {
        font-size: ${(props) => props.theme.fontSize.giant};
        font-weight: 600;
        position: relative;

        &::before {
            content: "";
            width: 20dvw;
            height: 2px;
            background-color: black;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0px 10px 10px 0.1px ;
        }
    }
`

export const About__title__text = styled(Title__div)`
`