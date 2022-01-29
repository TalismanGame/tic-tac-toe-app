
export const elements = [
    {id: 0, owner: null, isWinnerSquare: false},
    {id: 1, owner: null, isWinnerSquare: false},
    {id: 2, owner: null, isWinnerSquare: false},
    {id: 3, owner: null, isWinnerSquare: false},
    {id: 4, owner: null, isWinnerSquare: false},
    {id: 5, owner: null, isWinnerSquare: false},
    {id: 6, owner: null, isWinnerSquare: false},
    {id: 7, owner: null, isWinnerSquare: false},
    {id: 8, owner: null, isWinnerSquare: false}
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
    0: 'NOT_CREATED',
    1: 'WAITING',
    2: 'READY',
    3: 'DELETE',
    4: 'FINISHED'
}



