// call method takes second values as arguments 
// apply method second value in array format


const student1 = {
    name : "Kiran ",
    prop : "HTML"
}

const student3 = {
    name : "Rohit ",
    prop : "Javascript"
}

const student4 = {
    name : "Kishan ",
    prop : "Css"
}

function studentInfo1(extraLanguages) { 
    document.write(" Am " + this.name+ " nd i learned "+ this.prop );

}
function studentInfo(extraLanguages) { 
    document.write(" Am " + this.name+ " nd i learned "+ this.prop + "Extra learned "+ extraLanguages );

}

// studentInfo1.call(student1); 
studentInfo.apply(student4, ["javascript", "HTML", "CSS", "React"]);

