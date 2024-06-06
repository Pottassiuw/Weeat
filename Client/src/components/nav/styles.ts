import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  background-color: #F5F5F5; 
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  height: 10dvh;
  border-bottom: 1px solid #d9d9d9;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  z-index: 999;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5dvw;
`;
export const Logo = styled.img`
  width: 65px;
  height: 65px;
  object-fit: contain;
  
`
export const LogoFont = styled.div`
  font-size: ${(p) => p.theme.font.title};
  font-weight: 600;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  gap: 60px;
  text-decoration: none;
  align-items: center;
`;
export const LinkItem = styled.li`
  &:hover {
    opacity: (0.1);
  }
`;
export const Links = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16pt;
  
  
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 5dvw;

  button {
    display: flex;
    padding: 10px;
    height: 40px;
    align-items: center;
    
  }
`;

export const ButtonStore = styled.button`
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;
  color: #fe2c2c;
  font-size: 12pt;

`;

export const ButtonUser = styled.button`
  border: 3px solid #fe2c2c;
  background-color: #fe2c2c;
  border-radius: ${(p) => p.theme.border.button};
  color: white;
  font-weight: 500;
  color: white;
  font-size: 12pt;
`;
