"use strict";
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
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is call by ${this.sound}`);
    }
}
const dog = new Animan("German Shepad", "Dog", "Ghew Ghew");
console.log(dog.makeSound());
// Alternative Above
class AnimalAlternative {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is call by ${this.sound}`);
    }
}
const cat = new AnimalAlternative("Persian", "Cat", "Maew Maew");
console.log(cat.makeSound());
