const mongoose = require('mongoose')
const { connection, Schema } = mongoose

mongoose.connect(
	'mongodb://localhost:27017'
).catch(console.error)

//Define a schema:
const UserSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
})

/*init: This is called internally, immediately after a document is returned
from MongoDB. Mongoose uses setters for marking the document as modified or
which fields of the document were modified. init initializes the document
without setters.*/
//Add a pre and post hook for the init document method:
UserSchema.pre('init', async function preInit() {
	console.log('A document is going to be initialized.')
})
UserSchema.post('init', async function postInit() {
	console.log('A document was initialized.')
})

/*validate: This executes built-in and custom set validation rules for
the document.*/
//Add a pre and post hook for the validate document method:
UserSchema.pre('validate', async function preValidate() {
	console.log('A document is going to be validated.')
})
UserSchema.post('validate', async function postValidate() {
	console.log('All validation rules were executed.')
})

/*This saves the document in the database.
Add a pre and post hook for the save document method:*/
UserSchema.pre('save', async function preSave() {
	console.log('Preparing to save the document')
})
UserSchema.post('save', async function postSave() {
	console.log(`A doc was saved id=${this.id}`)
})

/*This removes the document from the database.
Add a pre and post hook for the remove document method:*/
UserSchema.pre('remove', async function preRemove() {
	console.log(`Doc with id=${this.id} will be removed`)
})
UserSchema.post('remove', async function postRemove() {
	console.log(`Doc with id=${this.id} was removed`)
})

//Compile the schema into a model:
const User = mongoose.model('User', UserSchema)

/*create a document and perform some basic operations such as saving,
retrieving, and deleting the document:*/
connection.once('connected', async () => {
	try {
		const user = new User({
			firstName: 'John',
			lastName: 'Smith',
		})
		await user.save()
		await User.findById(user.id)
		await user.remove()
	} catch (error) {
		console.dir(error.message, { colors: true })
	} finally {
		await connection.close()
	}
})

/*When you save a document, it first triggers the validation hooks that ensure
that the fields pass the rules set by built-in validation rules or custom rules.
In your code, the fields are marked as required.
Then it will trigger the save hooks. After, using a model method to retrieve
the recently created user from the database, once the document is retrieved,
it triggers the init hooks. Finally, removing the document from the database
triggers the remove hooks.*/
