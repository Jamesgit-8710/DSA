// Palindrome Algorithm

let num ="11";
let f=1;

for(i=0; i<num.length/2; i++){
    if(num[i]!=num[num.length-1-i]){
        f=0;
        break;
    }
}

if(f)
console.log("Palindrome");
else
console.log("Not a Palindrome!");
