let person = [{name: "tausif", status: "maried", age: 20},
            {name: "riyaz", status: "unmaried", age: 18},
            {name: "mateen", status: "unmaried", age: 29},
            {name: "ashfaque", status: "maried", age: 30},
]


person.sort((a,b) => (a.name.localeCompare(b.name)))

console.log(person)


let fruit = ["apple", "watermelon", "pineapple", 'banna', "guava" ]
fruit.sort();
console.log(fruit)