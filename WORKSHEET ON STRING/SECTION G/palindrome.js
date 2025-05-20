const str = "madam"
const rev = str.split("").reverse().join("")
if(str === rev){
    console.log("its a plaindrome.")
}
else{
    console.log("its not")
}
// ans Madam - its not
// ans madam - its a plaindrome.