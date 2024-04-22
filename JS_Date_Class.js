let d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getFullYear());
console.log(d.getTime());
console.log(d.getUTCDate());
console.log(d.setDate(21));
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.setMonth(5));
console.log(d.setFullYear(2025));
console.log(d.setHours(5,23,49));
console.log(d.setMinutes(45,55));
console.log(d.setSeconds(30));
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getDate());
console.log(d);

// setTime
const launchDate = new Date('July 1, 1999, 12:00:00');
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary
