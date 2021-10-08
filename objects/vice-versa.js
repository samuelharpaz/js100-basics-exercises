let nestedArray = [
  ['title', 'Duke'],
  ['name', 'Nukem'],
  ['age', 33]
];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// solution 1:Object.fromEntries
const obj = Object.fromEntries(nestedArray);
console.log(obj);

// solution 2: for of loop
const person = {};

for (let el of nestedArray) {
  const [prop, value] = el;
  person[prop] = value;
}

console.log(person);

// solution 3: for loop
const person2 = {};

for (let i = 0; i < nestedArray.length; i++) {
  const prop = nestedArray[i][0];
  const value = nestedArray[i][1];

  person2[prop] = value;
}

console.log(person2);
