// Having the keyword 'default' will result to an error if you want to import everything.

const numberTwo = 2

function multiply(a, b) {
    console.log(a * b);
}

export { numberTwo, multiply };