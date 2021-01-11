import keyboardElements from './keyboardObject.js';
import createKeyboard from "./create_keyboard.js";


const keyboardLanguages = {eng: 'eng', ru: 'ru'}
let shiftBtn = false;
let altBtn = false;
let capsBtn = false;
let currLang = keyboardLanguages.eng;
const textarea = document.getElementById('textarea');

const a = createKeyboard(keyboardElements);

function getCorrespondentCaseKeyboardValue(){
    if (shiftBtn){
        return 'caseUp';
    }
    else if (capsBtn){
        return 'caps';
    }
    return 'default';
}

function globalPressActionHandler(event, keycode, target){
    let resultValue;
    target.classList.add('selected-button');
    try {
        resultValue = keyboardElements.find(key => key.keycode === keycode).values[currLang][getCorrespondentCaseKeyboardValue()];
    }
    catch (e) {}
    if (resultValue){
        insertValueIntoTextArea(resultValue);
    }
    else{
        keyboardElements.find(key => key.keycode === keycode).action(event);
    }
}

function getTargetByMouseClick(event){
    const targetElem = event.target.closest('div');
    const keycode = Number(targetElem.id.slice(7));
    return {targetElem, keycode};
}

function mouseDownClickHandler(event) {
    const target = getTargetByMouseClick(event);
    globalPressActionHandler(event, target.keycode, target.targetElem);
}

function mouseUpClickHandler(event) {
    const target = getTargetByMouseClick(event);
    doActionOnButton(target.keycode, event);
    target.targetElem.classList.remove('selected-button');
    setFocusToTextArea();
}

function keyUpHandler(event) {
    doActionOnButton(event.which, event);
    getKeyboardElementByKeyCode(event.which).classList.remove('selected-button');
    setFocusToTextArea();
}

function doActionOnButton(keycode, event){
    if (keyboardElements.find(key => key.keycode === keycode).action)
    {
        keyboardElements.find(key => key.keycode === keycode).action(event);
    }
}

function keyDownHandler(event) {
    event.preventDefault();
    globalPressActionHandler(event, event.which, getKeyboardElementByKeyCode(event.which));
    setSelectedButton(event);
}

function keyPressHandler(event) {
    if (event.which === 20){
        capsLockButtonClickAction();
    }
}

function getKeyboardElementByKeyCode(keycode){
    return document.getElementById('div_id_' + keycode);
}

function setSelectedButton(event){
    getKeyboardElementByKeyCode(event.which).classList.add('selected-button');
}

function keyBoardLanguageSwitcher(){
    if (currLang === keyboardLanguages.eng){
        switchToRuKeyboard();
    }
    else {
        switchToEngKeyboard();
    }
}

function switchToEngKeyboard() {
    currLang = keyboardLanguages.eng;
    document.querySelectorAll('span.' + keyboardLanguages.eng).forEach(elem => elem.classList.remove('hidden'));
    document.querySelectorAll("span." + keyboardLanguages.ru).forEach(elem => elem.classList.add('hidden'));
}

function switchToRuKeyboard() {
    currLang = keyboardLanguages.ru;
    document.querySelectorAll("span." + keyboardLanguages.ru).forEach(elem => elem.classList.remove('hidden'));
    document.querySelectorAll('span.' + keyboardLanguages.eng).forEach(elem => elem.classList.add('hidden'));
}

function deleteButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown')
    {
        const cursorPosition = getTextAreaCursorPosition();
        let textAreaToArr = textarea.value.split('');
        if (cursorPosition.start === cursorPosition.end)
        {
            textAreaToArr.splice(cursorPosition.start, 1);
        }
        else {
            textAreaToArr.splice(cursorPosition.start, cursorPosition.end - cursorPosition.start);
        }
        textarea.value = textAreaToArr.join('');
        changeTextAreaCursorPosition(cursorPosition.start, cursorPosition.start);
    }
}

function backspaceButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown')
    {
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
        changeTextAreaCursorPosition(cursorPosition.start - 1, cursorPosition.start - 1);
    }
}

function tabButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown')
    {
        const tabValue = '    ';
        insertValueIntoTextArea(tabValue);
    }
}

function spaceButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown') {
        const spaceValue = ' ';
        insertValueIntoTextArea(spaceValue);
    }
}

