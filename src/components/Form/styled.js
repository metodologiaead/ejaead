import styled from 'styled-components'
import media from 'styled-media-query'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 366px;
    height: 600px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 
              0 6px 6px rgba(0,0,0,0.23);
    border-radius: 10px;
    z-index: 999;

  ${media.lessThan("small")`
     width: auto;
  `}
`

export const LogoWrapper = styled.div`
    display: absolute;
    background: #fff;
    padding: 10px;
    border-radius: 50px;
    margin-top: -30px;
`

export const Title = styled.h1`
    color: var(--grey-color);
    font-size: max(22px, 1.5vw);
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
`

export const description = styled.p`
    color: var(--grey-color);
    text-align: center;
    font-size: max(18px, 1.5vw);
    margin: 10px 10px 20px 10px;
`