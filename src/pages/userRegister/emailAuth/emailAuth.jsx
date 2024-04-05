import { WrapperBox, Container, FormRegister, Logo, RouterLinks, InputField } from './emailAuth.styles'

const EmailAuth = () => {
  return (
    <Container>
      <header>
        <RouterLinks to='/'>
          <Logo>Weeat</Logo>
        </RouterLinks>
      </header>
      <WrapperBox>
        <div>
          <h1>Crie sua conta</h1>
          <h2>Aproveite seu tempo...</h2>
        </div>
        <div>
          <FormRegister>
            <label htmlFor="user">Usuario</label>
            <InputField type="text" id="user" />
            <label htmlFor="password">Senha</label>
            <InputField type="password" />
            <button type='submit'>Cadastrar</button>
          </FormRegister>
        </div>
      </WrapperBox>
    </Container>
  )
}

export default EmailAuth