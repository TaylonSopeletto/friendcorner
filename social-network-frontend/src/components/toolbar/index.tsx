import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'


const Toolbar = () => {
    return (

        <Container>
            <button><FontAwesomeIcon icon={faUser} /></button>
            <button><FontAwesomeIcon icon={faHome} /></button>
            <button><FontAwesomeIcon icon={faUser} /></button>
            <button><FontAwesomeIcon icon={faHome} /></button>
        </Container>

    )
}

export default Toolbar;