const contactES3 = {
  prenom: 'Romain',
  helloAsync: function() {
    // Portée de closure
    var that = this;
    setTimeout(function() {
      console.log('Bonjour je m\'appelle ' + that.prenom);
    });
  }
};

console.log(contactES3.prenom); // Romain
contactES3.helloAsync(); // Bonjour je m'appelle undefined

const contactES5 = {
  prenom: 'Romain',
  hello: function() {
    console.log('Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(hello.bind(this));
  }
};

/*
Function.prototype.bind = function(that) {
  return function() {

  }
}
*/

console.log(contactES5.prenom); // Romain
contactES5.helloAsync(); // Bonjour je m'appelle undefined

const contactES6 = {
  prenom: 'Romain',
  helloAsync() {
    setTimeout(() => {
      console.log('Bonjour je m\'appelle ' + this.prenom);
    });
  }
};

console.log(contactES6.prenom); // Romain
contactES6.helloAsync(); // Bonjour je m'appelle undefined
