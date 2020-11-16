let str = "have you pooped today?";
let key = "";

for(let i = 0; i < str.length; i++)
  key += str.charCodeAt(i) + " ";

key = key.trim();

const co = key.split(" ");
let de = "";

for(let i = 0; i < co.length; i++)
de += String.fromCharCode(co[i]);

console.log(co)
console.log(de);