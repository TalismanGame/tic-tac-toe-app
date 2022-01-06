import React, {useState} from 'react'
import styled from 'styled-components'
import { useUserContext } from '../hooks/useUserContext'


const CreateGame = props => {
    const user = useUserContext()
    return (
        <Container>
            CreateGame
        </Container>
    )
}

export default CreateGame



const Container = styled.div`
  
    
`
