let baseURL = ''
let wsURL = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000/api/v1'
    wsURL = 'ws://localhost:8000/ws'
} else {
    baseURL = 'https://api.talismangame.ir/api/v1'
    wsURL = 'wss://api.talismangame.ir/ws/'
}

export { baseURL, wsURL }

