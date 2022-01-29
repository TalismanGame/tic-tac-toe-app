import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Form, Container, Row, Col } from 'react-bootstrap'
import boardInBackground from '../assets/images/board_background.png';
import CustomButton from '../components/CustomButton'
import { createNewGame } from '../api/game'
import customToast from '../utils/toast'
import { useGameContext } from '../hooks/useGameContext'
import { gameStatus } from '../constants'


const CreateGame = props => {
    const gameObj = useGameContext()
    const [inviteCode, setInviteCode] = useState(gameObj.game.inviteCode)
    const [generatedCode, setGeneratedCode] = useState(gameObj.game.generatedCode)
    const [loading, updateLoading] = useState(false)

    const handleSubmitInviteCode = () => {
        if(inviteCode) console.log('code is:', inviteCode, 'and lest check the game state and start it!')
        else console.log('code is not entered!');
    }

    const handleCreateNewCode = async () => {
        if(generatedCode) {
            window.navigator.clipboard.writeText(generatedCode)
            customToast.success('copied!');
        }else {
            updateLoading(true)
            try{
                let res = await createNewGame()
                if(res.status === 201) {
                    setGeneratedCode(res.data.invite_code)
                    gameObj.updateGame({
                        status: gameStatus[1],
                        generatedCode: res.data.invite_code,
                        ...gameObj.game
                    })
                }
            }catch(error) {
                console.log('error in creating game', error);
            }
            updateLoading(false)
        }
    }

    // ********** use this to purge game state ************
    // useEffect(() => {
    //     gameObj.updateGame({
    //         status: gameStatus[0],
    //         generatedCode: undefined,
    //         inviteCode: ''
    //     })
    // }, [])
    // ********** use this to purge game state ************

    return (
        <StyledContainer>
            <Row>
                <Col>
                    <section className='section'>
                        <span className='sectionBigText'>Enter your friends code</span>
                        <span className='sectionMediumText'>To join the game</span>
                        <div className='formWrapper'>
                            <StyledFormControl onChange={e => setInviteCode(e.target.value)} type="text" placeholder="Enter Code" />
                            <CustomButton 
                                buttonStyle={{marginTop: '20px', width: '100%'}} 
                                onClick={handleSubmitInviteCode}
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
                                text={generatedCode ? 'Share this code' : 'Create a Code'}
                                loading={loading}
                                disabled={loading}
                            />
                        </div>
                        <div className='codeContainer' onClick={() => window.navigator.clipboard.writeText(generatedCode)}>
                            {generatedCode &&
                                <>
                                    <span className='codeTitle'>share the code with your friend</span>
                                    <div className='codeBox' onClick={handleCreateNewCode}>
                                        <span className='code'>{generatedCode}</span>
                                    </div>
                                </>
                            }
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
        .codeContainer{
            width: 100%;
            height: 40px;
            display: flex;
            margin-top: 20px;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .codeTitle{
                font-size: 18px;
                font-weight: 600;
            }
            .codeBox{
                margin-top: 5px;
                border: 1px solid #909090;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0px 30px;
                .code{
                    font-size: 20px;
                    font-weight: 800;
                }
            }
        }
        
    }
`
const StyledFormControl = styled(Form.Control)`
`
