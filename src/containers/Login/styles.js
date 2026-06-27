import styled from "styled-components";
import ImagemFundoEsquerda from '../../assets/fundoEsquerda.svg'
import ImagemFundoDireita from '../../assets/fundoDireita.png'

export const Containers = styled.div`

    display: flex;
    height: 100vh;
    width: 100vw;
    
`;



export const CaixaEsquerda = styled.div`

    background: url('${ImagemFundoEsquerda}');    
    background-size: cover;
    background-position: center;
    
    height: 100%;
    width: 100%;
    max-width: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
        

  
`;

export const CaixaDireita = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    width: 100%;    
    max-width: 50%;
  
   

   

    background: url('${ImagemFundoDireita}');
    background-color: #1e1e1e;

    p{
        color: #fff;
        font-size: 18px;
        font-weight: 800;

        a{
            text-decoration: underline;
        }

    }

`;

export const Titulo = styled.h2`

    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;

    span{
        color:#9758A6;
        font-family: "Road Rage", sans-serif;
;
    }

`;

export const Formulario = styled.form`

    display: flex;

    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;

`;

export const CaixaImput = styled.div`
    display: flex;    
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    width: 100%;

   label{
        font-size: 18px;
        font-weight: 600px;
        color: #fff;
   }
   
   input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
   }

`;


        







