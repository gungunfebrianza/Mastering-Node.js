var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566
};
person.name = function() {
  return this.firstName + " " + this.lastName;
};
console.log(person.name());
