import { Container, Profile, Image, Date, Name, Text } from './styles'

const Post = ({ text, profile, created_at }) => {
    const imageLink = "https://portal-assets.icnetworks.org/uploads/picture/file/104874/resized_045.DomingasPerson_Oc.Person_IC_FotoAndreSeiti3.jpg"

    const handleDate = (date: string) => {

        if (typeof window !== 'undefined') {
            const postDate = new window.Date(parseInt(date))
            return postDate.toLocaleDateString()
        }

    }

    return (
        <Container>
            <Profile>
                <Image>
                    <img src={profile?.profileImage || 'profile.png'} />
                </Image>
                <div>
                    <Name href={`${profile?.username}`}>{profile.username}</Name>
                    <Date>{handleDate(created_at)}</Date>
                </div>
            </Profile>
            <Text>{text}</Text>
        </Container>
    )
}

export default Post;