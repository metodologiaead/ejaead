import React from 'react'
import * as S from './styled'

const Section4 = () => {

    return (
       <S.Section>
           <S.Container>
               <S.InfoWrapper>
                   <h2>VANTAGENS</h2>
                   <p>
                       A Educação a distância conforme a Lei 9394/96 
                       Artigo 38 Parágrafo 2 apresenta várias 
                       vantagens. Muitas destas se resumem à própria 
                       concretização de seus objetivos. Dentre estas 
                       vantagens podemos citar:
                   </p>
                <S.CarsWrapper>
                    <S.Card>
                        <S.Icon1 />
                        <h3>Combinação entre trabalho e estudo</h3>
                    </S.Card>

                    <S.Card>
                    <S.Icon2 />
                        <h3>Menos custo para o estudante</h3>
                    </S.Card>  

                    <S.Card>
                    <S.Icon3 />
                        <h3>Materiais didáticos já incluídos no preço</h3>
                    </S.Card>   

                </S.CarsWrapper>

               </S.InfoWrapper>
           </S.Container>
       </S.Section>
    )
}

export default Section4