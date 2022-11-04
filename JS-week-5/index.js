// Using the object below
// 1 console log the customer name
// 2 console log using a template literal "shipping to 123 Main street Gotham NY 12345" 
// 3 add a property of "orderNum" and set it to 111222, change age to 44, console.log the object

const customer = {
    name: "Toby",
    age: 32,
    address: {
        street: "123 Main street",
        city: "Gotham",
        state: "NY",
        zip: "12345"
    }
}

// console.log(customer.name)
// console.log(`shipping to ${customer.address.street} ${customer.address.city} ${customer.address.state} ${customer.address.zip}`)
// customer.orderNum = 111222;
// customer.age = 44;
// console.log(customer)

// ==================================

// Write a class for a Hero 
// - the Hero should have a property of name, health, and power
// - the Hero should also have a method of attack 
//   - attack should return power plus 5

// Write another class that will inherit Hero and call it Villain
// - the villain should have all the same properties as Hero
// - add a method call magic
//   - magic should return power multiplied by 2

// Create a hero and a villain and log out all of their properties

// *Bonus - Write a loop that will have the hero(use attack) and villain(use magic) attack each other 
//          reducing the amount of health left and console.log each round until health is at 0.

class Hero {
    constructor(name, health, power) {
        this.name = name
        this.health = health
        this.power = power
    }

    attack() {
        return this.power + 5
    }
}

const hero1 = new Hero("Batman", 100, 5)

console.log(hero1)
console.log(hero1.attack())

class Villain extends Hero {
    constructor(name, health, power) {
        super(name, health, power)
    }

    magic() {
        return this.power * 2
    }
}

const villain1 = new Villain("Black Adam", 125, 8)

console.log(villain1)
console.log(villain1.magic())

while(hero1.health > 0 && villain1.health > 0) {
    const villainMagic = villain1.magic();
    const hero1Attack = hero1.attack();

    hero1.health = hero1.health - villainMagic;
    villain1.health = villain1.health - hero1Attack;

    console.log(`Current health of ${hero1.name} is ${hero1.health} and ${villain1.name} health is ${villain1.health}`)
}