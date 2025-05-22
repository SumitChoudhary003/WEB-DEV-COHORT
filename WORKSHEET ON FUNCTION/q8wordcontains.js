function WordContain(word){
    if(word === "hello"){
        return "Given string contains hello."
    }
    else{
        return "Given string not contains hello"
    }
}
let res = WordContain("hello")
let res1 = WordContain("HELLO")
console.log(res)
console.log(res1)
// ans 1 res = Given string contains hello.
// ans 2 res1 = Given string not contains hello