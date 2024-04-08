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
            <InputField required type="text" id="user" />
            <label htmlFor="email">Email</label>
            <InputField required type="email" id="email" />
            <label htmlFor="password">Senha</label>
            <InputField type="password" />
            <label htmlFor="password" required>Confirmar senha</label>
            <InputField type="password" required id="ConfirmPassword" />
            <button type='submit'>Cadastrar</button>
            
            
          </FormRegister>
        </div>
      </WrapperBox>
    </Container>
  )
}

export default EmailAuth