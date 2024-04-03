import styles from './UserRegister.module.css'
import { Box, GoogleAuthButton, EmailOptionButton } from './UserRegister.styles'
import { Link } from 'react-router-dom'

// Assets importing
import googleLogo from '../../assets/images/googlePng.png'
import faceLogo from '../../assets/images/facebookPng.png'



const UserRegister = () => {
  return (
    <section id={styles.hero}>
      <header>
        <div>
          <Link to='/' className={styles.logoLink}><h1 className={styles.logo}>Weeat</h1 ></Link>
        </div>
      </header>
      <Box>
        <div className={styles.text_container}>
          <h1>Descubra novos estabelecimentos no poder de um clique!</h1>
          <p>como deseja continuar?</p>
        </div>
        <div className={styles.form_container}>
          <div className={styles.auth_container}>
            <div className={styles.googleAuth}>
              <img src={googleLogo} alt="google" />
              <GoogleAuthButton>Google</GoogleAuthButton>
            </div>
            <div className={styles.facebookAuth}>
              <img src={faceLogo} alt="" />
              <button className={styles.facebookBtn}>Facebook</button>
            </div>
          </div>
          <div className={styles.btnLoginContainer}>
            <p>Ou cadastrar com</p>
            <Link to="RegistroEmail"><EmailOptionButton>Email</EmailOptionButton></Link>
          </div>
        </div>
      </Box>
    </section>
  )
}

export default UserRegister