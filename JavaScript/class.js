function setTimeoutPromisified(ms) {   // This function returns a promise that resolves after a specified timeout
        return new Promise(resolve => setTimeout(resolve, ms));  // This will resolve the promise after 'ms' milliseconds
}

function afterDone () {            // This function will be called after the timeout
        console.log("5 seconds have passed");   // This will log the message after the timeout
}

setTimeoutPromisified(5000).then(afterDone);  // Call the function with a 5 second timeout and then call afterDone when the promise resolves