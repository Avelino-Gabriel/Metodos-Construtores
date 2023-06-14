function Person(target, name, surname) {
    target.name = name;
    target.surname = surname;
    target.getFullName = getFullName;
    return target;
  }
  
  function getFullName() {
    return this.name + ' ' + this.surname;
  }

const a = Person({}, 'Pedremildo', 'Escavadeira');
const b = Person({}, 'Testerson', 'Trunk');

console.log(a.name); // → Pedremildo
console.log(b.surname); // → Trunk
console.log(a.getFullName()); // → 'Pedremildo Escavadeira'
console.log(a.getFullName === b.getFullName); // → true