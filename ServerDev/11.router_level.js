// create a small logger router-level middleware function that will only log
// requests to paths mounted or located in the router's mounted path.
const express = require('express')
const app = express()
const router = express.Router()

//Define our logger middleware function
router.use((request, response, next) => {
	console.log('URL:', request.originalUrl)
	next()
})

//Mount the Router to the path "/router"
app.use('/router', router)

app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)

// http://localhost:1337/example
// No logs should be displayed in terminal
