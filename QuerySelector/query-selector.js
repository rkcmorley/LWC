// This will return the first paragraph tag
let paragraph = document.querySelector('p');
console.log(paragraph);

// We can change the font colour to green in the query selector.
paragraph.style.color = 'green';

// This will return all elements
let allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// We need to convert the node list to array
// We will apply the changes in a for-loop via for each
// All the paragraphs will be in orange
Array.from(allParagraphs).forEach(function (item) {
    item.style.color = 'orange';
});

// JS reads the codes from top to bottom
// Rather than orange, we override it to colour it to blue.
// class name is the best approach not Id!
let paragraphTwo = document.querySelector('.paragraph-two');
console.log(paragraphTwo);
paragraphTwo.style.color = 'blue';

// In LWC, rather than using document we used this.template
this.template.querySelector();