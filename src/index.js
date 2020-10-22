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

    let morse=[]
    let arrayChar=[]
    let char=[]
    let result=[]
    let str=''
    for (let i = 0; i < expr.length; i+=10) {
        arrayChar.push(expr.slice(i, i+10)
        // .replace( / \*********** /g,' ')

        .replace(/10/g,'.')
        .replace(/00/g,'')
        .replace(/11/g,'-')
        )
                }
             arrayChar.forEach((m)=>(result.push(MORSE_TABLE[m]?MORSE_TABLE[m]:' ')))
              return result.join('')

        }
module.exports = {
    decode
}