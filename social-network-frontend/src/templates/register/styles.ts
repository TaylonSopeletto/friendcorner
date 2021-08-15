import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1{
        font-size: 16px;
        margin-bottom: 40px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const Input = styled.input`
    padding: 20px;
    height: 50px;
    background-color: #eee;
    width: 400px;
`

export const Button = styled.button`
    width: 400px;
    padding: 20px;
    &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
`