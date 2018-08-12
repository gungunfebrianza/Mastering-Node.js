const mongoose = require('mongoose');
const {connection, Schema} = mongoose;

mongoose.connect('mongodb://@localhost:27017').catch(console.error);

//Define a schema:
const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    likes: [String]
  });

/*Define a document instance method for setting a user's first name and last
name from a string containing their full name:*/
UserSchema.method('setFullName', function setFullName(v) {
  const fullName = String(v).split(' ')
  this.lastName = fullName[0] || ''
  this.firstName = fullName[1] || ''
});

/*Define a document instance method for getting a user's full name concatenating
the firstName and lastName properties:*/
UserSchema.method('getFullName', function getFullName() {
  return `${this.lastName} ${this.firstName}`
})

/*Define a document instance method named loves that will expect one argument
that will add to the likes array of strings:*/
UserSchema.method('loves', function loves(stuff) {
  this.likes.push(stuff)
})

/*Define a document instance method named dislikes which will remove one thing
previous liked by the user from the likes array:*/
UserSchema.method('dislikes', function dislikes(stuff) {
  this.likes = this.likes.filter(str => str !== stuff)
})

//Compile the schema into a model:
const User = mongoose.model('User', UserSchema)

connection.once('connected', async () => {

  try {
    // Create
    const user = new User()
    user.setFullName('Huang Jingxuan')
    user.loves('kitties')
    user.loves('strawberries')
    user.loves('snakes')
    await user.save()

    // Update
    const person = await User.findOne().where('firstName', 'Jingxuan').where('likes'). in (['snakes', 'kitties'])
    person.dislikes('snakes')
    await person.save()

    // Display
    console.log(person.getFullName())
    console.log(JSON.stringify(person, null, 4))

    // Remove
    await user.remove()
  } catch (error) {
    console.dir(error.message, {colors: true})
  } finally {
    await connection.close()
  }

})
