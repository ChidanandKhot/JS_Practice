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













*/
