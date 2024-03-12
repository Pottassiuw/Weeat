import React from "react";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/weeatsLogo.png";

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" className={styles.logoImage}/>
            </div>
            <ul className={styles.wrapper} >
                <li>Home</li>
                <li>Suporte</li>
                <li>Mais informações</li>
                
            </ul>
            <ul className={styles.wrapperButtons}>
                <button className={styles.btnCadastrar}>Cadastrar</button>
                <button className={styles.btnEntrar}>Entrar</button>
            </ul>
        </nav>
    )
}

export default NavBar