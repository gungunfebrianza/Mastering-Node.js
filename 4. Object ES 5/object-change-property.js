// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};
Object.defineProperty(person, "language", { value: "NO" });
console.log(person.language);
