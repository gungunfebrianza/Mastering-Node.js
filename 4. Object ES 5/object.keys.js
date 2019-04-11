// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};
// Change Property
Object.defineProperty(person, "language", { enumerable: false });
// Display Properties
console.log(Object.keys(person));
