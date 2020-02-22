/* Definition
ECMAScript 5 (2009) introduced Getter and Setters.
Getters and setters allow you to define Object Accessors (Computed Properties). 
This example uses a lang property to get the value of the language property.
*/
var person = {
  firstName: "Gun Gun",
  lastName: "Febrianza",
  language: "id",
  get lang() {
    return this.language;
  }
};
// Display data from the object using a getter:
console.log(person.lang);
