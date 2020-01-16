
function showDisplay(key){
    let disp = document.getElementById('display').value;
    console.log(key)
    document.getElementById('display').value += key;

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        event.preventDefault()
        let key = document.getElementById(button.id).innerHTML;
        console.log(key);
        showDisplay(key);

        
        
    });
    
});

showDisplay(0);
