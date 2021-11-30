'use strict';

// destructoring
const info = {
    name: 'nam',
    favoriteNumber: [1, 2, 3, 4, 5, 6]
};

const arr = [4, 5, 6];
const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);

let [x, , , y] = info.favoriteNumber;
console.log(x, y);
let temp = x;
x = y;
y = temp;
console.log(x, y);

[y, x] = [x, y];
console.log('switching variables', x, y);

const arr2 = [1, 2, [2, 3]];
const [d, e, [f, g]] = arr2;
console.log(d, e, f, g);

const arr3 = [1, 2];
const [i, o, p] = arr3;
console.log(i, o, p);

// excercise 2
let name = 'nam';
let age = 24;
const info2 = {
    name: 'phuongnam',
    age: 25,
    favoriteNumber: [1, 2, 3],
    body: {
        height: '1m7',
        weight: '70kg'
    },
    calcHeight: function ({ height1, height2 }) {
        console.log('height1, height2', height1, height2);
    }
}

info2.calcHeight({ height1: 170, height2: 171 });
// const { name } = info2;
// console.log(name);
const { age: ageNam } = info2;
console.log(ageNam);
const { name: nameNam = '' } = info2;
console.log(typeof nameNam);
const { adress } = info2;
console.log(adress);

({ name, age } = info2);
console.log(name, age);

const { body: { height: h, weight: w } } = info2;
console.log(h, w);

// excercise 1
const arr4 = [1, 2, 3];
const arr5 = [0, ...arr4];
console.log(arr5);

const arr6 = [...arr5];
console.log('copy array', arr6);

const arr7 = [...arr5, ...arr6];
console.log(arr7);

const firstName = 'phuong nam';
console.log(...firstName);

const info6 = {
    name: 'nam',
    caclMoney: function (data1, data2, data3) {
        return data1 + data2 + data3;
    }
}
const totalMoney = [100, 200, 300];
const total = info6.caclMoney(...totalMoney);
console.log(total);
info6.number = [...arr7];
console.log(info6);

// rest pattern 
const arr8 = [1, 2, 3, 4, 5, 6];
const [number1, number2, ...other] = arr8;
console.log(number1, number2, other);

const [number3, number4, ...other2] = [...arr6, ...arr7];
console.log(number3, number4, other2);

// excercise
const numberMoney = 10;
const checkNumber = numberMoney > 9 ? numberMoney : 'number money < 10';
console.log(checkNumber);

console.log(0 || true);
console.log('nam' && 10);

// excercise 2
const checkNumber2 = numberMoney || 20;
console.log(checkNumber2);

const checkNumber4 = 20;
checkNumber4 ||= 'nam';
console.log(checkNumber4);

// excercise 1 
const arrayNumber = [1, 2, 3];

const arrayNumber2 = [...arrayNumber, 4, 5, 6];
console.log(arrayNumber2);

for (let item of arrayNumber2) {
    console.log(item);
}

for (let item2 of arrayNumber2.entries()) {
    console.log(item2);
}

// excercise 
const objectA = {
    name: 'nam'
};

const objectB = {
    name: 'Hang',
    objectA
};
console.log(objectB);

// excercise
let nameC;
const objectC = {
    name: nameC,
    adress: 'HCM'
};
console.log(objectC?.name);

// excercise
for (let keys of Object.keys(objectC)) {
    console.log(keys);
}

for (let values of Object.values(objectC)) {
    console.log(values);
}

// excercise
const arrNum3 = new Set([1, 1, 1, 2]);
console.log(arrNum3);

console.log(arrNum3.has(1));

arrNum3.add(123);
console.log(arrNum3);

for (let data of arrNum3) {
    console.log(data);
}

// excercise
const arrNum5 = new Map();
arrNum5.set(1, 'nam');
arrNum5.set(2, 'linh');

console.log(arrNum5);
console.log(arrNum5.get(1));


// excercise
const adressPeople = 'toky hcm';
console.log(adressPeople.slice(3, 4));

console.log('toky hcm'.slice(2, 3));

console.log(adressPeople.slice(0, adressPeople.indexOf(' ')));

console.log(adressPeople.slice(-1));

// excercise
function countNumber(number = 124) {
    // const number2 = number || 124;
    const numberSchool = {
        number
    }
    return numberSchool;
};

const count = countNumber();
console.log(count);

// excercise
const numberA2 = 1;
const numberA4 = {
    name: 'nam'
}
function countNumber2(number3, number5) {
    console.log(number3);
    console.log(number5.name);
}
countNumber2(numberA2, numberA4);

// excercise
function oneWord(str) {
    const word = str.replace(/ /g, '').toLowerCase();
    return word;
}

const upperFirst = (str) => {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
};

const transFormer = (str, fn) => {
    console.log(str);
    console.log(fn(str));
    console.log(fn.name);
}

transFormer('hello world', upperFirst)

