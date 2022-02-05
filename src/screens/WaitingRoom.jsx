import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import boardInBackground from '../assets/images/board_background.png';
import CustomButton from '../components/CustomButton'
import { getGameStatus } from '../api/game'
import customToast from '../utils/toast'
import { useLocation, useNavigate } from 'react-router-dom';


let getGameStateInterval;
const WaitingRoom = props => {
    const location = useLocation()
    const navigate = useNavigate()
    const { inviteCode } = location.state

    const saveCodeToClipboard = () => {
        window.navigator.clipboard.writeText(inviteCode)
        customToast.success('code copied!');
    }

    const getGameState = async (code) => {
        let res = await getGameStatus(code) 
        if(res.status === 200){
            // redirect user to the board and game will start
            if( +res.data.status === 1 ) navigate("/board", { replace: true });
        }
    }

    useEffect(() => {
        //call a interval to call API and get game state and if its started redirect to game
        getGameStateInterval = setInterval(() => getGameState(inviteCode), 1000)
        return () => {
            clearInterval(getGameStateInterval)
        }
    }, [])

    return (
        <StyledContainer>
            <Row>
                <Col>
                    <section className='section'>
                        <span className='sectionBigText'>share the code with your friend</span>
                        <span className='sectionMediumText'>To join the game</span>
                        <div className='codeBoxWrapper'>
                            <span className='code'>
                                {inviteCode}
                            </span>
                        </div>
                        <CustomButton 
                            textStyle={{fontSize:'16px', fontWeight: '600'}}   
                            buttonStyle={{marginTop: '20px', width: '90%'}} 
                            onClick={saveCodeToClipboard}
                            text={'save to clipboard'}
                            loading={false}
                            disabled={false}
                        />
                    </section>
                    
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default WaitingRoom

const StyledContainer = styled(Container)`
    height: 100vh;
    background-image: url(${boardInBackground});
    .section{
        height: 100vh;
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
        .codeBoxWrapper{
            margin-top: 20px;
            width: 90%;
            height: 50px;
            border: 2px solid #909090;
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
`