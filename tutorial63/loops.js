let a =[1,2,3,4,5];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}
a.forEach((value,index,arr) => {
    console.log(value,index,arr)    
});
let obj={
    'a':1,
'b':2,
'c':3
};
for (const key in obj) {
    if(obj.hasOwnProperty.call(obj,key)){
       let element=obj[key];
        console.log(element);
    }
}
for (const element of a) {
    console.log(element);
    
}
