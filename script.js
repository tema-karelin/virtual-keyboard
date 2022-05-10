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
const KEYBOARD = (SYSTEM == 'Windows' ? WIN_KEYBOARD : MAC_KEYBOARD);
const KEYS = KEYBOARD.flat();
let onShiftFlag = false;
let onEventKey;

function createPageContent() {
  // создаем область для ввода текста
  textarea.className = 'text';

  if (SYSTEM !== 'Windows') textarea.classList.add('mac');
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
          if (SYSTEM !== 'Windows') keyElement.classList.add('mac');
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
  if (SYSTEM !== 'Windows') keyboard.classList.add('mac');
  document.body.append(keyboard);
  
  // создаем блок с информацией о том как поменять раскладку клавиатуры 
  information.id = 'info';
  information.innerHTML = 'Use <b>Alt + Shift</b> to switch keyboard layout<br><br>Keyboard application started on <b>' + SYSTEM + '</b> system<br><br><b>Shift</b> key on virtual keyboard (by mouse click) works as on smartphones. The next mouse click (after <b>Shift</b>) returns symbol in uppercase<br><br>Good Luck!';
  document.body.append(information);
};

function fillKeys(option, keyClass) {
  let keys;
  if (!option) {
    option = 'en';
    localStorage.setItem('lang', option);
  };
  let arrIdsToLetter = [];
  if (SYSTEM == 'Windows') {
    arrIdsToLetter = ['bracketleft', 'bracketright', 'semicolon', 'quote', 'comma', 'period', 'backquote'];
  } else {
    arrIdsToLetter = ['bracketleft', 'bracketright', 'semicolon', 'quote', 'comma', 'period', 'backslash'];
  }
  if (localStorage.getItem('lang') == 'ru') {
    arrIdsToLetter.forEach(el => document.getElementById(el).classList.add('letter'));
  } else {
    arrIdsToLetter.forEach(el => document.getElementById(el).classList.remove('letter'));
  }
  keys = document.getElementsByClassName(keyClass);
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