function leftButtonAction(event){
    if (event.type === 'mousedown' || event.type === 'keydown')
    {
        const cursorPosition = getTextAreaCursorPosition();
        if (cursorPosition.start === 0){
            return;
        }
        changeTextAreaCursorPosition(cursorPosition.start - 1, cursorPosition.start - 1);
    }
}

function rightButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown')
    {
        const cursorPosition = getTextAreaCursorPosition();
        if (cursorPosition.start>textarea.value.length){
            return;
        }
        changeTextAreaCursorPosition(cursorPosition.start + 1, cursorPosition.start + 1);
    }
}

function getTextAreaRowByCursorPosition(start, end) {
    const rowNumber = textarea.value.split('\n').map(elem => elem.length);
    let rowSum = 0;
    return rowNumber.reduce(function (acc, row) {
        rowSum += row;
        if (start === end){
            if ((start+1) <= (rowSum+acc)){
                return acc;
            }}
        else {
            if ((end+1) <= (rowSum+acc)){
                return acc;
            }
        }
        return acc+1;
    },1);
}

function getTextAreaLengthByRowsCount(textAreaRows, rowsNumber){
    if (textAreaRows.length === 0){
        return 0;
    }
    else if(rowsNumber === 1){
        return textAreaRows[0].length;
    }
    return textAreaRows[rowsNumber - 1].length + getTextAreaLengthByRowsCount(textAreaRows, rowsNumber - 1);
}

function calculatePositionAfterDown() {
    const textAreaRows = textarea.value.split('\n');
    const cursorPosition = getTextAreaCursorPosition();
    if (cursorPosition.row === textAreaRows.length){
        return cursorPosition.start;
    }
    else if(textAreaRows[cursorPosition.row] < textAreaRows[cursorPosition.row - 1] &&
        cursorPosition.start === getTextAreaLengthByRowsCount(textAreaRows, cursorPosition.row - 1)){
        return cursorPosition.start + textAreaRows[cursorPosition.row].length + 1;
    }
    return cursorPosition.start + textAreaRows[cursorPosition.row - 1].length + 1;
}

function calculatePositionAfterUp() {
    const textAreaRows = textarea.value.split('\n');
    const cursorPosition = getTextAreaCursorPosition();
    // console.log("cursor position " + cursorPosition.start);
    // if (cursorPosition.row === textAreaRows.length){
    //     return cursorPosition.start;
    // }
    if(textAreaRows[cursorPosition.row - 1] < textAreaRows[cursorPosition.row - 2]){
        console.log('Im in');
        console.log("new " + (cursorPosition.start - textAreaRows[cursorPosition.row - 2].length + textAreaRows[cursorPosition.row - 1].length - cursorPosition.row));
        console.log(textAreaRows[cursorPosition.row - 1].length)
        return cursorPosition.start - textAreaRows[cursorPosition.row - 2].length + textAreaRows[cursorPosition.row -1].length - cursorPosition.row;
    }
    return cursorPosition.start - textAreaRows[cursorPosition.row - 1].length;
}

function downButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown') {
        const textAreaRows = textarea.value.split('\n');
        const cursorPosition = calculatePositionAfterDown();
        if (textAreaRows.length >= 2) {
            changeTextAreaCursorPosition(cursorPosition, cursorPosition);
        }
    }
}

function upButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown') {
        const cursorPosition = calculatePositionAfterUp();
        console.log('After UP position ' + cursorPosition);
        // if (cursorPosition.row > 1) {
            changeTextAreaCursorPosition(cursorPosition, cursorPosition);
        // }
    }
}

function commonShiftHandler(event) {
    if (event.type === 'keydown' || event.type === 'mousedown'){
        shiftDownButtonAction();
    }
    else if (event.type === 'keyup' || event.type === 'mouseup'){
        shiftUpButtonAction();
    }
}

function shiftUpButtonAction() {
    shiftBtn = false;
    if (capsBtn) {
        capsOn();
    }
    else {
        defaultOn();
    }
}

function shiftDownButtonAction() {
    shiftBtn = true;
    if (altBtn){
        keyBoardLanguageSwitcher();
    }
    shiftOn();
}

