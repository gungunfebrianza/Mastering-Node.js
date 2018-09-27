const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

let data = {};
data.name = { a: "asd" };
console.log(!isEmpty(data.name) ? data.name : "");
