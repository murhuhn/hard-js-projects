
let num = 266219;
str = num.toString();

let result = 1; 
for (let i = 0; i < str.length; i++) {
  const digit = Number(str[i]); 
  result = result * digit;
}

console.log(result);



let pow = result **= 3;

console.log(String(pow).slice(0, 2));
