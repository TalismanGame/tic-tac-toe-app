let baseURL = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000/api/v1'
} else {
    baseURL = 'http://130.185.120.108/api/v1'
}

export { baseURL }

