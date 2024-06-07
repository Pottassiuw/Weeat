import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Footer = styled.footer`
    display: flex;
    background-color: #2E2E2E;
    padding: 0px 4%;
    overflow: hidden;
    align-items: start;
    height: 30dvh;
    padding-top: 2rem;
    flex-flow: row wrap;
    margin-top: 10%;

    * {
        color: white;
    }
`
export const AllWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const LogoContainer = styled.div`

    display: flex;
    width: 40%;
    flex-flow: column nowrap;
`
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    
`
export const Logo = styled.img`
    width: 65px;
    height: 65px;
`
export const LogoTitle = styled.h1`
    font-size: ${p => p.theme.font.subtitleG};
`
export const LogoSubtitle = styled.h2`
    font-size: 11pt;
    font-weight: 400;
`

export const ItensWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 50%;
`
export const ItensTitle = styled.h1`
    font-size: ${p => p.theme.font.subtitle};
`
export const Links = styled(Link)`
    padding: 5px 0px;
`
export const Copyright = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const CopyrightText = styled.h1`
    position: relative;
    font-weight: 500;
    font-size: 14pt;
    text-align: center;
    width: 100%;

    &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: #fff;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
    
`