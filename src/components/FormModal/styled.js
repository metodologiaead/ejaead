import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 220px;
    height: 350px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 
                0 6px 6px rgba(0,0,0,0.23);
    border-radius: 10px;
    z-index: 999;
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
    font-size: 18px;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
`

export const description = styled.p`
    color: var(--grey-color);
    text-align: center;
    font-size: 13px;
    margin: 10px 10px 20px 10px;
`