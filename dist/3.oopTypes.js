"use strict";
/**
 **  Class
 **  OOP -> Inheritance
 **  Type Guard -> typeof, in, instance
 **
 **
 **
 **
 **
 **
 **
 **
 **/
// Class
class Animan {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is call by ${this.sound}`);
    }
}
// Alternative above class
class AnimalAlternative {
    // Parameter Properties
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is call by ${this.sound}`);
    }
}
const dog = new AnimalAlternative("German Shepard", "Dog", "Ghew Ghew"); // Create new Dog Instance
dog.makeSound();
const cat = new AnimalAlternative("Persian", "Cat", "Maew Maew"); // Create new Cat Instance
cat.makeSound();
// OOP --> Inheritance
// Parent Class
class PersonClass {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHours) {
        console.log(`${this.name} will sleep ${numOfHours}`);
    }
}
// Child Class
class StudentClass extends PersonClass {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
{
    const student1 = new StudentClass("Mr. X", 20, "Dhaka");
    student1.getSleep(10);
}
// Child Class
class Teacher extends PersonClass {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numOfClass) {
        console.log(`${this.name} will take ${numOfClass}`);
    }
}
{
    const teacher = new Teacher("Mr. X", 20, "Dhaka", "Professor");
    teacher.getSleep(8);
}
// Guard --> Typeof
const add2 = (number1, number2) => {
    // Typeof Guard
    if (typeof number1 === "number" && typeof number2 === "number") {
        return number1 + number2;
    }
    else {
        return number1.toString() + number2.toString();
    }
};
function getUser(user) {
    if ("role" in user) {
        return `${user.name} is ${user.role} User`;
    }
    else {
        return `${user.name} is Normal User`;
    }
}
const normalUser = {
    name: "Mr.X",
};
const advanceUser = {
    name: "Mr.Y",
    role: "admin",
};
console.log(getUser(normalUser)); // Mr.X is Normal User
console.log(getUser(advanceUser)); // Mr.X is admin User
// Guard --> instanceof
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log("I am Making Bark");
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMeaw() {
        console.log("I am Making Meaw");
    }
}
const getAnimal = (instance) => {
    if (instance instanceof Dog) {
        instance.makeBark();
    }
    else if (instance instanceof Cat) {
        instance.makeMeaw();
    }
    else {
        instance.makeSound();
    }
};
const dog1 = new Dog("Tommy", "dog");
const cat1 = new Cat("Catty", "cat");
getAnimal(dog1);
getAnimal(cat1);
