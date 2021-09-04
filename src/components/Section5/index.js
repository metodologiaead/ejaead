import React from "react"
import * as S from "./styled"

import Form from "../Form"

import ArrowRight from "../../images/arrow-right.svg"

const Section5 = () => {
  return (
    <S.Section>
      <S.Container>
        <S.CardWrapper>
          <S.Card>
            <S.HerderCard>
              <h2>
                INVISTA EM VOCÊ
                <br />
                <span>O SEU FUTURO É AGORA!</span>
              </h2>
            </S.HerderCard>
            <h3>Plano de Pagamento</h3>
            <h4>Material Didático Online</h4>
            <div>
              <p>
                <span>6x de R$ 150,00</span> no cartão de crédito <br />
              </p>
              <p>ou</p>
              <p>
                <span>2x de R$ 385,00</span> no boleto ou cartão de crédito<br />
              </p>
            </div>
            <img src={ArrowRight} alt="Seta Para Direita" />
          </S.Card>
        </S.CardWrapper>

        <S.InfoWrapper>
          <Form />
        </S.InfoWrapper>
      </S.Container>
    </S.Section>
  )
}

export default Section5
