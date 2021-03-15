import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 150px;
    padding: 0 50px; 
    background-color: #fff;
    margin-bottom: 32px;

    ${media.lessThan("medium")`

  `}
`

export const Title = styled.h1`
    font-size: max(18px, 3vw);
    font-weight: 700;
    color: var(--color-text);
    margin: 10px;
`

export const ItemsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    ${media.lessThan("large")`
    flex-direction: column; 
    margin-bottom: 32px;
    text-align: center;
  `}

    ${media.lessThan("medium")`
    flex-direction: column; 
    margin-bottom: 10px;
    text-align: center;
  `}

`
export const Description = styled.div`
    position: relative;
    font-size: max(11px, 1vw);
    top: 30px;
    color: var(--color-text);
    margin: 10px ;

    ${media.lessThan("medium")`
    top: 0;
  `}
`

export const LogoWrapper = styled.div`
  width: 160px;
  height: auto;
`