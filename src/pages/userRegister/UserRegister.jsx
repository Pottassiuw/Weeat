import styles from "./UserRegister.module.css";
import {
  WrapperBox,
  GoogleAuthButton,
  EmailOptionButton,
  FacebookAuthButton,
  Container,
} from "../../styles/Common-styles"
import { Link } from "react-router-dom";

// Assets importing
import googleLogo from "../../assets/images/googlePng.png";
import faceLogo from "../../assets/images/facebookPng.png";

const UserRegister = () => {
  return (
    <Container>
      <header>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logo}>Weeat</h1>
        </Link>
      </header>
      <WrapperBox>
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
              <FacebookAuthButton>Facebook</FacebookAuthButton>
            </div>
          </div>
          <div className={styles.btnLoginContainer}>
            <p>Ou cadastrar com</p>
            <Link to="RegistroEmail">
              <EmailOptionButton>Email</EmailOptionButton>
            </Link>
          </div>
        </div>
      </WrapperBox>
    </Container>
  );
};

export default UserRegister;
