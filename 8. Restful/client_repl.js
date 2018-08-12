/*Include as well, the repl and vm Node.js modules that will allow you to
create an interactive Node.js REPL:*/
const repl = require('repl')
const util = require('util')
const vm = require('vm')
const fetch = require('node-fetch')
const { Headers } = fetch

/*Define a variable that will later contain the session ID from the cookie
once the user is logged-in. The cookie will be used to allow the server
recognize the logged in user for actions such as getting information about
your profile or changing password:*/
let cookie = null

/*Define a helper function named query that will allow to make HTTP requests
to the server. The credentials options, allows to send and receive cookies
from and to the server. We define the headers that will tell the server the
content type of the request body that will be sent as JSON content:*/
const query = (path, ops) => {
	return fetch(`http://localhost:9999/users/${path}`, {
		method: ops.method,
		body: ops.body,
		credentials: 'include',
		body: JSON.stringify(ops.body),
		headers: new Headers({
			...(ops.headers || {}),
			cookie,
			Accept: 'application/json',
			'Content-Type': 'application/json',
		}),
	}).then(async (r) => {
		cookie = r.headers.get('set-cookie') || cookie
		return {
			data: await r.json(),
			status: r.status,
		}
	}).catch(error => error)
}

//Define a method that will allow users to sign up:
const signup = (username, password) => query('/signup', {
	method: 'POST',
	body: { username, password },
})

//Define a method that will allow users to log in:
const login = (username, password) => query('/login', {
	method: 'POST',
	body: { username, password },
})

//Define a method that will allow users to log out:
const logout = () => query('/logout', {
	method: 'POST',
})

//Define a method that will allow users to get their profile:
const getProfile = () => query('/profile', {
	method: 'GET',
})

//Define a method that will allow users to change their password:
const changePassword = (password) => query('/changepass', {
	method: 'PUT',
	body: { password },
})

//Define a method that will allow users to delete their profile:
const deleteProfile = () => query('/delete', {
	method: 'DELETE',
})

/*Use the start method from the REPL exported object to start a new REPL server.
We will specify the eval method to execute JavaScript code using the VM module,
then, if a Promise is returned, it will wait for the Promise to be resolved
before allowing the user to input more commands or type more JavaScript code
in the REPL. We will also specify also the writer method that will pretty-print
the result of calling the previously defined methods:*/
const replServer = repl.start({
	prompt: '> ',
	ignoreUndefined: true,
	async eval(cmd, context, filename, callback) {
		const script = new vm.Script(cmd)
		const is_raw = process.stdin.isRaw
		process.stdin.setRawMode(false)
		try {
			const res = await Promise.resolve(
				script.runInContext(context, {
					displayErrors: false,
					breakOnSigint: true,
				})
			)
			callback(null, res)
		} catch (error) {
			callback(error)
		} finally {
			process.stdin.setRawMode(is_raw)
		}
	},
	writer(output) {
		return util.inspect(output, {
			breakLength: process.stdout.columns,
			colors: true,
			compact: false,
		})
	}
})

/*Add the previously defined methods to the context of the REPL server where 
the JavaScript code will be executed:*/
replServer.context.api = {
	signup,
	login,
	logout,
	getProfile,
	changePassword,
	deleteProfile,
}
