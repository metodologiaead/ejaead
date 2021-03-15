import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Container = styled.div`
  display: flex;
  margin-top: 30vh;
`

const Shape = styled.div`
  text-align: center;
  position: relative;
	width: 90%;
	height: 100px;
	background: #fff;
	-moz-border-radius: 4px;
	border-radius: 4px;
	display: block;
  margin: 0 auto 6px;
  
  &::after,
  &::before {
    z-index: -1;
	position: absolute;
	content: "";
	bottom: 11px;
	left: 0;
	right: auto;
	width: 50%;
	height: 74%;
	background: rgba(0, 0, 0, 0.7);
	-webkit-box-shadow: 0 0 20px rgba(0,0,0, 0.7);
	-moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
	border-radius: 10%;
  }

  &::after {
  right: 0;
	left: auto;
  }

  h1 {
    margin: 10px;
    font-size: 18px;
    font-weight: 900;
    color: #4c4c4c;
  }
  p {
    color: #4c4c4c;
    margin-bottom: 10px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Página não Encontrada" />
    <Container>
    <Shape>
    <h1>Ooops. Página Não Encontrada</h1>
    <p>Houve algum problema na digitação ou estamos em manutenção, tente voltar para a página inicial. Obrigado!
    </p>
    <Link to={'/'}>Voltar</Link>
    </Shape>
    </Container>

  </Layout>
)

export default NotFoundPage
