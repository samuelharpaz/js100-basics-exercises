const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1);
};

const str = 'launch school tech & talk';

const capitalizedStr = str
  .split(' ')
  .map(word => capitalize(word))
  .join(' ');

console.log(capitalizedStr);
