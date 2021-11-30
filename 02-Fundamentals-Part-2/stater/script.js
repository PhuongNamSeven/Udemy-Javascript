// excercises
const avgDolphins = () => (44 + 23 + 71) / 3;

const avgDol = avgDolphins();
console.log(avgDol);

const avgKoala = () => (65 + 54 + 49) / 3;
const avgKoa = avgKoala();
console.log(avgKoa);

const checkWinner = (avgDol, avgKoa) => {
    console.log(avgDol, avgKoa);
    if (avgDol > avgKoa) {
        console.log('avgDol is higher');
    } else if (avgKoa > avgDol) {
        console.log('avgKoa is higher');
    } else {
        console.log('both is equal');
    }
}
const winner = checkWinner(avgDol, avgKoa);
console.log(winner);

// array
const friends = [1, 2, 3];
const school = ['iuh', 'buk'];

// array push
const nameSchool = ['iuh', 'euh'];
nameSchool.push('vuh');

console.log(nameSchool);

// excercises
const neighbours = ['Lao', 'Campuchia'];
neighbours.push('China');

console.log(neighbours);

neighbours.pop('china');
console.log(neighbours);

if (neighbours.includes('Đức')) {
    console.log("it is not asian'country");
}

console.log(neighbours.indexOf('Lao'));
if (neighbours.indexOf('Lao') === 0) {
    neighbours[0] = 'Indonesia';
}
console.log(neighbours);

// 
function calcTip(data) {
    let tip = 1;
    if (data > 50 && data < 300) {
        tip = data * 0.15;
    } else {
        tip = data * 0.2;
    }
    return tip;
}

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips);

const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(total);

// object
const myCountry = {
    country: 'vietnam',
    capital: 'hanoi',
    language: 'vietnamese',
    population: 97000000
}
console.log(myCountry.population);

myCountry.population = 99000000;
console.log(myCountry);
myCountry['population'] = 110000000;
console.log(myCountry);

// excercises 
const myCoutry2 = {
    country: 'vietnam',
    capital: 'hanoi',
    language: 'vietnamese',
    population: 97000000,
    neighbours: ['Lao', 'Campuchia'],
    describe: function () {
        const infoCountry = `${this.country} has ${this.population} milion people`;
        return infoCountry;
    },
    checkIsland: function (neighbour) {
        if (neighbours.includes(neighbour)) {
            this.isIsland = true;
        } else {
            this.isIsland = false;
        }
        return this.isIsland;
    }
}

const infoVN = myCoutry2.describe();
console.log(infoVN);

const checkIsland = myCoutry2.checkIsland('Campuchia');
console.log(checkIsland);
//for loop
for (let i = 1; i <= 50; i += 1) {
    console.log(`hello, number is ${i}`);
}

// excercises
let types = [];
for (let i = 0; i < myCoutry2.neighbours.length; i++) {
    console.log(`my neighbours is ${i}`);
    console.log(myCoutry2.neighbours[i]);
    console.log(typeof myCoutry2.neighbours[i]);
    console.log(typeof myCoutry2.neighbours);
    types[i] = typeof myCoutry2.neighbours[i];
}
console.log(types);

// excercises
let oldName = 'nam';
var array = oldName.split("");
console.log(array);

let newName = [];
for (let i = array.length - 1; i >= 0; i--) {
    newName.push(array[i]);
}
console.log(newName);