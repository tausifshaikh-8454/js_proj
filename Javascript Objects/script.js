// objects are basically collectionof real life properties/methods properties is collection in key:value {functions}




let person1 = {
    perName : "Tausif Shaikh",
    perMidName : "Azhar",
    perAge : 18,
    perGreet : function(){
        console.log("Hi my name is tasuif shaikh and i am lives in mumbra and currently i am learning javascript")
    }
}

person1.perGreet();
console.log(person1.perName);

let person2 = {
    perName : "Riyaz Shaikh",
    perMidName : "Azhar",
    perAge : 21,
    perGreet : () => {console.log(`HI my name is ${person2.perName} and i am ${person2.perAge} years old`)}
}


person2.perGreet();
console.log(person2.perName);

