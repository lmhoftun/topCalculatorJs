let textToDisplay = '0';
function disp(btn){
    
    let key = document.getElementById(btn).innerHTML;
    let s = textToDisplay.concat(key);

    document.getElementById("display").value=s;
    console.log(key);
    console.log(s);
}
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        disp(button.id);

        
        
    });
    
});
