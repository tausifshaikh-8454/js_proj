let stop;


function startTime(){
    stop = setTimeout(() => window.alert('This is set time out after three secconds'), 3000);
    console.log("Start the timmer")
}

function stopTime(){
    clearTimeout(stop);
    console.log("stoppped the timmer")
}