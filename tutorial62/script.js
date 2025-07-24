// Create a bussisness name genrator 
// by combining list of adjectives and shop name 
// and another word 
// Adjectives
// Crazy
// fire 
// Amazing

// shop name 
// food
//  Engine
//  garments 

// another word 
// limited 
// bros 
// Hub 
    
function Generator(x, y, z) {
    let num = Math.floor(Math.random() * 3);
    
    if (num === 0)
        return x;
    else if (num === 1)
        return y;
    else
        return z;
}

// Generate and print the business name
console.log(
    "Generated Name is: " +
    Generator("Crazy", "Fire", "Amazing") + " " +
    Generator("Food", "Engine", "Garments") + " " +
    Generator("Limited", "Bros", "Hub")
);
