/*
call and apply 

syntx
we can call directly
we can pass arguement directly separated by ,
*******************************************************

Appy method
we can call directly 
we have to pass arguements in the form of array 

 function functionName ( age, place);
functionName.apply(obj1 ["18", "Blore" );
*******************************************************

closures==> 
def: inner function has the ability to access the outer variables

function Outer(){
	let name = "Virat";
	function Inner() {
		console.log(name);
	}
	Inner();
    }
  Outer();
o/p==> Virat
 





Var****
if we declear var it will be globel scope
>> It can be acced anywhere
>> If we declere in block we can access outside the block
>> if we decleare it in Function we can not access out side of function 
>> If we decleare same variable multiple times it will not give error and conflict may occur


let ***
It will be Block scope 
we have to decleare it in block 

const*** 
it will be block scope 
we cant redcleare the same variable 
*******************************************************

setTimeout()
setTimeout(function(){ }, timeout);

EX: 
function Spring(){
	let i =1 ;
	setTimeout(function(){
	console.log(i); }, 5000)
   
	console.log("hello");
} 
**********************************************
function myfunction(){

let a = 10;
 a= a+10;
console.log(a);
}

myfunction();

**********************
--> each function need to call by object creating
--> We can pass arguments to function also 
**************************
function myfunction(b){

let a = 10;
 a= a+b;
console.log(a);
}

myfunction(10);
****************************************************

N = number
string = "JavaScript Future in Future" ;

string.CharAt(0)--> return charecter
string.lenght()---> Return the length of string
string.indexof(J)-- > return "J" index --> 0
string.charCodeOf(S) --> Return char code --> 83
string.fromCode
string.repeat(N) -->return string entered N time 
string.replace("Future", "Best Future"); --> String value will replace 
string.replaceAll("Future", "Best future"); --> All future will replace as best future 
string.includes("in") --> True return 
string.search("in") --> Return the index number of start of "in" -> 18
string.endsWith("Future") --> checks last sentense return -->True 
String.endsWith("t", 10) --> checks with 10 digit lenght and True
string.slice(0, 9) --> Return the specified index word --> Javascript
string.split()

console.log("this-is-my-Javascript".split("-")--> splits based on specified value.
						o/p -> "this is my Javascript" ;
string.startsWith("JavaScript") -- > checks string starts with specied value --> True 

string.toLowerCase() --> string will convert to Lower case 
String.toUpperCase() -- > string will convert to uppercase 
string.trim() --> white space will be removed from string starting and end point 
*********************************************************************************************

Number
-------

let a = 100;
let b= 200.8999;

console.log(parseInt(b)); ---> Return 200 (base intiger value will be considerd)
console.log(float(b)); --> Return 200.899 (considerd full value )

console.log(b.toPrecision(5));  --> Return specided number digit after decimal --> 200.89
console.log(b.toPrecision()); --> Return all value as it
****************************************************************************************************


 let name = ["Sunita", "Mohan", "karan", "Kiran"];
    let fruits = ["Banana", "apple", "Mango" ];
console.log(name);
console.log(name[2]); 



const person = {
    name:"Manjnu",
    place : "Bengalore",
    age : 52,
    payment : 60000 
};
console.log(person.age);
console.log(person);
console.log(person["payment"]);

const studentInfo =[{
    name:"Manjnu",
    place : "Bengalore",
    age : 52,
    payment : 60000 
},
{
    name:"Sunil",
    place : "Bengalore",
    age : 42,
    payment : 90000 
}
]
// console.log(person.age);
console.log(studentInfo);


/*  const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); 
==>  Delete last element 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
==> add the element at the end. 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
==> delete the first element from array list 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
==> unshift add the element at the first or index [ 0 ] . 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
==> element will add at the specified index positon, 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
[fruits.length]
==> this gives the lengh of array [ 4 ],

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
==> Delete method delete 0 index value, ex: Banana

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
==>concat method concat 2 arrays


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");

The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.
==> Splice add 2new  element and remove 1 position element. 


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
==> Slice will remove first element , ex: Banana rmoved










*/
