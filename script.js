const KEYBOARD = [
  [
    {
      en: '`',
      ru: 'ё',
      keyName: '',
      func: false,
      onSiftEn: '~',
      onSiftRu: 'Ё',
      id: 'backquote',
    },
    {
      en: '1',
      ru: '1',
      keyName: '',
      func: false,
      onSiftEn: '!',
      onSiftRu: '!',
      id: 'digit1',
    },
    {
      en: '2',
      ru: '2',
      keyName: '',
      func: false,
      onSiftEn: '@',
      onSiftRu: '"',
      id: 'digit2',
    },
    {
      en: '3',
      ru: '3',
      keyName: '',
      func: false,
      onSiftEn: '#',
      onSiftRu: '№',
      id: 'digit3',
    },
    {
      en: '4',
      ru: '4',
      keyName: '',
      func: false,
      onSiftEn: '$',
      onSiftRu: ';',
      id: 'digit4',
    },
    {
      en: '5',
      ru: '5',
      keyName: '',
      func: false,
      onSiftEn: '%',
      onSiftRu: '%',
      id: 'digit5',
    },
    {
      en: '6',
      ru: '6',
      keyName: '',
      func: false,
      onSiftEn: '^',
      onSiftRu: ':',
      id: 'digit6',
    },
    {
      en: '7',
      ru: '7',
      keyName: '',
      func: false,
      onSiftEn: '&',
      onSiftRu: '?',
      id: 'digit7',
    },
    {
      en: '8',
      ru: '8',
      keyName: '',
      func: false,
      onSiftEn: '*',
      onSiftRu: '*',
      id: 'digit8',
    },
    {
      en: '9',
      ru: '9',
      keyName: '',
      func: false,
      onSiftEn: '(',
      onSiftRu: '(',
      id: 'digit9',
    },
    {
      en: '0',
      ru: '0',
      keyName: '',
      func: false,
      onSiftEn: ')',
      onSiftRu: ')',
      id: 'digit0',
    },
    {
      en: '-',
      ru: '-',
      keyName: '',
      func: false,
      onSiftEn: '_',
      onSiftRu: '_',
      id: 'minus',
    },
    {
      en: '=',
      ru: '=',
      keyName: '',
      func: false,
      onSiftEn: '+',
      onSiftRu: '+',
      id: 'equal',
    },
    {
      keyName: '&#8656;',
      func: true,
      id: 'backspace',
    },
  ],
  [
    {
      en: '    ',
      ru: '    ',
      onSiftEn: '    ',
      onSiftRu: '    ',
      special: true,
      keyName: '&#8594;|',
      func: true,
      id: 'tab',
    },
    {
      en: 'q',
      ru: 'й',
      keyName: '',
      func: false,
      onSiftEn: 'Q',
      onSiftRu: 'Й',
      id: 'q',
    },
    {
      en: 'w',
      ru: 'ц',
      keyName: '',
      func: false,
      onSiftEn: 'Q',
      onSiftRu: 'Ц',
      id: 'w',
    },
    {
      en: 'e',
      ru: 'у',
      keyName: '',
      func: false,
      onSiftEn: 'E',
      onSiftRu: 'У',
      id: 'e',
    },
    {
      en: 'r',
      ru: 'к',
      keyName: '',
      func: false,
      onSiftEn: 'R',
      onSiftRu: 'К',
      id: 'r',
    },
    {
      en: 't',
      ru: 'е',
      keyName: '',
      func: false,
      onSiftEn: 't',
      onSiftRu: 'Е',
      id: 't',
    },
    {
      en: 'y',
      ru: 'н',
      keyName: '',
      func: false,
      onSiftEn: 'Y',
      onSiftRu: 'Н',
      id: 'y',
    },
    {
      en: 'u',
      ru: 'г',
      keyName: '',
      func: false,
      onSiftEn: 'U',
      onSiftRu: 'Г',
      id: 'u',
    },
    {
      en: 'i',
      ru: 'ш',
      keyName: '',
      func: false,
      onSiftEn: 'I',
      onSiftRu: 'Ш',
      id: 'i',
    },
    {
      en: 'o',
      ru: 'щ',
      keyName: '',
      func: false,
      onSiftEn: 'O',
      onSiftRu: 'Щ',
      id: 'o',
    },
    {
      en: 'p',
      ru: 'з',
      keyName: '',
      func: false,
      onSiftEn: 'P',
      onSiftRu: 'З',
      id: 'p',
    },
    {
      en: '[',
      ru: 'х',
      keyName: '',
      func: false,
      onSiftEn: '{',
      onSiftRu: 'Х',
      id: 'bracketleft',
    },
    {
      en: ']',
      ru: 'ъ',
      keyName: '',
      func: false,
      onSiftEn: '}',
      onSiftRu: 'Ъ',
      id: 'bracketright',
    },
    {
      en: '\\',
      ru: '\\',
      keyName: '',
      func: false,
      onSiftEn: '|',
      onSiftRu: '/',
      id: 'backslash',
    },
    {
      keyName: 'Delete',
      func: true,
      id: 'delete',
    },

  ],
  [
    {
      keyName: 'CapsLock',
      func: true,
      id: 'capslock',
    },
    {
      en: 'a',
      ru: 'ф',
      keyName: '',
      func: false,
      onSiftEn: 'A',
      onSiftRu: 'Ф',
      id: 'a',
    },
    {
      en: 's',
      ru: 'ы',
      keyName: '',
      func: false,
      onSiftEn: 'S',
      onSiftRu: 'Ы',
      id: 's',
    },
    {
      en: 'd',
      ru: 'в',
      keyName: '',
      func: false,
      onSiftEn: 'D',
      onSiftRu: 'В',
      id: 'd',
    },
    {
      en: 'f',
      ru: 'а',
      keyName: '',
      func: false,
      onSiftEn: 'F',
      onSiftRu: 'А',
      id: 'f',
    },
    {
      en: 'g',
      ru: 'п',
      keyName: '',
      func: false,
      onSiftEn: 'G',
      onSiftRu: 'П',
      id: 'g',
    },
    {
      en: 'h',
      ru: 'р',
      keyName: '',
      func: false,
      onSiftEn: 'H',
      onSiftRu: 'Р',
      id: 'h',
    },
    {
      en: 'j',
      ru: 'о',
      keyName: '',
      func: false,
      onSiftEn: 'J',
      onSiftRu: 'О',
      id: 'j',
    },
    {
      en: 'k',
      ru: 'л',
      keyName: '',
      func: false,
      onSiftEn: 'K',
      onSiftRu: 'Л',
      id: 'k',
    },
    {
      en: 'l',
      ru: 'д',
      keyName: '',
      func: false,
      onSiftEn: 'L',
      onSiftRu: 'Д',
      id: 'l',
    },
    {
      en: ';',
      ru: 'ж',
      keyName: '',
      func: false,
      onSiftEn: ':',
      onSiftRu: 'Ж',
      id: 'semicolon',
    },
    {
      en: '\'',
      ru: 'э',
      keyName: '',
      func: false,
      onSiftEn: '"',
      onSiftRu: 'Э',
      id: 'quote',
    },
    {
      en: '\n',
      ru: '    ',
      onSiftEn: '    ',
      onSiftRu: '    ',
      special: true,
      keyName: '&#8617',
      func: true,
      id: 'enter',
    },
  ],
  [
    {
      keyName: '&#8679',
      func: true,
      id: 'shiftleft',
    },
    {
      en: 'z',
      ru: 'я',
      keyName: '',
      func: false,
      onSiftEn: 'Z',
      onSiftRu: 'Я',
      id: 'z',
    },
    {
      en: 'x',
      ru: 'ч',
      keyName: '',
      func: false,
      onSiftEn: 'X',
      onSiftRu: 'Ч',
      id: 'x',
    },
    {
      en: 'c',
      ru: 'с',
      keyName: '',
      func: false,
      onSiftEn: 'C',
      onSiftRu: 'С',
      id: 'c',
    },
    {
      en: 'v',
      ru: 'м',
      keyName: '',
      func: false,
      onSiftEn: 'V',
      onSiftRu: 'М',
      id: 'v',
    },
    {
      en: 'b',
      ru: 'и',
      keyName: '',
      func: false,
      onSiftEn: 'B',
      onSiftRu: 'И',
      id: 'b',
    },
    {
      en: 'n',
      ru: 'т',
      keyName: '',
      func: false,
      onSiftEn: 'N',
      onSiftRu: 'Т',
      id: 'n',
    },
    {
      en: 'm',
      ru: 'ь',
      keyName: '',
      func: false,
      onSiftEn: 'M',
      onSiftRu: 'Ь',
      id: 'm',
    },
    {
      en: ',',
      ru: 'б',
      keyName: '',
      func: false,
      onSiftEn: '<',
      onSiftRu: 'Б',
      id: 'comma',
    },
    {
      en: '.',
      ru: 'ю',
      keyName: '',
      func: false,
      onSiftEn: '>',
      onSiftRu: 'Ю',
      id: 'period',
    },
    {
      en: '/',
      ru: '.',
      keyName: '',
      func: false,
      onSiftEn: '?',
      onSiftRu: ',',
      id: 'slash',
    },
    {
      en: '↑',
      ru: '↑',
      onSiftEn: '↑',
      onSiftRu: '↑',
      special: true,
      keyName: '&#8593;',
      func: true,
      id: 'arrowup',
    },
    {
      keyName: '&#8679',
      func: true,
      id: 'shiftright',
    },
  ],
  [
    {
      keyName: 'Ctrl',
      func: true,
      id: 'controlleft',
    },
    {
      keyName: 'win',
      func: true,
      id: 'metaleft',
    },
    {
      keyName: 'Alt',
      func: true,
      id: 'altleft',
    },
    {
      en: ' ',
      ru: ' ',
      onSiftEn: ' ',
      onSiftRu: ' ',
      special: true,
      keyName: '',
      func: true,
      id: 'space',
    },
    {
      keyName: 'Alt',
      func: true,
      id: 'altright',
    },
    {
      en: '←',
      ru: '←',
      onSiftEn: '←',
      onSiftRu: '←;',
      special: true,
      keyName: '&#8592;',
      func: true,
      id: 'arrowleft',
    },
    {
      en: '↓',
      ru: '↓',
      onSiftEn: '↓',
      onSiftRu: '↓',
      special: true,
      keyName: '&#8595;',
      func: true,
      id: 'arrowdown',
    },
    {
      en: '→',
      ru: '→',
      onSiftEn: '→',
      onSiftRu: '→',
      special: true,
      keyName: '&#8594;',
      func: true,
      id: 'arrowright',
    },
    {
      keyName: 'Ctrl',
      func: true,
      id: 'controlright',
    },
  ],
];
const KEYS = KEYBOARD.flat();

