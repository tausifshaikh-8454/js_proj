// console.log("hello i like pizza")

// window.alert("HI this is first alert functions")
// window.alert("trying alert fuunction succesfully")

// document.getElementById("head").textContent = ("this is tausif shaikh");
// document.getElementById("para").textContent = ("this is tausif shaikh");

// let t=30
// let age=50

// console.log("your age is" ,age ,"which  is not child", );
// console.log(`this is price of the factors ${t}`);


// accept user input by window prompt

// let username = window.prompt("please type in your name");
// console.log(`you enter your name is ${username}`)


// accept user input by professional way html box using function


// let userEmail;
// let userName;

// document.getElementById("submit").onclick = function(){
//     userEmail = document.getElementById("email").value;
//     userName = document.getElementById("name").value;
//     console.log(userEmail);
//     console.log(userName);
//     document.getElementById("introduc").textContent = (`welcome JS tutorial, ${userName}`);
// }



// counter css

// const countlabel = document.getElementById("countlabel");
// const increase = document.getElementById("increasebtn");
// const decrease = document.getElementById("decreasebtn");
// const reset = document.getElementById("resetbutton");


// let count = 0;

// increase.onclick = function(){
//     count++;
//     countlabel.textContent = (count);
// }
// decrease.onclick = function(){
//     count--;
//     countlabel.textContent = (count);
// }
// reset.onclick = function(){
//     count = 0;
//     countlabel.textContent = (count);
// }


// switch cases

let examScore = 41;
let grade;

switch(true){
    case examScore >= 90:
        grade = "A"
    break;
    case examScore >= 80:
        grade = "B"
    break;
    case examScore >= 70:
        grade = "C"
    break;
    case examScore >= 60:
        grade = "D"
    break;
    case examScore >= 40:
        grade = "F"
    break;
    case examScore < 40:
        grade = "Fail"
    break;

    default:
        console.log(`${examScore} is not a proper number`);
    


}
console.log(grade)




function pants(){
    register_post_type('pants', $args);
    $args = Array(
        labels => Array(
            'name' => 'pants',
            'singular_name' => 'pants',
            'menu_name' => 'pants',
            'add_item' => 'add new pants',
            'edit_item' => 'adit pants',
            'view_all' => 'Biew all pants',

        ),
        public => true,
        has_archive => true,
        show_in_rest => true,
        supports => Array('title', 'editor', 'excerpt', 'Author', 'custom_fields')

    );


}

add(init, pants)