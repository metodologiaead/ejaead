import styled from 'styled-components'


export const Container = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;

    .content {
        display: flex;
        flex-direction: column;
        margin: 0 auto;

        max-width: 1024px;
        min-height: 100vh;
    }

    form {
        width: 720px;
        height: auto;

    }

    .tituloFicha {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 150px;
            height: auto;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }

    .cepLogradouroNumero {
        display: grid;
        grid-template-columns: 130px auto 100px;
        gap: 20px;

        margin-top: 10px;
    }

    .identidadeCPF {
        display: grid;
        grid-template-columns: auto 180px;
        gap: 20px;
    }

    .EscolaridadeCursoSexo {
        display: grid;
        grid-template-columns: auto auto 120px;
        gap: 20px;
    }

    .maePai {
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
    }

    .nascimentoNaturalidadeUf {
        display: grid;
        grid-template-columns: 220px auto 70px;
        gap: 20px;
    }
    
    .paisNacionalidade {
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
    }

    .ufBairroCidade {
        display: grid;
        grid-template-columns: auto auto 70px;
        gap: 20px;
    }

    .telResidComerCel {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 20px;
    }

    .areasInteresse {
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
    }

    .FooterInscricao {
        display: flex;
        flex-direction: column;
        justify-content: center;

        text-align: center;

        width: 100%;
        height: 100px;

        p {
            padding: 0 150px;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputBox = styled.div`
    position: relative;
`

export const InputBoxInput = styled.input`
    width: 100%;
    height: auto;
    padding: 15px 0;
    font-size: max(13px, 1.5vw);
    margin-bottom: 15px;
    color: #4c4c4c;
    border: none;
    border-bottom: 1px solid var(--grey-color);
    outline: none;
    background: transparent;
    `

export const Label = styled.label`
    position: absolute;
    margin-top: 5px;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: max(13px, 1.5vw);
    color: var(--grey-color);
    pointer-events: none;
    transition: .5s;

     ${InputBoxInput}:focus ~ &,
     ${InputBoxInput}:valid ~ & {
        top: -18px;
        left: 0%;
        color: #282828;
        font-size: max(13px, 1.5vw);
  }

`
export const InputSubmit = styled.input`
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: max(18px, 2vw);
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #ffa800, #ffe800, #ffa800);
    cursor: pointer;
    color: #282828;
    font-weight: 700;
    text-transform: uppercase;
    background-size: 200%;
    transition: .5s;

    &:hover {
        background-position: right
    }
`

