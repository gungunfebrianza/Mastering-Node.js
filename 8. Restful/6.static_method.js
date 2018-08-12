const mongoose = require('mongoose')
const { connection, Schema } = mongoose

mongoose.connect(
	'mongodb://localhost:27017'
).catch(console.error)

//Define a schema:
const UsrSchm = new Schema({
	firstName: String,
	lastName: String,
	likes: [String],
})

//Define getByFullName static model method:
UsrSchm.static('getByFullName', function getByFullName(v) {
	const fullName = String(v).split(' ')
	const lastName = fullName[0] || ''
	const firstName = fullName[1] || ''
	return this.findOne()
		.where('firstName').equals(firstName)
		.where('lastName').equals(lastName)
})

//Compile the schema into a model:
const User = mongoose.model('User', UsrSchm)

/*use the getByFullName static model method to look for the user in the 
collection of users using their full name:*/
UsrSchm.statics.getByFullName = function getByFullName(v) {
	const fullName = String(v).split(' ')
	const lastName = fullName[0] || ''
	const firstName = fullName[1] || ''
	return this.findOne()
		.where('firstName').equals(firstName)
		.where('lastName').equals(lastName)
}

connection.once('connected', async () => {
	try {
		// Create
		const user = new User({
			firstName: 'Jingxuan',
			lastName: 'Huang',
			likes: ['kitties', 'strawberries'],
		})
		await user.save()
		// Read
		const person = await User.getByFullName(
			'Huang Jingxuan'
		)
		console.log(JSON.stringify(person, null, 4))
		await person.remove()
	} catch (error) {
		console.dir(error.message, { colors: true })
	} finally {
		await connection.close()
	}
})
