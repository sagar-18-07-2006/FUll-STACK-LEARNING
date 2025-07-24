//Exercise 11
function factorial(x) {
    if(x<0){
        console.log("factorial not exist ");

    }
    else if(x==0){
        return 1;
    }
    else{
        return x*factorial(x-1);
    }
    
}
console.log(factorial(5));