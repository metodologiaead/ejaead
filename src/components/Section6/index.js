import React from 'react'
import * as S from './styled'

import Faq from '../Faq'

const Section6 = () => {

    return (
       <S.Section>
           <S.Container>

               <S.InfoWrapper>
                   <h2>PERGUNTAS E RESPOSTAS</h2>
                   <Faq />
               </S.InfoWrapper>

           </S.Container>
       </S.Section>
    )
}

export default Section6