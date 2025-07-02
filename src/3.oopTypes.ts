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
class Animal1 {
  public name: string;
  public species: string;
  public sound: string;

  public constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  public makeSound() {
    console.log(`${this.name} is call by ${this.sound}`);
  }
}

// Alternative above class
class AnimalAlternative {
  // Parameter Properties
  public constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  public makeSound() {
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
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(numOfHours: number) {
    console.log(`${this.name} will sleep ${numOfHours}`);
  }
}
// Child Class
class StudentClass extends PersonClass {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

{
  const student1 = new StudentClass("Mr. X", 20, "Dhaka");
  student1.getSleep(10);
}
// Child Class
class Teacher extends PersonClass {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numOfClass: number) {
    console.log(`${this.name} will take ${numOfClass}`);
  }
}

{
  const teacher = new Teacher("Mr. X", 20, "Dhaka", "Professor");
  teacher.getSleep(8);
}

// Guard --> Typeof
const add2 = (
  number1: string | number,
  number2: string | number
): string | number => {
  // Typeof Guard
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  } else {
    return number1.toString() + number2.toString();
  }
};

// Guard --> In
type NormalUser = {
  name: string;
};

type AdvanceUser = {
  name: string;
  role: string;
};

function getUser(user: NormalUser | AdvanceUser): string {
  if ("role" in user) {
    return `${user.name} is ${user.role} User`;
  } else {
    return `${user.name} is Normal User`;
  }
}

const normalUser: NormalUser = {
  name: "Mr.X",
};

const advanceUser: AdvanceUser = {
  name: "Mr.Y",
  role: "admin",
};

console.log(getUser(normalUser)); // Mr.X is Normal User
console.log(getUser(advanceUser)); // Mr.X is admin User

// Guard --> instanceof
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am Making Bark");
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am Making Meaw");
  }
}

const getAnimal = (instance: Animal) => {
  if (instance instanceof Dog) {
    instance.makeBark();
  } else if (instance instanceof Cat) {
    instance.makeMeaw();
  } else {
    instance.makeSound();
  }
};

const dog1 = new Dog("Tommy", "dog");
const cat1 = new Cat("Catty", "cat");

getAnimal(dog1);
getAnimal(cat1);

// Access Modifier
class BankAccount {
  public readonly id: number;
  public name: string;
  private _balance: number; // This Property  access only this class
  protected gold: string; // This Property access any child class of Bankaccount

  constructor(id: number, name: string, balance: number, gold: string) {
    this.id = id;
    this.name = name;
    this._balance = balance;
    this.gold = gold;
  }

  public setBalance(amount: number) {
    this._balance = this._balance + amount;
  }

  public getBalance() {
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
  public readonly id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
  }

  // Setter
  public set deposit(amount: number) {
    this._balance = this._balance + amount;
  }

  // Getter
  public get showBalance() {
    return this._balance;
  }
}
const personAccount2 = new BankAccount2(22, "Mr. Z", 150);

personAccount2.deposit = 850; // By Calling As Like Property
const myBalance = personAccount2.showBalance; // By Calling As Like Property
console.log(myBalance);

// Static
class Couter {
  static count: number = 0;

  increment() {
    Couter.count = Couter.count + 1;
  }

  decrement() {
    Couter.count = Couter.count - 1;
  }
}
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
  getSleep(): void {
    console.log("I am sleeping 7 hour long");
  }
}

class Employee2 extends Person101 {
  getSleep(): void {
    console.log("I am sleeping 6 hour long");
  }
}

const getNumberOfSleepRecord = (param: Person101): void => {
  return param.getSleep();
};

const man1 = new Person101();
const man2 = new Student2();
const man3 = new Employee2();
getNumberOfSleepRecord(man1);
getNumberOfSleepRecord(man2);
getNumberOfSleepRecord(man3);

// Abstruction
// 2 Ways -> Interface
//        -> Abstruct class

// Idea
interface Vehical1 {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

// Real Implementation
class Car1 implements Vehical1 {
  startEngine(): void {
    console.log("I am starting engine");
  }

  stopEngine(): void {
    console.log("I am stopping engine");
  }

  move(): void {
    console.log("I am moving");
  }

  test(): void {
    console.log("I am testing");
  }
}

const toyotaCar = new Car1();
toyotaCar.move();

// Abstruct Class
abstract class Vehical2 {
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;

  test(): void {
    console.log("I am testing");
  }
}

class Car2 extends Vehical2 {
  startEngine(): void {
    console.log("I am starting engine");
  }

  stopEngine(): void {
    console.log("I am stopping engine");
  }

  move(): void {
    console.log("I am moving");
  }
}

const hundaCar = new Car2();
hundaCar.stopEngine();

// Encapsulation
class BankAccount3 {
  public accountNumber: number;
  private _balance: number;
  protected accountName: string;

  constructor(accountNumber: number, _balance: number, accountName: string) {
    this.accountNumber = accountNumber;
    this._balance = _balance;
    this.accountName = accountName;
  }

  get getBalance() {
    return this._balance;
  }

  set getBalance(ammount: number) {
    this._balance = this._balance + ammount;
  }
}

class BankAccount4 extends BankAccount3 {}
const checkAccount2 = new BankAccount4(232323, 2000, "World");
checkAccount2.getBalance;

const checkAccount = new BankAccount3(101110101, 1000, "Hello");
checkAccount.accountNumber;
