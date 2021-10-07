const isBlank = str => {
  return str.trim().length === 0;
};

console.log(isBlank('mars'));
console.log(isBlank(' '));
console.log(isBlank(''));
