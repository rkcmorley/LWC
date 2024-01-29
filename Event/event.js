function firstFunctionCall() {
    console.log('You clicked a button from firstFunctionCall()!');
}

function secondFunctionCall() {
    console.log('You clicked a button from secondFunctionCall()!');
}

// The second button has no HTML attribute such as onclick. 
// Rather than using the HTML attribute, we can use addEventListener.
// In addEventListener, first parameter is the actual event type, which is click.
// In addEventListener, second parameter is the name of the function we want to call.
let secondButton = document.querySelector('.second-button');
secondButton.addEventListener('click', secondFunctionCall);


/**
 * Number Generator Event
 */
function numberGenerator() {
    // Create an innerHTML where it generates random numbers.
    document.querySelector('.number-generation').innerHTML = Math.random()
}
// Whenever the mouse move, it will generate a random number
document.addEventListener('mousemove', numberGenerator);

// This will remove the event when you click the button. In this case, this will remove the mouse move.
// removeEventListener removes the event or stops event from running
function removeMouseMoveEvent() {
    document.removeEventListener('mousemove', numberGenerator);
}

// When the third button is pressed or clicked, it will remove the mouse move event.
let thirdButton = document.querySelector('.third-button');
thirdButton.addEventListener('click', removeMouseMoveEvent);

/**
 * Our own Custom Event
 */

// Instead of using the standard events such as click, mousemove etc. we create our own custom event
// Our custom event is sayName
// The CustomEvent constructor requires the detail parameter where we passed our data to.
function callNameMethod() {
    let customEvent = new CustomEvent("sayName", { detail: { name: 'Bobby' } });
    document.dispatchEvent(customEvent);
}

// We can add event listener with our custom event, sayHello
document.addEventListener("sayName", function (data) {
    console.log('This has the name of the person: ', data.detail);
});