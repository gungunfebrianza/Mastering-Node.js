/* Definition
ECMAScript 5 (2009) introduced Getter and Setters.
Getters and setters allow you to define Object Accessors (Computed Properties). 
This example uses a lang property to set the value of the language property.
*/
var person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};
// Set an object property using a setter:
person.lang = "en";
// Display data from the object:
console.log(person.language);
