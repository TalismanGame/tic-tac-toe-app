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

const WaitingRoom = () => {
    return (
        <StyledContainer>
            <Row>
                <Col>
                    <section className='section'>
                        <span className='sectionBigText'>share the code with your friend</span>
                        <span className='sectionMediumText'>To join the game</span>
                        <div>
                            
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
    }
`