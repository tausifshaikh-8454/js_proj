// const rollbutton = document.getElementById("roll")
// const label = document.getElementById("labelNumber")
// let randNumber;
// Max = 600;
// Min = 300

// rollbutton.onclick = function(){
//     randNumber = Math.floor((Math.random() * (Max-Min)) + Min)
//     label.textContent = (randNumber)

// }


const subsbtn = document.getElementById("subsbtn");
const visaCard = document.getElementById("visaCard");
const masterCard = document.getElementById("masterCard");
const rupayCard = document.getElementById("rupayCard");
const submit = document.getElementById("submit");
const subdetails = document.getElementById("subdetails");
const paymentdetails = document.getElementById("paymentdetails");


submit.onclick = function () {
    if (subsbtn.checked) {
        subdetails.textContent = (`You are subscribed`);
    }
    else {
        subdetails.textContent = (`You are not subscribed`);
    }

    if (visaCard.checked) {
        paymentdetails.textContent = (`Your payment method through the Visa card`);
    }
    else if(masterCard.checked){
        paymentdetails.textContent = (`Your selected payment method is master card`)

    }
    else if(rupayCard.checked){
        paymentdetails.textContent = (`Your selected payment method is Rupay card`)

    }
    else{
        paymentdetails.textContent = (`You haven't selected any payment mathod`)
    }
}
