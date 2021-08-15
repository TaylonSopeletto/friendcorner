import { Container } from './styles'
import Post from 'src/components/post'

const Feed = ({ initialData }) => {

    interface ProfileInterface {
        name?: string;
    }

    interface PostInterface {
        text?: string;
        title?: string;
        created_at?: String;
        profile?: ProfileInterface;
    }

    return (
        <Container>
            {
                initialData?.map((item: PostInterface, i: number) =>
                    <Post key={i}
                        text={item.text}
                        created_at={item.created_at}
                        profile={item.profile}
                    />
                )
            }

        </Container>
    )
}

export default Feed;