import React, {useState} from 'react'
import styled from 'styled-components'
import { useUserContext } from '../hooks/useUserContext'


const CreateGame = props => {
    const user = useUserContext()

    return (
        <Container>
            <section className='section'>
                join
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
    .section{
        height: 50vh;
    }
`
