import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
`

export const Profile = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
`

export const Name = styled.a`
    font-weight: bold;
    font-size: 14px;
    color: #111;
    text-decoration: none;
    &:hover{
        color: black;
    }
`

export const Text = styled.div`
    font-weight: normal;
    font-size: 14px;
    color: #222;
`

export const Date = styled.div`
    margin-top: 5px;
    font-weight: normal;
    font-size: 12px;
    color: #666;
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
