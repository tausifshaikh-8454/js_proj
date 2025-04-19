let student = [{name : "tausif", age : 20,  schoolNmae : "st.joseph"},
                {name : "riyaz", age : 16,  schoolNmae : "st.marie"},
                {name : "Shehnazz", age : 18,  schoolNmae : "st.john"},
                {name : "ashfqaue", age : 22,  schoolNmae : "Symbiosis"},
]



// student.push({name : "zahid", age : 23,  schoolNmae : "st.stephen"})

// console.log(student)


// to print each object 

// student.forEach(stud => console.log(stud))


// let studName = student.map(stud => stud.name)
// console.log(studName)
let studage = student.filter(stud => stud.age < 20)
console.log(studage)