import { Button, CaixaDireita, CaixaEsquerda, CaixaImput, Containers, Formulario, Link, Titulo } from "./styles"
import Logo from './../../assets/Logo.svg'

export function Login() {

    return (

        <Containers>

            <CaixaEsquerda>

                <img src={Logo} alt="Logo" />

            </CaixaEsquerda>



            <CaixaDireita>

                <Titulo>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    Acesse com seu <span>Login e senha.</span>
                </Titulo>


                <Formulario>


                    <CaixaImput>
                        <label>Entrar</label>
                        <imput type="email" />
                    </CaixaImput>

                    <CaixaImput>
                        <label>Senha</label>
                        <imput type="password" />
                    </CaixaImput>


                    <Link>Esqueci minha senha</Link>

                    <Button>Entrar</Button>


                </Formulario>

                <Link>Não possui conta? Clique aqui.</Link>

               


            </CaixaDireita>


            


        </Containers >

   );
};