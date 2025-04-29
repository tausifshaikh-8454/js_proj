let display = document.getElementById("display")


function showToDisplay(input){
    display.value += input;
    
}

function clearDisply(){
    display.value = " "
}

function calculate(){
    display.value = eval(display.value)
}

