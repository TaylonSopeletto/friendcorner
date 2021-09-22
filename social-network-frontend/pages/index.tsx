import Header from 'src/components/header';
import Feed from 'src/components/feed';
import PostInput from 'src/components/postInput';
import Wrapper from 'src/components/wrapper';
import { listPost } from 'src/fetch/posts';

export default function Home({ posts }) {

  interface ProfileInterface {
    name?: string;
  }

  interface PostInterface {
    text?: string;
    title?: string;
    profile?: ProfileInterface;
  }

  return (
    <div>
      <Header />
      <Wrapper>
        <PostInput />
        <Feed initialData={posts} />
      </Wrapper>
    </div>
  )
}

export async function getServerSideProps() {

  const posts = await listPost()

  return {
    props: {
      posts: posts.data.data.posts
    }
  }
}
