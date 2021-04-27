import React from "react"

import * as S from "./styled"

import { itemsFaq } from "./content"

import "./main.css"

const Faq = () => (
  <section>
    <S.Container>
      <S.Acordeon>
        {itemsFaq.map(item => (
          <div className="accordion-item" id={item.id} key={item.id}>
            <S.AcordeonLink href={`#${item.id}`}>
              {item.title}
              <S.IconAdd />
            </S.AcordeonLink>
            <div className="answer">
              <S.Description>{item.description}</S.Description>
            </div>
          </div>
        ))}
      </S.Acordeon>
    </S.Container>
  </section>
)

export default Faq
