//(function(){
  //  console.log('Hello')
//})() //immetaidely invoked function expression

/*(()=>{
    console.log("hii")
})()*/

const square = (function(x){
    return x*x
})(5)
console.log(square)


