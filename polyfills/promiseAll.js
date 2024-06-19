// The Promise.all() accepts an array of promises and returns a promise when all the Promises
// are fulfilled or when the iterable containes no promises. It rejects the with the reason of
// the first promise that rejects

// The results are returned in the same order as the promises are given in the array

// custom polyfill for Promise.all
function promiseAll(taskList) {
  const results = []; // array which will maintain results of each promise in taskList in same order

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((val) => {
          results.push(val);
          if (index === taskList.length - 1) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// lets create a async task

function task(time) {
  return new Promise((resolve, reject) => {
    if (time < 4000) {
      resolve(time);
    } else {
      reject(`Time ${time} is too long.`);
    }
  });
}

const taskList1 = [task(1000), task(2000), task(3000)];

const taskList2 = [task(1000), task(2000), task(3000), task(4000)];

promiseAll(taskList2) // this is also a promise
  .then((results) => console.log(results))
  .catch((err) => console.log(err));
