import styled from "styled-components";
import background from "../../assets/images/background-register-user.svg";
import fontLogo from '../../assets/fonts/Knewave/Knewave-Regular.ttf';
import { Link } from 'react-router-dom';

export const Container = styled.section`

    width: 100vw;
    height: 100vh;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;

`

export const FormRegister = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;


`
export const Logo = styled.h1`
    @font-face {
        font-family: 'Knweave';
        src: url(${fontLogo});
    }

    font-family: 'Knewave';
    font-size: 28pt;
    margin: 1rem;
    letter-spacing: 1pt;
    font-weight: 100;


`

export const RouterLinks = styled(Link)`
    color: white;
    text-decoration: none;

`

export const InputWrapper = styled.div`

    display: flex;
    flex-direction: column;

`


export const InputField = styled.input`
    border: none;
    border-bottom: 2px solid #555657;
    background-color: transparent;
    padding: 6px;
    margin: 10px;
    width: 400px;
    position: relative;

    &:focus {
        outline: none;
    }

    &:active {
        border-bottom: 2px solid red;
    }


`

export const LabelInput = styled.label`

    position: absolute;
    color: #555657;

    left: 10%;

    transition: 170ms all ease;
    
    transform: translateY(50%);

    opacity: ${({ focused}) => (focused ? '0' : '1')};
    transform: ${({focused }) => (focused ? 'translateY(50%)' : 'translateY(30%)')};

    


`
export const RegisterButton = styled.button`

    border: none;
    width: 400px;
    padding: 10px;
    margin-top: 1rem;
    border-radius: 12px;
    background-color: #fc4c00;
    cursor: pointer;

`