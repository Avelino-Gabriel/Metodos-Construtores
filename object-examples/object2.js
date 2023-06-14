function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  
  Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
  };

  function Employee(name, surname, salary) {
    Person.apply(this, [name, surname]);
    this.salary = salary;
  }
  
  Employee.prototype = Object.create(Person.prototype);
  
  Employee.prototype.getTax = function () {
    return this.salary * 0.08;
  };

const a = new Employee('Pedremildo', 'Escavadeira', 100);
const b = new Person('Testerson', 'Trunk');

console.log(a.name); // → Pedremildo
console.log(b.surname); // → Trunk
console.log(a.getFullName()); // → 'Pedremildo Escavadeira'
console.log(a.getFullName === b.getFullName); // → true
console.log(a.getTax()); // → 8