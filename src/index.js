let shiftBtn = false;
let altBtn = false;
let capsBtn = false;
let currLang = 'eng';

function catchPressedButton(keycode) {
    return keyboardElements.filter( elem =>  elem['keycode'] === keycode)
}

function getPressedButton(keycode) {
    return catchPressedButton(keycode)[0]['keycode'];
}

function keyUpHandler(event) {
    if (event.which === 16){
        shiftUpButtonAction();
    }
    else if (event.which === 20)
    {
        if (!capsBtn){
            capsBtn = true;
            document.querySelectorAll("span.caps").forEach(elem => elem.classList.remove('hidden'));
            document.querySelectorAll('span.default').forEach(elem => elem.classList.add('hidden'));}
        else {
            capsBtn = false;
            document.querySelectorAll("span.caps").forEach(elem => elem.classList.add('hidden'));
            document.querySelectorAll('span.default').forEach(elem => elem.classList.remove('hidden'));
        }
    }
    else {
        console.log(`#div_id_${getPressedButton(event.which)}`);
    }
    document.querySelector(`#div_id_${getPressedButton(event.which)}`).classList.remove('selected-button');
    setFocusToTextArea();
}

function keyDownHandler(event) {
    const target = document.getElementById('div_id_' + event.which);
    globalPressActionHandler(event.which, target);
    if (event.which === 18){
        if (shiftBtn){
            if (currLang === 'eng'){
                currLang = 'ru';
                document.querySelectorAll("span.ru").forEach(elem => elem.classList.remove('hidden'));
                document.querySelectorAll('span.eng').forEach(elem => elem.classList.add('hidden'));
            }
            else {
                currLang = 'eng';
                document.querySelectorAll("span.eng").forEach(elem => elem.classList.remove('hidden'));
                document.querySelectorAll('span.ru').forEach(elem => elem.classList.add('hidden'));
            }
        }
    }
    if(event.which === 16) {
        shiftDownButtonAction();
    }
    if (event.which === 9) {
        event.preventDefault();
        tabButtonAction();
    }
    else {
        console.log(`#div_id_${getPressedButton(event.which)}`);
    }
    document.querySelector(`#div_id_${getPressedButton(event.which)}`).classList.add('selected-button');
}

//////////////////////////// MOUSE HANDLERS
function mouseDownClickHandler(event) {
    const target = event.target.closest('div');
    const keycode = Number(target.id.slice(7));
    globalPressActionHandler(keycode, target);
}

function globalPressActionHandler(keycode, target){

    let resultValue;
    target.classList.add('selected-button');
    try {
        resultValue = keyboardElements.find(key => key.keycode === keycode).values[currLang][shiftBtn ? 'caseUp' : 'default'];
    }
    catch (e) {}
    if (resultValue){
        insertValueIntoTextArea(resultValue);
    }
    else{
        keyboardElements.find(key => key.keycode === keycode).action();
    }
}

function mouseUpClickHandler(event) {
    event.target.closest('div').classList.remove('selected-button');
    setFocusToTextArea();
}
////////////////////////////

function getTextAreaCursorPosition () {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    return {start, end};
}

function deleteButtonAction() {
    const cursorPosition = getTextAreaCursorPosition();
    console.log(cursorPosition);
    let textAreaToArr = textarea.value.split('');
    if (cursorPosition.start === cursorPosition.end)
    {
        textAreaToArr.splice(cursorPosition.start, 1);
    }
    else {
        textAreaToArr.splice(cursorPosition.start, cursorPosition.end - cursorPosition.start);
    }
    textarea.value = textAreaToArr.join('');
    textarea.selectionStart = cursorPosition.start;
    textarea.selectionEnd = cursorPosition.start;
}

function backspaceButtonAction() {
    const cursorPosition = getTextAreaCursorPosition();
    let textAreaToArr = textarea.value.split('');
    if (cursorPosition.start === cursorPosition.end)
    {
        if (cursorPosition.start !== 0){
            textAreaToArr.splice(cursorPosition.start - 1, 1);
        }
        else {
            return;
        }
    }
    else {
        textAreaToArr.splice(cursorPosition.start, cursorPosition.end - cursorPosition.start)
    }
    textarea.value = textAreaToArr.join('');
    textarea.selectionStart = cursorPosition.start - 1;
    textarea.selectionEnd = cursorPosition.start - 1;
}

