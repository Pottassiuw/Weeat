import React from 'react'
import styles from './NavBar.module.css'
import { FiSearch } from "react-icons/fi"
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className={styles.navBar}>
            <div className="">
                <Link to='/' className={styles.logoLinks}><h1 className={styles.logo}>Weeat</h1></Link>
            </div>
            <ul className={styles.wrapper} >
                <Link to='/' className={styles.linkStyles}><li>Home</li></Link>
                <Link to='Estabelecimentos' className={styles.linkStyles}><li>Estabelecimentos</li></Link>
                <div className={styles.searchBar}>
                    <input type='text' name="search-est" placeholder="Procure por estabelecimentos ou produtos..."/>
                    <FiSearch className={styles.searchIcon}/>
                
                </div>
            </ul>
            
            <ul className={styles.wrapperButtons}>
                <button className={styles.btnCadastrar}><Link to='RegistroUsuario' className={styles.linkStyles}>Cadastrar</Link></button>
                <button className={styles.btnEntrar}><Link to='LoginUsuario' className={styles.linkStyles}>Entrar</Link></button>
            </ul>

        </nav>
    )
}

export default NavBar

