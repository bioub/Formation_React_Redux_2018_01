const { Observable } = require('rxjs');

const timeout = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

timeout(1000)
  .then(() => timeout(1000))
  .then(() => {
    console.log('2s');
  });

Promise.all([
  timeout(Math.floor(Math.random() * 1001)),
  timeout(Math.floor(Math.random() * 1001)),
]).then((returnPromise1, returnPromise2) => {

});

const interval = (delay) => {
  return Observable.interval(delay);
};

interval(1000)
  .map((i) => i + 1)
  .filter((i) => i % 2 === 0)
  .subscribe((i) => {
    console.log(`interval ${i}s`);
  });
