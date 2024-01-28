// Promise is an object. That's why we have a constructor.
// Promise requires two parameters, resolve and reject.
// Resolves is successful asynchronous call.
// Reject is failed asynchronous call.
function checkIfSuccessful(data) {
    return new Promise(function (resolve, reject) {
        if (data === "Success") {
            return resolve("Successfully executed!");
        }
        else {
            return reject("Failed to execute!")
        }
    });
}

// We're calling the function, checkIfSuccessful.
// catch() method is there to check if it caught an error.
checkIfSuccessful("Success").then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error)
});

/**
 * The fetch() function in JavaScript is used to make network requests
 * to fetch resources, such as JSON data, from a server. 
 **/
// This is another asynchronous call.
// To receive data, use then() method.
// then() method uses callback functions.
// You can have multiple promises, such as .json and fetch() method.
fetch('https://api.github.com/users/rkcmorley').then(function (result) {
    console.log(result); // This will show the object, it's my user profile.
    return result.json(); // This will return the object in JSON format.
}).then(function (response) {
    console.log(response); // This will show the object in JSON format. Which is my user profile.
}).catch(function (error) {
    console.log(error)
});