let onEventKey;

// ^ сделать функцию заполнения innerHTML каждой клавиши отдельной от создания клавиатуры
// готово
// ^ стилизация
// ^ кнопка win
// ^ случай с клавиатурой mac

// ^ заполнение в зависимости от языка, оншифта и капса
// ^ анимация onhover
// ^ onclick
// обычная клавиша (символьная)
// tab, пробел, enter и стрелки
// shift
// backspase
// delete
// alt + shift
// caps

const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const information = document.createElement('p');
const SYSTEM = navigator.userAgentData.platform;
let onShiftFlag = false;

function createPageContent() {
  // создаем область для ввода текста
  textarea.className = 'text';
  textarea.autofocus = true;
  document.body.append(textarea);

  // создаем клавиатуру
  let keyboardContent = () => {
    // create separate lines of keybord from KEYBOARD object (from top to bottom)
    KEYBOARD.forEach((keyboardLine) => {
      let line = document.createElement('div');
      let lineContent = () => {
        keyboardLine.forEach(key => {
          let keyElement = document.createElement('div');
          keyElement.id = key.id;
          keyElement.className = 'key';
          if (key.func) {
            keyElement.classList.add('func');
          } else {
            keyElement.classList.add('symbolic');
          };
          if (key.special) keyElement.classList.add('special');
          if (key.id.length === 1) keyElement.classList.add('letter');
          line.append(keyElement);
          listeners(keyElement);
        })
      };
      lineContent();
      line.className = 'keyboard-line';
      keyboard.append(line);
    });
  };
  keyboardContent();
  keyboard.id = 'keyboard';
  document.body.append(keyboard);
  
  // создаем блок с информацией о том как поменять раскладку клавиатуры 
  information.id = 'info';
  information.innerHTML = 'Use <b>Alt + Shift</b> to switch keyboard layout<br>Keyboard application started on <b>' + SYSTEM + '</b> system';
  document.body.append(information);
};

