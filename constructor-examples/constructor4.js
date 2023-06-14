/**
* classe responsável por armazenar dados de uma pessoa física
*/
class Person {
    /**
    * @param  name
    * @param  surname
    */
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;

        Person.prototype.getFullName = function () {
            return this.name + ' ' + this.surname;
          };
    }
}

const p1 = new Person('Bruno','Guimarães' )
// constructor executado

class Employee extends Person {
    constructor(name, surname, salary) {
      super(name, surname);
      this.salary = salary;
      this._rate = 0.08;
    }
  }
  
  Employee.prototype = Object.create(Person.prototype);
  
  Employee.prototype.getTax = function () {
    return this.salary * this._rate;
  };
  const a = new Employee('Pedremildo', 'Escavadeira', 100);
  const b = new Person('Testerson', 'Trunk');

console.log(a instanceof Employee); // → true
console.log(a instanceof Person); // → true
console.log(a instanceof Object); // → true

console.log(b instanceof Employee); // → false
console.log(b instanceof Person); // → true
console.log(b instanceof Object); // → true
  