"use strict";
/**
 **  Class
 **  OOP -> Inheritance
 **  Type Guard -> typeof, in, instance
 **  Access Modifier --> Public, Private, Protected
 **  getter and setter
 **  Polymorphism
 **  Abstraction
 **  Encapsulation
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
// Access Modifier
class BankAccount {
    constructor(id, name, balance, gold) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this.gold = gold;
    }
    setBalance(amount) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
}
const personAccount = new BankAccount(111, "Mr. X", 20, "100gm");
class StudentAccount extends BankAccount {
    openAccont() {
        console.log("I am Opening Account");
    }
}
const studentAccount = new StudentAccount(222, "Mr. Y", 100, "20gm");
studentAccount.setBalance(100); // By Using Function Calling
console.log(studentAccount.getBalance()); // By Using Function Calling
// Get and Set
class BankAccount2 {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    // Setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
    // Getter
    get showBalance() {
        return this._balance;
    }
}
const personAccount2 = new BankAccount2(22, "Mr. Z", 150);
personAccount2.deposit = 850; // By Calling As Like Property
const myBalance = personAccount2.showBalance; // By Calling As Like Property
console.log(myBalance);
// Static
class Couter {
    increment() {
        Couter.count = Couter.count + 1;
    }
    decrement() {
        Couter.count = Couter.count - 1;
    }
}
Couter.count = 0;
const instance11 = new Couter();
const instance22 = new Couter();
instance11.increment();
instance22.increment();
console.log(Couter.count);
console.log(Couter.count);
// Polymorphism
class Person101 {
    getSleep() {
        console.log("I am sleeping 8 hour long");
    }
}
class Student2 extends Person101 {
    getSleep() {
        console.log("I am sleeping 7 hour long");
    }
}
class Employee2 extends Person101 {
    getSleep() {
        console.log("I am sleeping 6 hour long");
    }
}
const getNumberOfSleepRecord = (param) => {
    return param.getSleep();
};
const man1 = new Person101();
const man2 = new Student2();
const man3 = new Employee2();
getNumberOfSleepRecord(man1);
getNumberOfSleepRecord(man2);
getNumberOfSleepRecord(man3);
// Real Implementation
class Car1 {
    startEngine() {
        console.log("I am starting engine");
    }
    stopEngine() {
        console.log("I am stopping engine");
    }
    move() {
        console.log("I am moving");
    }
    test() {
        console.log("I am testing");
    }
}
const toyotaCar = new Car1();
toyotaCar.move();
// Abstruct Class
class Vehical2 {
    test() {
        console.log("I am testing");
    }
}
class Car2 extends Vehical2 {
    startEngine() {
        console.log("I am starting engine");
    }
    stopEngine() {
        console.log("I am stopping engine");
    }
    move() {
        console.log("I am moving");
    }
}
const hundaCar = new Car2();
hundaCar.stopEngine();
// Encapsulation
class BankAccount3 {
    constructor(accountNumber, _balance, accountName) {
        this.accountNumber = accountNumber;
        this._balance = _balance;
        this.accountName = accountName;
    }
    get getBalance() {
        return this._balance;
    }
    set getBalance(ammount) {
        this._balance = this._balance + ammount;
    }
}
class BankAccount4 extends BankAccount3 {
}
const checkAccount2 = new BankAccount4(232323, 2000, "World");
checkAccount2.getBalance;
const checkAccount = new BankAccount3(101110101, 1000, "Hello");
checkAccount.accountNumber;
