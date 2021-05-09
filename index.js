let actions=document.getElementsByClassName("action");
let equalButton=document.getElementById('equal');
let input=document.querySelector('input');
let CButton=document.getElementById('cButton');

function addThisTextInInput(){
    if (this.innerHTML=='&times;') input.value+='*'
    else  input.value+=this.innerText
}

for ( let action of actions) action.addEventListener('click', addThisTextInInput);

equalButton.removeEventListener('click', addThisTextInInput);
equalButton.addEventListener('click', count);
CButton.addEventListener('click', discard);
input.addEventListener('keypress',enter);

function count(){
    input.value=eval(input.value);
}
function discard(){
    input.value='';
}

function enter(event){
    if(event.keyCode==13) count();
}