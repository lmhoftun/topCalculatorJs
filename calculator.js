/*function showDisplay(key){
    let disp = document.getElementById('display').value;
    
    document.getElementById('display').value += key;

}*/
let disp = document.getElementById('display').value;
let currentOperand = '';

//try to check if number or operand
function checkNumber(key){
    if(!isNaN(key)){
        
        disp += key;
        document.getElementById('display').value = disp;
    } else {
        currentOperand = key;
        console.log(currentOperand);


    }
    console.log("checknumber " + key + "Display "+ disp);

}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        event.preventDefault()
        let key = document.getElementById(button.id).innerHTML;
        console.log(key);
        checkNumber(key);
//        showDisplay(key);

        
        
    });
    
});

//showDisplay(0);
