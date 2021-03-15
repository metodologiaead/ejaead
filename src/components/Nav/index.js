import React from 'react'
import * as S from './styled'


import LogoNexus from '../../images/logo-nexus-horizontal.png'

const Nav = () => {

    return (
        <S.Container>
            <S.ImageWrapper>
            <img src={LogoNexus} alt="Logo Centro Educamais Nexus" />
            </S.ImageWrapper>
            <S.Telefone href="tel:(82)99976-2839" target="__blank">(82) 9 9976-2839</S.Telefone>
        </S.Container>
    )
}

export default Nav