import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const LogoPoint = () => {
  const { logoPoint } = useStaticQuery(
    graphql`
      query {
        logoPoint: file(relativePath: { eq: "logopoint.png" }) {
          childImageSharp {
            fixed(width: 140, height: 80) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return <S.LogoWrapper fixed={logoPoint.childImageSharp.fixed} className="foo" />
}

export default LogoPoint