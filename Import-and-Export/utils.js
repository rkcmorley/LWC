// Normal export
// Needs the keyword, 'export'.
export const PI = 3.14;

export function add(a, b) {
    console.log(a + b);
}

// Another way of exporting
const answerToLife = 42;
function subtract(a, b) {
    console.log(a - b);
}

export { answerToLife, subtract };

// Export with alias
export { PI as pie, add as addition };

// There can only be one default in a file
/** 
 * The export default keyword is used to export the function as the default export of the module, 
 * making it easier to import and use in other parts of your code.
 **/
/** 
 * In JavaScript, export default is a syntax used to export a single value, function, 
 * or object from a module. 
 * It is used to make the exported value the default export of the module, which can be 
 * imported using any name in other parts of the code. 
 * 
 * A file can have only one default export, and it can be a class, function, or object. 
 */
export default function substraction(a, b) {
    console.log(a - b);
}