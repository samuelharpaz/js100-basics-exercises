let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

function myIncludes(str, char) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes(byteSequence, 'P'));
