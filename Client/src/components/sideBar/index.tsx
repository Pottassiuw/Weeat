import * as $ from "./styles";

const Sidebar = () => {
  return (
    <$.Sidebar>
      <$.SidebarLink to="#dados-loja">Dados da Loja!</$.SidebarLink>
      <$.SidebarLink to="#produtos">Produtos</$.SidebarLink>
      <$.SidebarLink to="#atualizar-dados">Atualizar Dados</$.SidebarLink>
    </$.Sidebar>
  );
};

export default Sidebar;
