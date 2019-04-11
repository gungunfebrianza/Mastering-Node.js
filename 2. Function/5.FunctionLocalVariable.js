function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local
  console.log(message);
}
showMessage(); // Hello, I'm JavaScript!
console.log(message); // <-- Error! The variable is local to the function
