import { useEffect, useState } from 'react';
import { Container, Profile, Image, Name, Input } from './styles';
import { useRouter } from 'next/router';

//fetch
import { mergePost } from 'src/fetch/posts';
import { tokenProfile } from 'src/fetch/profiles';

const PostInput = () => {

    const router = useRouter()
    const [text, setText] = useState('')
    const [profile, setProfile] = useState({
        username: '',
        profileImage: ''
    })

    const onSubmit = () => {
        mergePost({ text: text })
            .then(res => {
                if (res.data && text !== '') {
                    setText('')
                    router.push('/')
                }
            })
    }

    useEffect(() => {
        tokenProfile()
            .then(res => {
                setProfile(res.data.data.tokenProfile)
            })
    }, [])

    return (
        <Container>
            <Profile>
                <Image>
                    <img src={profile?.profileImage || '/profile.png'} />
                </Image>
                <div>
                    <Name>{profile?.username}</Name>
                </div>
            </Profile>
            <Input value={text} onChange={e => setText(e.target.value)} placeholder="Share your moment ..."></Input>
            <button onClick={() => onSubmit()}>Share</button>
        </Container>
    )
}

export default PostInput;