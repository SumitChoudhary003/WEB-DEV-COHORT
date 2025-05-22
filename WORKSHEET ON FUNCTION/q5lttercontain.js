function stringlength(str){
    if(str.includes("a") || str.includes("A")){
        return "String contains letter 'a' or 'A'."
    }
    else{
        return "String not contains letter 'a' or 'A'."
    }
}
let res = stringlength("Akash")
let res1 = stringlength("ror")
console.log(res)
console.log(res1)
// ans 1 res = String contains letter 'a' or 'A'.
// ans 2 res1 = String not contains letter 'a' or 'A'.