function extractRegion(locale) {
   return locale.slice(locale.indexOf('_') + 1, locale.indexOf('.'));
}

function extractRegion2(locale) {
   return locale.split('.')[0].split('_')[1];
}

console.log(extractRegion2('en_US.UTF-8'));
console.log(extractRegion('ko_KR.UTF-16'));
