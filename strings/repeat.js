const repeat = (numRepeats, str) => {
  let result = '';

  for (let i = 1; i <= numRepeats; i++) {
    result += str;
  }

  return result;
};

console.log(repeat(3, 'ha'));
