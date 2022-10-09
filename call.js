
// call method is similar to bind but we can call the call method directly
// bind method will take copy and later we can call. 

const person1 = {
    name:"Mohan ",
    place : "Bengalore",
    
}

const person2 = {
    name:" Mahendra ",
    place : "Belagavi",   
}

const person3 = {
    name:" Virat Kohli ",
    place : " RCB",  
}

function personInfo() { 
    document.write(" Am " + this.name+ " nd am from "+ this.place);

}

function persionWithAge(age){
    document.write(" Am " + this.name+ " nd am from "+ this.place + " my age is "+ age);
}

personInfo.call(person1); 

// let obj= personInfo.call(person2);
// obj();

let obj2= personInfo.bind(person2);
obj2();

persionWithAge.call(person3, 23);

