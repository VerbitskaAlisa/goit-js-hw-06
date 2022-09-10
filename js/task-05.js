const input = document.querySelector('#name-input');
const nameLable =document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event){
    nameLable.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameLable.textContent = 'Anonymous'
    }
};