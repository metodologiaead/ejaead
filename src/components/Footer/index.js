import React from 'react'

import Logo from '../../images/logo-metodologia-ead.png'

import * as S from './styled'

const Footer = () => (

        <S.Container>
        <S.Title>Parceria Educacional</S.Title>
        <S.ItemsWrapper>
            <S.LogoWrapper>
            <img src={Logo} alt="Logo Metodologia EAD" />
            </S.LogoWrapper>
            <S.Description>
            Copyright © 2021 Metodologia EAD | Todos os direitos reservados. (82) 99976-2839
            </S.Description>
        </S.ItemsWrapper>
    </S.Container>
)

export default Footer