function fillKeys(option, keyClass) {
  let keys;
  if (!option) {
    option = 'en';
    localStorage.setItem('lang', option);
  };
  if (localStorage.getItem('lang') == 'en') {
    keys = document.getElementsByClassName(keyClass);
  } else {
    let selector = '.' + keyClass + ', ' + '#bracketleft, #bracketright, #semicolon, #quote, #comma, #period, #backquote';
    keys = document.querySelectorAll(selector);
  }
  
  Array.prototype.forEach.call(keys, function(key) {
    let keyObj = KEYS.find(obj => obj.id === key.id);
    if (!keyObj.func) {
      key.innerHTML = keyObj[option];
    } else {
      key.innerHTML = keyObj.keyName;
    }
  });
  localStorage.setItem('lang', option.slice(-2).toLowerCase());
};

document.addEventListener('DOMContentLoaded', function() {
  createPageContent();
  fillKeys(localStorage.getItem('lang'), 'key');
  keyboard.addEventListener('mousedown', keyboardClick);
  keyboard.addEventListener('mouseup', keyboardMouseUp);
  textarea.addEventListener('blur', textarea.focus);
  // события клавиатуры 
  document.addEventListener('keydown', physicalKeyDown);
  document.addEventListener('keyup', physicalKeyUp);
}, false);

