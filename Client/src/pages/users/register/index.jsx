import * as $ from './styles'
import Image from '../../../assets/login_register.png';
function Register() {
  return (
    <$.Container>
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Sign in</$.Title>
        </$.WrapperTitle>
        <$.Form>
          <$.WrapperInput>
            <$.Input type='text' required />
            <$.Label>Usuário</$.Label>
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input type='text' required />
            <$.Label>Email</$.Label>
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input type='password' required />
            <$.Label>Senha</$.Label>
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input type='password' required />
            <$.Label>Confirmar senha</$.Label>
          </$.WrapperInput>
          <$.WrapperCheckbox>
            <$.Checkbox type="checkbox" /> <$.Span>Lembrar de mim</$.Span>
          </$.WrapperCheckbox>
          <$.SubmitButton>Cadastrar</$.SubmitButton>
          <$.RegisterText>Já possuí uma conta? <$.Links to="/user/login">Logar</$.Links></$.RegisterText>
        </$.Form>
      </$.Wrapper>

      <$.WrapperImage>
        <$.Title>Busque os melhores restaurantes</$.Title>
        <$.Image src={Image} />
      </$.WrapperImage>
    </$.Container>
  )
}

export default Register;