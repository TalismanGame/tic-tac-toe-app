
export const elements = [
    {id: 0, owner: 0, isWinnerSquare: false},
    {id: 1, owner: 0, isWinnerSquare: false},
    {id: 2, owner: 0, isWinnerSquare: false},
    {id: 3, owner: 0, isWinnerSquare: false},
    {id: 4, owner: 0, isWinnerSquare: false},
    {id: 5, owner: 0, isWinnerSquare: false},
    {id: 6, owner: 0, isWinnerSquare: false},
    {id: 7, owner: 0, isWinnerSquare: false},
    {id: 8, owner: 0, isWinnerSquare: false}
]

export const winnerConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export const gameStatus = {
    0: 'WAITING',
    1: 'READY',
    2: 'DELETED',
    3: 'FINISHED',
}
