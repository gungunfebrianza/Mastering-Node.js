const week = ['mon','tue','wed','thur','fri'];
const weekend = ['sat','sun'];

console.log([...week, ...weekend]); // ['mon','tue','wed','thur','fri','sat','sun']

week.push(...weekend);
console.log(week); // ['mon','tue','wed','thur','fri','sat','sun']
