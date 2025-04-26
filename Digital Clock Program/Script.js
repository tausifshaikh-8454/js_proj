
function currentTime(){
    const curDate = new Date();
    let hour = curDate.getHours().toString().padStart(2, 0);
    let min = curDate.getMinutes().toString().padStart(2, 0);
    let sec = curDate.getSeconds().toString().padStart(2, 0);
    let meridium = hour >= 12 ? "PM" : "AM"


    const curTime = `${hour}:${min}:${sec} ${meridium}`;
    console.log(curTime)

    document.getElementById('clock').textContent = curTime;

}


setInterval(currentTime, 1000)