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

const extractLanguage = locale => {
   return locale.split('_')[0];
};

function extractRegion(locale) {
   return locale.split('.')[0].split('_')[1];
}

const localGreet = locale => {
   const langCode = extractLanguage(locale);
   const country = extractRegion(locale);

   if (langCode === 'en') {
      switch (country) {
         case 'US':
            return 'Hey!';
         case 'GB':
            return 'Hello!';
         case 'AU':
            return 'Howdy!';
         default:
            return 'Hi!';
      }
   } else {
      return greet(langCode);
   }
};

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));

console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));
