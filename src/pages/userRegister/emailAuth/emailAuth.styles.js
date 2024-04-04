import styled from "styled-components";
import background from "../../../assets/images/layered-waves-haikei.svg"

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
