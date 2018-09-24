var txt = "";
var person = { fname: "John", lname: "Doe", age: 25 };
var x;
for (x in person) {
  //console.log((txt += person[x] + " "));
  console.log(x);
  console.log(person[x]);
}
