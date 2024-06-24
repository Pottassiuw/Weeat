import styled from "styled-components";
import { Link } from "react-router-dom";
import { flexCenter } from "../../styles/mixins";

export const Section = styled.section`
  display: flex;
`;

export const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  ${flexCenter}
  gap: 10rem;
  flex-flow: column;
`;

export const SidebarLink = styled(Link)`
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  color: #333;
  text-decoration: none;
  font-size: 14pt;
`;

// Existing styles for the main content, containers, form, etc.
export const Container = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Form = styled.form`
  /* existing styles */
`;

// ... Other existing styles
