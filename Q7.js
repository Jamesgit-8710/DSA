// Reverse a string

let str = "xyzt"
str = str.split('');


console.log(str.length/2);

for(let i=0; i<str.length/2; i++)
{
    let x=str[i];
    str[i] = str[str.length-1-i];
    str[str.length-1-i]=x;
}

console.log(str.toString().replaceAll(',', ''));
