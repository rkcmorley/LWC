// setTimeout
// 2000 milliseconds is the equivalent to 2 seconds
// The text will appear after 2 seconds
window.setTimeout(function () {
    console.log("Now you see me!")
}, 2000);

// To stop the time from running use clearTimeout
let stopTime = window.setTimeout(function () {
    console.log("Now you you don't!")
}, 2000);
clearTimeout(stopTime);

// setInterval
// This will continuously generate string, number, etc. every 3 seconds
// You can stop it with clearInterval
let nonStop = window.setInterval(function () {
    console.log("To infinity!");
}, 3000);

clearInterval(nonStop);