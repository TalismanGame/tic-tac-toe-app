import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { elements, winnerConditions } from '../constants'
import { getGameDataApi } from '../api/game'
import { useLocation, useNavigate } from 'react-router-dom';


let getGameDataInterval;
const MainBoard = props => {
    const location = useLocation()
    const navigate = useNavigate()
    const { inviteCode } = location.state
    const [userNumber, setUserNumber] = useState(1)
    const [winner, setWinner] = useState({status: false, id: null})
    const [squares, setSquares] = useState(JSON.parse(JSON.stringify(elements)))
    const [playerOneSquaresId, setPlayerOneSquaresId] = useState([])
    const [playerTwoSquaresId, setPlayerTwoSquaresId] = useState([])

    const handleClickOnSquare = (elementId, uNumber) => {
        let tempArray = JSON.parse(JSON.stringify(squares))
        const playerOne = [...playerOneSquaresId]
        const playerTwo = [...playerTwoSquaresId]

        if(tempArray[elementId].owner === null) {
            setUserNumber(userNumber => userNumber === 1 ?  2 : 1)
            tempArray[elementId].owner = uNumber
            if(uNumber === 1) playerOne.push(elementId)
            else playerTwo.push(elementId)
        } 
        else return
        setPlayerOneSquaresId(playerOne)
        setPlayerTwoSquaresId(playerTwo)
        checkWinner(playerOne, playerTwo, tempArray)
    }

    const checkWinner = (playerOne, playerTwo, tempArray) => {
        let winnerCondition = []

        winnerConditions.forEach(condition => {
            if (condition.every(squareNum => playerOne.includes(squareNum))) {setWinner({status: true, id: 1, condition}); winnerCondition = condition}
            if (condition.every(squareNum => playerTwo.includes(squareNum))) {setWinner({status: true, id: 2, condition}); winnerCondition = condition}
        })

        tempArray.forEach(square => {
            if(winnerCondition.includes(square.id)){
                square.isWinnerSquare = true
            }
        })

        setSquares(tempArray)
    }

    // const handleRefresh = () => {
    //     setUserNumber(1)
    //     setSquares(JSON.parse(JSON.stringify(elements)))
    //     setWinner({status: false, id: null})
    //     setPlayerOneSquaresId([])
    //     setPlayerTwoSquaresId([])
    // }

    const renderMark = (owner) => {
        switch (owner) {
            case 1:
                return 'X'
            case 2:
                return 'O'
            default:
                return null
        }
    }

    const getGameData = async (code) => {
        try{
            let res = await getGameDataApi(code) 
            if(res.status === 200){
                // console.log('res', res);
            }
        }catch(error){
            if(error.status === 404) {
                navigate("/create-game");
            }
            console.log(error);
        }
    }

    useEffect(() => {
        //call a interval to call API and get game data to simulate a game live
        getGameDataInterval = setInterval(() => getGameData(inviteCode), 1000)
        return () => {
            clearInterval(getGameDataInterval)
        }
    }, [])

    return (
        <Container>
            <div className='pageHeader'>
                <Turn>user number: <span>{userNumber}</span></Turn>
            </div>
            <BoardWrapper>
                {squares.map(el => 
                    <Square 
                        key={el.id}
                        isWinnerSquare={el.isWinnerSquare}
                        onClick={() => !winner.status && handleClickOnSquare(el.id, userNumber)}
                    >
                        <span>
                            {renderMark(el.owner)}
                        </span>
                    </Square>
                )}
            </BoardWrapper>
            {/* <RefreshButton onClick={handleRefresh}>
                <span>Refresh</span>
            </RefreshButton> */}
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
    position: relative;
    .winnerOverLay{
        background: #000;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.7;
        border-radius: 15px;
        display: flex;
        justify-content:center;
        align-items:center;
        span{
            font-size: 30px;
            color: #fff;
        }
    }
`
const Square = styled.div`
    background: ${p => p.isWinnerSquare ? '#2b2101' : "#525252"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    span{
        font-size: 50px;
        color: ${p => p.isWinnerSquare ? '#ffcb55': '#fff'};
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