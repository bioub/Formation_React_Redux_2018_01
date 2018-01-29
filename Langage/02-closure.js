function externe(msg) {
  // Closure : portée sauvegardée
  // 2 conditions
  // 1 - une fonction imbriquée dans une fonction ou un bloc
  // 2 - la fonction imbriquée est appelée en dehors
  function interne() {
    console.log(msg);
  }
  return interne;
}

const hello = externe('Hello'); // msg n'est pas détruit
// l'appel à hello se fait en dehors d'externe
hello();

// Sans closure : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Avec closure : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Avec closure (une fonction dans un bloc) : 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
