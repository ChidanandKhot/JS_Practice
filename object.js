
let person = {
    name : "Karan",
    Place :"Belagavi",
    age: 25,
    language : function language(){
        console.log("kannada, English, Hindi");
    }
}

console.log(person);
console.log(person.language);
console.log(person.name);

person["name"]=" Shiva";
console.log(person.name);

delete person.age;
console.log(person);

person["Skills"]=["HTML", "CSS","JAVASCRIPT"];
console.log(person);


/* Object.freeze(person)--> will freeze 
but objet will return original value .
not able to add and delete

Object.seal(person)--> this key method 
will return able to update but 
not able to add and delete, */
