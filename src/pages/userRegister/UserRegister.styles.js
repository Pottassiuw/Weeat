import styled from "styled-components";

export const Box = styled.div`

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
    width: 50vw;

    overflow: auto;


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