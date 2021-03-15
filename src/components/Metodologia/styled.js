import styled from 'styled-components'
import { CastForEducation } from '@styled-icons/material/CastForEducation'
import media from 'styled-media-query'


export const Contianer = styled.div`
    margin: 272px 10px 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.lessThan("huge")`
    margin: 382px 10px 0 10px;
`}

    ${media.lessThan("large")`
    margin: 382px 10px 0 10px;
`}

    ${media.lessThan("medium")`
        margin: 332px 10px 0 10px;
    `}

    ${media.lessThan("small")`
        margin: 300px 10px 0 10px;
    `}
`
export const BoxWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-gap: 20px;
    margin-top: 20px;

    ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
`}
`

export const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Box3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const Icon1 = styled(CastForEducation)`
    width: 62px;
    margin-right: 5px;
    color: var(--beige-color);
`

export const TitleTop = styled.h1`
    font-size: 52px;
    font-weight: 700;
    color: var(--beige-color);
`

export const DescriptionTop = styled.h2`
    margin: 10px auto;
    padding: 0 40px;
    color: rgba(255,255,255,.8);
    font-size: 22px;

    strong {
        font-weight: 700;
        font-size: 28px;
    }
`

export const Title = styled.h2`
    font-size: 22px;
    color: rgba(255,255,255,.8);
`