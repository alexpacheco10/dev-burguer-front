import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { CaixaDireita, CaixaEsquerda, CaixaImput, Containers, Formulario, Titulo } from "./styles"
import Logo from './../../assets/Logo.svg'

import { Button } from '../../components/button'

export function Login() {

    const schema = yup
        .object({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),

        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)




    return (

        <Containers>

            <CaixaEsquerda>

                <img src={Logo} alt="Logo" />

            </CaixaEsquerda>



            <CaixaDireita>

                <Titulo>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Titulo>


                <Formulario onSubmit={handleSubmit(onSubmit)}>


                    <CaixaImput>
                        <label>Entrar</label>
                        <input type="email" {...register("email")}/>
                    </CaixaImput>

                    <CaixaImput>
                        <label>Senha</label>
                        <input type="password" {...register("password")}/>
                    </CaixaImput>


                    <Button type="submit">Entrar</Button>


                </Formulario>

                <p>
                    Não possui conta? <a>Clique aqui.</a>
                </p>




            </CaixaDireita>





        </Containers >

    );
};