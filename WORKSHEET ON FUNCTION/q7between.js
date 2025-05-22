function Num(a){
    if(a >= 1 && a <= 10){
        return "A lies between 1 to 10."
    }
    else{
        return "A not lies between 1 to 10."
    }
}
let res = Num(10)
let res1 = Num(57)
console.log(res)
console.log(res1)
// ans 1 res = A lies between 1 to 10.
// ans 2 res1 = A not lies between 1 to 10.