import React, {useState} from 'react'
import styled from 'styled-components'
import { useUserContext } from '../hooks/useUserContext'
import { Images } from '../assets/images/'

const CreateGame = props => {
    const user = useUserContext()

    return (
        <Container>
            <section className='section'>
                <span>Enter your friends username</span>
                <span>to ask him/her to join</span>
            </section>
            <section className='section'>
                create
            </section>
        </Container>
    )
}

export default CreateGame


const Container = styled.div`
    height: 100vh;
    background: url(${Images.boardAsABackground});
    background-size: contain;
    .section{
        height: 50vh;
        display: flex;
        align-items:center;
        flex-direction: column;
        justify-content: center;
    }
`
