const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let remainingLetters = expr.length % 10;

    if (remainingLetters != 0) {
        for (let i = 0; i < 10 - remainingLetters; i++) {
            expr = '0' + expr;
        }
    }

   let res = '';

   for (let i = 0; i < expr.length - 9; i+=10 ) {
       let letter = expr.slice(i, i + 10);
       if (letter == '**********') {
        res += ' ';
        continue;
       }
           
        let code = '';
       for (let j = 0; j < letter.length - 1; j+=2) {
           if (letter.slice(j, j + 2) == '10')
                code += '.';
            if (letter.slice(j, j + 2) == '11')
                code += '-';
       }
       res += MORSE_TABLE[code];
   }

    return res;    
}

module.exports = {
    decode
}