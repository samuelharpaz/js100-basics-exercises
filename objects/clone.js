function clone(obj) {
  // TODO
  return Object.assign({}, obj);
  // const cloned = {};

  // for (let prop in obj) {
  //   cloned[prop] = obj[prop];
  // }

  // return cloned;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age); // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName); // false
console.log(clonedPerson.name.isStageName); // false
