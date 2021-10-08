let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
const nestedPerson = Object.entries(person);
console.log(nestedPerson);

const nestedPerson2 = [];

for (let prop in person) {
  nestedPerson2.push([prop, person[prop]]);
}

console.log(nestedPerson2);