//key listeners
function listeners(element) {
  element.addEventListener('mouseenter', hover);
  element.addEventListener('mouseleave', unhover);
};

keyboard.addEventListener('mousedown', keyboardClick);
keyboard.addEventListener('mouseup', keyboardMouseUp);

function keyboardClick(event) {
  
  // проверяем, что передается в функцию, событие мыши со страницы или элемент от обработчика событий клавиатуры
  let target;
  let mouseEvent;
  if(Object.getPrototypeOf(event) === Object.getPrototypeOf(new MouseEvent(''))) {
    target = event.target;
    mouseEvent = true;
  } else {
    target = event;
    mouseEvent = false;
  }
  if (target.classList.contains('key')) {
    onEventKey = target;
    target.classList.add('pressed');
    if (target.classList.contains('symbolic')) {
      textarea.value += target.innerHTML;
      if (onShiftFlag) onShift(target, mouseEvent, false);
    } else if (target.classList.contains('special')) {
      textarea.value += KEYS.find(obj => obj.id === target.id).en;
      if (onShiftFlag) onShift(target, mouseEvent, false);
    } else if (onShiftFlag && target.id !== 'capslock') {
        onShift(target, mouseEvent, false)
      } else {
        onFuncKey(target, mouseEvent, true);
    };
  }  
};

function keyboardMouseUp(event) {
  if (onEventKey) {
    onEventKey.classList.remove('pressed');
    onEventKey = undefined;
  }
};

function hover(event) {
  event.target.classList.add('hovered');
};

function unhover(event) {
  event.target.classList.remove('hovered');
};

// события клавиатуры 
function physicalKeyDown(event) {
  let idForElement = event.code.replace('Key', '').toLowerCase();
  event.preventDefault();

  let element = document.getElementById(idForElement);
  // поменять раскалдку на английскую если активны сразу alt и shift 
  if (event.altKey && event.shiftKey) {
    switchLayout(event);
  } else if (element.id === 'capslock'&&event.repeat) {
    console.log('EVENT REPEATED');
  } else {
    keyboardClick(element);
  }
};

function physicalKeyUp(event) {
  event.preventDefault();
  let idForElement = event.code.replace('Key', '').toLowerCase();
  let element = document.getElementById(idForElement);
  element.classList.remove('pressed');
  if (element.classList.contains('func') && !element.classList.contains('special')) {
    onFuncKey(element, false, false);
  };
};

function switchLayout(event) {
  switch (document.getElementById('q').innerHTML) {
    case 'q':
      fillKeys('ru', 'key');
      break;
    case 'Q':
      fillKeys('onSiftRu', 'key');
      break;
    case 'й':
      fillKeys('en', 'key');
      break;
    case 'Й':
      fillKeys('onSiftEn', 'key');
      break;
  }
  event.stopPropagation();
}


function onFuncKey(target, mouseEvent, up) {
  if (target.id.includes('shift')) {
    onShift(target, mouseEvent, up);
  } else if (target.id.includes('backspace')) {
    onBackspace(target, mouseEvent, up);
  } else if (target.id.includes('caps')) {
    onCaps(target, mouseEvent, up);
  } else if (target.id.includes('delete')) {
    onDelete(target, mouseEvent, up);
  }
}

function onShift(target, mouseEvent, up) {
  if (up) {
    fillKeys('onSift' + localStorage.getItem('lang').charAt(0).toUpperCase() + localStorage.getItem('lang').charAt(1), 'key');
    if (mouseEvent) onShiftFlag = true;
  } else {
    fillKeys(localStorage.getItem('lang'), 'key');
    onShiftFlag = false;
  }
}

function onCaps(target, mouseEvent, up) {
  if (!target.classList.contains('caps-active') && up) {
    fillKeys('onSift' + localStorage.getItem('lang').charAt(0).toUpperCase() + localStorage.getItem('lang').charAt(1), 'letter');
    target.classList.add('caps-active');
  } else if (up) {
    fillKeys(localStorage.getItem('lang'), 'letter');
    target.classList.remove('caps-active');
  }
}

function onBackspace(target, mouseEvent, up) {
  if (up) {
    textarea.value = textarea.value.slice(0, -1);
  }
}

function onDelete(target, mouseEvent, up) {
  if (up) {
    let position = textarea.selectionStart;
    let textEnd = textarea.value.slice(position + 1, textarea.textLength);
    let textStart = textarea.value.slice(0, position);
    textarea.value = textStart + textEnd;
    textarea.selectionStart = position;
    textarea.selectionEnd = position;
  }
}