function person_age(age){
    if(age < 18){
        return "NOT ELIGIBLE FOR VOTE"
    }
    else{
        return "ELIGIBLE FOR VOTE"
    }
}
let res = person_age(10)
let res1 = person_age(24)
console.log(res)
console.log(res1)
// ans 1 res = NOT ELIGIBLE FOR VOTE
// ans 2 res1 = ELIGIBLE FOR VOTE