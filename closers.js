//inner function has the ability to access the parent function variables


// function parent() {

//     let name =" Karnataka";
//     function inner() { 
//         console.log(name);
//     }
//     inner();
// }
// parent();


function x(){
    for(let i = 1; i<=5; i++){
        setTimeout(function (){
            document.write(i + "<br/>")
        }, i*2000)

    }
}
x();


