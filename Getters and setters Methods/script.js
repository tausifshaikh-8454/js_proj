class student{
    constructor(studName, studMarks, studclass){
        this.s_name = studName,
        this.s_marks = studMarks,
        this.s_class = studclass

    }

    set s_name(newstudName){
        if(typeof newstudName === "string" && newstudName.length > 0){
            this._s_name = newstudName;
        }
        else{
            console.error(`please enter the valid character and non empty string`)
        }
    }

    set s_marks(newmarks){
        if(typeof newmarks === "number"){
            this._s_marks = newmarks;
        }
        else{
            console.error("please enter in digit format")
        }
    }



    get s_name(){
        return this._s_name
    }
    get s_marks(){
        return this._s_marks
    }

}

let student1 = new student("tausif", 1, "tenth standard")

console.log(`student name is ${student1.s_name}`)
console.log(`student Marks is ${student1.s_marks}`)
console.log(`student class is ${student1.s_class}`)