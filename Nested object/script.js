// let school = {
    
//     fullName : "mr shaikh",
//     age : 30,
//     standard : ["I", "II", "III", "IV", "V", "VI", "VII"],
//     address : {
//         plotNo : "135",
//         city : "Mumbai",
//         country : "India"
//     }

// }

// console.log(school.address.plotNo)


class person {
    constructor(name, age, prfsn, ...address){
        this.name = name,
        this.age = age,
        this.prof = prfsn
        this.address = new addr(...address)
    }
}



class addr{
    constructor(rNo, street, city, country){
        this.rNo = rNo,
        this.street = street,
        this.city = city,
        this.country = country

    }
}

let person1 = new person("tausif", 30 , "softewareEngineer", "30","dongre street", "mumbra", "India")

console.log(person1)