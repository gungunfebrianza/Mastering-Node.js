const all = (arr, fn = Boolean) => arr.every(fn); // true
console.log(all([4, 2, 3], x => x > 1));
