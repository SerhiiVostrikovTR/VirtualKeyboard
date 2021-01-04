const keyboardElements = [
    {
        eng:
            {caseDown: '§', caseUp: ['±', 'hidden'], caps: ['§', 'hidden'], shiftCaps: ['±', 'hidden']},
        ru:
            {caseDown: 'ё', caseUp: 'Ё', caps: 'Ё', shiftCaps: 'Ё'},
        style: 'ui-keyboard-button',
        left:0,
        top: 0,
        keycode: 192},
    {
        eng:
            {caseDown: '1', caseUp: ['!', 'hidden'], caps: ['1', 'hidden'], shiftCaps: ['!', 'hidden']},
        ru:
            {caseDown: '1', caseUp: '!', caps: '1', shiftCaps: '!'},
        style: 'ui-keyboard-button',
        left:55,
        top: 0,
        keycode: 49},
    {
        eng:
            {caseDown: '2', caseUp: ['@', 'hidden'], caps: ['2', 'hidden'], shiftCaps: ['@', 'hidden']},
        ru:
            {caseDown: '2', caseUp: '"', caps: '2', shiftCaps: '"'},
        style: 'ui-keyboard-button',
        left: 110,
        top: 0,
        keycode: 50},
    {
        eng:
            {caseDown: '3', caseUp: ['#', 'hidden'], caps: ['3', 'hidden'], shiftCaps: ['#', 'hidden']},
        ru:
            {caseDown: '3', caseUp: '№', caps: '3', shiftCaps: '№'},
        style: 'ui-keyboard-button',
        left: 165,
        top: 0,
        keycode: 51},
    {
        eng:
            {caseDown: '4', caseUp: ['$', 'hidden'], caps: ['4', 'hidden'], shiftCaps: ['$', 'hidden']},
        ru:
            {caseDown: '4', caseUp: ';', caps: '4', shiftCaps: ';'},
        style: 'ui-keyboard-button',
        left: 220,
        top: 0,
        keycode: 52},
    {
        eng:
            {caseDown: '5', caseUp: ['%', 'hidden'], caps: ['5', 'hidden'], shiftCaps: ['%', 'hidden']},
        ru:
            {caseDown: '5', caseUp: '%', caps: '5', shiftCaps: '%'},
        style: 'ui-keyboard-button',
        left: 275,
        top: 0,
        keycode: 53},
    {
        eng:
            {caseDown: '6', caseUp: ['^', 'hidden'], caps: ['6', 'hidden'], shiftCaps: ['^', 'hidden']},
        ru:
            {caseDown: '6', caseUp: ':', caps: '6', shiftCaps: ':'},
        style: 'ui-keyboard-button',
        left: 330,
        top: 0,
        keycode: 54},
    {
        eng:
            {caseDown: '7', caseUp: ['&', 'hidden'], caps: ['7', 'hidden'], shiftCaps: ['&', 'hidden']},
        ru:
            {caseDown: '7', caseUp: '?', caps: '7', shiftCaps: '?'},
        style: 'ui-keyboard-button',
        left: 385,
        top: 0,
        keycode: 55},
    {
        eng:
            {caseDown: '8', caseUp: ['*', 'hidden'], caps: ['8', 'hidden'], shiftCaps: ['*', 'hidden']},
        ru:
            {caseDown: '8', caseUp: '*', caps: '8', shiftCaps: '*'},
        style: 'ui-keyboard-button',
        left: 440,
        top: 0,
        keycode: 56},
    {
        eng:
            {caseDown: '9', caseUp: ['(', 'hidden'], caps: ['9', 'hidden'], shiftCaps: ['(', 'hidden']},
        ru:
            {caseDown: '9', caseUp: '(', caps: '9', shiftCaps: '('},
        style: 'ui-keyboard-button',
        left: 495,
        top: 0,
        keycode: 57},
    {
        eng:
            {caseDown: '0', caseUp: [')', 'hidden'], caps: ['0', 'hidden'], shiftCaps: [')', 'hidden']},
        ru:
            {caseDown: '0', caseUp: ')', caps: '0', shiftCaps: ')'},
        style: 'ui-keyboard-button',
        left: 550,
        top: 0,
        keycode: 48},
    {
        eng:
            {caseDown: '-', caseUp: ['_', 'hidden'], caps: ['-', 'hidden'], shiftCaps: ['_', 'hidden']},
        ru:
            {caseDown: '-', caseUp: '_', caps: '-', shiftCaps: '_'},
        style: 'ui-keyboard-button',
        left: 605,
        top: 0,
        keycode: 189},
    {
        eng:
            {caseDown: '=', caseUp: ['+', 'hidden'], caps: ['=', 'hidden'], shiftCaps: ['+', 'hidden']},
        ru:
            {caseDown: '=', caseUp: '+', caps: '=', shiftCaps: '+'},
        style: 'ui-keyboard-button',
        left: 660,
        top: 0,
        keycode: 187},
    {
        value: 'Backspace',
        style: 'backspace',
        left: 715,
        top: 0,
        keycode: 8},
    {
        value: 'Tab',
        style: 'tab',
        left:0,
        top: 55,
        keycode: 9},
    {
        eng:
            {caseDown: 'q', caseUp: ['Q', 'hidden'], caps: ['Q', 'hidden'], shiftCaps: ['q', 'hidden']},
        ru:
            {caseDown: 'й', caseUp: 'Й', caps: 'Й', shiftCaps: 'й'},
        style: 'ui-keyboard-button',
        left: 80,
        top: 55,
        keycode: 81},
    {
        eng:
            {caseDown: 'w', caseUp: ['W', 'hidden'], caps: ['W', 'hidden'], shiftCaps: ['w', 'hidden']},
        ru:
            {caseDown: 'ц', caseUp: 'Ц', caps: 'Ц', shiftCaps: 'ц'},
        style: 'ui-keyboard-button',
        left:135,
        top: 55,
        keycode: 87},
    {
        eng:
            {caseDown: 'e', caseUp: ['E', 'hidden'], caps: ['E', 'hidden'], shiftCaps: ['e', 'hidden']},
        ru:
            {caseDown: 'у', caseUp: 'У', caps: 'У', shiftCaps: 'у'},
        style: 'ui-keyboard-button',
        left:190,
        top: 55,
        keycode: 69},
    {
        eng:
            {caseDown: 'r', caseUp: ['R', 'hidden'], caps: ['R', 'hidden'], shiftCaps: ['r', 'hidden']},
        ru:
            {caseDown: 'к', caseUp: 'К', caps: 'К', shiftCaps: 'к'},
        style: 'ui-keyboard-button',
        left:245,
        top: 55,
        keycode: 82},
    {
        eng:
            {caseDown: 't', caseUp: ['T', 'hidden'], caps: ['T', 'hidden'], shiftCaps: ['t', 'hidden']},
        ru:
            {caseDown: 'е', caseUp: 'Е', caps: 'Е', shiftCaps: 'е'},
        style: 'ui-keyboard-button',
        left:300,
        top: 55,
        keycode: 84},
    {
        eng:
            {caseDown: 'y', caseUp: ['Y', 'hidden'], caps: ['Y', 'hidden'], shiftCaps: ['y', 'hidden']},
        ru:
            {caseDown: 'н', caseUp: 'Н', caps: 'Н', shiftCaps: 'н'},
        style: 'ui-keyboard-button',
        left:355,
        top: 55,
        keycode: 89},
    {
        eng:
            {caseDown: 'u', caseUp: ['U', 'hidden'], caps: ['U', 'hidden'], shiftCaps: ['u', 'hidden']},
        ru:
            {caseDown: 'г', caseUp: 'Г', caps: 'Г', shiftCaps: 'г'},
        style: 'ui-keyboard-button',
        left:410,
        top: 55,
        keycode: 85},
    {
        eng:
            {caseDown: 'i', caseUp: ['I', 'hidden'], caps: ['I', 'hidden'], shiftCaps: ['i', 'hidden']},
        ru:
            {caseDown: 'ш', caseUp: 'Ш', caps: 'Ш', shiftCaps: 'ш'},
        style: 'ui-keyboard-button',
        left:465,
        top: 55,
        keycode: 73},
    {
        eng:
            {caseDown: 'o', caseUp: ['O', 'hidden'], caps: ['O', 'hidden'], shiftCaps: ['o', 'hidden']},
        ru:
            {caseDown: 'щ', caseUp: 'Щ', caps: 'Щ', shiftCaps: 'щ'},
        style: 'ui-keyboard-button',
        left:520,
        top: 55,
        keycode: 79},
    {
        eng:
            {caseDown: 'p', caseUp: ['P', 'hidden'], caps: ['P', 'hidden'], shiftCaps: ['p', 'hidden']},
        ru:
            {caseDown: 'з', caseUp: 'З', caps: 'З', shiftCaps: 'з'},
        style: 'ui-keyboard-button',
        left:575,
        top: 55,
        keycode: 80},
    {
        eng:
            {caseDown: '[', caseUp: ['{', 'hidden'], caps: ['[', 'hidden'], shiftCaps: ['{', 'hidden']},
        ru:
            {caseDown: 'х', caseUp: 'Х', caps: 'Х', shiftCaps: 'х'},
        style: 'ui-keyboard-button',
        left:630,
        top: 55,
        keycode: 219},
    {
        eng:
            {caseDown: ']', caseUp: ['}', 'hidden'], caps: [']', 'hidden'], shiftCaps: ['}', 'hidden']},
        ru:
            {caseDown: 'ъ', caseUp: 'Ъ', caps: 'Ъ', shiftCaps: 'ъ'},
        style: 'ui-keyboard-button',
        left:685,
        top: 55,
        keycode: 221},
    {
        eng:
            {caseDown: '\\', caseUp: ['|', 'hidden'], caps: ['\\', 'hidden'], shiftCaps: ['|', 'hidden']},
        ru:
            {caseDown: '\\', caseUp: '/', caps: '\\', shiftCaps: '/'},
        style: 'ui-keyboard-button',
        left:740,
        top: 55,
        keycode: 220},
    {
        value: 'DEL',
        style: 'ui-keyboard-button',
        left: 795,
        top: 55,
        keycode: 46},
    {
        value: 'Caps Lock',
        style: 'caps-lock-button',
        left:0,
        top: 110,
        keycode: 20},
    {
        eng:
            {caseDown: 'a', caseUp: ['A', 'hidden'], caps: ['A', 'hidden'], shiftCaps: ['A', 'hidden']},
        ru:
            {caseDown: 'ф', caseUp: 'Ф', caps: 'Ф', shiftCaps: 'Ф'},
        style: 'ui-keyboard-button',
        left: 105,
        top: 110,
        keycode: 65},
    {
        eng:
            {caseDown: 's', caseUp: ['S', 'hidden'], caps: ['S', 'hidden'], shiftCaps: ['S', 'hidden']},
        ru:
            {caseDown: 'ы', caseUp: 'Ы', caps: 'Ы', shiftCaps: 'Ы'},
        style: 'ui-keyboard-button',
        left: 160,
        top: 110,
        keycode: 83},
    {
        eng:
            {caseDown: 'd', caseUp: ['D', 'hidden'], caps: ['D', 'hidden'], shiftCaps: ['D', 'hidden']},
        ru:
            {caseDown: 'в', caseUp: 'В', caps: 'В', shiftCaps: 'В'},
        style: 'ui-keyboard-button',
        left: 215,
        top: 110,
        keycode: 68},
    {
        eng:
            {caseDown: 'f', caseUp: ['F', 'hidden'], caps: ['F', 'hidden'], shiftCaps: ['F', 'hidden']},
        ru:
            {caseDown: 'а', caseUp: 'А', caps: 'А', shiftCaps: 'А'},
        style: 'ui-keyboard-button',
        left: 270,
        top: 110,
        keycode: 70},
    {
        eng:
            {caseDown: 'g', caseUp: ['G', 'hidden'], caps: ['G', 'hidden'], shiftCaps: ['G', 'hidden']},
        ru:
            {caseDown: 'п', caseUp: 'П', caps: 'П', shiftCaps: 'П'},
        style: 'ui-keyboard-button',
        left: 325,
        top: 110,
        keycode: 71},
    {
        eng:
            {caseDown: 'h', caseUp: ['H', 'hidden'], caps: ['H', 'hidden'], shiftCaps: ['H', 'hidden']},
        ru:
            {caseDown: 'р', caseUp: 'Р', caps: 'Р', shiftCaps: 'Р'},
        style: 'ui-keyboard-button',
        left: 380,
        top: 110,
        keycode: 72},
    {
        eng:
            {caseDown: 'j', caseUp: ['J', 'hidden'], caps: ['J', 'hidden'], shiftCaps: ['J', 'hidden']},
        ru:
            {caseDown: 'о', caseUp: 'О', caps: 'О', shiftCaps: 'О'},
        style: 'ui-keyboard-button',
        left: 435,
        top: 110,
        keycode: 74},
    {
        eng:
            {caseDown: 'k', caseUp: ['K', 'hidden'], caps: ['K', 'hidden'], shiftCaps: ['K', 'hidden']},
        ru:
            {caseDown: 'л', caseUp: 'Л', caps: 'Л', shiftCaps: 'Л'},
        style: 'ui-keyboard-button',
        left: 490,
        top: 110,
        keycode: 75},
    {
        eng:
            {caseDown: 'l', caseUp: ['L', 'hidden'], caps: ['L', 'hidden'], shiftCaps: ['L', 'hidden']},
        ru:
            {caseDown: 'д', caseUp: 'Д', caps: 'Д', shiftCaps: 'Д'},
        style: 'ui-keyboard-button',
        left: 545,
        top: 110,
        keycode: 76},
    {
        eng:
            {caseDown: ';', caseUp: [':', 'hidden'], caps: [';', 'hidden'], shiftCaps: [':', 'hidden']},
        ru:
            {caseDown: 'ж', caseUp: 'Ж', caps: 'Ж', shiftCaps: 'Ж'},
        style: 'ui-keyboard-button',
        left: 600,
        top: 110,
        keycode: 186},
    {
        eng:
            {caseDown: '\'', caseUp: ['"', 'hidden'], caps: ['\'', 'hidden'], shiftCaps: ['"', 'hidden']},
        ru:
            {caseDown: 'э', caseUp: 'Э', caps: 'Э', shiftCaps: 'Э'},
        style: 'ui-keyboard-button',
        left: 655,
        top: 110,
        keycode: 222},
    {
        value: 'Enter',
        style: 'enter',
        value_pressed: "/n",
        left: 710,
        top: 110,
        keycode: 13},
    {
        value: 'Shift',
        style: 'caps-lock-button',
        left: 0,
        top: 165,
        keycode: 16},
    {
        eng:
            {caseDown: '`', caseUp: ['~', 'hidden'], caps: ['`', 'hidden'], shiftCaps: ['~', 'hidden']},
        ru:
            {caseDown: ']', caseUp: '[', caps: ']', shiftCaps: '['},
        style: 'ui-keyboard-button',
        left: 105,
        top: 165,
        keycode: 221},
    {
        eng:
            {caseDown: 'z', caseUp: ['Z', 'hidden'], caps: ['Z', 'hidden'], shiftCaps: ['Z', 'hidden']},
        ru:
            {caseDown: 'я', caseUp: 'Я', caps: 'Я', shiftCaps: 'Я'},
        style: 'ui-keyboard-button',
        left: 160,
        top: 165,
        keycode: 90},
    {
        eng:
            {caseDown: 'x', caseUp: ['X', 'hidden'], caps: ['X', 'hidden'], shiftCaps: ['X', 'hidden']},
        ru:
            {caseDown: 'ч', caseUp: 'Ч', caps: 'Ч', shiftCaps: 'Ч'},
        style: 'ui-keyboard-button',
        left: 215,
        top: 165,
        keycode: 88},
    {
        eng:
            {caseDown: 'c', caseUp: ['C', 'hidden'], caps: ['C', 'hidden'], shiftCaps: ['C', 'hidden']},
        ru:
            {caseDown: 'с', caseUp: 'С', caps: 'С', shiftCaps: 'С'},
        style: 'ui-keyboard-button',
        left: 270,
        top: 165,
        keycode: 67},
    {
        eng:
            {caseDown: 'v', caseUp: ['V', 'hidden'], caps: ['V', 'hidden'], shiftCaps: ['V', 'hidden']},
        ru:
            {caseDown: 'м', caseUp: 'М', caps: 'М', shiftCaps: 'М'},
        style: 'ui-keyboard-button',
        left: 325,
        top: 165,
        keycode: 86},
    {
        eng:
            {caseDown: 'b', caseUp: ['B', 'hidden'], caps: ['B', 'hidden'], shiftCaps: ['B', 'hidden']},
        ru:
            {caseDown: 'и', caseUp: 'И', caps: 'И', shiftCaps: 'И'},
        style: 'ui-keyboard-button',
        left: 380,
        top: 165,
        keycode: 66},
    {
        eng:
            {caseDown: 'n', caseUp: ['N', 'hidden'], caps: ['N', 'hidden'], shiftCaps: ['N', 'hidden']},
        ru:
            {caseDown: 'т', caseUp: 'Т', caps: 'Т', shiftCaps: 'Т'},
        style: 'ui-keyboard-button',
        left: 435,
        top: 165,
        keycode: 78},
    {
        eng:
            {caseDown: 'm', caseUp: ['M', 'hidden'], caps: ['M', 'hidden'], shiftCaps: ['M', 'hidden']},
        ru:
            {caseDown: 'ь', caseUp: 'Ь', caps: 'Ь', shiftCaps: 'Ь'},
        style: 'ui-keyboard-button',
        left: 490,
        top: 165,
        keycode: 77},
    {
        eng:
            {caseDown: ',', caseUp: ['<', 'hidden'], caps: [',', 'hidden'], shiftCaps: ['<', 'hidden']},
        ru:
            {caseDown: 'б', caseUp: 'Б', caps: 'Б', shiftCaps: 'Б'},
        style: 'ui-keyboard-button',
        left: 545,
        top: 165,
        keycode: 188},
    {
        eng:
            {caseDown: '.', caseUp: ['>', 'hidden'], caps: ['.', 'hidden'], shiftCaps: ['>', 'hidden']},
        ru:
            {caseDown: 'ю', caseUp: 'Ю', caps: 'Ю', shiftCaps: 'Ю'},
        style: 'ui-keyboard-button',
        left: 600,
        top: 165,
        keycode: 190},
    {
        eng:
            {caseDown: '/', caseUp: ['?', 'hidden'], caps: ['/', 'hidden'], shiftCaps: ['?', 'hidden']},
        ru:
            {caseDown: '.', caseUp: ',', caps: '.', shiftCaps: ','},
        style: 'ui-keyboard-button',
        left: 655,
        top: 165,
        keycode: 191},
    {
        value: 'Up',
        style: 'ui-keyboard-button',
        left: 710,
        top: 165,
        keycode: 38},
    {
        value: 'Shift',
        style: 'small-shift',
        left: 765,
        top: 165,
        keycode: 16},

    {
        value: 'Ctrl',
        style: 'ctrl',
        left: 0,
        top: 220,
        keycode: 17},
    {
        value: 'CMD',
        style: 'ui-keyboard-button',
        left: 75,
        top: 220,
        keycode: 91},
    {
        value: 'Alt',
        style: 'ui-keyboard-button',
        left: 130,
        top: 220,
        keycode: 18},
    {
        value: ' ',
        style: 'space',
        left: 185,
        top: 220,
        keycode: 32},
    {
        value: 'Alt',
        style: 'ui-keyboard-button',
        left: 545,
        top: 220,
        keycode: 18},
    {
        value: 'Ctrl',
        style: 'ui-keyboard-button',
        left: 600,
        top: 220,
        keycode: 17},
    {
        value: 'Left',
        style: 'ui-keyboard-button',
        left: 655,
        top: 220,
        keycode: 37},
    {
        value: 'Down',
        style: 'ui-keyboard-button',
        left: 710,
        top: 220,
        keycode: 40},
    {
        value: 'Right',
        style: 'small-shift',
        left: 765,
        top: 220,
        keycode: 39},
    ];
