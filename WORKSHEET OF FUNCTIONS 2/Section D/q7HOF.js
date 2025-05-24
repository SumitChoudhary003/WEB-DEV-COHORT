function operate(a,b){
    return a * b
}

function y(callback){
    return callback(3,3)
}
console.log(y(operate))
// ans 9
