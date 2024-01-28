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
})