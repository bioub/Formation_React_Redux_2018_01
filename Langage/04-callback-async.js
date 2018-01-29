setTimeout(function cb1() {
  console.log('1s');
}, 1000);

setTimeout(function cb2() {
  console.log('2s');
}, 2000);

setTimeout(function cb3() {
  console.log('1s');
}, 1000);

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |
// |                                         idle  log log  idle  log
// |setTimeout-setTimeout-setTimeout-logFin ...... cb1-cb3 ...... cb2
// +--------------------------------------------------------------------> temps
//                                                 1s             2s
// file d'attente :
