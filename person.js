class Person {
     static #id = 0;
     constructor () {
          this._ID = Person.#id++;          
     };

  getID() {
     return this._ID;
  }

}

module.exports = Person;

// const guy = new Person();
// const bro = new Person();
// console.log(guy.getID());
// console.log(bro.getID());
//console.log(bro.#id);
//Above demonstates private property cannot be accessed from within instance of class object