import styled from 'styled-components'
import media from "styled-media-query";

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan("medium")`

  `}
`

export const LayoutMain = styled.main`
  min-height: 100vh;
  width: 100%;  
`