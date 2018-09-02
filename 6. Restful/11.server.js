const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const api = require('./api/controller')
const app = express()

const db = mongoose.connect(
	'mongodb://localhost:27017'
).then(conn => conn).catch(console.error)

//Use the body-parser middleware to parse the request body as JSON:
app.use(bodyParser.json())

/*Define an ExpressJS middleware function that will ensure your web
application is connected to MongoDB first before allowing next route handlers
to be executed:*/
app.use((request, response, next) => {
	Promise.resolve(db).then(
		(connection, err) => (
			typeof connection !== 'undefined'
				? next()
				: next(new Error('MongoError'))
		)
	)
})

/*Configure express-session middleware to store sessions in the Mongo database
instead of storing in memory:*/
app.use(session({
	secret: 'MERN Cookbook Secrets',
	resave: false,
	saveUninitialized: true,
	store: new MongoStore({
		collection: 'sessions',
		mongooseConnection: mongoose.connection,
	}),
}))

//Mount the API controller to the "/api" route:
app.use('/users', api)
app.listen(
	9999,
	() => console.log('Web Server running on port 9999'),
)