// function 
function nameNam2(name) {
    return function ageNam2(age) {
        console.log(`hello my name is ${name} and i am ${age} years old`);
    }
}

const printInfo = nameNam2('phuong nam');
printInfo('25');

nameNam2('nam')(25);

// excercise
const printInfo2 = {
    address: '',
    info: function (name, age) {
        console.log(`${name} and ${age}`);
    },

}

// printInfo2.info('nam', 24);
const print2 = printInfo2.info;
print2.call(printInfo2, 'nam', 24);

const arrInfo = ['nam', 26];
print2.apply(printInfo2, arrInfo);

const print3 = print2.bind(printInfo2);
print3('HCM');
console.log(print3);


// excercise
function closure1() {
    let count = 0;
    return function closure2() {
        count++;
        console.log(count);
    }
}

const closure3 = closure1();
closure3();

// excercise
const arrNumber6 = [1, 2, 3];
console.log(arrNumber6[0]);
console.log(arrNumber6.at(0));

console.log(arrNumber6[arrNumber6.length - 1]);
console.log(arrNumber6.at(arrNumber6.length - 1));

// excercise
const arrNumber7 = [1, 2, 3, 4, 5, 6];

arrNumber7.forEach(function (number, index) {
    console.log(`${index}: ${number}`);
})

// excercise
let arrNumber8 = [4, 5, 6];
let arrNumber9 = [];
const sum = arrNumber8.map(function (data) {
    arrNumber9.push(data * 2);
    return arrNumber9;
});

console.log(sum);

const sum2 = arrNumber8.map(data => {
    return data * 3;
});

console.log(sum2);

// excercise
const printInfo3 = 'le nguyen phuong nam';

const printInfo4 = printInfo3.toLowerCase().split(' ').map(data => data[0]).join('');

console.log(printInfo4);

// excercise
const arrNumber10 = [1, -1, 2, -3];

const arrNumberInt = arrNumber10.filter(function (data) {
    return data > 0;
});

console.log(arrNumberInt);

const arrNumberInt2 = arrNumber10.filter(data => data < 0);

console.log(arrNumberInt2);

const arrNew2 = [];
for (let data of arrNumber10) {
    if (data > 0) {
        arrNew2.push(data);
    }
}

console.log(arrNew2);

// excercise
const arrNumber11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrSum2 = arrNumber11.reduce(function (acc, cur,) {
    return acc + cur;
});

console.log(arrSum2);

// excercise
const arrNumber12 = [1, -2, 3 - 4, -2, 2, -3];
const chain = arrNumber12.filter(data => data > 0).map(data => data * 2).reduce((acc, cur) => acc + cur);
console.log(chain);

// excercise
const arrNumber13 = [1, 2, 3];
const findNumber = arrNumber13.find(function (data) {
    return data > 2;
});

console.log(findNumber);

// excercise
const arrNumber14 = [4, 5, 6];
const findNumber2 = arrNumber14.findIndex(num => num == 4);
console.log(findNumber2);

const findNumber3 = arrNumber14.slice(findNumber2, 2);
console.log(findNumber3);

// excercise
const arrNumber15 = [1, -2, 2, -3];

const someArr = arrNumber15.some(num => num > 0);
console.log(someArr);

const everyArr = arrNumber15.every(num => num > 0);
console.log(everyArr);

// excercise
const arrNumber16 = [1, -2, 3, [4, -5]];

const flatNum = arrNumber16.flat();
console.log(flatNum);

const arrNumber17 = [1, 2, [3, [-4, 5]]];

const flatNum2 = arrNumber17.flat(2);
console.log(flatNum2);

// excercise
const arrString2 = ['a', 'z', 'b'];

const arrSort2 = arrString2.sort();
console.log(arrSort2);

const arrNumber18 = [1, 2222, 333, 2342, 2932];

const arrSort3 = arrNumber18.sort();
console.log(arrSort3);

const arrSort4 = arrNumber18.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});

console.log(arrSort4);

const arrSort5 = arrNumber18.sort((a, b) => a - b);
console.log(arrSort5);
const arrSort6 = arrNumber18.sort((a, b) => b - a);
console.log(arrSort6);

// excercise
console.log(Number('10'));

console.log(+('20'));

console.log(Number.parseInt('10a'));
console.log(Number.parseFloat('20.2b'));

// excercise
console.log(Math.max(1, 2, 3, 4, 5));

console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.random());

console.log(Math.trunc(Math.random()));

// excercise
console.log(9 % 2);

console.log(9 / 2);

// excercise
const nameTimeout = ['phuong', 'nam'];

const countNumber3 = setTimeout(function () {
    console.log(`hello world ${nameTimeout}`);
}, 3000, ...nameTimeout);

console.log(clearTimeout(countNumber3));

const countNumber4 = setInterval(function () {
    console.log(`interval`);
}, 3000);