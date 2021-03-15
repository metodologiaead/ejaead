import styled from 'styled-components'
import media from "styled-media-query"
import BGHome from '../../images/bg-header.png'
import { Link } from 'gatsby'


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-image: url(${BGHome});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -80px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  height: 100vh;
  margin:0 auto;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}

  ${media.lessThan("medium")`
    padding: 20px;
  `}

`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 35px;
  width: 50%;
  height: 450px;

  h2 {
    font-size: max(18px, 3vw);
    font-weight: 700;
    color: var(--color-primary);
  }

  span {
    color: #fff;
  }

  p {
    font-size: max(13px, 1.5vw);
    color: #fff;
    margin-top: 10px;
  }

  ${media.lessThan("medium")`
    width: 100%;
    justify-content: center;
    padding: 50px 50px 0 50px;
  `}

  ${media.lessThan("medium")`
    width: 100%;
    justify-content: center;
    padding: 10px 10px 0 10px;
  `}
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;

  img {
    max-width: 500px;
    height: auto;

    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

    ${media.lessThan("large")`
    max-width: 400px;
  `}

  ${media.lessThan("medium")`
    max-width: 300px;
  `}
  }

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 0 0;

  ${media.lessThan("small")`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `}
`

export const WhtasButton = styled(Link)`
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    fill: #FFFFFF;
    color: #ffffff;
    margin-left: 10px;
    cursor: pointer;
    text-decoration: none;
    font-size: max(13px, 1.5vw);

    font-weight: 700;

    border-radius: 28px 28px 28px 28px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 10px 40px 10px 40px;
    transition: all .5s;

    &:hover {
      background-color: #25d366;
      color: var(--color-text)
    }

    ${media.lessThan("large")`
    padding: 5px 50px 10px 50px;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}

`




