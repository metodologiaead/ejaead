import React from 'react'

import * as S from './styled'

const Metodologia = () => (
    <S.Contianer>
        <S.TitleTop>Metodologia</S.TitleTop>
        <S.DescriptionTop>
        O curso é a distância, não tem frequência de aulas. No momento da inscrição você recebe o material didático.
        São 11 disciplinas: Língua Portuguesa; Educação Artística; Inglês; Biologia; Física; Química; Matemática; História; Geografia; Filosofia; Sociologia.
        Idade mínima para ingressar: 18 anos.<br/><br/>
        <strong>Vantagens:</strong><br/> A Educação a distância conforme a Lei 9394/96 Artigo 38 Parágrafo 2 apresenta várias vantagens.
        Muitas destas se resumem à própria concretização de seus objetivos.
        Dentre estas vantagens podemos citar:
        </S.DescriptionTop>
        <S.BoxWrapper>
            <S.Box1>
            <S.Icon1 />
            <S.Title>Combinação entre trabalho e estudo</S.Title>
            </S.Box1>

            <S.Box2>
            <S.Icon1 />
            <S.Title> Menos custo para o estudante</S.Title>
            </S.Box2>

            <S.Box3>
            <S.Icon1 />
            <S.Title>Materiais didáticos já incluídos no preço</S.Title>
            </S.Box3>

        </S.BoxWrapper>
    </S.Contianer>
)

export default Metodologia