const mongoose = require('mongoose')
const { connection, Schema } = mongoose

mongoose.connect(
	'mongodb://localhost:27017'
).catch(console.error)

//Define a schema including validation rules for the username field:
const UserSchema = new Schema({
	username: {
		type: String,
		minlength: 6,
		maxlength: 20,
		required: [true, 'user is required'],
		validate: {
			message: '{VALUE} is not a valid username',
			validator: (val) => /^[a-zA-Z]+$/.test(val),
		},
	},
})

//Compile the schema into a model:
const User = mongoose.model('User', UserSchema)

/*create a new document with invalid fields and use the validateSync document 
method to trigger the validation built-in and custom methods:*/
connection.once('connected', async () => {
	try {
		const user = new User()
		let errors = null
		// username field is not defined
		errors = user.validateSync()
		console.dir(errors.errors['username'].message)
		// username contains less than 6 characters
		user.username = 'Smith'
		errors = user.validateSync()
		console.dir(errors.errors['username'].message)
		// RegExp matching
		user.username = 'Smith_9876'
		errors = user.validateSync()
		console.dir(errors.errors['username'].message)
	} catch (error) {
		console.dir(error, { colors: true })
	} finally {
		await connection.close()
	}
})
