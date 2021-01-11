import keyboardElements from './keyboardObject.js';
import {createKeyboard, mainDivId} from "./createKeyboard.js";
import {createTextArea, textAreaId, changeTextAreaCursorPosition, insertValueIntoTextArea, getTextAreaCommonCursorPosition,
    calculateTextAreaCursorPositionAfterDown, calculateTextAreaCursorPositionAfterUp, createCommentText} from "./textAreaObject.js";


const keyboardLanguages = {eng: 'eng', ru: 'ru'};
let shiftBtn = false;
let altBtn = false;
let capsBtn = false;
let currLang = keyboardLanguages.eng;

createTextArea();
createKeyboard(keyboardElements);

const textarea = document.querySelector(textAreaId);
const mainDiv = document.getElementById(mainDivId);

createCommentText(mainDiv);

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
    if (event.which !== 20){
        doActionOnButton(event.which, event);
        removeSelectedButton(event);
        setFocusToTextArea();
    }
}

function doActionOnButton(keycode, event){
    if (keyboardElements.find(key => key.keycode === keycode).action)
    {
        keyboardElements.find(key => key.keycode === keycode).action(event);
    }
}

function keyDownHandler(event) {
    if (event.which !== 20){
        event.preventDefault();
        globalPressActionHandler(event, event.which, getKeyboardElementByKeyCode(event.which));
        setSelectedButton(event);
    }
    else {
        capsLockButtonClickAction(event);
    }
}

function getKeyboardElementByKeyCode(keycode){
    return document.getElementById('div_id_' + keycode);
}

function setSelectedButton(event){
    getKeyboardElementByKeyCode(event.which).classList.add('selected-button');
}

function removeSelectedButton(event) {
    getKeyboardElementByKeyCode(event.which).classList.remove('selected-button');
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
        const cursorPosition = getTextAreaCommonCursorPosition();
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
        const cursorPosition = getTextAreaCommonCursorPosition();
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
        const cursorPosition = getTextAreaCommonCursorPosition();
        if (cursorPosition.start === 0){
            return;
        }
        changeTextAreaCursorPosition(cursorPosition.start - 1, cursorPosition.start - 1);
    }
}

function rightButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown')
    {
        const cursorPosition = getTextAreaCommonCursorPosition();
        if (cursorPosition.start>textarea.value.length){
            return;
        }
        changeTextAreaCursorPosition(cursorPosition.start + 1, cursorPosition.start + 1);
    }
}

function downButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown') {
        const textAreaRows = textarea.value.split('\n');
        const cursorPosition = calculateTextAreaCursorPositionAfterDown();
        console.log("DOWN " + cursorPosition);
        if (textAreaRows.length >= 2) {
            changeTextAreaCursorPosition(cursorPosition, cursorPosition);
        }
    }
}

function upButtonAction(event) {
    if (event.type === 'mousedown' || event.type === 'keydown') {
        const cursorPosition = calculateTextAreaCursorPositionAfterUp();
        console.log('After UP position ' + cursorPosition);
        changeTextAreaCursorPosition(cursorPosition, cursorPosition);
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

function capsLockButtonClickAction(event) {
    if (!capsBtn) {
        capsBtn = true;
        console.log(event);
        setSelectedButton(event);
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
        removeSelectedButton(event);
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

function setFocusToTextArea () {
    document.getElementById('textarea').focus();
}

mainDiv.addEventListener('mousedown', mouseDownClickHandler);
mainDiv.addEventListener('mouseup', mouseUpClickHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('keydown', keyDownHandler);

export {backspaceButtonAction, tabButtonAction, deleteButtonAction, capsLockButtonClickAction, enterButtonAction,
commonShiftHandler, upButtonAction, commonAltHandler, leftButtonAction, downButtonAction, rightButtonAction,
    spaceButtonAction, textarea}
