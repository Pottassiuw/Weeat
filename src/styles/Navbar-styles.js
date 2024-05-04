import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export const Navigation = styled.nav`
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
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
`

export const StdLink = styled(Link)`
    color: white;
`

export const LinkWrapper = styled.ul`
    list-style-type: none;
    display: inline-flex;
    gap: 5rem;

    li {
        color: white
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;

`
export const UserIcon = styled(FiUser)`
    height: 30px;
    width: 30px;
`
export const UserButton = styled.button`
    border: none;
    background: transparent;
    color: white;

`
export const MenuButton = styled.span`


`
