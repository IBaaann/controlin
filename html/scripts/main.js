


let minutes = 0;
let seconds = 0;
let millisec = 0;
let timerId = null;
let display = null;
let currentNumberDisplay = null;
let completedDisplay = null;
let shulteTable = null;

let button_to_press = 1;

function formatTime() {
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    const ms = String(millisec).padStart(2, '0');
    return `${m}:${s}:${ms}`;
}

function updateDisplay() {
    display.textContent = formatTime();
}

function updateCurrentNumber() {
    if (currentNumberDisplay) {
        currentNumberDisplay.textContent = button_to_press;
    }
}

function tick() {
    millisec += 10;

    if (millisec >= 1000) {
        millisec = 0;
        seconds++;

        if (seconds >= 60) {
        seconds = 0;
        minutes++;
        }
    }
    updateDisplay();
}


document.addEventListener('DOMContentLoaded', function(e) {
    display = document.getElementById('display');
    timerId = setInterval(tick, 10);
    var shulteTable = document.getElementsByClassName('shulte_table')[0];
    var numsArray = [];
    for (var i = 1; i < 26; i++){
    numsArray.push(i);
    }
    numsArray.sort(() => 0.5 - Math.random())


    for(var i = 0; i<25; i++){
        var newElement = document.createElement('div');
        newElement.setAttribute('class', 'number');
        newElement.setAttribute('id', numsArray[i]);
        newElement.innerText = numsArray[i];
        shulteTable.append(newElement);
        newElement.addEventListener('click', touchFunction);
    }
});

function touchFunction(e){
    console.log(e.target.innerText);
    if (button_to_press == e.target.id){
        e.target.style.transformыыы = 'scale(0.95)';
        button_to_press++

    }
    if (button_to_press == 26){
        clearInterval(timerId);
        let result = String(formatTime());
        fetch('http://127.0.0.1:8000/result?time=' + result );

    }

}


