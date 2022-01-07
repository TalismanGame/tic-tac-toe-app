import React, {useState} from 'react'
import styled from 'styled-components'
import { useUserContext } from '../hooks/useUserContext'
import boardInBackground from '../assets/images/board_background.png';

const CreateGame = props => {
    const user = useUserContext()

    return (
        <Container>
            <section className='section'>
                <span>Enter your friends username</span>
                <span>to ask him/her to join</span>
            </section>
            <section className='section'>
                create sss
            </section>
        </Container>
    )
}

export default CreateGame


const Container = styled.div`
    height: 100vh;
    background-image: url(${boardInBackground});
    .section{
        height: 50vh;
        display: flex;
        align-items:center;
        flex-direction: column;
        justify-content: center;
    }
`
