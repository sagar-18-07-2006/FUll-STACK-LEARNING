console.log("I am a IN loops");
let a=1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
    
}
let obj ={
    "name" : "harry",
     "role": "Learner",
     "company":"Trying to join"

}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(key, obj[key]);
        
    }

}
for(const c of "Sagar"){
    console.log(c);
}
while(a<5){
    console.log(a);
    a++;
}