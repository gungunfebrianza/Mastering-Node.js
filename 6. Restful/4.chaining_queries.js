const mongoose = require('mongoose')
const { connection, Schema } = mongoose

mongoose.connect(
	'mongodb://localhost:27017/'
).catch(console.error)

//Define a schema:
const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	age: Number,
})

//Compile the schema into a model:
const User = mongoose.model('User', UserSchema)

/*Once connected to the database, add a new document to the collection of users.
Then, using chaining syntax, query for the recently created user.
Additionally, use the select method to restrict which fields are retrieved
from the document:*/
connection.once('connected', async () => {
	try {
		const user = await new User({
			firstName: 'John',
			lastName: 'Snow',
			age: 30,
		}).save()

		const findUser = await User.findOne()
			.where('firstName').equals('John')
			.where('age').lte(31)
			.select('lastName age')

		console.log(JSON.stringify(findUser, null, 4))

		await user.remove()
	} catch (error) {
		console.dir(error.message, { colors: true })
	} finally {
		await connection.close()
	}
})
