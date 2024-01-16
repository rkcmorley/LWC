// Destructuring
// Destructuring is another word for extraction of data
// We extract data from Arrays and Objects

let companies = ["Amazon", "Google"];

// Rather than typing companies[0] and companies[1] to get these data, we can use this.
// company1 and company2 aren't declared outside but for destructuring, there's no need to do this.
let [company1, company2] = companies;
console.log(company1); // Amazon
console.log(company2); // Google

let person = {
    title: "Mr.",
    name: "Ricardo Hayes",
    age: 21 
};

// Rather than using let title = person.title and let name = person.name, just use this instead. 
let {title, name, age} = person;
console.log(title); // Mr.
console.log(name); // Ricardo
console.log(age); // Hayes