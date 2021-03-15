import styled from 'styled-components'
import media from "styled-media-query"


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    ${media.lessThan("small")`
      margin-top: 100px;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  height: auto;
  margin:0 auto;

`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;

  h2 {
    font-size: max(18px, 3vw);
    font-weight: 700;
    text-align: center;
    color: var(--color-primary);
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;

  img {
    width: 500px;
    height: auto;
  }
`