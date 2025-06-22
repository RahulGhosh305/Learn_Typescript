/**
 **  Class
 **
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
const dog = new Animan("German Shepad", "Dog", "Ghew Ghew"); // Create new Dog Instance
console.log(dog.makeSound());

// Alternative Above
class AnimalAlternative {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} is call by ${this.sound}`);
  }
}

const cat = new AnimalAlternative("Persian", "Cat", "Maew Maew"); // Create new Cat Instance
console.log(cat.makeSound());
