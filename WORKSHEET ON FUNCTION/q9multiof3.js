function Multiply(a){
    if(a % 3 === 0){
        return "Its multiple of 3"
    }
    else{
        return "Its not multiple of 3"
    }
}
let res = Multiply(10)
let res1 = Multiply(9)
console.log(res)
console.log(res1)
// ans 1 res = Its not multiple of 3
// ans 2 res1 = Its multiple of 3