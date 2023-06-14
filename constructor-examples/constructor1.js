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

    console.log('constructor executado')
    }
}

const p1 = new Person('Bruno','Guimarães' )
// constructor executado

console.log(p1.name) // Bruno

class Employee extends Person {
    constructor(name, surname, salary) {
      super(name, surname);
      this.salary = salary;
    }
  }
  
  Employee.prototype = Object.create(Person.prototype);
  
  Employee.prototype.getTax = function () {
    return this.salary * 0.08;
  };
  const a = new Employee('Pedremildo', 'Escavadeira', 100);
  const b = new Person('Testerson', 'Trunk');
  console.log(a.getFullName());
  console.log(a.getTax());
  