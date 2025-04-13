/* example 1 split an array */
/* fro array destructing used '[]' and for object destructring using '{}' */

// let a = 10;
// let b = 20;

// [a, b] = [b, a]

// console.log(a)

// example2

// let colors = ['red','violet', 'green', 'blue','white','black'];

// [colors[0], colors[3]] = [colors[3], colors[0]];

// console.log(colors)

// example3 assign array element to variable

// let student = ['ramesh', 'suresh','rama','gatham','henry'];

// let [student1, student2, student3, student4, student5] = student

// console.log(student3)


// example4: extract value from objects
let school = {
    schName : "patel",
    schStndard : "from First to tenth",
    schTeachers : "highly qualified"
    
}
let school2 = {
    schName : "St joseph",
    schStndard : "from First to Twelle",
    schTeachers : "highly qualified and experinced",
    hasCollege: 'yes'
}

let {schName,schStndard,schTeachers,hasCollege="not verfied yet"} = school

console.log(schName)
console.log(schStndard)
console.log(schTeachers)
console.log(hasCollege)