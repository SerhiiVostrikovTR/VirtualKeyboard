import keyboardElements from "./keyboardObject";

function createKeyboard(keyboardElements) {
    const textarea = document.createElement('TEXTAREA');
    textarea.id = 'textarea';
    textarea.classList.add('text-area');
    document.body.appendChild(textarea);

    const mainDiv = document.createElement('div');
    mainDiv.id = 'mainDiv';
    document.body.appendChild(mainDiv);

    mainDiv.addEventListener('mousedown', mouseDownClickHandler);
    mainDiv.addEventListener('mouseup', mouseUpClickHandler);

    for (let i = 0; i < keyboardElements.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add(keyboardElements[i]['style']);
        newDiv.id = 'div_id_' + keyboardElements[i]['keycode'];
        newDiv.style.left = `${keyboardElements[i]['left']}px`;
        newDiv.style.top = `${keyboardElements[i]['top']}px`;

        if (keyboardElements[i]['values']) {
            for (const property in keyboardElements[i]['values']) {
                let newSpan = document.createElement('span');
                newSpan.className = property;
                if (property !== 'eng') {
                    newSpan.classList.add('hidden');
                }
                for (const prop in keyboardElements[i]['values'][property]) {
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
        } else {
            let spanCaseDown = document.createElement('span');
            let newSpanNode = document.createTextNode(keyboardElements[i]['name']);
            spanCaseDown.appendChild(newSpanNode);
            newDiv.appendChild(spanCaseDown);
        }
        mainDiv.appendChild(newDiv);
    }
}
export default createKeyboard();