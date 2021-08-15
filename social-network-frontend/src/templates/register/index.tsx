import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import {Container, Row, Input, Button} from './styles'

//fetch
import { register } from 'src/fetch/profiles'

const RegisterTemplate = () => {

    const router = useRouter()

    const [payload, setPayload] = useState({
        email: '',
        username: '',
        password: '',
        password2: ''
    })

    const onSubmit = () => {
        register({email: payload.email, username: payload.username, password: payload.password})
        .then(res => {
            if(res.data.data.createProfile){
                router.push('/login')
            }
        })
        .catch(e => {})
    }

    return (
        <Container>
            <h1>FRIENDCORNER</h1>
            <h2>Register</h2>
            <Row>
                <label>E-mail:</label>
                <Input 
                    value={payload.email} 
                    onChange={e => setPayload({...payload, email: e.target.value})}
                    placeholder="email">
                 </Input>
            </Row>

            <Row>
                <label>Username:</label>
                <Input 
                    value={payload.username} 
                    onChange={e => setPayload({...payload, username: e.target.value})}
                    placeholder="email">
                 </Input>
            </Row>

            <Row>
                <label>Password:</label>
                <Input 
                value={payload.password}
                    onChange={e => setPayload({...payload, password: e.target.value})}
                    type="password" 
                    placeholder="password">
                  </Input>
            </Row>

            <Row>
                <label>Repeat your password:</label>
                <Input 
                value={payload.password2}
                    onChange={e => setPayload({...payload, password2: e.target.value})}
                    type="password" 
                    placeholder="password">
                  </Input>
            </Row>

            <Row>
                <Button onClick={async () => onSubmit()}>Login</Button>
            </Row>
        </Container>
    )
}

export default RegisterTemplate;