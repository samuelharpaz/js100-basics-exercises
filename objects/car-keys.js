let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

const keys = Object.keys(vehicle);

console.log(keys);

const keys2 = [];

for (let prop in vehicle) {
  keys2.push(prop);
}

console.log(keys2);
