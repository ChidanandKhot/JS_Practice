console.log("Yes am here ");

/* let myPromise = new Promise(function(resolve, reject ){
    let i = 0 
    if (i==0){
        resolve("yes Promis has  resolved successfully")
    }else {
        reject("request got rejected");
    }
});

function myView(some){
    document.getElementById("print").innerHTML=some;
}

myPromise.then(
    function(value) {myView(value); },
    function(error){myView(error); }
); */ 


function Display(parameter1 ){
    document.getElementById("print").innerHTML= parameter1;

}

let MyProgram = new Promise(function(success, error){
    let name = "Kiran"

    if(name=="Kiran"){
        success("Promise Resolved");
    }else {
        error("Error occured");
    }
});


MyProgram.then( 
    function(value){ Display(value)},
    function(error){Display(error)}
)



// myPromise.then(
//     function(value) {myView(value); },
//     function(error){myView(error); }
// ); */ 
