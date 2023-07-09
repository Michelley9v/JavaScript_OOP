console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
 addHobby(resHobby) {
  this.hobbies.push();

  }
  removehobby(resHobby) {
    let foundIdx = this.hobbies.indexOf(resHobby);
     this.hobbies.splice(foundIdx, 1);
    
  }

  greeting() {
    console.log("Hellow fellow person!");
  }

  toString() {
   return Object.values(this).toString();

  }
}

//Exersize 2

class Coder extends Person {
  
 constructor(name, pets, residence, hobbies, occupation) {
  super(name, pets, residence, hobbies);
 
 this.occupation = occupation;
 }

 greeting() {
  console.log("Hello, I am a coder!");
}
}

//Exersize 3
let coder = new Coder (
"Michelle",
2, 
"Oshkosh,WI",
["hiking", "diy", "reading"], 
"Full stack web Devoloper"
);

coder.addHobby("reading");

console.log(coder);

coder.removeHobby;("diy");

console.log(coder);

coder.greeting();

console.log(coder.toString())



//Exercise 4
class Calculator {
  result = 0;

  add(a, b) {
    let res;

    if(b == undefined) {
      res = this.result + a;
  } else {
    res = a + b;
  }
    this.result = res;
    return this.result;
  }
  subtract(a, b) {
    let res;

    if(b == undefined) {
      res = this.result - a;
  } else{
    res = a - b;
  }
    this.result = res;
    return this.result;
  }
  multiply(a, b) {
    let res;

    if(b == undefined) {
      res = this.result * a;
  } else{
    res = a * b;
  }
    this.result = res;
    return this.result;
  
  }
  divide(a, b) {
    let res;

    if(b == undefined) {
      res = this.result / a;
  } else{
    res = a / b;
  }
    this.result = res
    return this.result;
  
  }
  display() {
   console.log(this.result); 
 }
}

 let Calc = new Calculator();


Calc.add(10);
Calc.subtract(2);
Calc.multiply(4);
Calc.divide(2);
Calc.display();
