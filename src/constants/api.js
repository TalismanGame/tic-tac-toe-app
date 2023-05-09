let baseURL = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8000/api/v1'
} else {
    baseURL = 'http://46.101.208.155:8000/api/v1'
}

export { baseURL }

