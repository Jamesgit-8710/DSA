// print the first 10 fibonacci numbers without recursion

let x = 0;
let y = 1;

console.log(x);
console.log(y);

for(let i=0; i<8; i++){

    z=x+y;
    console.log(z);
    x=y;
    y=z;
}