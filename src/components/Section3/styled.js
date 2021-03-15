import styled from 'styled-components'
import media from "styled-media-query"


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    ${media.lessThan("large")`

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
  height: 400px;
  padding: 0 50px;

  h2 {
    font-size: max(18px, 3vw);
    font-weight: 700;
    color: var(--color-primary);
  }

  p {
    font-size: max(13px, 1.5vw);
    line-height: 25px;
    color: var(--color-text);
    margin-top: 10px;
  }

  ${media.lessThan("small")`
    width: 100%;
    padding: 20px;
  `}
`