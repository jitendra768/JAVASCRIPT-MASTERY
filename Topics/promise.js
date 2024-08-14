// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  Promises provide a cleaner, more manageable way to handle asynchronous tasks, especially compared to traditional callback-based approaches.

// Key Concepts of Promises
// States:

// Pending: The initial state, meaning the promise has neither been fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a resolved value.
// Rejected: The operation failed, and the promise has a reason for the failure (an error).
// Methods:

// then(onFulfilled, onRejected): Attaches callbacks for when the promise is fulfilled or rejected.
// catch(onRejected): Attaches a callback for only when the promise is rejected.
// finally(onFinally): Attaches a callback that will be called when the promise is settled, regardless of its outcome (fulfilled or rejected).

function fetchData() {
  return new Promise((resoleve, reject) => {
    setTimeout(() => {
      const success = false; // Simulate a successful or failed operation
      if (success) {
        resoleve("data fetch successfull");
      } else {
        reject("Error fetching data");
      }
    }, 200);
  });
}

// Using the promise
fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched successfully
  })
  .catch((error) => {
    console.error(error); //if opration failes
  })

  .finally(() => {
    console.log("Operation complete"); // This will run regardless of the outcome
  });

// Applications of Promises

// Asynchronous Operations:

// Promises are ideal for handling tasks like fetching data from a server, reading files, or performing any operation that takes time to complete.
// Avoiding Callback Hell:

// Promises provide a structured way to handle multiple asynchronous operations without nesting callbacks, making the code easier to read and maintain.

// Chaining Operations:

// You can chain multiple then methods to handle sequential asynchronous tasks in a linear and readable manner.

fetchData()
  .then((data) => {
    console.log("First operation:", data);
    return anotherAsyncOperation();
  })
  .then((result) => {
    console.log("Second operation:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   Handling Multiple Promises:

//   Using Promise.all or Promise.race, you can handle multiple promises concurrently, waiting for all of them to complete or for the first one to complete, respectively.

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });
