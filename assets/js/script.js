var currentNumberWrapper = document.getElementById('currentNumber');
currentNumberWrapper.addEventListener('click', increment, decrement);
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}