
import React from "react"

import { LayoutWrapper, LayoutMain } from './styled'

import '../../styles/fonts.css'

import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {

  return (

    <LayoutWrapper>
    <GlobalStyles />
    <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>

  )
}


export default Layout
