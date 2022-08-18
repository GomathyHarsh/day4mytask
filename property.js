//To Compare two JSON have the same properties without order
var profile1 = {
    name:"raghul",
    profession:"doctor"
    
};
var profile2 = {
    profession:"doctor",
    name:"raghul"
};
console.log(JSON.stringify(profile1)===JSON.stringify(profile2)); //false


var profile3 = {
    name:"Kavitha",
    profession:"doctor"
    
};
var profile4 = {
    name:"Ravi",
    profession:"doctor"
    
};
console.log(JSON.stringify(profile3)===JSON.stringify(profile4)); //false


var profile5 = {
    name:"Ravi",
    profession:"engineer"
    
};
var profile6 = {
    name:"Ravi",
    profession:"doctor"
    
};
console.log(JSON.stringify(profile5)===JSON.stringify(profile6)); //false

var profile7 = {
    name:"Ravi",
    profession:"engineer"
    
};
var profile8 = {
    name:"Ravi",
    profession:"engineer"
    
};
console.log(JSON.stringify(profile7)===JSON.stringify(profile8)); // true


var profile9 = {
    name:"kaviya",
    profession:"nurse"
    
};
var profile10 = {
    name:"kaviya",
    profession:"nurse"
    
};
console.log(JSON.stringify(profile9)===JSON.stringify(profile10)); // true
