import React from 'react'

import * as S from './styled'
import SubscribeModal from '../../components/SubscribeModal'
import LogoNexus from '../../components/LogoNexus'

const Form = () => (
    <S.Container>
        <S.LogoWrapper>
            <LogoNexus />
        </S.LogoWrapper>
        <S.Title>Preencha o formulário.</S.Title>
        <S.description>
        Desfrute de uma metodologia de qualidade e 
        totalmente on-line.
        </S.description>
        <SubscribeModal />
    </S.Container>
)

export default Form