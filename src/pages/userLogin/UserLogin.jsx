import React from 'react'
import styles from './UserLogin.module.css'
import { Link } from 'react-router-dom'

import googleLogo from '../../assets/images/googlePng.png'
import faceLogo from '../../assets/images/facebookPng.png'


const UserRegister = () => {
  const handleGoogleLogin = () => {
    window.location.href = ""
    console.log("Redirecionando para autenticação do Google...");
  }
  const handleFacebookLogin = () => {
    window.location.href = ""
    console.log("Redirecionando para autenticação do Google...");
  }
  return (
    <section id={styles.hero}>
      <header>
        <div>
          <Link to='/' className={styles.logoLink}><h1 className={styles.logo}>Weeat</h1 ></Link>
        </div>
      </header>
      <div className={styles.wrapper}>
        <div className={styles.text_container}>
          <h1>Descubra novos estabelecimentos no poder de um clique!</h1>
          <p>como deseja continuar?</p>
        </div>
        <div className={styles.form_container}>
          <div className={styles.auth_container}>
            <div className={styles.googleAuth}>
              <img src={googleLogo} alt="google" />
              <button className={styles.googleBtn}>Google</button>
            </div>
            <div className={styles.facebookAuth}>
              <img src={faceLogo} alt="" />
              <button className={styles.facebookBtn}>Facebook</button>
            </div>
          </div>
          <div className={styles.btnLoginContainer}>
            <p>Ou Logar com</p>
            <button className={styles.emailBtn}>Email</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserRegister