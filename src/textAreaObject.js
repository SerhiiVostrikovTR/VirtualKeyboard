import {textarea} from './index.js';

const textAreaId = 'textarea';

function createTextArea() {
    const textarea = document.createElement('TEXTAREA');
    textarea.id = textAreaId;
    textarea.classList.add('text-area');
    document.body.appendChild(textarea);
}

function createCommentText(mainDiv) {
    const commentDiv = document.createElement('div');
    const textNode = document.createTextNode('Keyboard was created under macOS system. To switch keyboard layout please press Alt+Shift');
    commentDiv.classList.add('comment');
    commentDiv.appendChild(textNode);
    mainDiv.appendChild(commentDiv);
}

function getTextAreaCommonCursorPosition () {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    return {start, end};
}

function getTextAreaRows(){
    return textarea.value.split('\n');
}

function getTextAreaRowByCursorPosition() {
    const start = getTextAreaCommonCursorPosition().start;
    const end = getTextAreaCommonCursorPosition().end;
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

function getCursorPositionInRow(){
    const textAreaRows = getTextAreaRows();
    const cursorPosition = getTextAreaCommonCursorPosition();
    const row = getTextAreaRowByCursorPosition();
    return cursorPosition.start - getTextAreaLengthByRowsCount(textAreaRows, row - 1) - (row - 1);
}

function changeTextAreaCursorPosition(start, end){
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
}

function insertValueIntoTextArea(value) {
    const cursorPosition = getTextAreaCommonCursorPosition();
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

function getTextAreaLengthByRowsCount(textAreaRowsList, rowsNumber){
    if (textAreaRowsList.length === 0){
        return 0;
    }
    else if(rowsNumber === 0){
        return 0;
    }
    return textAreaRowsList[rowsNumber - 1].length + getTextAreaLengthByRowsCount(textAreaRowsList, rowsNumber - 1);
}

function getTextAreaParameters(){
    const start = getTextAreaCommonCursorPosition().start;
    const end = getTextAreaCommonCursorPosition().end;
    const currentRow = getTextAreaRowByCursorPosition();
    const cursorPositionInRow = getCursorPositionInRow();
    const textAreaRowsList = getTextAreaRows();
    return {start, end, currentRow, cursorPositionInRow, textAreaRowsList};
}

function calculateTextAreaCursorPositionAfterUp() {
    const textAreaParameters = getTextAreaParameters();
    if(textAreaParameters.currentRow === 1){
        return textAreaParameters.start;
    }
    else if ((textAreaParameters.cursorPositionInRow + 1) > (textAreaParameters.textAreaRowsList[textAreaParameters.currentRow - 2].length)) {
        return getTextAreaLengthByRowsCount(textAreaParameters.textAreaRowsList, textAreaParameters.currentRow - 1)  +
            (textAreaParameters.currentRow - 2);
    }
    return getTextAreaLengthByRowsCount(textAreaParameters.textAreaRowsList, textAreaParameters.currentRow - 2) +
        textAreaParameters.cursorPositionInRow + (textAreaParameters.currentRow - 2);
}

function calculateTextAreaCursorPositionAfterDown() {
    const textAreaParameters = getTextAreaParameters();
    if (textAreaParameters.currentRow >= textAreaParameters.textAreaRowsList.length){
        return textAreaParameters.start;
    }
    else if(textAreaParameters.textAreaRowsList[(textAreaParameters.currentRow - 1)].length > textAreaParameters.textAreaRowsList[textAreaParameters.currentRow].length) {
        if (textAreaParameters.cursorPositionInRow > (textAreaParameters.textAreaRowsList[textAreaParameters.currentRow].length)) {
            return getTextAreaLengthByRowsCount(textAreaParameters.textAreaRowsList, textAreaParameters.currentRow + 1) + textAreaParameters.currentRow;
        }
    }
    return getTextAreaLengthByRowsCount(textAreaParameters.textAreaRowsList, textAreaParameters.currentRow) + textAreaParameters.cursorPositionInRow + textAreaParameters.currentRow;
}

export {createTextArea, textAreaId,changeTextAreaCursorPosition, insertValueIntoTextArea, getTextAreaCommonCursorPosition,
    getTextAreaRowByCursorPosition, calculateTextAreaCursorPositionAfterDown, calculateTextAreaCursorPositionAfterUp,
    getCursorPositionInRow, getTextAreaLengthByRowsCount, createCommentText}