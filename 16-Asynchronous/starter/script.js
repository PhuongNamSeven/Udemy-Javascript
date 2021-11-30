'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/portugal');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  console.log(data);

  const html = `
    <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span></p>
            <p class="country__row"><span>💰</span>$</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});

// excercise
setTimeout(() => {
  console.log('1 second');
  setTimeout(() => {
    console.log('2 second');
    setTimeout(() => {
      console.log('3 second');
      setTimeout(() => {
        console.log('4 second');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// excercse
const request2 = fetch('https://restcountries.com/v2/name/portugal');
console.log(request2);
console.log(typeof request2);

// excercise
const portugal = fetch('https://restcountries.com/v2/name/portugal')
  .then((response) => {
    // console.log(response);
    return response.json(); // new promise
  }).then((res) => {
    console.log(res);
  }).catch(() => {
    console.log('data is not response');
  });

// excercise
const portugar2 = fetch('https://restcountries.com/v2/name/portugal')
  .then((response) => {
    return response.json();
  }).then((res) => {
    const neighbour = res[0].borders[0];

    if (!neighbour) return;
    return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
  }).then((data) => {
    console.log(data);
  });

// excercise
setTimeout(() => {
  console.log('0 secibd');
});

Promise.resolve('this is a promise').then((data) => {
  console.log(data);
});

console.log('first');

// excercise
const country = new Promise(function (resolve, reject) {
  if (Math.random() > 0.5) {
    resolve('okie');
  } else {
    reject('no okie');
  }
}, 2000);

country.then((data) => console.log(data)).catch((err) => console.log(err));

// excercise
const category = async function (name) {
  const res = await fetch(`https://restcountries.com/v2/name/${name}`);
  const data = await res.json();
  console.log(data);
}

category('portuga');

// excercise
try {
  const a = 2;
  a = 3;
} catch (err) {
  console.log(err);
}