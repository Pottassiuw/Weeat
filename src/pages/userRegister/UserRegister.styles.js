import styled from "styled-components";
import background from "../../assets/images/background-register-user.svg"

export const Container = styled.section`

    width: 100vw;
    height: 100vh;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;

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