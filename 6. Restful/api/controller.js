/*Finally, define a controller that will transform the request body to actions
that our model can understand.*/
const express = require('express')
const User = require('./model')
const api = express.Router()

/*Define a request handler to check if a user is logged in and another request
handler to check if the user is not logged in:*/
const isLogged = ({ session }, res, next) => {
	if (!session.user) res.status(403).json({
		status: 'You are not logged in!',
	})
	else next()
}


const isNotLogged = ({ session }, res, next) => {
	if (session.user) res.status(403).json({
		status: 'You are logged in already!',
	})
	else next()
}

//Define a post request method to handle requests to "/login" endpoint:
api.post('/login', isNotLogged, async (req, res) => {
	try {
		const { session, body } = req
		const { username, password } = body
		const user = await User.login(username, password)
		session.user = {
			_id: user._id,
			username: user.username,
		}
		session.save(() => {
			res.status(200).json({ status: 'Welcome!'})
		})
	} catch (error) {
		res.status(403).json({ error: error.message })
	}
})

//Define a post request method to handle requests to "/logout" endpoint:
api.post('/logout', isLogged, (req, res) => {
	req.session.destroy()
	res.status(200).send({ status: 'Bye bye!' })
})

//Define a post request method to handle requests to "/signup" endpoint:
api.post('/signup', async (req, res) => {
	try {
		const { session, body } = req
		const { username, password } = body
		const user = await User.signup(username, password)
		res.status(201).json({ status: 'Created!'})
	} catch (error) {
		res.status(403).json({ error: error.message })
	}
})

//Define a get request method to handle requests to "/profile" endpoint:
api.get('/profile', isLogged, (req, res) => {
	const { user } = req.session
	res.status(200).json({ user })
})

//Define a put request method to handle requests to "/changepass" endpoint:
api.put('/changepass', isLogged, async (req, res) => {
	try {
		const { session, body } = req
		const { password } = body
		const { _id } = session.user
		const user = await User.findOne({ _id })
		if (user) {
			await user.changePass(password)
			res.status(200).json({ status: 'Pwd changed' })
		} else {
			res.status(403).json({ status: user })
		}
	} catch (error) {
		res.status(403).json({ error: error.message })
	}
})

//Define a delete request method to handle requests to "/delete" endpoint:
api.delete('/delete', isLogged, async (req, res) => {
	try {
		const { _id } = req.session.user
		const user = await User.findOne({ _id })
		await user.remove()
		req.session.destroy((err) => {
			if (err) throw new Error(err)
			res.status(200).json({ status: 'Deleted!'})
		})
	} catch (error) {
		res.status(403).json({ error: error.message })
	}
})

//Export the route:
module.exports = api
