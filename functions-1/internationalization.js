// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'
// greet('pt'); // 'Olá!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'

const greet = function (isoCode) {
   switch (isoCode) {
      case 'en':
         return 'hi';
      case 'fr':
         return 'Salut!';
      case 'pt':
         return 'Ola!';
      case 'de':
         return 'Hallo!';
      case 'sv':
         return 'Hej!';
      case 'af':
         return 'Haai!';
   }
};

console.log(greet('fr'));
