import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Modelo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "modelo.png" }) {
        childImageSharp {
          fixed(width: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Modelo
