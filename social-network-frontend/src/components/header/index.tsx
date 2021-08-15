import { useEffect, useState } from 'react'
import { Container, Profile, Image, NotificationButton, Icons, Friends, RequestList } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';


//fetch
import { listRequests, acceptRequest } from 'src/fetch/requests'

const Header = () => {

    const [requests, setRequests] = useState([])

    useEffect(() => {
        listRequests()
        .then(res => {
            setRequests(res.data.data.requests)
        })
    }, [])

    const onAccept = (id: any) => {
        acceptRequest({senderId: id})
    }

    return (
        <Container>
            <Profile>
                <a href="/">FRIENDCORNER</a>
            </Profile>
           <Icons>
               <Friends>
                <FontAwesomeIcon icon={faUserFriends}/>
                {
                    requests?.length > 0 && <span>{requests?.length}</span>
                }
               </Friends>
               <RequestList>
                   {
                       requests.map((item, i) => 
                        <div>
                            <Image>
                                <img src={item.sender.profileImage || 'profile.png'}/>
                            </Image>
                            <p>{item.sender.username}</p>
                            <div>
                                <button><FontAwesomeIcon icon={faTimes}/></button>
                                <button><FontAwesomeIcon onClick={() => onAccept(item.sender.id)} icon={faCheck}/></button>
                            </div>
                        </div>
                       )
                   }
                   
               </RequestList>
            </Icons>
        </Container>
    )
}

export default Header;