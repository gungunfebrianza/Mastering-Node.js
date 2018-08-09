const express = require('express')
const loggerMiddleware = require('./9.middleware_logger')
const app = express()

app.use(loggerMiddleware({enable: true}))

app.listen(9999, () => console.log('Web Server running on port 9999'),)
