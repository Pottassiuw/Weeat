import * as $ from "./styles";
const Sidebar = () => {

  return (
    <$.Sidebar>
      <$.SidebarLink to="/stores/dashboard/data">Dados da Loja!</$.SidebarLink>
      <$.SidebarLink to="/stores/dashboard/products">Produtos</$.SidebarLink>
      <$.SidebarLink to="/stores/dashboard/update">Atualizar Dados</$.SidebarLink>
    </$.Sidebar>
  );
};

export default Sidebar;
