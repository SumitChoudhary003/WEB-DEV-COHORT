 /*{ // block == {} //ifelse, loops
    let  a = 45
    console.log(a)
}*/
// var variable not follow block scope but const/let follow shows error.

{
    var a = 45
}
console.log(a) // ans 45

if(true){
    let a = 20
    const city = "delhi"
    //console.log(a,city)
    // ans 20 delhi
}
console.log(a,city) // error
