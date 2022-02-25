import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Container, Row, Col } from 'react-bootstrap'
import boardInBackground from '../assets/images/board_background.png';
import CustomButton from '../components/CustomButton'
import { createNewGame, joinToGame } from '../api/game'
import customToast from '../utils/toast'
import { useGameContext } from '../hooks/useGameContext'
import { gameStatus } from '../constants'
import { useNavigate } from 'react-router-dom';


const CreateGame = props => {
    const navigate = useNavigate()
    const gameObj = useGameContext()

    const [inviteCode, setInviteCode] = useState('')
    const [inviteCodeLoading, setInviteCodeLoading] = useState(false)
    const [loading, updateLoading] = useState(false)
    
    const handleSubmitInviteCode = async() => {
        if(inviteCode === '') {
            customToast.error('Enter the code first!');
            return
        } 
        try{
            setInviteCodeLoading(true)
            let res = await joinToGame({inviteCode})
            if(res.status === 200) {
                customToast.success('lets play !');
                navigate("/board", { replace: true, state: {inviteCode}});
            } 
        }catch(error){
            setInviteCodeLoading(false)
            console.log('error in joining to game', error);
            if(error.status === 404) customToast.error('game not found!');
        }
    }

    const handleCreateNewCode = async () => {
        updateLoading(true)
        try{
            let res = await createNewGame()
            if(res.status === 201) {
                const gameDetails = {
                    status: gameStatus[0],
                    generatedCode: res.data.invite_code,
                    ...gameObj.game
                }
                gameObj.updateGame(gameDetails)
                navigate("/waiting-room", { state: {inviteCode: res.data.invite_code}});
            }
        }catch(error) {
            console.log('error in creating game', error);
        }
        updateLoading(false)
    }

    
    // ********** use this to purge game state and update the context ************
    // ************** you may never need this :)
    // useEffect(() => {
    //     window.localStorage.removeItem('game')
    //     gameObj.updateGame({
    //         status: null,
    //         generatedCode: undefined,
    //         inviteCode: ''
    //     })
    // }, [])
    // ********** use this to purge game state and update the context ************

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
                                loading={inviteCodeLoading}
                                disabled={inviteCodeLoading}
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
                                loading={loading}
                                disabled={loading}
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