function insertValueIntoTextArea(value) {
    const cursorPosition = getTextAreaCursorPosition();
    if (cursorPosition.start === cursorPosition.end)
    {
        if (cursorPosition.start !== 0)
        {
            textarea.value = textarea.value.slice(0, cursorPosition.start - 1) +
                textarea.value.slice(cursorPosition.start - 1, cursorPosition.start) +
                value +
                textarea.value.slice(cursorPosition.start);
        }
        else {
            textarea.value = value + textarea.value.slice(cursorPosition.start);
        }
    }
    else {
        if (cursorPosition.start !== 0)
        {
            textarea.value = textarea.value.slice(0, cursorPosition.start) + value + textarea.value.slice(cursorPosition.end);
        }
        else {
            textarea.value = value + textarea.value.slice(cursorPosition.end);
        }
    }
    textarea.selectionStart = cursorPosition.start + value.length;
    textarea.selectionEnd = cursorPosition.start + value.length;
}

function tabButtonAction() {
    const tabValue = '\t';
    insertValueIntoTextArea(tabValue);
}

function spaceButtonAction() {
    const spaceValue = ' ';
    insertValueIntoTextArea(spaceValue);
}

function leftButtonAction(){
    const cursorPosition = getTextAreaCursorPosition();
    if (cursorPosition.start === 0){
        return;
    }
    textarea.selectionStart = cursorPosition.start - 1;
    textarea.selectionEnd = cursorPosition.start - 1;
}

function rightButtonAction() {
    const cursorPosition = getTextAreaCursorPosition();
    if (cursorPosition.start>textarea.value.length){
        return;
    }
    textarea.selectionStart = cursorPosition.start + 1;
    textarea.selectionEnd = cursorPosition.start + 1;
}

function shiftUpButtonAction() {
    shiftBtn = false;
    console.log("UP ShiftBtn = " + shiftBtn);
    document.querySelectorAll("span.default").forEach(elem => elem.classList.remove('hidden'));
    document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.add('hidden'));
}

function shiftDownButtonAction() {
    shiftBtn = true;
    console.log("DOWN ShiftBtn = " + shiftBtn);
    document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.remove('hidden'));
    document.querySelectorAll("span.default").forEach(elem => elem.classList.add('hidden'));
}

function enterButtonAction() {
    const enter_value = '\n';
    insertValueIntoTextArea(enter_value);
}

function capsLockButtonClickAction() {
    console.log("TBD!");
}

function setFocusToTextArea () {
    document.getElementById('textarea').focus();
}

function textAreaHandler(event) {
    event.preventDefault();
}

document.addEventListener('keyup', keyUpHandler);
document.addEventListener('keydown', keyDownHandler);



