let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function () {
    console.log('Harr Harr!');
  }
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// "It's true" never runs, because prop !== true. The property true is not actually a boolean, but gets saved as a string 'true', which is not === to the boolean true.
