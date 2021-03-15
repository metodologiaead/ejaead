import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const Container =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0 10vw;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);


`

export const ImageWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 55px;
    background: #fff;
    border-radius: 10px;

    img {
            width: 150px;
            height: auto;

            ${media.lessThan("medium")`
            width: 100px;
`}
        }

        ${media.lessThan("medium")`
         width: 130px;
         height: 45px;
  `}

  ${media.lessThan("small")`
         width: 120px;
         height: 40px;
  `}
`

export const Telefone = styled(Link)`
    background: #fff000;
    backdrop-filter: blur(10px);
    fill: #FFFFFF;
    color: var(--color-text);
    cursor: pointer;
    margin: 10px 0 ;
    text-decoration: none;
    font-size: max(11px, 1.5vw);

    font-weight: 900;

    border-radius: 28px 28px 28px 28px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 20px 50px 20px 50px;
    transition: all .5s;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: var(--color-secundary)
    }

    ${media.lessThan("small")`
    padding: 10px;
  `}
`