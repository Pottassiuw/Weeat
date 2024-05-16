import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export const nav = styled.nav`
    display: flex;
    
    justify-content: space-between;
    align-items: center;

    height: 10%;
    min-width: 100%;

    padding: 2.4rem;
    background-color: rgba(16, 6, 4, 0.3);
    backdrop-filter: blur(3px);
    border: 2px;
    z-index: 999;
    position: fixed;

`
export const logoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
`
export const link = styled(Link)`
    color: white;
    text-decoration: none;
    position: relative;

    li {
        &::before {
            content: "";
            width: 0;
            height: 2px;
            background-color: white;
            position: absolute;
            bottom: 0;
            transition: 300ms all ease;
        }
        &:hover::before {
            width: 100%;
        }
            
    }
`

export const links = styled.ul`
    list-style-type: none;
    display: inline-flex;
    gap: 5rem;
    li {
        color: white;
        font-size: ${(props) => props.theme.fontSize.medium};

    }

    
`

export const buttonsWrapper = styled.div`
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
    cursor: pointer;

    position: relative;

`

export const hamburguerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: 3s ease;


`
export const span = styled.span`
    border: 1px solid ${(props) => props.theme.colors.white};
    width: 25px;
    margin: 3px;

`
export const userMenu = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
    display: ${(props) => props ? 'flex' : 'none'};
    flex-direction: column;
    gap: 1rem;
    width: 200px;
    left: 50%;
    margin-top: 2rem;
    border-radius: 1rem;
    
    transform: translateX(-50%);

    & ${link} {
        font-size: ${(props) => props.theme.fontSize.small}
    }
`