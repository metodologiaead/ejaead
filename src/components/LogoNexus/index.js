import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const LogoNexus = () => {
  const { logoNexus } = useStaticQuery(
    graphql`
      query {
        logoNexus: file(relativePath: { eq: "logo-nexus.png" }) {
          childImageSharp {
            fixed(width: 140, height: 40) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.LogoWrapper fixed={logoNexus.childImageSharp.fixed} className="foo" />
}

export default LogoNexus