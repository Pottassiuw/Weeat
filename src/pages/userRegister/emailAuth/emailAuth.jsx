import styles from './emailAuth.module.css'

const EmailAuth = () => {
  return (
    <section id={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.text_container}>
          <h1>Crie sua conta</h1>
        </div>
        <div className={styles.form_container}>
          <form action="">
            <label htmlFor="user">Usuario</label>
            <input type="text" id='user' />
            <label htmlFor="password">Senha</label>
            <input type="password" />
            <button type='submit'>Cadastrar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EmailAuth