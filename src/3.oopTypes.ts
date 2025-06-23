/**
 **  Class
 **  OOP -> Inheritance
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
  public name: string;
  public species: string;
  public sound: string;

  constructor(name: string, species: string, sound: string) {
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
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

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
