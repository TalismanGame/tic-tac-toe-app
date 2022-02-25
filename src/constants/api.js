let baseURL = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000/api/v1'
} else {
    baseURL = 'http://194.5.192.251:8000/api/v1'
}

export { baseURL }

