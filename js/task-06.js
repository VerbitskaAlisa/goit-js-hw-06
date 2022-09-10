const input = document.querySelector('#validation-input');
const length = input.dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur(event){
    if(event.currentTarget.value.length < length){
        input.classList.add('invalid');
    }
 input.classList.add('valid');
};