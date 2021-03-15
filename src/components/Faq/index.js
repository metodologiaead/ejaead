import React from 'react'

import * as S from './styled'

import "./main.css"

const Faq = () => (
    <section>
        <S.Container>
            <S.Acordeon>
            <div className="accordion-item" id="question1">
                    <S.AcordeonLink href="#question1">
                    O que é o EJA-EAD? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        EAD é a sigla para Educação À Distância. É uma modalidade de ensino que dá mais 
                        flexibilidade e autonomia, pois não se exige do aluno a presença regular em 
                        um espaço físico determinado. Vem ganhando muito espaço por acompanhar as evoluções 
                        tecnológicas, a possibilidade de fazer seus próprios horários e com preços mais acessíveis 
                        que a modalidade de ensino presencial.
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question2">
                    <S.AcordeonLink href="#question2">
                    Quais são as vantagens da educação à distância? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        As principais vantagens da EAD são a flexibilidade de horários e a autonomia de 
                        estudos. Você pode dedicar-se nos horários que considerar mais adequados e conciliar 
                        melhor com outras atividades do cotidiano. Além disso, do ponto de vista financeiro 
                        os preços da educação a distância são mais acessíveis que a de escolas presenciais, 
                        além de diminuir custos diários com transporte, por exemplo. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question3">
                    <S.AcordeonLink href="#question3">
                    Quem pode matricular-se? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Alunos de todo o Brasil. Desde que obedeçam ao pré-requisito da idade: 
                        16 anos para cursar o Ensino Fundamental (antigo 1º grau) e 18 anos 
                        para o Ensino Médio (antigo 2º grau). Em ambas as modalidades não é requerido 
                        prévio histórico escolar. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question4">
                    <S.AcordeonLink href="#question4">
                    Estou em outro Estado, posso fazer o Curso Eja EAD Online? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Pessoas de qualquer lugar do Brasil podem fazer o curso Eja EAD 
                        a distância online, não importa o estado ou cidade onde estejam localizados, 
                        pois nosso credenciamento é online. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question5">
                    <S.AcordeonLink href="#question5">
                    Quem pode fazer Eja EAD do ensino fundamental e/ou ensino médio? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Normalmente o Ensino Eja EAD é dividido em Eja EAD de Ensino Fundamental ou
                         o antigo Eja EAD de 1º grau e o Eja EAD de Ensino Médio ou Eja EAD de 2º grau. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question6">
                    <S.AcordeonLink href="#question6">
                    A partir de que idade pode fazer o Eja EAD?  
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        No que diz respeito a idade, segundo o Ministério da Educação, 
                        qualquer pessoa pode fazer o Eja EAD ou a Educação de Jovens e
                         Adultos (EJA) desde que tenha 16 anos completos para fazer o Ensino
                          Fundamental e 18 anos para o Ensino Médio. Abaixo disso é recomendável 
                          continuar no ensino formal. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question7">
                    <S.AcordeonLink href="#question7">
                    Existe idade máxima para poder fazer o Eja EAD?                        
                    <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        A idade máxima não existe e se uma pessoa de 100 anos de idade quiser
                         fazer o Eja EAD de Ensino Fundamental ou Médio, poderá fazer sem problemas.
                          A educação é aberta a todos e não pode privar pessoas do acesso ao conhecimento
                           e ao ensino. Sempre haverá uma forma de estudar e manter-se atualizado para o
                            exercício da cidadania e o gozo aos direitos como cidadão. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question8">
                    <S.AcordeonLink href="#question8">
                    Como fazer o Eja EAD? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Existem diferentes formas de realizar o Eja EAD, mas a forma mais 
                        rápida e prática é estudar em casa todo o conteúdo que é cobrado na prova,
                         e quando se sentir preparado para isso deverá procurar em sua cidade o local 
                         de realização do Exame. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question9">
                    <S.AcordeonLink href="#question9">
                    É possível terminar meus estudos online? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Em nosso Portal de Ensino o aluno matriculado terá acesso a um material 
                        completo que irá ajudá-lo a se preparar para a prova. Quando o aluno se 
                        sentir preparado, poderá realizar o Exame do Eja EAD. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question10">
                    <S.AcordeonLink href="#question10">
                    Quem faz Eja EAD pode fazer faculdade? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Sim. Concluindo o Ensino Médio de um curso Eja EAD, você receberá o certificado
                         de conclusão com a mesma validade de uma escola regular. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question11">
                    <S.AcordeonLink href="#question11">
                    Quem faz Eja EAD tem dificuldades em encontrar emprego? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Não. Uma empresa não pode negar um posto de trabalho a uma pessoa alegando 
                        que sua formação fundamental e média tenha sido por curso Eja EAD. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question12">
                    <S.AcordeonLink href="#question12">
                    EJA EAD é mais fácil que o ensino presencial? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Não. Assim como a EJA presencial, a modalidade a distância também tem provas, 
                        trabalhos e notas mínimas para receber o certificado de conclusão do ensino médio.
                         Também exige tempo, dedicação e objetividade. No entanto, o EAD oferece mais
                          liberdade para estudar nos seus próprios horários, tendo um ritmo diferente do tradicional. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question13">
                    <S.AcordeonLink href="#question13">
                    Quais as formas de pagamento? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Para dar mais flexibilidade, a Instituição oferece ao aluno as seguintes formas de pagamento: <br/>
                        • Dinheiro<br/>
                        • Boleto Bancário<br/>
                        • Cartão de crédito<br/>
                        • Cartão de débito <br/>
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question14">
                    <S.AcordeonLink href="#question14">
                    Qual é a validade do certificado do curso da na modalidade EJA/Ensino Médio EAD? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        O certificado de conclusão do curso da EJA/Ensino Médio emitido para quem estuda na
                         modalidade EAD têm a mesma validade que o certificado emitido por escolas presenciais.
                          O Ministério da Educação dá o mesmo valor a ambos os documentos, conforme a Lei de
                           Diretrizes e Bases da Educação (LDB), que desde 1996 determina que os certificados
                            dos cursos a distância tenham o mesmo valor dos presenciais.
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question15">
                    <S.AcordeonLink href="#question15">
                    Posso fazer concurso público? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Após concluir o ensino médio (antigo segundo grau), o estudante pode se 
                        inscrever em concursos que solicitam o ensino médio completo, pode se matricular 
                        em um curso superior, além de ter muito mais chances no mercado de trabalho. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question16">
                    <S.AcordeonLink href="#question16">
                    Eu tenho restrições em meu nome (SPC/SERASA), posso fazer boleto bancário ou carnê mesmo assim? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Sim, o Centro Educa Nexus não consulta nomes, mas o prazo para a entrega do 
                        Histórico Escolar só começa a ser contado a partir da inexistência de prestações a receber. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question17">
                    <S.AcordeonLink href="#question17">
                    Quais documentos são necessários para fazer a matrícula? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        RG e CPF (não pode ser carteira de habilitação); <br/>
                        1 foto 3x4;<br/>
                        Comprovante de residência.<br/>
                        No ato da matrícula, RG e CPF são suficientes para dar início ao curso,
                         os outros documentos podem ser entregues posteriormente. Mas lembramos: 
                         o prazo para entrega do histórico pode ficar comprometido se não forem entregues
                          até a data da aprovação. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question18">
                    <S.AcordeonLink href="#question18">
                    E se eu não for aprovado? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        O aluno que não alcançar média 5,0 nos exames finais, poderá refazer a prova
                         sem nenhuma taxa adicional. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question19">
                    <S.AcordeonLink href="#question19">
                    Qual o prazo para receber meu Histórico Escolar? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        O prazo é de 45 dias úteis após a aprovação. Isso se não houver prestações
                         a serem pagas ou a falta da documentação exigida. 
                        </S.Description>
                    </div>
                </div>
                <div className="accordion-item" id="question20">
                    <S.AcordeonLink href="#question20">
                    Quais as legislações que autorizam este tipo de ensino? 
                        <S.IconAdd />
                    </S.AcordeonLink>
                    <div className="answer">
                        <S.Description>
                        Seguem as seguintes legislações: <br/>
                        • Lei nº 9.394/96<br/>
                        • Resolução CNE/CEB nº 01/00<br/>
                        • Resolução CNE/CEB nº 03/10<br/>
                        • Resolução CEE/PB 200/2018<br/>
                        • Resolução CEE/PB 043/2020<br/>
                        • Resolução CEE/PB 044/2020
                        </S.Description>
                    </div>
                </div>
            </S.Acordeon>
        </S.Container>
    </section>
)

export default Faq