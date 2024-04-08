import styled from "styled-components";
import background from "../../../assets/images/layered-waves-haikei.svg";
import fontLogo from '../../../assets/fonts/Knewave/Knewave-Regular.ttf';
import { Link } from 'react-router-dom';

export const Container = styled.section`

    width: 100vw;
    height: 100vh;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;

`

export const WrapperBox = styled.div`

    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    box-shadow: 10px 10px 10px 20px #e7e3df;
    text-align: center;
    position: absolute;

    top: 0;
    right: 0;


    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    height: 100vh;
    width: 40vw;

    overflow: auto;


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

export const InputField = styled.input`
    border: 2px solid #ad002a;
    border-radius: 1rem;
    padding: 6px;
    margin: 10px;
    width: 400px;


`
