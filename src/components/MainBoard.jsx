import React, {useState} from 'react'
import styled from 'styled-components'
import { elements, winnerConditions } from '../constants'


const MainBoard = props => {
    const [userNumber, setUserNumber] = useState(1)
    const [onEndGame, setNnEndGame] = useState(false)
    const [squares, setSquares] = useState(JSON.parse(JSON.stringify(elements)))
    const [playerOneSquaresId, setPlayerOneSquaresId] = useState([])
    const [playerTwoSquaresId, setPlayerTwoSquaresId] = useState([])

    const handleClickOnSquare = (elementId, uNumber) => {
        let tempArray = [...squares]
        let playerOne = [...playerOneSquaresId]
        let playerTwo = [...playerTwoSquaresId]

        if(tempArray[elementId].owner === null) {
            setUserNumber(userNumber => userNumber === 1 ?  2 : 1)
            tempArray[elementId].owner = uNumber
            if(uNumber === 1) playerOne.push(elementId)
            else  playerTwo.push(elementId)
        } 
        else return
        setPlayerOneSquaresId(playerOne)
        setPlayerTwoSquaresId(playerTwo)
        checkWinner(playerOne, playerTwo)
        setSquares(tempArray)
    }

    const renderMark = (owner) => {
        switch (owner) {
            case 1:
                return 'O'
            case 2:
                return 'X'
            default:
                return null
                break;
        }
    }
    
    const handleRefresh = () => {
        setUserNumber(1)
        setSquares(JSON.parse(JSON.stringify(elements)))
    }

    const checkWinner = (playerOne, playerTwo) => {
        console.log('playerOne', playerOne);
        console.log('playerTwo', playerTwo);
        
    }

    return (
        <Container>
            <div className='pageHeader'>
                <span style={{color: 'purple'}}>&hearts;</span> 
                <span>(: tic toc toe :)</span> 
                <span style={{color: 'purple'}}>&hearts;</span>
            </div>
            <Turn>user number: <span>{userNumber}</span></Turn>
            <BoardWrapper>
                 {squares.map((el, index) => 
                    <Square 
                        key={el.id}
                        onClick={() => handleClickOnSquare(el.id, userNumber)}
                    >
                        <span>
                            {renderMark(el.owner)}
                        </span>
                    </Square>
                 )}
            </BoardWrapper>
            <RefreshButton onClick={handleRefresh}>
                <span>Refresh</span>
            </RefreshButton>
        </Container>
    )
}

export default MainBoard

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 5vh;
    .pageHeader{
        font-size: 25px;
        margin-bottom: 30px 
    }
`
const BoardWrapper = styled.div`
    height: 50vh;
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 5px;
    grid-column-gap: 5px;
`
const Square = styled.div`
    background: #525252;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    span{
        font-size: 50px;
        color: #fff
    }
`
const Turn = styled.span`
    margin: 10px;
    span{
        font-size: 20px;
        font-weight: bold
    }
`
const RefreshButton = styled.button`
    margin-top: 5vh;
    width: 90vw;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 15px;
    background-color: #525252;
    span{
        font-size: 20px;
        font-weight: bold;
        color: #fff
    }
`


