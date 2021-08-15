import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    padding-top: 100px;
    
    button{
        border-radius: 2px;
        margin-top: 10px;
        height: 40px;
        &:hover{
            cursor: pointer;
            background-color: black;
            color: white;
        }
    }
`

export const Profile = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
`

export const Name = styled.div`
    font-weight: bold;
    font-size: 14px;
`

export const Image = styled.div`
    height: 40px;
    width: 40px;
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Date = styled.div`
    margin-top: 5px;
    font-weight: normal;
    font-size: 12px;
    color: #666;
`

export const Input = styled.textarea`
    border: 1px solid #ddd;
    height: 80px;
    padding: 10px;
    resize: none;
    border-radius: 2px;
`