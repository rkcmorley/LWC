console.log("testing");
var hero = "Hero to zero";
console.log("var hero: " + hero);
var hero = "Zero!"
console.log("var hero: " + hero);
console.log("window.hero " + window.hero);

function callHorse() {
    var horse = "My city for a horse!";
    console.log("callHorse function: " + horse);
    console.log("var hero in callHorse function: " + hero);
}

callHorse();

//console.log(horse);

if (2 === 2) {
    var two = 2;
}

console.log("var two: " + two);

console.log("window.two: " + window.two);