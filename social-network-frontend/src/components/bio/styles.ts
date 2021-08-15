import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    left: 10%;
    top: 110px;
    
    padding: 20px;
    width: 20%;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 2px;

    button{
        display: flex;
        justify-content: center;
        gap: 5px;
        margin-top: 40px;
        padding: 10px;
        background-color: white;
        transition: 0.5s;
        border-radius: 5px;
        

        &:hover{
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
            transition: 0.5s;
            cursor: pointer;
            color: #573280;
        }
    }
`

export const Image = styled.div`
    width: 80px;
    height: 80px;
    img{
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
`

export const Title = styled.p`
    font-weight: bold;
    margin-top: 10px;
`

export const Profile = styled.div`
    display: flex;
    gap: 10px;
`

export const Description = styled.div`

`

export const Friends = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
`

export const Friend = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`

export const FriendsTitle = styled.p`
    margin-top: 40px;
`