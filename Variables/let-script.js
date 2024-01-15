let oneWord = "One";
oneWord = "Two";
console.log("oneWord: " + oneWord);
console.log("oneWord in window: " + window.oneWord);

function callAWord() {
    let word = "abc";
    console.log("callAWord function: " + word);
}

callAWord();
//console.log("Outside the function: " + word);

if (2 === 2) {
    let anotherWord = "def";
    console.log(anotherWord);
}

console.log(anotherWord);