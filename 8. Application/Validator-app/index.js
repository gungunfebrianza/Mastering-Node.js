var validator = require("validator");

console.log(validator.isEmail("foo@bar.com"));
console.log(validator.contains("I Love You Love", "Love")); // Case Sensitive
console.log(validator.isBoolean("asdsad"));
console.log(validator.isFloat("2.33"));
console.log(validator.isInt("2"));
console.log(validator.isIP("127.0.0.1"));
console.log(validator.isNumeric("232323"));
console.log(validator.isURL("www.facebook.com"));
