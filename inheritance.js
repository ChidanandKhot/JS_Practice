
class Parent {
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("hello "+ `${this.name}`);
    }
}

class Student extends Parent {
    constructor(name) {
        console.log("trying to acces parent with super keyword")
        super(name) // to access the parenet class super() keyword is mandatory and it refers to parent constructor.
    }
}

let obj = new Student("John");
obj.greet();