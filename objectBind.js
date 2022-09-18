
let personInfo = {
    name : "Mohan",
    place: "Bengaluru",
    Designation : "Engineer"
}

let personInfo2 = {
    name : " MS Dhoni",
    place : "Mangalore",
    Designation : "cricketer"
}

    function myFunc() {
        document.write(this.name + " "+ "is from"+ this.place +" "+ "and he is" + this.Designation);

    }
let obj1 = myFunc.bind(personInfo);
obj1();  

let obj2 = myFunc.bind(personInfo2);
obj2();