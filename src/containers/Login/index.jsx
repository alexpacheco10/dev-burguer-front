import { Button, CaixaDireita, CaixaEsquerda, CaixaImput, Containers, Formulario,  Titulo } from "./styles"
import Logo from './../../assets/Logo.svg'

export function Login() {

    return (

        <Containers>

            <CaixaEsquerda>

                <img src={Logo} alt="Logo" />

            </CaixaEsquerda>



            <CaixaDireita>

                <Titulo>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                <br/>
                Acesse com seu <span>Login e senha.</span>
                </Titulo>


                <Formulario>


                    <CaixaImput>
                        <label>Entrar</label>
                        <input type="email" />
                    </CaixaImput>

                    <CaixaImput>
                        <label>Senha</label>
                        <input type="password" />
                    </CaixaImput>
                    

                    <Button>Entrar</Button>


                </Formulario>

                <p>
                    Não possui conta? <a>Clique aqui.</a>
                </p>

               


            </CaixaDireita>


            


        </Containers >

   );
};