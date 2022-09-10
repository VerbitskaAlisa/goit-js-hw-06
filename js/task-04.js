const buttonDecrementEL = document.querySelector('button[data-action="decrement"]');

const valueEL = document.querySelector('#value');

const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

var counter = 0;

function onBtnDecrementClick(){
    counter -= 1;
    valueEL.textContent = counter;
}

function onBtnIncrementClick(){
    counter += 1;
    valueEL.textContent = counter;
}

buttonDecrementEL.addEventListener('click', onBtnDecrementClick);

buttonIncrementEl.addEventListener('click', onBtnIncrementClick);
