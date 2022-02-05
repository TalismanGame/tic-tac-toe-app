import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Form, Container, Row, Col } from 'react-bootstrap'
import boardInBackground from '../assets/images/board_background.png';
import CustomButton from '../components/CustomButton'
import { createNewGame, joinToGame, getGameStatus } from '../api/game'
import customToast from '../utils/toast'
import { useGameContext } from '../hooks/useGameContext'
import { gameStatus } from '../constants'
import { useNavigate } from 'react-router-dom';

const WaitingRoom = props => {

    return (
        <StyledContainer>
            <Row>
                <Col>
                    <section className='section'>
                        <span className='sectionBigText'>share the code with your friend</span>
                        <span className='sectionMediumText'>To join the game</span>
                        <div className='codeBoxWrapper'>
                            <span className='code'>
                                {'code'}
                            </span>
                        </div>
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