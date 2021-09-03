import React, {useState} from 'react'
import styled from 'styled-components'

const MainBoard = props => {
    const [userNumber, setUserNumber] = useState(1)
    const [squares, setSquares] = useState(JSON.parse(JSON.stringify(elements)))

    const handleClickOnSquare = (elementId, uNumber) => {
        let tempArray = [...squares]
        if(tempArray[elementId].owner === null) {
            setUserNumber(userNumber => userNumber === 1 ?  2 : 1)
            tempArray[elementId].owner = uNumber
        } 
        else return
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

const elements = [
    {id: 0, owner: null},
    {id: 1, owner: null},
    {id: 2, owner: null},
    {id: 3, owner: null},
    {id: 4, owner: null},
    {id: 5, owner: null},
    {id: 6, owner: null},
    {id: 7, owner: null},
    {id: 8, owner: null}
]

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


