const nbs = [2, 35, 4];

// ES5
nbs.forEach(function feCb(elt, i) {
  console.log('elt', elt);
  console.log('i', i);
});

// forEach, filter, map, reduce -> programmation fonctionnelle
const sommeCarresPairs = nbs.filter((elt) => elt % 2 === 0)
                            .map((elt) => elt ** 2)
                            .reduce((acc, elt) => acc + elt, 0);

console.log('fin');

// pile d'appels
// ^
// |
// |
// |
// |log  log  log
// |feCb-feCb-feCb =>     =>  =>
// |forEach       -filter-map-reduce-logFin
// +-----------------------------------------> temps