const keyboardElements = [
    {
        values: {
            eng: {
                default: '§',
                caseUp: '±',
                caps: '§'
            },
            ru: {
                default: 'ё',
                caseUp: 'Ё',
                caps: 'Ё'
            }},
        style: 'ui-keyboard-button',
        left:0,
        top: 300,
        keycode: 192},
    {
        values: {
            eng: {
                default: '1',
                caseUp: '!',
                caps: '1'
            },
            ru: {
                default: '1',
                caseUp: '!',
                caps: '1'
            }},
        style: 'ui-keyboard-button',
        left:55,
        top: 300,
        keycode: 49},
    {
        values: {
            eng: {
                default: '2',
                caseUp: '@',
                caps: '2'
            },
            ru: {
                default: '2',
                caseUp: '"',
                caps: '2'
            }},
        style: 'ui-keyboard-button',
        left: 110,
        top: 300,
        keycode: 50},
    {
        values: {
            eng: {
                default: '3',
                caseUp: '#',
                caps: '3'
            },
            ru: {
                default: '3',
                caseUp: '№',
                caps: '3'
            }},
        style: 'ui-keyboard-button',
        left: 165,
        top: 300,
        keycode: 51},
    {
        values: {
            eng: {
                default: '4',
                caseUp: '$',
                caps: '4'
            },
            ru: {
                default: '4',
                caseUp: ';',
                caps: '4'
            }},
        style: 'ui-keyboard-button',
        left: 220,
        top: 300,
        keycode: 52},
    {
        values: {
            eng: {
                default: '5',
                caseUp: '%',
                caps: '5'
            },
            ru: {
                default: '5',
                caseUp: '%',
                caps: '5'
            }},
        style: 'ui-keyboard-button',
        left: 275,
        top: 300,
        keycode: 53},
    {
        values: {
            eng: {
                default: '6',
                caseUp: '^',
                caps: '6'
            },
            ru: {
                default: '6',
                caseUp: ':',
                caps: '6'
            }},
        style: 'ui-keyboard-button',
        left: 330,
        top: 300,
        keycode: 54},
    {
        values: {
            eng: {
                default: '7',
                caseUp: '&',
                caps: '7'
            },
            ru: {
                default: '7',
                caseUp: '?',
                caps: '7'
            }},
        style: 'ui-keyboard-button',
        left: 385,
        top: 300,
        keycode: 55},
    {
        values: {
            eng: {
                default: '8',
                caseUp: '*',
                caps: '8'
            },
            ru: {
                default: '8',
                caseUp: '*',
                caps: '8'
            }},
        style: 'ui-keyboard-button',
        left: 440,
        top: 300,
        keycode: 56},
    {
        values: {
            eng: {
                default: '9',
                caseUp: '(',
                caps: '9'
            },
            ru: {
                default: '9',
                caseUp: '(',
                caps: '9'
            }},
        style: 'ui-keyboard-button',
        left: 495,
        top: 300,
        keycode: 57},
    {
        values: {
            eng: {
                default: '0',
                caseUp: ')',
                caps: '0'
            },
            ru: {
                default: '0',
                caseUp: ')',
                caps: '0'
            }},
        style: 'ui-keyboard-button',
        left: 550,
        top: 300,
        keycode: 48},
    {
        values: {
            eng: {
                default: '-',
                caseUp: '_',
                caps: '-'
            },
            ru: {
                default: '-',
                caseUp: '_',
                caps: '-'
            }},
        style: 'ui-keyboard-button',
        left: 605,
        top: 300,
        keycode: 189},
    {
        values: {
            eng: {
                default: '=',
                caseUp: '+',
                caps: '='
            },
            ru: {
                default: '=',
                caseUp: '+',
                caps: '='
            }},
        style: 'ui-keyboard-button',
        left: 660,
        top: 300,
        keycode: 187},
    {
        name: 'Backspace',
        style: 'backspace',
        left: 715,
        top: 300,
        keycode: 8,
        action: () => backspaceButtonAction()
    },
    {
        name: 'Tab',
        value: '\t',
        style: 'tab',
        left: 0,
        top: 355,
        keycode: 9,
        action: () => insertValueIntoTextArea('\t')
    },

    {
        values: {
            eng: {
                default: 'q',
                caseUp: 'Q',
                caps: 'Q'
            },
            ru: {
                default: 'й',
                caseUp: 'Й',
                caps: 'Й'
            }},
        style: 'ui-keyboard-button',
        left: 80,
        top: 355,
        keycode: 81},
    {
        values: {
            eng: {
                default: 'w',
                caseUp: 'W',
                caps: 'W'
            },
            ru: {
                default: 'ц',
                caseUp: 'Ц',
                caps: 'Ц'
            }},
        style: 'ui-keyboard-button',
        left:135,
        top: 355,
        keycode: 87},
    {
        values: {
            eng: {
                default: 'e',
                caseUp: 'E',
                caps: 'E'
            },
            ru: {
                default: 'у',
                caseUp: 'У',
                caps: 'У'
            }},
        style: 'ui-keyboard-button',
        left: 190,
        top: 355,
        keycode: 69},
    {
        values: {
            eng: {
                default: 'r',
                caseUp: 'R',
                caps: 'R'
            },
            ru: {
                default: 'к',
                caseUp: 'К',
                caps: 'К'
            }},
        style: 'ui-keyboard-button',
        left: 245,
        top: 355,
        keycode: 82},
    {
        values: {
            eng: {
                default: 't',
                caseUp: 'T',
                caps: 'T'
            },
            ru: {
                default: 'е',
                caseUp: 'Е',
                caps: 'Е'
            }},
        style: 'ui-keyboard-button',
        left: 300,
        top: 355,
        keycode: 84},
    {
        values: {
            eng: {
                default: 'y',
                caseUp: 'Y',
                caps: 'Y'
            },
            ru: {
                default: 'н',
                caseUp: 'Н',
                caps: 'Н'
            }},
        style: 'ui-keyboard-button',
        left: 355,
        top: 355,
        keycode: 89},
    {
        values: {
            eng: {
                default: 'u',
                caseUp: 'U',
                caps: 'U'
            },
            ru: {
                default: 'г',
                caseUp: 'Г',
                caps: 'Г'
            }},
        style: 'ui-keyboard-button',
        left: 410,
        top: 355,
        keycode: 85},
    {
        values: {
            eng: {
                default: 'i',
                caseUp: 'I',
                caps: 'I'
            },
            ru: {
                default: 'ш',
                caseUp: 'Ш',
                caps: 'Ш'
            }},
        style: 'ui-keyboard-button',
        left: 465,
        top: 355,
        keycode: 73},
    {
        values: {
            eng: {
                default: 'o',
                caseUp: 'O',
                caps: 'O'
            },
            ru: {
                default: 'щ',
                caseUp: 'Щ',
                caps: 'Щ'
            }},
        style: 'ui-keyboard-button',
        left: 520,
        top: 355,
        keycode: 79},
    {
        values: {
            eng: {
                default: 'p',
                caseUp: 'P',
                caps: 'P'
            },
            ru: {
                default: 'з',
                caseUp: 'З',
                caps: 'З'
            }},
        style: 'ui-keyboard-button',
        left: 575,
        top: 355,
        keycode: 80},
    {
        values: {
            eng: {
                default: '[',
                caseUp: '{',
                caps: '['
            },
            ru: {
                default: 'х',
                caseUp: 'Х',
                caps: 'Х'
            }},
        style: 'ui-keyboard-button',
        left: 630,
        top: 355,
        keycode: 219},
    {
        values: {
            eng: {
                default: ']',
                caseUp: '}',
                caps: ']'
            },
            ru: {
                default: 'ъ',
                caseUp: 'Ъ',
                caps: 'Ъ'
            }},
        style: 'ui-keyboard-button',
        left: 685,
        top: 355,
        keycode: 221},
    {
        values: {
            eng: {
                default: '\\',
                caseUp: '|',
                caps: '\\'
            },
            ru: {
                default: '\\',
                caseUp: '/',
                caps: '\\'
            }},
        style: 'ui-keyboard-button',
        left: 740,
        top: 355,
        keycode: 220},
    {
        name: 'DEL',
        style: 'ui-keyboard-button',
        left: 795,
        top: 355,
        keycode: 46,
        action: () => deleteButtonAction()
    },
    {
        name: 'Caps Lock',
        style: 'caps-lock-button',
        left: 0,
        top: 410,
        keycode: 20},
    {
        values: {
            eng: {
                default: 'a',
                caseUp: 'A',
                caps: 'A'
            },
            ru: {
                default: 'ф',
                caseUp: 'Ф',
                caps: 'Ф'
            }},
        style: 'ui-keyboard-button',
        left: 105,
        top: 410,
        keycode: 65},
    {
        values: {
            eng: {
                default: 's',
                caseUp: 'S',
                caps: 'S'
            },
            ru: {
                default: 'ы',
                caseUp: 'Ы',
                caps: 'Ы'
            }},
        style: 'ui-keyboard-button',
        left: 160,
        top: 410,
        keycode: 83},
    {
        values: {
            eng: {
                default: 'd',
                caseUp: 'D',
                caps: 'D'
            },
            ru: {
                default: 'в',
                caseUp: 'В',
                caps: 'В'
            }},
        style: 'ui-keyboard-button',
        left: 215,
        top: 410,
        keycode: 68},
    {
        values: {
            eng: {
                default: 'f',
                caseUp: 'F',
                caps: 'F'
            },
            ru: {
                default: 'а',
                caseUp: 'А',
                caps: 'А'
            }},
        style: 'ui-keyboard-button',
        left: 270,
        top: 410,
        keycode: 70},
    {
        values: {
            eng: {
                default: 'g',
                caseUp: 'G',
                caps: 'G'
            },
            ru: {
                default: 'п',
                caseUp: 'П',
                caps: 'П'
            }},
        style: 'ui-keyboard-button',
        left: 325,
        top: 410,
        keycode: 71},
    {
        values: {
            eng: {
                default: 'h',
                caseUp: 'H',
                caps: 'H'
            },
            ru: {
                default: 'р',
                caseUp: 'Р',
                caps: 'Р'
            }},
        style: 'ui-keyboard-button',
        left: 380,
        top: 410,
        keycode: 72},
    {
        values: {
            eng: {
                default: 'j',
                caseUp: 'J',
                caps: 'J'
            },
            ru: {
                default: 'о',
                caseUp: 'О',
                caps: 'О'
            }},
        style: 'ui-keyboard-button',
        left: 435,
        top: 410,
        keycode: 74},
    {
        values: {
            eng: {
                default: 'k',
                caseUp: 'K',
                caps: 'K'
            },
            ru: {
                default: 'л',
                caseUp: 'Л',
                caps: 'Л'
            }},
        style: 'ui-keyboard-button',
        left: 490,
        top: 410,
        keycode: 75},
    {
        values: {
            eng: {
                default: 'l',
                caseUp: 'L',
                caps: 'L'
            },
            ru: {
                default: 'д',
                caseUp: 'Д',
                caps: 'Д'
            }},
        style: 'ui-keyboard-button',
        left: 545,
        top: 410,
        keycode: 76},
    {
        values: {
            eng: {
                default: ';',
                caseUp: ':',
                caps: ';'
            },
            ru: {
                default: 'ж',
                caseUp: 'Ж',
                caps: 'Ж'
            }},
        style: 'ui-keyboard-button',
        left: 600,
        top: 410,
        keycode: 186},
    {
        values: {
            eng: {
                default: '\'',
                caseUp: '"',
                caps: '\''
            },
            ru: {
                default: 'э',
                caseUp: 'Э',
                caps: 'Э'
            }},
        style: 'ui-keyboard-button',
        left: 655,
        top: 410,
        keycode: 222},
    {
        // values: {
        //     eng: {
        //         default: '\n',
        //         caseUp: '\n',
        //     },
        //     ru: {
        //         default: '\n',
        //         caseUp: '\n',
        //     }},
        name: 'Enter',
        style: 'enter',
        left: 710,
        top: 410,
        keycode: 13,
        action: () => enterButtonAction()
    },
    {
        name: 'Shift',
        style: 'caps-lock-button',
        left: 0,
        top: 465,
        keycode: 16},
    {
        values: {
            eng: {
                default: '`',
                caseUp: '~',
                caps: '`'
            },
            ru: {
                default: ']',
                caseUp: '[',
                caps: ']'
            }},
        style: 'ui-keyboard-button',
        left: 105,
        top: 465,
        keycode: 221},
    {
        values: {
            eng: {
                default: 'z',
                caseUp: 'Z',
                caps: 'Z'
            },
            ru: {
                default: 'я',
                caseUp: 'Я',
                caps: 'Я'
            }},
        style: 'ui-keyboard-button',
        left: 160,
        top: 465,
        keycode: 90},
    {
        values: {
            eng: {
                default: 'x',
                caseUp: 'X',
                caps: 'X'
            },
            ru: {
                default: 'ч',
                caseUp: 'Ч',
                caps: 'Ч'
            }},
        style: 'ui-keyboard-button',
        left: 215,
        top: 465,
        keycode: 88},
    {
        values: {
            eng: {
                default: 'c',
                caseUp: 'C',
                caps: 'C'
            },
            ru: {
                default: 'с',
                caseUp: 'С',
                caps: 'С'
            }},
        style: 'ui-keyboard-button',
        left: 270,
        top: 465,
        keycode: 67},
    {
        values: {
            eng: {
                default: 'v',
                caseUp: 'V',
                caps: 'V'
            },
            ru: {
                default: 'м',
                caseUp: 'М',
                caps: 'М'
            }},
        style: 'ui-keyboard-button',
        left: 325,
        top: 465,
        keycode: 86},
    {
        values: {
            eng: {
                default: 'b',
                caseUp: 'B',
                caps: 'B'
            },
            ru: {
                default: 'и',
                caseUp: 'И',
                caps: 'И'
            }},
        style: 'ui-keyboard-button',
        left: 380,
        top: 465,
        keycode: 66},
    {
        values: {
            eng: {
                default: 'n',
                caseUp: 'N',
                caps: 'N'
            },
            ru: {
                default: 'т',
                caseUp: 'Т',
                caps: 'Т'
            }},
        style: 'ui-keyboard-button',
        left: 435,
        top: 465,
        keycode: 78},
    {
        values: {
            eng: {
                default: 'm',
                caseUp: 'M',
                caps: 'M'
            },
            ru: {
                default: 'ь',
                caseUp: 'Ь',
                caps: 'Ь'
            }},
        style: 'ui-keyboard-button',
        left: 490,
        top: 465,
        keycode: 77},
    {
        values: {
            eng: {
                default: ',',
                caseUp: '<',
                caps: ','
            },
            ru: {
                default: 'б',
                caseUp: 'Б',
                caps: 'Б'
            }},
        style: 'ui-keyboard-button',
        left: 545,
        top: 465,
        keycode: 188},
    {
        values: {
            eng: {
                default: '.',
                caseUp: '>',
                caps: '.'
            },
            ru: {
                default: 'ю',
                caseUp: 'Ю',
                caps: 'Ю'
            }},
        style: 'ui-keyboard-button',
        left: 600,
        top: 465,
        keycode: 190},
    {
        values: {
            eng: {
                default: '/',
                caseUp: '?',
                caps: '/'
            },
            ru: {
                default: '.',
                caseUp: ',',
                caps: '.'
            }},
        style: 'ui-keyboard-button',
        left: 655,
        top: 465,
        keycode: 191},
    {
        name: 'Up',
        style: 'ui-keyboard-button',
        left: 710,
        top: 465,
        keycode: 38,
        action: () => {console.log('TDB!!!')} },
    {
        name: 'Shift',
        style: 'small-shift',
        left: 765,
        top: 465,
        keycode: 16,
        action: () => {console.log('TDB!!!')}
        },

    {
        name: 'Ctrl',
        style: 'ctrl',
        left: 0,
        top: 520,
        keycode: 17,
        action: () => {}},
    {
        name: 'CMD',
        style: 'ui-keyboard-button',
        left: 75,
        top: 520,
        keycode: 91,
        action: () => {}
        },
    {
        name: 'Alt',
        style: 'ui-keyboard-button',
        left: 130,
        top: 520,
        keycode: 18,
        action: () => {console.log('ALT TDB!!!')}
        },
    {
        // values: {
        //     eng: {
        //         default: ' ',
        //         caseUp: ' ',
        //     },
        //     ru: {
        //         default: ' ',
        //         caseUp: ' ',
        //     }},
        name: ' ',
        style: 'space',
        left: 185,
        top: 520,
        keycode: 32,
        action: () => insertValueIntoTextArea(' ')
    },
    {
        name: 'Alt',
        style: 'ui-keyboard-button',
        left: 545,
        top: 520,
        keycode: 18,
        action: () => {}
    },
    {
        name: 'Ctrl',
        style: 'ui-keyboard-button',
        left: 600,
        top: 520,
        keycode: 17,
        action: () => {}
        },
    {
        name: 'Left',
        style: 'ui-keyboard-button',
        left: 655,
        top: 520,
        keycode: 37,
        action: () => leftButtonAction()
    },
    {
        name: 'Down',
        style: 'ui-keyboard-button',
        left: 710,
        top: 520,
        keycode: 40,
        action: () => {console.log('DOWN TDB!!!')}},
    {
        name: 'Right',
        style: 'small-shift',
        left: 765,
        top: 520,
        keycode: 39,
        action: () => rightButtonAction()
    },
];

