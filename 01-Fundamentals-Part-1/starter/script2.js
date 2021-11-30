'use strict';
let js = 'js is fun';
console.log('js'); // hiện chuổi
console.log(js); // hiện value

let myFirstJob = 'fresher';
let myCurrentJob = 'freelancer';

console.log(myCurrentJob);

let country = 'vietnam';
let contient = '1000';
let population = '96000000';

console.log(country);
console.log(contient);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

/**
 * boolean
 * bolean variables
 * number
 * string
 */
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 100);
console.log(typeof 'js is fun');

// underfined
let age;
console.log(age);
console.log(typeof age);

let isIsLand = 'VietNam';
isIsLand = true;
let language = 'vietnamese';

console.log(isIsLand);
console.log(language);

// let 
// const
// var 
let number = 1;
number = 2;

const PI = 3.14;

var firstName = 'Nam';

// + - * / ** math operation
const now = 2030;

const ageNam = now - 2019;
const ageNhung = now - 2018;

console.log(ageNam);
console.log(ageNhung);
console.log(ageNam + ageNhung, ageNam * 2, ageNhung / 2, ageNam ** 2);

// = += assign operation
let x = 10;
x += 5;

console.log(x);

// compare operation > < >= <=
console.log(ageNam > ageNhung);
console.log(ageNam >= ageNhung);
console.log(ageNam < ageNhung);
console.log(ageNam >= ageNhung);

// excercise
let population2 = 96000000;
console.log(population2 / 2);

population2 += 1;
console.log(population2);

const finland = 600000;
console.log(population2 > finland);

const averagePopulation2 = 33000000;
console.log(population2 > averagePopulation2);

const description = 'portugar is an euro';

// excercises 2 
const marks_weight = 78;
const marks_height = 1.69;
const john_weight = 92;
const john_height = 1.95;

let BMI_Marks;
let BMI_John;

BMI_Marks = marks_weight / 1.69 ** 2;
BMI_John = john_weight / 1.95 ** 2;

console.log(BMI_Marks);
console.log(BMI_John);

const markHigherBMI = BMI_Marks > BMI_John;
console.log(markHigherBMI === true ? 'Marks BMI is higher' : 'John BMI is higher');

// name, job, birthday, now
const name2 = 'nam';
const job = 'fresher';
const birthday = 1996;
const year = 2021;

const nam = "I'm " + name2 + ' and my job is a' + job + ' and my age is ' + (year - birthday);
console.log(nam);

// literal string
const printPop = `I'm living in ${country} and I love this ${country}. ${country} has ${population} milion peoples`;

console.log(printPop);

// >=18 years study university, <18 how many years do you go to school?
const years = 18;
const oldYear = years >= 18;

if (oldYear) {
    console.log('yes, go to university');
} else {
    const yearLeft = 18 - years;
    console.log(`no, you have ${yearLeft}`);
}

// if else excercises
const countryPopulation = 33000000;
const populationVietNam = 96000000;

if (populationVietNam > countryPopulation) {
    console.log("Vietnam's population is above average");
} else {
    console.log("Vietnam's population is lower average");
}

// BMI if else
if (markHigherBMI) {
    console.log("Mark's BMI is higher John's BMI");
} else {
    console.log("John's BMI is higher Mark's BMI");
}

if (markHigherBMI) {
    console.log(`Mark's BMI (${BMI_Marks}) is higher John's BMI (${BMI_John})`);
} else {
    console.log("John's BMI is higher Mark's BMI");
}

// conercion 
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// falsy
const numberSchool = 0;
if (numberSchool) {
    console.log('truthy');
} else {
    console.log('falsy');
}

// excercises
// const numNeighbours = prompt('How many countries');
// if (numNeighbours === 1) {
//     console.log('only 1');
// } else if (numNeighbours > 1) {
//     console.log('large 1');
// } else {
//     console.log('no neighbour');
// }

// operation
const countrySara = true;
const populationSara = false;

if (countrySara && populationSara) {
    console.log('you should live in vietnam');
} else {
    console.log('vietnam does not meet your criteria');
}

// excercises
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoala = (88 + 91 + 110) / 3;

console.log(avgDolphins);
console.log(avgKoala);
if (avgDolphins > avgKoala && avgDolphins >= 100) {
    console.log('Dolphins win');
} else if (avgKoala > avgDolphins && avgKoala >= 100) {
    console.log('Koala win');
} else if (avgDolphins === avgKoala || avgDolphins >= 100) {
    console.log('both win');
} else {
    console.log('no win');
}

// repeat excercises
const avgNam = (10 + 20 + 30) / 3;
const avgNhung = (5 + 10 + 20) / 3;

if (avgNam > avgNhung) {
    console.log('Nam is higher');
} else if (avgNhung > avgNam) {
    console.log('Nhung is higher');
} else {
    console.log('both is equal');
}

// switch
let day = 'tuesday';

switch (day) {
    case 'monday':
        console.log('today is monday');
        break;
    case 'tuesday':
        console.log('today is tuesday');
        break;
    default:
        console.log('another day');
}
// if else
if (day === 'monday') {
    console.log("yes, it's monday");
} else if (day === 'tuesday') {
    console.log("yes, it's tuesday");
} else {
    console.log("another day");
}

// excercises
const languageWorld = 'vietnamese';

switch (languageWorld) {
    case 'vietnamese':
        console.log('this is vietnam');
        break;
    case 'japanese':
        console.log('this is japan');
        break;
    default:
        console.log('this is not vietnam and japan');
}

// ternary operator
const agePeople = 25;

const showAge = agePeople >= 19 ? 'you are old' : 'you are young';
console.log(showAge);

// repeat excercises
const godenBall = 'CR7';

switch (godenBall) {
    case 'CR7':
        console.log('yes, siuuuuuuu');
        break;
    case 'messi':
        console.log("no, that's terrible");
        break;
}

// use strict 
// function myFunction() {
//     "use strict";
//     y = 3.14;   // This will cause an error
// }
// myFunction();

// 10p repeat function
const goal = 'yes';

switch (goal) {
    case 'yes':
        console.log("yes, it's goal");
        break;
    case 'no':
        console.log("no,it's not goal");
        break;
    default:
        console.log("var");
}

// 10p prepare new
// function declaration có thể được gọi bất cứ chỗ nào
// express chỉ chạy khi nó được gán vào biến
// express sẽ không được hosting như bình thường
// 
// 20p start
function logger() {
    console.log('hello, i am a logger');
}

logger();
function printInfo(nameNam, ageNam) {
    console.log(nameNam, ageNam);
    const result = `hello, my name is ${nameNam}, and ${ageNam} years old`;
    return result;
}

const info = printInfo('nam', 25);
console.log(info);

function describeCountry(country, population, capitalCity) {
    console.log(country, population, capitalCity);
    const result = `${country} has ${population} milion people and its capital is ${capitalCity}`;
    return result;
}

const countryFinland = describeCountry('Finland', 600000, 'Helsikin');
console.log(countryFinland);

function percentageOfVietnam(population) {
    return `Vietnam has ${population}`;
}

const perVietnam = percentageOfVietnam(96000000);
console.log(perVietnam);
// 5p search

// arrow function
const calcAge = birthYear => 2021 - birthYear;

console.log(calcAge(1996));

// excercises
const countryInfo2 = (country, population) => {
    return `${country} has ${population} milion`;
}

const countryVietnam = countryInfo2('VietNam', 96000000);
console.log(countryVietnam);

// repeat

// excercises
