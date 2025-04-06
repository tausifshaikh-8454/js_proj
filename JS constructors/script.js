

function obj_creat(brd, siz, clr, yr){
    this.brand = brd,
    this.size = siz,
    this.color = clr,
    this.year = yr,
    this.info = function(){
        console.log(`this is ${this.color} shoe with fit size ${this.size}`)
    }
}

let brown_shoe = new obj_creat("bata", "8", "brown","2014");
console.log(brown_shoe.brand);
console.log(brown_shoe.size);
console.log(brown_shoe.color);
console.log(brown_shoe.year);
brown_shoe.info()