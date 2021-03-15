import styled from 'styled-components'
import media from "styled-media-query"
import { ArrowBackCircle as back } from '@styled-icons/ionicons-sharp/ArrowBackCircle'
import { Link } from 'gatsby'

export const BackToPageWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #b70d0d;
    height: 42px;

    ${media.lessThan("medium")`
        margin-top: 20px;
  `}
`

export const BackToPage = styled(Link)`

`

export const IconBack = styled(back)`
    display: flex;
    padding: 0.6rem;
    border-right: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: #fff;
        color: #b70d0d;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    width: 100%;
    height: 90px;
`
export const Title = styled.h1`
    display:flex;
    flex-direction: column;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    color: #4c4c4c;
    text-transform: uppercase;

    ${media.lessThan("medium")`
    align-items: center;
    font-size: 25px;
  `}
`

export const Body = styled.div`
display: flex;
flex-direction: column;
h1{
    margin: 22px;
    font-size: 22px;
    font-weight: 700;
    color: #4c4c4c;
}

p {
    margin: 22px;
    color: #4c4c4c;
    line-height: 22px;
    text-align: justify;
}
ul {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffcbdb;
    border: 1px solid #fff;
    color: #666666;
    font-size: 18px;
    font-weight: 700;

    span {
    padding: 10px;
    margin: 0;
    background-color: blue;
    border-radius: 10px;
    background: #666666;
    color: #fff;
    }
}
`

export const Description = styled.p`
    margin-left: 10px;
    color: #fff;
    font-size: 11px;
`

export const MecWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 32px 0;
`
