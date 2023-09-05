/**
 * 
 * Create a class called Dog. The class dog should have three properties:
 *  TODO           1: Breed
 *  TODO           2: Name
 *  TODO           3: Age
 *  TODO           4: Color
 * 
 * Dog should also have a method called bark. When used, it should print out
 * "Woof!".
 * TODO            1: Bark
 * 
 */
class Dog {

    constructor(breed, name, age, color) {
        this.breed = breed;
        this.name = name;
        this.age = age;
        this.color = color;
    }

    bark() {
        console.log("Woof!");
    }

}