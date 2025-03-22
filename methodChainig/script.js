


// let userName =  window.prompt("enter the user name");
// normal function to string operations
// userName = userName.trim();
// let firstchar = userName.charAt(0);
// firstchar = firstchar.toUpperCase();

// let other = userName.slice(1);
// other = other.toLowerCase();

// userName = firstchar + other ;
// console.log(userName)



/*method chaining*/
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

// console.log(userName)



// while loops

// printing 10 numbers

// let a=1;

// while(a<11){
//     console.log(a);
//     a++;


// }


// let isloggedin = false;
// let userName = "";
// let password = "";

// while(!isloggedin){
//     userName = window.prompt(`enter Your username`);
//     password = window.prompt(`enter Your password`);
    
//     if(userName === "tausif" && password === "tausif123"){
//         isloggedin = true;
//         console.log(`welcome to the portal ${userName}`);
//         document.getElementById("login-txt").textContent = (`welcome to the portal${userName}`);
//     }
//     else{
//         console.log("please enter valid credentials");
//         document.getElementById("login-txt").textContent = ("Please enter valid credential");
//     }
// }



// ----------------------------------------------------------For Loops---------------------------------------------------------------------------------
// for(let i = 1; i<21; i++){

//     if(i==15){
//         break;
//     }
//     else{
//         console.log(i);
//     }
    
// }



// ---------------------------------------------------Number Guessing game-----------------------------------------------------------
const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);


console.log(answer);
let attempts;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess the number between ${minNum} to ${maxNum}`)
    guess = Number(guess);

    if(isNaN(guess)){
        console.log("Enter valid number not tet");
    }
    else if(guess < minNum || guess > maxNum){
        console.log("Enter valid number between range");
    }
    else{
        attempts++;
        if(guess > answer){
            console.log("Too high number");
        }
        else if(guess < answer){
            console.log("Too loo number");
        }
        else{
            running = false;
            console.log(`Congratulate you guess it right ${answer}`);
        }
        
    }

}







