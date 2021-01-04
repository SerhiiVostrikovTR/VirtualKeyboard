const keyboardElements = [
    // {value: 'Tab', style: 'ui-keyboard-button', left: 0, top:0, keycode: 69},
    { eng:
          {caseDown: 'q', caseUp: ['Q', 'hidden'], caps: ['Q', 'hidden'], shiftCaps: ['q', 'hidden']},
      ru:
          {caseDown: 'й', caseUp: 'Й', caps: 'Й', shiftCaps: 'й'},
      style: 'ui-keyboard-button',
      left:50,
      top: 0,
      keycode: 81},
    // {value: 'w', style: 'ui-keyboard-button', left: 100, top:0, keycode: 87},
    // {value: 'e', style: 'ui-keyboard-button', left: 150, top:0, keycode: 69}
    ];
let shiftBtn = false;
// const createSpans = () => {
//     let span = document.createElement('span');
//
// }

for (let i=0; i<keyboardElements.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(keyboardElements[i]['style']);
    newDiv.id = 'div_id_' + keyboardElements[i]['eng']['caseDown'];
    newDiv.style.left = `${keyboardElements[i]['left']}px`;

    let newSpan = document.createElement('span');
    newSpan.className = Object.keys(keyboardElements[i])[0];
    console.log(keyboardElements[i]['eng']);
    for (const property in keyboardElements[i]['eng'])
    {
        console.log(property);
        let spanCaseDown = document.createElement('span');
        console.log(spanCaseDown);
        spanCaseDown.className = property;
        if (keyboardElements[i]['eng'][property][1]){
            spanCaseDown.classList.add(keyboardElements[i]['eng'][property][1]);
        }
        let newSpanNode = document.createTextNode(keyboardElements[i]['eng'][property][0]);
        spanCaseDown.appendChild(newSpanNode);
        newSpan.appendChild(spanCaseDown);
        newDiv.appendChild(newSpan);
    }
    newDiv.appendChild(newSpan);
    document.body.appendChild(newDiv);
}

const getHighlightedButton = (keycode) => {
    keyboardElements.reduce( (acc, keycode) => {
        if(keyboardElements['keycode'] === keycode){
            return acc.eng.caseDown;
        }
    })
}

const keyUpHandler = (event) => {
    if (event.which === 16){
        shiftBtn = true;
        document.querySelectorAll("span.caseDown").forEach(elem => elem.classList.remove('hidden'));
        document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.add('hidden'));
    }

}


document.addEventListener('keydown', (event) => {
    if(event.which === 16) {
        shiftBtn = false;
        document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.remove('hidden'));
        document.querySelectorAll("span.caseDown").forEach(elem => elem.classList.add('hidden'));
    }
    else {
        console.log(getHighlightedButton(event.which));
        // document.querySelector(`#div_id_${getHighlightedButton(event.which)}`).classList.add('.selected-button');
    }
})

document.addEventListener('keyup', keyUpHandler)

