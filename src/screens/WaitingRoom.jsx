import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import boardInBackground from '../assets/images/board_background.png';
import CustomButton from '../components/CustomButton'
import { getGameStatus } from '../api/game'
import customToast from '../utils/toast'
import { useLocation, useNavigate } from 'react-router-dom';

const WaitingRoom = props => {
    const ws = useRef(null);
    const location = useLocation()
    const navigate = useNavigate()
    const { inviteCode } = location.state

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8000/ws/game-status')
        ws.current.onopen = () => {
            ws.current.send(JSON.stringify({"code": inviteCode}))
            console.log('opened')
        }
        ws.current.onclose = () => console.log("ws closed")
    
        return () => {
          ws.current.close()
        }
    }, [])

    useEffect(() => {
        if (!ws.current) return
    
        ws.current.onmessage = (e) => {
            const message = JSON.parse(e.data)
            let { payload } = message
            payload = JSON.parse(payload)
            if(payload === 1) handleRedirectPlayerToGame()
        }
    }, [])

    const saveCodeToClipboard = async () => {
        if(navigator.clipboard) {
            try{
                await navigator.clipboard.writeText(inviteCode)
                customToast.success('Code copied!')
            }catch(error) {
                customToast.error('Cant save code as your connection is not secure and over http protocol :(. Please mark and save it yourself')
            }
        }else{
            customToast.error('cant save code as your connection is not secure and over http protocol :(. Please mark and save it yourself')
        }
    }


    const getGameState = async () => {
        let res = await getGameStatus(inviteCode) 
        
        if(res.status === 200){
            // redirect user to the board and game will start
            if( +res.data.status === 1 ) handleRedirectPlayerToGame()
        }
    }

    const handleRedirectPlayerToGame = () => navigate("/board", { replace: true, state: {inviteCode} })

    useEffect(() => {
        getGameState()
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