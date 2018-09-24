// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
// Display data from the object using a getter:
console.log(person.lang);
