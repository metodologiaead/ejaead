import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"
import Section5 from "../components/Section5"
import Section6 from "../components/Section6"
import Footer from "../components/Footer"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Footer />
  </Layout>
)

export default IndexPage