function commonAltHandler(event){
    if (event.type === 'keydown' || event.type === 'mousedown'){
        altDownButtonHandler();
    }
    else if (event.type === 'keyup' || event.type === 'mouseup'){
        altUpButtonHandler();
    }
}

function altUpButtonHandler() {
    altBtn = false;
}

function altDownButtonHandler(){
    altBtn = true;
    if (shiftBtn){
        keyBoardLanguageSwitcher();
    }
}

function enterButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown')
    {
        const enter_value = '\n';
        insertValueIntoTextArea(enter_value);
    }
}

function capsLockButtonClickAction() {
    if (!capsBtn) {
        capsBtn = true;
        if (shiftBtn) {
            shiftOn();
        }
        else {
            capsOn();
        }
    }
    else {
        capsBtn = false;
        defaultOn();
    }
}

function capsOn(){
    document.querySelectorAll("span.caps").forEach(elem => elem.classList.remove('hidden'));
    document.querySelectorAll('span.default').forEach(elem => elem.classList.add('hidden'));
    document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.add('hidden'));
}

function shiftOn(){
    document.querySelectorAll('span.default').forEach(elem => elem.classList.add('hidden'));
    document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.remove('hidden'));
    document.querySelectorAll('span.caps').forEach(elem => elem.classList.add('hidden'));
}

function defaultOn(){
    document.querySelectorAll("span.caps").forEach(elem => elem.classList.add('hidden'));
    document.querySelectorAll('span.default').forEach(elem => elem.classList.remove('hidden'));
    document.querySelectorAll('span.caseUp').forEach(elem => elem.classList.add('hidden'));
}

function getTextAreaCursorPosition () {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const row = getTextAreaRowByCursorPosition(start, end);
    return {start, end, row};
}

function changeTextAreaCursorPosition(start, end){
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
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
    changeTextAreaCursorPosition(cursorPosition.start + value.length, cursorPosition.start + value.length);
}

function setFocusToTextArea () {
    document.getElementById('textarea').focus();
}

document.addEventListener('keyup', keyUpHandler);
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keypress', keyPressHandler);


export {backspaceButtonAction, tabButtonAction, deleteButtonAction, capsLockButtonClickAction, enterButtonAction,
commonShiftHandler, upButtonAction, commonAltHandler, leftButtonAction, downButtonAction, rightButtonAction, spaceButtonAction}



// const textarea = document.createElement('TEXTAREA');
// textarea.id = 'textarea';
// textarea.classList.add('text-area');
// document.body.appendChild(textarea);
//
// const mainDiv = document.createElement('div');
// mainDiv.id = 'mainDiv';
// document.body.appendChild(mainDiv);
//
// mainDiv.addEventListener('mousedown', mouseDownClickHandler);
// mainDiv.addEventListener('mouseup', mouseUpClickHandler);
//
// for (let i=0; i<keyboardElements.length; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.classList.add(keyboardElements[i]['style']);
//     newDiv.id = 'div_id_' + keyboardElements[i]['keycode'];
//     newDiv.style.left = `${keyboardElements[i]['left']}px`;
//     newDiv.style.top = `${keyboardElements[i]['top']}px`;
//
//     if (keyboardElements[i]['values']){
//         for (const property in keyboardElements[i]['values']){
//             let newSpan = document.createElement('span');
//             newSpan.className = property;
//             if (property !== 'eng'){
//                 newSpan.classList.add('hidden');
//             }
//             for (const prop in keyboardElements[i]['values'][property]){
//                 let elemSpan = document.createElement('span');
//                 elemSpan.className = prop;
//                 if (prop !== 'default') {
//                     elemSpan.classList.add('hidden');
//                 }
//                 let newSpanNode = document.createTextNode(keyboardElements[i]['values'][property][prop]);
//                 elemSpan.appendChild(newSpanNode);
//                 newSpan.appendChild(elemSpan);
//             }
//             newDiv.appendChild(newSpan);
//         }
//     }
//     else {
//         let spanCaseDown = document.createElement('span');
//         let newSpanNode = document.createTextNode(keyboardElements[i]['name']);
//         spanCaseDown.appendChild(newSpanNode);
//         newDiv.appendChild(spanCaseDown);
//     }
//     mainDiv.appendChild(newDiv);
// }