var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
};

var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function decodeAlphabet(alphabet) {
  var char;
  var code;
  var alphabetDecode = {};

  for (char in alphabet) {
    code = alphabet[char];
    alphabetDecode[code] = char;
  }

  return alphabetDecode;
}

function morseDecode(input) {
  var alphabetDecode = decodeAlphabet(alphabet);
  var morse = input.split(' ');
  var decodedMsg = [];
  var i;
  var code;

  for (i = 0; i < morse.length; i++) {
    code = morse[i];

    if (code) {
      decodedMsg.push(alphabetDecode[code]);
    } else {
      decodedMsg.push(' ');
    }
  }

  return decodedMsg.join('');
}

function caesarEncode(input, shift) {
  var result = [];
  var i;
  var index;
  var newIndex;

  input = input.toUpperCase();

  for (i = 0; i < input.length; i++) {
    index = alphabets.indexOf(input.charAt(i));

    if (index === -1) {
      result.push(input.charAt(i));
      continue;
    }

    newIndex = (index + parseInt(shift) + input.length) % input.length;
    result.push(alphabets[newIndex]);
  }
  return result.join('');
}

// uncomment the relevant line
// run node script.js ARG_ONE ARG_TWO to test your functions
// console.log(morseDecode(process.argv[2]));
console.log(caesarEncode(process.argv[2], process.argv[3]));
