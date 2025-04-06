
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let square = num.map(function (element){
    return Math.pow(element, 2);
});
console.log(square)


// function evn(element){
//     return Math.pow(element, 2);
// }


let evn = num.filter((element) => element % 2 === 0)
console.log(evn)

let sum = num.reduce((accumalator, element) => accumalator + element);
console.log(sum)


