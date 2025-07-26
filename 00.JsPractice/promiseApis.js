// practice promise apis

//1. Promise.all

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1 fail");
    resolve("p1 success");
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fail");
    resolve("p2 success");
  }, 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 fail"); // fails after 2 seconds, consoles "p3 fails"
    resolve("p3 success");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log("Promise.all ", result); // array of all resolved values after 3 seconds i.e. ['p1 success', 'p2 success', 'p3 success']
  })
  .catch((error) => {
    console.log("Promise.all error catched:", error); // fails after 2 seconds if line 19 is uncommented, consoles "p3 fails"
  });

//2. Promise.allSettled

Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log("Promise.allSettled ", result); // array of objects with resolved "values" and rejected "reasons" after 3 seconds
    // [
    //  {status: 'fulfilled', value: 'p1 success'},
    // {status: 'fulfilled', value: 'p2 success'},
    // {status: 'rejected', reason: 'p3 fail'}
    // ]
  })
  .catch((error) => {
    console.log("Promise.allSettled error catched:", error); // will never go intot his catch even if all promises fails
  });

//3. Promise.race

Promise.race([p1, p2, p3])
  .then((result) => {
    console.log("Promise.race ", result); //
  })
  .catch((error) => {
    console.log("Promise.race error catched:", error); //
  });

//3. Promise.any

Promise.any([p1, p2, p3])
  .then((result) => {
    console.log("Promise.any ", result); //
  })
  .catch((error) => {
    console.log("Promise.any error response catched:", error); // returns an "aggregateError" object with "errors" array containing all errors
    // to get errors array use error.errors
    console.log("Promise.any error catched:", error.errors); // ['p1 fail', 'p2 fail', 'p3 fail']
  });
