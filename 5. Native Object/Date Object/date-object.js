var d = new Date();
//console.log(d);

// Output :
// 2018-10-07T16:47:04.580Z

var strDate = '13-07-1995';
var dateParts = strDate.split("-");
var date = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
console.log(date);
