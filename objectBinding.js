let obj = {
    name : "Karan",
    place : "Blore",
    skill : "Javascript",
    printFunction : function (){
        document.write(this.name);
    }
}

// obj.printFunction

let obj2 = obj.printFunction.bind(obj);
obj2();
// console.log(obj2);
console.log(obj);
console.log(obj2);



// document.write(obj.name);
// document.write(obj.printFunction);
// document.write(obj2());


