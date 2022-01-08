import React, {useState} from 'react'
import styled from 'styled-components'
import { Form, Container, Row, Col } from 'react-bootstrap'
import boardInBackground from '../assets/images/board_background.png';
import CustomButton from '../components/CustomButton'


const CreateGame = props => {

    return (
        <StyledContainer>
            <Row>
                <Col>
                    <section className='section'>
                        <span className='sectionBigText'>Enter your friends code</span>
                        <span className='sectionMediumText'>To join the game</span>
                        <div className='formWrapper'>
                            <StyledFormControl type="text" placeholder="Enter Code" />
                            <CustomButton 
                                buttonStyle={{marginTop: '20px', width: '100%'}} 
                                onClick={() => console.log('ss')}
                                text={'Create a Code'}
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
                                onClick={() => console.log('ss')}
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
