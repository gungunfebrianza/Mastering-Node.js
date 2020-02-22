var person = {
  firstName: "Gun Gun",
  lastName: "Febrianza"
};

person.name = function() {
  return this.firstName + " " + this.lastName;
};

console.log(person.name());
// Output Gun Gun Febrianza