const textarea = document.createElement('TEXTAREA');
textarea.id = 'textarea';
textarea.classList.add('text-area');
document.body.appendChild(textarea);

textarea.addEventListener('keypress', textAreaHandler);

const mainDiv = document.createElement('div');
mainDiv.id = 'mainDiv';
document.body.appendChild(mainDiv);

mainDiv.addEventListener('mousedown', mouseDownClickHandler);
mainDiv.addEventListener('mouseup', mouseUpClickHandler);

for (let i=0; i<keyboardElements.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(keyboardElements[i]['style']);
    newDiv.id = 'div_id_' + keyboardElements[i]['keycode'];
    newDiv.style.left = `${keyboardElements[i]['left']}px`;
    newDiv.style.top = `${keyboardElements[i]['top']}px`;

    if (keyboardElements[i]['values']){
        for (const property in keyboardElements[i]['values']){
            let newSpan = document.createElement('span');
            newSpan.className = property;
            if (property !== 'eng'){
                newSpan.classList.add('hidden');
            }
            for (const prop in keyboardElements[i]['values'][property]){
                let elemSpan = document.createElement('span');
                elemSpan.className = prop;
                if (prop !== 'default') {
                    elemSpan.classList.add('hidden');
                }
                let newSpanNode = document.createTextNode(keyboardElements[i]['values'][property][prop]);
                elemSpan.appendChild(newSpanNode);
                newSpan.appendChild(elemSpan);
            }
            newDiv.appendChild(newSpan);
        }
    }
    else {
        let spanCaseDown = document.createElement('span');
        let newSpanNode = document.createTextNode(keyboardElements[i]['name']);
        spanCaseDown.appendChild(newSpanNode);
        newDiv.appendChild(spanCaseDown);
    }
    mainDiv.appendChild(newDiv);
}