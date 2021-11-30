// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const Nam = {
    name: 'phuongnam',
    info: ['25', 'hcm']
};
const newNam = Nam;
newNam.name = 'namle'
console.log('before', Nam);
console.log('after', newNam);

// excercise 1
const namCopy = Object.assign({}, Nam);
namCopy.name = 'lenguyenphuongnam';
console.log('before', Nam);
console.log('after', namCopy);
// excercise 2
namCopy.info.push('toky');
console.log('before', Nam);
console.log('after', namCopy);

// excercise 3
var name2 = 'phuongnam'
const Nam2 = {
    name: 'nam',
    info: function () {
        const info2 = () => {
            console.log(this.name); // nam
        }
        info2();
    }
};
console.log(Nam2.info());

// exercise 1
const info = function () {
    console.log(this);
}
info(); // undefine

const info2 = () => {
    console.log(this);
}
info2();// window
// excercise 2
const namCopy2 = {
    info: function () {
        console.log(this); //object
    }
}
namCopy2.info();
const namCopy3 = {
    info: () => {
        console.log(this);// window
    }
}
namCopy3.info();

// excercise 1

// info4();
// info5();
// info6();
// function info4() {
//     console.log('function 4');
// }

// const info5 = function () {
//     console.log('function 5');
// }

// const info6 = () => {
//     console.log('function 6');
// }
// excercise 2
if (x == 10) {
    console.log('hosting');
    info7();
}
var x = 10;
function info7() {
    console.log('info7');
}
console.log(this);
var x = 10;
const y = 20;
let z = 30;

if (x === window.x) {
    console.log('x === window.x');
}

if (y === window.y) {
    console.log('y === window.y');
}

if (z === window.z) {
    console.log('z === window.z');
}

// excercise 1 
function info8(str) {
    const str2 = 'phuong nam';
    console.log(`${str}`);
    function info9() {
        console.log(str2);
        console.log(`${str}`);
        if (str2 === 'phuong nam') {
            console.log('yes, scope is true');
        }
    }
    info9();
}

const str = 'hello world';
info8(str);