
// call back function takes functions as arguments 
// function isEven(element) {
//     if (element % 2 === 0){
//     return true ;
//     }
//     return false
// }
// obj= isEven(3);
// console.log(obj)

let result = [4, 4, 6, 8].every((e)=> e % 2=== 0)
console.log(result);


// one more example


function firstName(name) {
    console.log(`hii ${name}`);    
}

function callBack(){
    console.log("am call back function");
}

firstName("Rahul kl", callBack);








