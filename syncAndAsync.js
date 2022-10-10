//synchronisation is executing the code line by line


document.write( "Hello")
document.write( "<br>")

document.write( "how are you")
document.write( "<br>")

document.write( "am the third element")
document.write( "<br>")

// Asynchronization
/* asynchronization will not wait for any execute
 it will move to  next element and time taking 
 element will execute at the last. */ 
document.write( "<br>")
document.write( "<br>")

document.write( "how are you")
document.write( "<br>")

setTimeout( () => {
    document.write("am the 2nd but executed last");
}, 3000)

document.write( "<br>")

document.write( "am the third element")


function manu(){
    document.write("i will execute for practice")
}
obj = manu();

setTimeout(obj, 4000)


setTimeout(()=>{
    document.write("am last element in asynch")
}, 5000)










