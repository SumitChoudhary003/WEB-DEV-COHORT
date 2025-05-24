// function with no name
// syntax let/const variable name = function()={}

let a= function(){
    console.log("hello")
}
a()

// sum of two
let ab = function(a,b){
    return a+b
}
console.log(ab(4,5))

// method 1
const addstr = function(str){
    return "Good morning" .concat(str)
}
console.log(addstr("Alpha intern"))
// method 2
const greet =(name)=> `Hello ${name}`
console.log(greet("Alpha intern"))