import React from "react"
import * as S from "./styled"
import Nav from "../Nav"

import Modelo from "../../images/modelo.png"
import Modal from "../Modal"

const Header = () => {
  return (
    <S.Section>
      <Nav />
      <S.Container>
        <S.InfoWrapper>
          <h2>
            EJA EAD PROFISSIONALIZANTE
            <br />
            ENSINO MÉDIO E FUNDAMENTAL
            <br />
            <span>DE 1 A 6 MESES</span>
          </h2>
          <p>
            Você pode matricular-se sem sair de casa. Ao matricular-se no Centro
            de Ensino Educa Nexus você recebe o Material online.
          </p>
          <S.LinksWrapper>
            <Modal />
            <S.WhtasButton
              href="https://api.whatsapp.com/send?phone=5582999762839"
              target="__blank"
            >
              WhatsApp
            </S.WhtasButton>
          </S.LinksWrapper>
        </S.InfoWrapper>
        <S.ImageWrapper>
          <img src={Modelo} alt="Imagem Homem Saindo do Notebook" />
        </S.ImageWrapper>
      </S.Container>
    </S.Section>
  )
}

export default Header
