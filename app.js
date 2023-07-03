console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies = [] ) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
 addHobby(hobby) {
    console.log(hobby)
    console.log(this.hobbies)
    this.hobbies.push(hobby);

  }
  removehobby(hobby) {
    let foundIdx = this.hobbies.indexOf(hobby);

    let valuesBefore = this.hobbies.slice(0,foundIdx);

    let valuesAfter = this.hobbies.slice(foundIdx + 1);
    // Update Hobbies
  }

  greeting() {
    console.log("Hellow fellow person!");
  }

  //TBC
  info() {}
}

//Exersize 2

//Exersize 3
let person = new Person("Michelle", 2, "Oshkosh,WI");
person.addHobby("hiking");

//Exercise 4
class Calculator {
  result = 0;

  add(a, b) {
    this.result = a + b;
    return this.result;
  }
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }
  divide(a, b) {
    this.result = a / b;
    return this.result;
  }
}
let Calc = new Calculator();

console.log(Calc.add(0, 1));
console.log(Calc.subtract(5, 3));
console.log(Calc.multiply(1, 3));
console.log(Calc.divide(8, 2));
