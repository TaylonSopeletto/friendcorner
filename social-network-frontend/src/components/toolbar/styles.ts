import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 30px;
    justify-content: space-between;
    padding: 20px 40px;
    button{
        font-size: 20px;
        color: #444;
        background-color: transparent
    }
    position: fixed;
    height: 60px;
    top: calc(100% - 60px);
    width: 100%;
    background-color: white;
    box-shadow: 4px 4px 10px 3px rgba(0, 0, 0, 0.4);
`