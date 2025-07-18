// Faulty Calculator
// using javaScript
// it takes 2 Number as input by user 
/*
itr performs wrong operation as folow
do it only 10% of time wrong operatioon 
+=-
*=-
-=/
/=**
 */
//  a=Math.random()<0.1;
//  console.log(a);

if (Math.random() < 0.1){
    function sum(a,b){
        return a-b
    }
    function sub(a,b){
        return a/b
    }
    function mul(a,b){
        return a+b
    }
    function div(a,b){
        return a**b
    }

}

else{

    function sum(a,b){
        return a+b
    }
    function sub(a,b){
        return a-b
    }
    function mul(a,b){
        return a*b
    }
    function div(a,b){
        return a/b
    }
}
    
let c = sum(16,14)
let d = sub(16,14)
let p = mul(16,14)
let q = div(16,14)
console.log("output of operation --->> "+ c)
console.log("output of operation --->> "+ d)
console.log("output of operation --->> "+ p)
console.log("output of operation --->> "+ q)