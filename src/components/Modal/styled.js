import styled from 'styled-components'
import media from 'styled-media-query'


export const FormButton = styled.button`
    background: #fff000;
    backdrop-filter: blur(10px);
    fill: #FFFFFF;
    color: var(--color-text);
    cursor: pointer;
    font-size: max(13px, 1.5vw);

    font-weight: 700;

    border-radius: 28px 28px 28px 28px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 10px 50px 10px 50px;
    transition: all .5s;
    outline: none;
    border: none;

    &:hover {
      background: #ffd000;
      outline: none;
    }

    ${media.lessThan("small")`
    padding: 10px 40px 10px 40px;
  `}

`