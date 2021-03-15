import styled from 'styled-components'


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0;
`

export const InputBox = styled.div`
    position: relative;
    margin-top: -10px;
`

export const InputBoxInput = styled.input`
    width: 160px;
    padding: 8px 0;
    font-size: 11px;
    margin-bottom: 15px;
    color: #4c4c4c;
    border: none;
    border-bottom: 1px solid var(--grey-color);
    outline: none;
    background: transparent;
    `

export const Label = styled.label`
    position: absolute;
    margin-top: 5px;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 11px;
    color: var(--grey-color);
    pointer-events: none;
    transition: .5s;

     ${InputBoxInput}:focus ~ &,
     ${InputBoxInput}:valid ~ & {
        top: -18px;
        left: 0%;
        color: #282828;
        font-size: 11px;
  }

`
export const InputSubmit = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 25px;
    margin: 1rem 0;
    font-size: 16px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #ffa800, #ffe800, #ffa800);
    cursor: pointer;
    color: #282828;
    font-weight: 700;
    text-transform: uppercase;
    background-size: 200%;
    transition: .5s;

    &:hover {
        background-position: right
    }
`
