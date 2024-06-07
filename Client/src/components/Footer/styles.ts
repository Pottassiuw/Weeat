import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Footer = styled.footer`
    display: grid;
    grid-template-columns: 300px 300px 300px 300px 300px;
    grid-template-rows: 1fr 1fr;
    background-color: #2E2E2E;
    padding: 0px 4%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    justify-items: center;
    position: relative;

    * {
        color: white;
    }
`

export const LogoContainer = styled.div`
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-flow: column nowrap;
`
export const LogoWrapper = styled.div`
    grid-column: 1fr;
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
`
export const ItensTitle = styled.h1`
    font-size: ${p => p.theme.font.subtitle};
`
export const Links = styled(Link)``
export const Copyright = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
`
export const CopyrightText = styled.h1`
    font-weight: 500;
    font-size: 15pt;
    position: absolute;
    bottom: 0;
    margin-bottom: 2rem;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    &::before{
        content: '';
        width: 100%;
        height: 2px;
        background-color: white;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
    }
`