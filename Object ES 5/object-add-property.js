// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};
// Add a property
Object.defineProperty(person, "year", { value: "2008" });
console.log(person.year);
console.log(person);
