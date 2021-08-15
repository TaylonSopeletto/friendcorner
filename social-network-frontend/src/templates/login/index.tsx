import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import {Container, Row, Input, Button} from './styles'
import { login} from 'src/fetch/profiles'

const LoginTemplate = () => {

    const router = useRouter()

    const [payload, setPayload] = useState({
        email: '',
        password: ''
    })

   
    const onSubmit = () => {
        login({email: payload.email, password: payload.password})
        .then(res => {
            if(res.data.data.login){
                localStorage.setItem("@key", res.data.data.login.jwtToken)
                router.push('/')
            }
        })
        .catch(e => {})

    }

    return (
        <Container>
            <h1>FRIENDCORNER</h1>
            <h2>Login</h2>
            <Row>
                <label>E-mail:</label>
                <Input 
                    value={payload.email} 
                    onChange={e => setPayload({...payload, email: e.target.value})}
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
                <Button onClick={() => onSubmit()}>Login</Button>
            </Row>
        </Container>
    )
}

export default LoginTemplate;