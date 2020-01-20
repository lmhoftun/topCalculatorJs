
/*function showDisplay(key){
    let disp = document.getElementById('display').value;
    
    document.getElementById('display').value += key;

}*/
//let disp = document.getElementById("display").value;
let currentOperand = '';

let done = false;
const number = document.querySelectorAll(".number");
const operand = document.querySelectorAll(".operand") ;
const equals = document.getElementById("btnCalculate");
const clr = document.getElementById("btnClr");

function disp(key){

    if (done == true){
        clearAll();
        done = false;
    }

    let s = document.getElementById("display").value;
    console.log("Current display " + s + " key " + key);
    //check to see if last key is an operand
    if(isNaN(key)){

        //if last char in the string is an oprerand, replace it with the new one
        let r = s.charAt(s.length -1);
        if (isNaN(r)){
            let q = s.slice(0, -1);
            document.getElementById("display").value = q + key ;
            
            
        }else {
            document.getElementById("display").value += key;
        }
        
    }else{
        document.getElementById("display").value += key;
    }
}

operand.forEach((operand) => {
    operand.addEventListener('click', (e) => {
        event.preventDefault();
        let key = document.getElementById(operand.id).innerHTML;
        console.log(key);
        disp(key);
    });
});

//Get the numbers
number.forEach((number) => {
    number.addEventListener('click', (e) => {
        event.preventDefault();
        let key = document.getElementById(number.id).innerHTML;
        console.log(key);
        disp(key);
    });
});

equals.addEventListener('click', function() {
    event.preventDefault();
    calculate();
});

function calculate(){
    let val = document.getElementById("display").value;
    console.log(eval(val));
    let x= eval(val);
    document.getElementById("display").value="eval" + x;
    done = true;
}

clr.addEventListener('click', function(){
    event.preventDefault();
    clearAll();

});

function clearAll(){
    document.getElementById("display").value = "";
    console.log("clearAll " + document.getElementById("display").value);
}



//showDisplay(0);

