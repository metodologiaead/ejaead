import styled from 'styled-components'
import media from "styled-media-query"

import BGSection2 from '../../images/bg-section2.png'


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-image: url(${BGSection2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    background-position-x: center;

    ${media.lessThan("small")`
      height: 300px;
      margin-top: 50px;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  height: 100vh;
  margin:0 auto;

  ${media.lessThan("small")`
    margin:0 auto;
  `}

`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 400px;

  h2 {
    font-size: max(18px, 3vw);
    font-weight: 700;
    color: var(--color-primary);
  }

  h2 > span {
    color: var(--color-primary);
  }

  h3 {
    font-size: max(13px, 1.5vw);
    line-height: 25px;
    color: var(--color-text);
    margin-top: 10px;
  }

  h4 {
    font-size: max(13px, 1.5vw);
    line-height: 25px;
    color: var(--color-text);
    margin-top: 10px;
  }

  h4 > span {
    color: red;
    margin-left: 10px;
    font-size: max(16px, 2vw);
    font-weight: 700;
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

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;

  img {
    max-width: 400px;
    height: auto;

    ${media.lessThan("large")`
    max-width: 350px;
  `}

  ${media.lessThan("medium")`
    max-width: 300px;
  `}
  }

  ${media.lessThan("small")`
    display: none;
  `}
  ${media.lessThan("small")`
    display: none;
  `}
`
export const LinksWrapper = styled.div`
  display: flex;
  margin: 20px 0 0 0;
`