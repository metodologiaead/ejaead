import React from 'react'
import * as S from './styled'

import Modelo from '../../images/mulher-apontando-dedo.png'
import Modal from '../Modal'

const Section2 = () => {

    return (
       <S.Section>
           <S.Container>

               
               <S.ImageWrapper>
                    <img src={Modelo} alt="Imagem Homem Saindo do Notebook" />
               </S.ImageWrapper>

               <S.InfoWrapper>
                   <h2>Já Pensou em fazer seu ensino médio<br/>
                    <span>de 1 a 6 meses?</span></h2>
                    <h3>Sim você pode! e mais,</h3>
                    <h4>É totalmente<span>EAD</span></h4>
                   <p>Nós do Centro de Ensino Educa Nexus estamos preparados para lhe atender: é só marcar um horário e o consultor estará aqui para atendê-lo.
                   </p>
                   <S.LinksWrapper>
                     <Modal />
                   </S.LinksWrapper>
               </S.InfoWrapper>

           </S.Container>
       </S.Section>
    )
}

export default Section2