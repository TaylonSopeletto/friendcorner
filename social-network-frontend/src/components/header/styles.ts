import styled from 'styled-components'

export const Container = styled.div`
    @media(max-width: 1000px){
        padding: 10px;
    }
    position: fixed;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    height: 60px;
    padding: 10px 10%;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    
`

export const Profile = styled.div`
    display: flex;
    gap: 10px;
    font-weight: bold;
    font-size: 14px;
    align-items: center;
    a{
        color: #444;
        text-decoration: none;
        &:hover{
            color: black;
        }
    }
`

export const Image = styled.div`
    
    height: 50px;
    width: 50px;
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const NotificationButton = styled.button`
    margin-left: auto;
    justify-self: end;
`

export const Icons = styled.div`
    justify-selft: flex-end;
    margin-left: auto;
    position: relative;
`

export const Friends = styled.button`
    background-color: transparent;
    font-size: 16px;
    color: #666;
    position: relative;

    &:hover{
        cursor: pointer;
    }

    &:focus + div{
        visibility: visible;
    }

    span{
        height: 15px;
        width: 15px;
        position: absolute;
        bottom: 12px;
        left: 12px;
        color: white;
        font-weight: bold;
        background-color: red;
        border-radius: 50%;
        padding: 2px;
        font-size: 10px;
    }
`

export const RequestList = styled.div`
    visibility: hidden;
    position: absolute;
    top: 40px;
    left: -180px;
    background-color: white;
    width: 200px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);

    &:hover{
        visibility: visible;
    }

    div{
        display: flex;
        align-items: center;
        padding: 10px;
        justify-content: space-between;
        div{
            display: flex;
            gap: 10px;
            button{
                background-color: transparent;
                color: #777;
                &:hover{
                    color: #222;
                    cursor: pointer;
                }
            }
        }
    }
`

