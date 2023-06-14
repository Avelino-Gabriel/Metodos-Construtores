function Person(name, surname) {
    Person.count += 1;
    this.name = name;
    this.surname = surname;
  }
  
  Person.count = 0;
  
  Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
  };

console.log(Person.count); // → 0

const a = new Person('Pedremildo', 'Escavadeira');

console.log(Person.count); // → 1

const b = new Person('Testerson', 'Trunk');

console.log(Person.count); // → 2