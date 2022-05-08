// import { KEYBOARD } from "./keyboard_obj";

const KEYBOARD = [
  [
    {
      en: '`',
      ru: 'ё',
      func: false,
      onSiftEn: '~',
      onSiftRu: 'Ё',
      keyName: 'yo',
    },
    {
      en: '1',
      ru: '1',
      func: false,
      onSiftEn: '!',
      onSiftRu: '!',
      keyName: 'one',
    },
    {
      en: '2',
      ru: '2',
      func: false,
      onSiftEn: '@',
      onSiftRu: '"',
      keyName: 'two',
    },
    {
      en: '3',
      ru: '3',
      func: false,
      onSiftEn: '#',
      onSiftRu: '№',
      keyName: 'three',
    },
    {
      en: '4',
      ru: '4',
      func: false,
      onSiftEn: '$',
      onSiftRu: ';',
      keyName: 'four',
    },
    {
      en: '5',
      ru: '5',
      func: false,
      onSiftEn: '%',
      onSiftRu: '%',
      keyName: 'five',
    },
    {
      en: '6',
      ru: '6',
      func: false,
      onSiftEn: '^',
      onSiftRu: ':',
      keyName: 'six',
    },
    {
      en: '7',
      ru: '7',
      func: false,
      onSiftEn: '&',
      onSiftRu: '?',
      keyName: 'seven',
    },
    {
      en: '8',
      ru: '8',
      func: false,
      onSiftEn: '*',
      onSiftRu: '*',
      keyName: 'eight',
    },
    {
      en: '9',
      ru: '9',
      func: false,
      onSiftEn: '(',
      onSiftRu: '(',
      keyName: 'nine',
    },
    {
      en: '0',
      ru: '0',
      func: false,
      onSiftEn: ')',
      onSiftRu: ')',
      keyName: 'zero',
    },
    {
      en: '-',
      ru: '-',
      func: false,
      onSiftEn: '_',
      onSiftRu: '_',
      keyName: 'hyphen',
    },
    {
      en: '=',
      ru: '=',
      func: false,
      onSiftEn: '+',
      onSiftRu: '+',
      keyName: 'equal',
    },
    {
      func: true,
      keyName: 'backspase',
    },
  ],
  [
    {
      func: false,
      keyName: 'Tab',
    },
    {
      en: 'q',
      ru: 'й',
      func: false,
      onSiftEn: 'Q',
      onSiftRu: 'Й',
      keyName: 'q',
    },
    {
      en: 'w',
      ru: 'ц',
      func: false,
      onSiftEn: 'Q',
      onSiftRu: 'Ц',
      keyName: 'w',
    },
    {
      en: 'e',
      ru: 'у',
      func: false,
      onSiftEn: 'E',
      onSiftRu: 'У',
      keyName: 'e',
    },
    {
      en: 'r',
      ru: 'к',
      func: false,
      onSiftEn: 'R',
      onSiftRu: 'К',
      keyName: 'r',
    },
    {
      en: 't',
      ru: 'е',
      func: false,
      onSiftEn: 't',
      onSiftRu: 'Е',
      keyName: 't',
    },
    {
      en: 'y',
      ru: 'н',
      func: false,
      onSiftEn: 'Y',
      onSiftRu: 'Н',
      keyName: 'y',
    },
    {
      en: 'u',
      ru: 'г',
      func: false,
      onSiftEn: 'U',
      onSiftRu: 'Г',
      keyName: 'u',
    },
    {
      en: 'i',
      ru: 'ш',
      func: false,
      onSiftEn: 'I',
      onSiftRu: 'Ш',
      keyName: 'i',
    },
    {
      en: 'o',
      ru: 'щ',
      func: false,
      onSiftEn: 'O',
      onSiftRu: 'Щ',
      keyName: 'o',
    },
    {
      en: 'p',
      ru: 'з',
      func: false,
      onSiftEn: 'P',
      onSiftRu: 'З',
      keyName: 'p',
    },
    {
      en: '[',
      ru: 'х',
      func: false,
      onSiftEn: '{',
      onSiftRu: 'Х',
      keyName: 'square-bracket-left',
    },
    {
      en: ']',
      ru: 'ъ',
      func: false,
      onSiftEn: '}',
      onSiftRu: 'Ъ',
      keyName: 'square-bracket-right',
    },
    {
      en: '\\',
      ru: '\\',
      func: false,
      onSiftEn: '|',
      onSiftRu: '/',
      keyName: 'reversed-slash',
    },

  ],
  [
    {
      func: true,
      keyName: 'CapsLock',
    },
    {
      en: 'a',
      ru: 'ф',
      func: false,
      onSiftEn: 'A',
      onSiftRu: 'Ф',
      keyName: 'a',
    },
    {
      en: 's',
      ru: 'ы',
      func: false,
      onSiftEn: 'S',
      onSiftRu: 'Ы',
      keyName: 's',
    },
    {
      en: 'd',
      ru: 'в',
      func: false,
      onSiftEn: 'D',
      onSiftRu: 'В',
      keyName: 'd',
    },
    {
      en: 'f',
      ru: 'а',
      func: false,
      onSiftEn: 'F',
      onSiftRu: 'А',
      keyName: 'а',
    },
    {
      en: 'g',
      ru: 'п',
      func: false,
      onSiftEn: 'G',
      onSiftRu: 'П',
      keyName: 'g',
    },
    {
      en: 'h',
      ru: 'р',
      func: false,
      onSiftEn: 'H',
      onSiftRu: 'Р',
      keyName: 'h',
    },
    {
      en: 'j',
      ru: 'о',
      func: false,
      onSiftEn: 'J',
      onSiftRu: 'О',
      keyName: 'j',
    },
    {
      en: 'k',
      ru: 'л',
      func: false,
      onSiftEn: 'K',
      onSiftRu: 'Л',
      keyName: 'k',
    },
    {
      en: 'l',
      ru: 'д',
      func: false,
      onSiftEn: 'L',
      onSiftRu: 'Д',
      keyName: 'l',
    },
    {
      en: ';',
      ru: 'ж',
      func: false,
      onSiftEn: ':',
      onSiftRu: 'Ж',
      keyName: 'semicolon',
    },
    {
      en: '\'',
      ru: 'э',
      func: false,
      onSiftEn: '"',
      onSiftRu: 'Э',
      keyName: 'quotes',
    },
    {
      func: true,
      keyName: 'Enter',
    },
  ],
  [
    {
      func: true,
      keyName: 'Left-Shift',
    },
    {
      en: 'z',
      ru: 'я',
      func: false,
      onSiftEn: 'Z',
      onSiftRu: 'Я',
      keyName: 'z',
    },
    {
      en: 'x',
      ru: 'ч',
      func: false,
      onSiftEn: 'X',
      onSiftRu: 'Ч',
      keyName: 'x',
    },
    {
      en: 'c',
      ru: 'с',
      func: false,
      onSiftEn: 'C',
      onSiftRu: 'С',
      keyName: 'c',
    },
    {
      en: 'v',
      ru: '',
      func: false,
      onSiftEn: 'V',
      onSiftRu: '',
      keyName: 'v',
    },
    {
      en: 'b',
      ru: '',
      func: false,
      onSiftEn: 'B',
      onSiftRu: '',
      keyName: 'b',
    },
    {
      en: 'n',
      ru: '',
      func: false,
      onSiftEn: 'N',
      onSiftRu: '',
      keyName: 'n',
    },
    {
      en: 'm',
      ru: '',
      func: false,
      onSiftEn: 'M',
      onSiftRu: '',
      keyName: 'm',
    },
    {
      en: ',',
      ru: '',
      func: false,
      onSiftEn: '<',
      onSiftRu: '',
      keyName: 'comma',
    },
    {
      en: '.',
      ru: '',
      func: false,
      onSiftEn: '>',
      onSiftRu: '',
      keyName: 'dot',
    },
    {
      en: '/',
      ru: '',
      func: false,
      onSiftEn: '?',
      onSiftRu: '',
      keyName: 'slash',
    },
    {
      func: true,
      keyName: 'Arrow-Up',
    },
    {
      func: true,
      keyName: 'Right-Shift',
    },
  ],
  [
    {
      func: true,
      keyName: 'Left-Ctrl',
    },
    {
      func: true,
      keyName: 'Win',
    },
    {
      func: true,
      keyName: 'Left-Alt',
    },
    {
      func: true,
      keyName: 'Space',
    },
    {
      func: true,
      keyName: 'Right-Alt',
    },
    {
      func: true,
      keyName: 'Arrow-Left',
    },
    {
      func: true,
      keyName: 'Arrow-Bottom',
    },
    {
      func: true,
      keyName: 'Arrow-Right',
    },
    {
      func: true,
      keyName: 'Right-Ctrl',
    },
  ],

];




function createPageContent() {
  // создаем область для ввода текста
  let textarea = document.createElement('textarea');
  textarea.className = 'text';
  
  document.body.append(textarea);

  // создаем клавиатуру
  let keyboard = document.createElement('div');
  let keyboardContent = function () {
    // create separate lines of keybord from KEYBOARD object (from top to bottom)
    KEYBOARD.forEach((keyboardLine) => {
      let line = document.createElement('div');
      let lineContent = function () {
        keyboardLine.forEach(key => {
          let keyElement = document.createElement('div');
          keyElement.id = key.keyName;
          keyElement.className = 'key';
          keyElement.innerHTML = key.keyName;
          // console.log('KEY:');
          // console.log(keyElement);
          line.append(keyElement);
        })
      };
      lineContent();
      line.className = 'keyboard-line';
      // console.log('LINE:');
      // console.log(line);
      keyboard.append(line);
    });
  };
  keyboardContent();
  keyboard.id = 'keyboard';
  // keyboard.innerHTML = keyboardContent();
  document.body.append(keyboard);
  
};

