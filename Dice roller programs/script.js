function rollDice(){
    let rolNumber = document.getElementById("rollNumber").value;
    let values = [];
    let resImages = [];
    let resultNum = document.getElementById("resultPara");
    let resImage = document.getElementById("resultImages");

    if(rolNumber > 6){
        document.getElementById("error_msg").textContent = ("Please enter valid range from 1 to 6");
    }
    else{
        document.getElementById("error_msg").textContent = ("");
        
        for(i=0; i < rolNumber; i+=1){
            let rand = Math.floor((Math.random() * 6) + 1);
            values.push(rand);
            resImages.push(`<img src="./dice_Images/${rand}.png" alt="" >`);
            
        }
        
        resultNum.textContent = (`Your dices number are :${values}`);
        resImage.innerHTML= (resImages);
    }

}