let shiftBtn = false;
let capsBtn = false;
let currLang = 'eng';

for (let i=0; i<keyboardElements.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(keyboardElements[i]['style']);
    newDiv.id = 'div_id_' + keyboardElements[i]['keycode'];
    // if ('eng' in keyboardElements[i]){
    //     newDiv.id = 'div_id_' + keyboardElements[i]['eng']['caseDown'];
    // }
    // else
    // {
    //     newDiv.id = 'div_id_' + keyboardElements[i]['value'];
    // }
    newDiv.style.left = `${keyboardElements[i]['left']}px`;
    newDiv.style.top = `${keyboardElements[i]['top']}px`;

    let newSpan = document.createElement('span');
    newSpan.className = Object.keys(keyboardElements[i])[0];
    if (keyboardElements[i]['eng']){
        // console.log(keyboardElements[i]['eng']);
        for (const property in keyboardElements[i]['eng'])
        {
            // console.log(property);
            let spanCaseDown = document.createElement('span');
            // console.log(spanCaseDown);
            spanCaseDown.className = property;
            if (keyboardElements[i]['eng'][property][1]){
                spanCaseDown.classList.add(keyboardElements[i]['eng'][property][1]);
            }
            let newSpanNode = document.createTextNode(keyboardElements[i]['eng'][property][0]);
            spanCaseDown.appendChild(newSpanNode);
            newSpan.appendChild(spanCaseDown);
            newDiv.appendChild(newSpan);
        }}
    else {
        let spanCaseDown = document.createElement('span');
        let newSpanNode = document.createTextNode(keyboardElements[i]['value']);
        spanCaseDown.appendChild(newSpanNode);
        newSpan.appendChild(spanCaseDown);
        newDiv.appendChild(newSpan);
    }
    newDiv.appendChild(newSpan);
    document.body.appendChild(newDiv);
}

