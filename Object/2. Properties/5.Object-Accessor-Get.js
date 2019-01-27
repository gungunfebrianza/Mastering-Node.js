/* Definition
ECMAScript 5 (2009) introduced Getter and Setters.
Getters and setters allow you to define Object Accessors (Computed Properties). 
This example uses a lang property to get the value of the language property.
*/
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
