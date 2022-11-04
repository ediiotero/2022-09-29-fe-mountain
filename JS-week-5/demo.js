//https://www.youtube.com/watch?v=khuDeNwXkfI
//https://www.youtube.com/watch?v=ZYa_NiOUTQo
//https://www.youtube.com/watch?v=jM0WcyQWMSM


class Person {
    constructor(name, age) {
        this.name = name;
        this. age = age;
    }

    static sleep(number) {
        console.log(`Slept ${number} of hours`)
    }

    welcome() {
        console.log(`Hello my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, age, gpa) {
        super(name, age)
        this.gpa = gpa
    }

    hello() {
        super.welcome()
        console.log(`My gpa is ${this.gpa}`)
    }
}

class Teacher extends Person {
    constructor(name, age, classSize) {
        super(name, age)
        this.classSize = classSize
    }

    hello() {
        console.log(`My class size is ${this.classSize}`)
    }
}


const person1 = new Person("Bruce", 33)
const student1 = new Student("Toby", 22, "3.0")
const teacher1 = new Teacher("Stephanie", 44, 11)
// console.log(person1)
// console.log(student1)
// console.log(teacher1)
// Person.sleep(4)
person1.welcome()
student1.hello()
teacher1.hello()