const catchPressedButton = (keycode) => {
    return keyboardElements.filter( elem =>  elem['keycode'] === keycode)
}

const getPressedButton = (keycode) => {
    // if (currLang in catchPressedButton(keycode)[0]){
    //     return catchPressedButton(keycode)[0]['keycode'];
    // }
    return catchPressedButton(keycode)[0]['keycode'];
}

const keyUpHandler = (event) => {
    if (event.which === 16){
        shiftBtn = true;
        document.querySelectorAll("span.caseDown").forEach(elem => elem.classList.remove('hidden'));
        document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.add('hidden'));
    }
    else if (event.which === 20)
    {
        if (!capsBtn){
            capsBtn = true;
            document.querySelectorAll("span.caps").forEach(elem => elem.classList.remove('hidden'));
            document.querySelectorAll('span.caseDown').forEach(elem => elem.classList.add('hidden'));}
        else {
            capsBtn = false;
            document.querySelectorAll("span.caps").forEach(elem => elem.classList.add('hidden'));
            document.querySelectorAll('span.caseDown').forEach(elem => elem.classList.remove('hidden'));
        }
    }
    else {
        console.log(`#div_id_${getPressedButton(event.which)}`);

    }
    document.querySelector(`#div_id_${getPressedButton(event.which)}`).classList.remove('selected-button');
}


document.addEventListener('keydown', (event) => {
    if(event.which === 16) {
        shiftBtn = false;
        document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.remove('hidden'));
        document.querySelectorAll("span.caseDown").forEach(elem => elem.classList.add('hidden'));
    }
    else {
        console.log(`#div_id_${getPressedButton(event.which)}`);
    }
    document.querySelector(`#div_id_${getPressedButton(event.which)}`).classList.add('selected-button');
})

document.addEventListener('keyup', keyUpHandler)

