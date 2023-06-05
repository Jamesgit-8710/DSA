// Check Prime numbers

let num =15;
let f=1;

for(let i=2; i<=num/2; i++)
{
    if(num%i==0){
        console.log("not a prime");
        f=0;
        break;
    }
}

if(f)
console.log("prime");

