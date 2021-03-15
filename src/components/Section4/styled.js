import styled from 'styled-components'
import media from "styled-media-query"
import { Service } from "@styled-icons/remix-line/Service"
import { IdCard } from "@styled-icons/boxicons-regular/IdCard"
import { BookOpen } from "@styled-icons/boxicons-regular/BookOpen"


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    ${media.lessThan("medium")`
      margin-bottom: 50px;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  height: 100vh;
  margin:10px auto;

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

export const CarsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 30px;

  h3 {
    font-size: max(13px, 1.3vw);
    text-align: center;
    line-height: 25px;
    font-weight: 700;
    color: var(--color-text);
  }

  ${media.lessThan("medium")`
    flex-direction: column;
`}
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  max-width: 300px;
  margin: 0 10px;
  height: auto;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 
              0 6px 6px rgba(0,0,0,0.23);
  transition: all .2s;
  border-bottom: solid 5px #fff;

  &:hover {
    border-bottom: solid 5px var(--color-primary);
  }

  ${media.lessThan("medium")`
    width: 200px;
    margin-bottom: 15px;
`}
`

export const Icon1 = styled(Service)`
  max-width: 80px;
  height: auto;
  color: var(--color-primary);

  ${media.lessThan("small")`
    width: 40px;
`}
`

export const Icon2 = styled(IdCard)`
  max-width: 80px;
  height: auto;
  color: var(--color-primary);

  ${media.lessThan("small")`
    width: 40px;
`}
`

export const Icon3 = styled(BookOpen)`
  max-width: 80px;
  height: auto;
  color: var(--color-primary);

  ${media.lessThan("small")`
    width: 40px;
`}
`