// on manipule des objets du langage
console.log(Math.PI); // 3.141592653589793
console.log(typeof Math); // object

// Pour accéder au contenu d'un objet on a 2 opérateurs
console['log'](Math['PI']); // 3.141592653589793

// on manipule des objets de Node.js
console.log(typeof process); // object
console.log(typeof exports); // object
console.log(typeof module); // object

// on manipule des objets du navigateur
console.log(typeof document); // object
console.log(typeof window); // object
console.log(typeof navigateur); // object

// on manipule des objets du Navigateur et Node
console.log(typeof console); // object

// Les objets sont extensibles
// (un objet est un système clé/valeur)

// Attention : mauvaise pratique d'étendre les objets
// qu'on a pas créé (natif, open source)
console.log(Math.sum); // undefined

// ajouter
Math.sum = (a, b) => a + b;
console.log(Math.sum('1', 2)); // 12

// modifier
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum(1, 2)); // 3

// supprimer
delete Math.sum;
console.log(Math.sum); // undefined

const pileOuFace = () => (Math.random() > 0.5) ? 'pile' : 'face';
const assert = require('assert');
// Monkey Patch
const random = Math.random;
Math.random = () => 0.75;
assert.strictEqual(pileOuFace(), 'pile');
Math.random = () => 0.25;
assert.strictEqual(pileOuFace(), 'face');
Math.random = random;

// 3 cas de créations :
// 1 - un objet créé ponctuellement (ou très simple à créer)
// -> syntaxe object literal
const coords = {x: 10, y: 20};
console.log(coords.x); // 10;

// assez proche de JSON (représentation d'un objet sous forme de string)
const json = '{"x": 10, "y": 20}';
const coordsFromJSON = JSON.parse(json);
console.log(coordsFromJSON.x); // 10;

// On peut boucler sur les clés
for (let key in coords) {
  console.log(key); // 'x' puis 'y'
  console.log(coords[key]); // 10 puis 20
}

// 2 - format d'objet créé régulièrement (sans méthodes)
var coordsFactory = function(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
  };
};

var coords3d = coordsFactory(10, 20);
console.log(coords3d.z); // 0

var coordsFactory = (x = 0, y = 0, z = 0) => ({x, y, z});
var coords3d = coordsFactory(10, 20);
console.log(coords3d.z); // 0

// 3 - format d'objet créé régulièrement (avec méthodes)

// dans ce cas mauvaise idée d'utiliser une fabrique
// (les méthodes sont dupliquées)
var contactFactory = function(prenom) {
  prenom = prenom || '';
  return {
    _prenom: prenom,
    hello: function() {
      return 'Bonjour je m\'appelle ' + this._prenom;
    },
  };
};

const romain = contactFactory('Romain');
const edouard = contactFactory('Edouard');
console.log(romain._prenom); // Romain (censé être privé)
console.log(edouard._prenom); // Edouard (censé être privé)
console.log(romain.hello()); // Bonjour je m'appelle Romain
console.log(edouard.hello()); // Bonjour je m'appelle Edouard
console.log(romain.hello === edouard.hello); // false (2 fonctions hello)

// on utilisera les fonctions constructeurs
const Contact = function(prenom) {
  this._prenom = prenom || '';
};

Contact.getClass = function() {
  return 'Contact';
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const eric = new Contact('Eric');
console.log(typeof eric); // object
console.log(eric._prenom); // Eric (censé être privé)
console.log(Contact.getClass()); // Contact
console.log(eric.hello()); // Bonjour je m'appelle Eric
const jean = new Contact('Jean');
console.log(eric.hello === jean.hello); // true

/*
const Voiture = function(marque) {
  this._marque = marque || '';
};

Voiture.prototype.demarrer = function() {
  console.log('vrrrroooommm');
};
*/

class Voiture {
  constructor(marque) {
    this._marque = marque || '';
  }
  demarrer() {
    console.log('vrrrroooommm');
  }
}

const renault = new Voiture();
renault.demarrer();
console.log(typeof Voiture); // function
console.log(typeof Voiture.prototype.demarrer); // function
