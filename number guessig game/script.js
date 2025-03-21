// function introShop(userName){
//     console.log(`welcome to the shop ${userName}`)

// }
// introShop("riyaz");



// -------------------------------------------- return functions --------------------------------------

// function add(a,b){
//     return a+b;

// }
// console.log(add(5, 15));


// -------------------------------------------- Check email is valid --------------------------------------

// function isemailvalid(email1){
//     if(email1.includes("@",".com")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isemailvalid(window.prompt("Enter your email: ")));


// -------------------------------------------- Mobile number length --------------------------------------

// function ismobilenumber(mobile){
//     if(mobile.length === 10){
//         return true;
    
//     }
//     else{
//         return false;
//     }

// }

// console.log(ismobilenumber(window.prompt("Enter your mobile number: ")));

// --------------------------------------------Number Guessing game --------------------------------------
let minNum = 1;
let maxNum = 50;
const ans = Math.floor((Math.random()) * (maxNum - minNum + 1) + minNum);

console.log(ans);

let guess;
let attempts = 0;
let running = true;

while(running){
    guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum ){
       window.alert("Please enter a valid number with in range");

    }
    else {
        attempts++;
        if(guess > ans) {
            alert("you choose to high try again");
        }
        else if(guess < ans) {
            alert("you choose too low try again");
        }
        else {
            alert(`Congratulate you guess right its ${ans} and it takes ${attempts} attempts`);
            running = false
        }
        
    }
}