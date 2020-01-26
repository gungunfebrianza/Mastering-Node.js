/*Objects are variables too. But objects can contain many values.
  We can immediately put some properties into {...} as “key: value” pairs:
  */
var person = {
  firstName: 'John',
  age: 50
};

console.log('firstName : ' + person.firstName);
console.log('Age : ' + person.age);

// Example :
// [1]
var car = {
  type: 'mazda',
  color: 'red',
  speed: 900
};
console.log(car.type);

car.owner = 'gun gun febrianza';
console.log(car.owner);

var wallet = {
  walletID: 1,
  balance: 9000,
  owner: "Gun Gun Febrianza",
  history: [],
  checkBalance: function () {
    return 'Your Balance is : ' + this.balance
  },
  deposite: function (newbalance) {
    this.balance += newbalance
    return this.balance
  },
  sendMoney: function (params) {
    return "Sending Money Now!"
  },
  receiveMoney: function (newbalance) {
    this.balance += newbalance
    this.history.push({ from: 'cheysa', ammount: newbalance})
  }
}

wallet.deposite(1000)
wallet.receiveMoney(500)
console.log(wallet.history);
console.log(wallet.deposite(1000));

