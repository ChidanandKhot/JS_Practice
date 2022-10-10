// method overidinig is changing the parent constructor proprerty value and getting output
//child class has higher priority.

class Person {
    constructor(name){
        this.name=name 
        this.occupation= "Engineer"
    }
      greet(){
      console.log(`parent class has   ${this.name}`);
  }
}

  class Child extends Person {
    constructor(name){
        // console.log("Am from child class " `${this.name}`);
        super(name)
        this.occupation = " React Developer"
    }
   greet(){
            // console.log("Am from child clas " `${this.name}` + " and has " `${this.occupation}`);
    
            console.log(`this is ${this.name}`);
            console.log(`and my accupation is : ${this.occupation}`)

        } 
    }

  let obj = new Child("Kantar")
  obj.greet()