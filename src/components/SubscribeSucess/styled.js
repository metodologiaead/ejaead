import styled from 'styled-components'

export const InputSubmit = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    text-decoration: none;
    margin: 1rem 0;
    font-size: 22px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #128c7e, #25d366, #128c7e);
    cursor: pointer;
    color: rgba(255,255,255,.8);
    text-transform: uppercase;
    background-size: 200%;
    transition: .5s;

    &:hover {
        background-position: right
    }

`
