import styled from 'styled-components'
import media from "styled-media-query"


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    ${media.lessThan("small")`
      height: auto;
      margin-bottom: 50px;
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
  flex-direction: column;
  height: auto;
  `}

`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 400px;

  ${media.lessThan("small")`
    width: 100%;
    padding: 0 30px;
  `}
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;

  ${media.lessThan("small")`
    width: 100%;
  `}
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 366px;
  height: 495px;
  margin: 0 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 
              0 6px 6px rgba(0,0,0,0.23);
  transition: all .2s;
  border-bottom: solid 5px #fff;
  border-radius: 10px;

  h3 {
    font-size: max(16px, 2vw);
    margin-top: 32px;
    color: var(--color-text);
  }

  h4 {
    font-size: max(13px, 1.5vw);
    margin-top: 32px;
    color: var(--color-text); 
  }
  
  p {
    font-size: max(13px, 1.5vw);
    margin: 32px auto;
    text-align: center;
    color: var(--color-text); 
  }

  p > span {
    font-size: max(18px, 3vw);
    text-align: center;
    font-weight: 700;
    color: var(--color-text); 
  }

  img {
    width: 100px;
    height: auto;
  }

  ${media.lessThan("small")`
  width: 250px;
  height: 300px;
  margin-bottom: 50px;
`}

${media.lessThan("large")`
height: 455px;
`}

${media.lessThan("medium")`
height: 445px;
`}
`

export const HerderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80px;
  background-color: #03658C;
  border-radius: 10px 10px 0 0 ;

  h2 {
    font-size: max(13px, 2vw);
    font-weight: 700;
    color: #ffD000;
  }

  h2 > span {
    font-size: max(11px, 1.5vw);
  }
`