 async function myText(){
    let myMsg = new Promise(function (resolve, reject){
        resolve("Resolved sucessfully");
    });
    document.getElementById("print").innerHTML= await myMsg; }

//  myText()



//
 async function MyName(){
    let myFunc =new Promise(function(resolve, reject){
        resolve("yes I got resolved");
    })

document.getElementById("print").innerHTML= await myFunc;
 }
//  MyName();

 async function myself(){
    let Prapose = new Promise(function(solved, error){
        setTimeout(() => {
            solved("Yes i will learn Javascript");}, 4000);

            // let Prapose = new Promise(function(resolve) {
            //         setTimeout(function() {resolve("I love You !!");}, 3000);
                
    })

document.getElementById("print").innerHTML= await Prapose; 
 }

 myself();


//  let myPromise = new Promise(function(resolve) {
//     setTimeout(function() {resolve("I love You !!");}, 3000);












// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();