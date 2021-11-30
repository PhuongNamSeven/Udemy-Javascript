console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const btnDel = document.querySelector('.btn-delete');

const message = document.createElement('div');
message.textContent = 'phuong nam';

header.prepend(message);

btnDel.addEventListener('click', function () {
    message.remove();
});

message.style.color = '#029134';
message.width = '100px';
console.log(message.width);

message.setAttribute('height', '200px');
console.log(message.height);

// excercise
const Person = function (name, age) {
    this.name = name;
    this.age = age
};

const jonas = new Person('jonas', 24);
console.log(jonas);

console.log(jonas instanceof Person);

// excercise
Person.prototype.calcAge = function () {
    console.log(this.age - 10);
};

jonas.calcAge();

console.log(jonas.__proto__);

console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

// excercise
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

const arrNumber1 = [1, 2, 3];
console.log(arrNumber1);
console.log(arrNumber1.__proto__);

console.log(arrNumber1.__proto__ === Array.prototype);

// excercise
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

const john = new Person1('john', 'qwe');
console.log(john);

const Person2 = class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(`${this.firstName}`);
    }
};

const sarah = new Person2('sarah', 'asd');
console.log(sarah);

sarah.greet();

console.log(sarah.__proto__ === Person2.prototype);

// excercise
const account = {
    name: 'nam',
    fullName: [1, 2],
    get info() {
        console.log(`${this.name}`)
    },

    set fullName2(lastName) {
        this.fullName.push(lastName);
    }
};

account.info;

account.fullName2 = 'phuong nam';
console.log(account.fullName);

// excercise
const account2 = {
    name: 'nam'
};

const john2 = Object.create(account2);
console.log(account2); // name
console.log(john2); // empty
john2.age = 24;
console.log(john2);

// excercise
const user1 = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

const user2 = function (firstName, lastName, age) {
    user1.call(this, firstName, lastName);
    this.age = age;
};

const john3 = new user2('john', 'asd', 23);
console.log(john3);

user2.prototype.introduce = function () {
    console.log(`hello, my name is ${this.firstName} and i am ${age} years old`);
};

// excercise
class Student1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Student2 extends Student1 {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }
    info() {
        console.log(`${this.firstName} is ${this.age} years old`);
    }
};

const Sarah2 = new Student2('Sarah', 'asd', 20);
console.log(Sarah2);

Sarah2.info();
