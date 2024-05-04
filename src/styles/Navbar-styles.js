import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export const nav = styled.nav`
    display: flex;
    
    justify-content: space-between;
    align-items: center;

    height: 80px;
    min-width: 100%;

    padding: 2.4rem;
    background-color: rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    border: 2px;


`
export const logoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
`

export const link = styled(Link)`
    color: white;
`

export const links = styled.ul`
    list-style-type: none;
    display: inline-flex;
    gap: 5rem;
    li {
        color: white
    }
`

export const buttonWrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

`
export const userIcon = styled(FiUser)`
    height: 30px;
    width: 30px;
`
export const userButton = styled.button`
    border: none;
    background: transparent;
    color: white;

`

export const hamburguerWrapper = styled.div`
    display: flex;
    flex-direction: column;

`
export const span = styled.span`
    border: 1px solid ${(props) => props.theme.colors.white};
    width: 25px;
    margin: 3px

`
