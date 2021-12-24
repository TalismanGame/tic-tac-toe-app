import React, {useState} from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import customToast from '../utils/toast'
import AuthCard from '../components/AuthCard'
import { registerUser, loginUser } from '../api/auth'
import { staticMessages } from '../constants/staticMessages';

const Home = props => {
    const history = useHistory()

    const [authForm, updateAuthForm] = useState({
        username: '',
        password: '',
    })
    const [isLoginProcess, changeIsLoginProcess] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        updateAuthForm({...authForm, [name]: value })
    }

    const handleLogin = async () => {
        try{
            let res = await loginUser(authForm)
            if(res.status === 200) {
                customToast.success('loggin successfully done');
                history.push('/create-game')
            }
            
        }catch(e) {
            customToast.error(staticMessages[e.data.error]);
        }
    }

    const handleRegister = async () => {
        try{
            let res = await registerUser(authForm)
            if(res.status === 201) {
                customToast.success('user created successfully. you can logging now');
                changeIsLoginProcess(!isLoginProcess)
            }
        }catch(e) {
            customToast.error(staticMessages[e.data.error]);
        }
    }

    const authButtonRenderer = () => {
        let button = new Object()

        if(isLoginProcess) {
            button = {
                text: 'Login',
                onClick: handleLogin,
                disabled: loading,
                loading: loading
            }
        }else{
            button = {
                text: 'Register',
                onClick: handleRegister,
                disabled: loading,
                loading: loading
            }
        }
        return button
    }

    const authSubRouterRenderer = () => {
        let subRouter = new Object()

        if(isLoginProcess) {
            subRouter = {
                text: 'Create Account',
                onClick: () => changeIsLoginProcess(false)
            }
        }else{
            subRouter = {
                text: 'Have Account? do Login',
                onClick: () => changeIsLoginProcess(true)
            }
        }
        return subRouter
    }

    return (
        <Container>
            <AuthCard 
                title={isLoginProcess ? 'Login' : 'Register'}
                formData={authForms}
                onChange={(e) => handleChange(e)}
                button={authButtonRenderer()}
                subRouters={authSubRouterRenderer()}
            />
        </Container>
    )
}

export default Home

const authForms = [
    {
        label: 'Username',
        type: 'text',
        placeholder: 'Enter your username',
        required: true,
        name: 'username',
    },
    {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        required: true,
        name: 'password',
    },
]


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items:center;
    .formWrapper{
        width: 90%;
        margin-top: 3rem;
        .subRouterWrapper{
            width: 100%;
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            .subRouterText{
                text-align-center;
                font-size: 20px;
                font-weight: bold;
            }
        }
        .submitButton{
            width: 100%
        }
    }
    .title{
        font-size: 20px;
        font-weight: bold;
        margin-top: 5rem;
        width: 90%
    }
    
`
