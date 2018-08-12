const mongoose = require('mongoose')
const {connection, Schema} = mongoose

mongoose.connect('mongodb://localhost:27017').catch(console.error)

//Define a schema:
const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    likes: [String]
  })

// Compile the schema into a model:
const User = mongoose.model('User', UserSchema)

//Define a function that will be used for adding new users:
const addUser = (firstName, lastName) => new User(
  {firstName, lastName}
).save()

/*Define a function that will be used for retrieving a user from the
collection of users by its id:*/
const getUser = (id) => User.findById(id)

/*Define a function that will remove the user from the collection of users
by its id:*/
const removeUser = (id) => User.remove({id})

/*Define an event listener that will perform CRUD operations once the there is
a connection to the database. First, add a new user and save it.
Then, retrieve the same user using its id. Next, modify the user's properties
and save it. Finally, remove the user from the collection by its id:*/
connection.once('connected', async () => {
  try {
    // Create
    const newUser = await addUser('John', 'Smith')
    // Read
    const user = await getUser(newUser.id)
    // Update
    user.firstName = 'Jonny'
    user.lastName = 'Smithy'
    user.likes = ['cooking', 'watching movies', 'ice cream']
    await user.save()
    console.log(JSON.stringify(user, null, 4))
    // Delete
    await removeUser(user.id)
  } catch (error) {
    console.dir(error.message, {colors: true})
  } finally {
    await connection.close()
  }
})
