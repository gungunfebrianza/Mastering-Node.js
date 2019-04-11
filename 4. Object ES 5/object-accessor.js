// Create an object:
var person = { firstName: "John", lastName: "Doe" };

// Define a getter
Object.defineProperty(person, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  }
});

console.log(person.fullName);
