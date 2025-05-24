function getdeliverycharges(totalAmount){ //return 0 if amt>=500 return 50 if amt<500
    if(totalAmount >=500){
        return 0
    }
    else{
        return 50
    }
}
console.log(getdeliverycharges(480))
