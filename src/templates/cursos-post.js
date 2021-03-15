import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import { BackToPageWrapper, IconBack, TitleWrapper, Title, Body, Description, MecWrapper } from './styled'



const CursosPost = ({ data }) => {
  
    const post = data.markdownRemark

    return (
        <Layout>
          <BackToPageWrapper>
              <IconBack />
              <Description>A Faculdade Educamais é credenciada pela 
                Portaria MEC Nº 1.247/2008, de 14/10/2008, 
                e credenciada para oferta de cursos a distância 
                pela Portaria MEC Nº 1.168/2018, de 09/11/2018.</Description>
          </BackToPageWrapper>
        <TitleWrapper>
          <Title>{post.frontmatter.title}</Title>
        </TitleWrapper>
        <Body dangerouslySetInnerHTML={{ __html: post.html}}></Body>
        <MecWrapper>

        </MecWrapper>
        <BackToPageWrapper>
              <IconBack />
              <Description>A Faculdade Educamais é credenciada pela 
                Portaria MEC Nº 1.247/2008, de 14/10/2008, 
                e credenciada para oferta de cursos a distância 
                pela Portaria MEC Nº 1.168/2018, de 09/11/2018.</Description>
          </BackToPageWrapper>
        </Layout>
    )
}

export const query = graphql`
query Cursos($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
      }
      html
    }
  }
`
    

export default CursosPost