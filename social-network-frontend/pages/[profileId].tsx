//components
import Header from 'src/components/header';
import Feed from 'src/components/feed';
import Wrapper from 'src/components/wrapper';
import Bio from 'src/components/bio'

//styles
import {WhiteSpace} from './styles'

//fetch
import { profilePosts } from 'src/fetch/posts'


export default function Profile({posts, profile}){

    return (
      <>
        <Header/>
        <Wrapper>
          <WhiteSpace/>
          <Bio/>
          <Feed initialData={posts}/>
        </Wrapper>
      </>
    )
}

export async function getServerSideProps({query}) {
  
  const posts = await profilePosts({username: query.profileId })

  return {
    props: {
      posts: posts.data.data.profilePosts
    }
  }
}

