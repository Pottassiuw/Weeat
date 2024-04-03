import { Box } from '../UserRegister.styles'


const EmailAuth = () => {
  return (
    <section>
      <Box>
        <div>
          <h1>Crie sua conta</h1>
        </div>
        <div>
          <form action="">
            <label htmlFor="user">Usuario</label>
            <input type="text" id='user' />
            <label htmlFor="password">Senha</label>
            <input type="password" />
            <button type='submit'>Cadastrar</button>
          </form>
        </div>
      </Box>
    </section>
  )
}

export default EmailAuth