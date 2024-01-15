const unChanged = "Not changing";
console.log(unChanged);
// unChanged = "Please change";
// console.log(unChanged);
// const unChanged = "Please change again";
// console.log(unChanged);

function noChange() {
    const noChangeAtAll = "No way I'm changing";
    console.log(noChangeAtAll);
}

noChange();
const noChangeAtAll = "I have changed outside the function scope!";
console.log(noChangeAtAll);
//console.log(noChangeAtAll);

if (2 === 2) {
    const noChangeAtAll = "I have changed inside the block scope!"
    console.log(noChangeAtAll);
}

console.log(noChangeAtAll);