import React, {useState} from 'react'
import styled from 'styled-components'
import { Form, Container, Row, Col } from 'react-bootstrap'
import boardInBackground from '../assets/images/board_background.png';
import CustomButton from '../components/CustomButton'
import { createNewGame } from '../api/game'

const CreateGame = props => {
    const [gameCode, updateGameCode] = useState('')
    console.log(window.localStorage.getItem('token') );

    const handleSubmitCode = () => {
        console.log('code is:', gameCode);
    }

    const handleCreateNewCode = async () => {
        try{
            let res = await createNewGame()
            console.log('res', res);
        }catch(error) {
            console.log('error in creating game', error);
        }
    }
    
    return (
        <StyledContainer>
            <Row>
                <Col>
                    <section className='section'>
                        <span className='sectionBigText'>Enter your friends code</span>
                        <span className='sectionMediumText'>To join the game</span>
                        <div className='formWrapper'>
                            <StyledFormControl onChange={e => updateGameCode(e.target.value)} type="text" placeholder="Enter Code" />
                            <CustomButton 
                                buttonStyle={{marginTop: '20px', width: '100%'}} 
                                onClick={handleSubmitCode}
                                text={'Join The Game'}
                            />
                        </div>
                    </section>
                    <section className='section'>
                        <span className='sectionBigText'>Create a new code</span>
                        <span className='sectionMediumText'>And share it with your friend</span>
                        <span className='sectionMediumText'>To join the game</span>
                        <div className='formWrapper'>
                            <CustomButton 
                                buttonStyle={{marginTop: '20px', width: '100%'}} 
                                onClick={handleCreateNewCode}
                                text={'Create a Code'}
                            />
                        </div>
                    </section>
                </Col>
            </Row>
            
        </StyledContainer>
    )
}

export default CreateGame




const StyledContainer = styled(Container)`
    height: 100vh;
    background-image: url(${boardInBackground});
    .section{
        height: 50vh;
        display: flex;
        align-items:center;
        flex-direction: column;
        justify-content: center;
        .sectionBigText{
            font-size: 20px;
            font-weight: 900
        }
        .sectionMediumText{
            font-size: 18px;
            font-weight: 700
        }
        .formWrapper{
            width: 100%;
            padding: 7px;
            margin-top: 20px
        }
    }
`
const StyledFormControl = styled(Form.Control)`
`
