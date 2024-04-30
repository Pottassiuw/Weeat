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
    padding: 1rem;

`

export const LabelInput = styled.label`

    position: absolute;
    color: #555657;

    left: 10%;

    transition: 170ms all ease;
    
    transform: translateY(50%);


`

export const InputField = styled.input`

    border: none;
    border-bottom: 2px solid #555657;
    background-color: transparent;
    padding: 6px;
    margin: 10px;
    width: 400px;
    position: relative;

    &:focus ~ label,
    &:valid ~ label {
        transform: translateY(-50%);
        color: #e06b5e;
    }
    &:focus,
    &:valid {
        outline: none;
        border-bottom: 2px solid #e06b5e;
    }


`


export const RegisterButton = styled.button`

    border: none;
    width: 400px;
    padding: 12px;
    margin-top: 1rem;
    border-radius: 12px;
    background-color: #eb4034;
    cursor: pointer;
    color: white

`

export const TextWrapper = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 40pt;
        letter-spacing: 2px;
        color: #ab0000
    }

`
export const WrapperBox = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    text-align: center;
    position: absolute;

    top: 0;
    left: 50%;

    transform: translateX(-50%);


    height: 100vh;

    overflow: hidden;


`

export const GoogleAuthButton = styled.button`
    border: none;
    width: 350px;
    height: fit-content;
    padding: 1rem;
    margin: 10px 0px;
    border-radius: 5px;


    font-size: 13pt;
    font-weight: 600;
    background: #e7e3df;

    &:hover {
        background: #c5c5c5;
        cursor: pointer;
        }

`

export const EmailOptionButton = styled.button`

    border: none;
    margin: 0px 5px;
    background: #d9d9d9;
    padding: 12px;
    border-radius: 5px;

    font-size: 13pt;
    font-weight: 400;
    width: 210px;

    &:hover{
        background-color: #c5c5c5;
        cursor: pointer;
    }

`

export const FacebookAuthButton = styled.button`

    border: none;
    width: 350px;
    height: fit-content;
    padding: 1rem;
    margin: 10px 0px;
    border-radius: 5px;


    font-size: 13pt;
    font-weight: 600;

    background: #4236bd;
    color: white;

    &:hover {
        background: #2c238f;
        cursor: pointer;
    }

`