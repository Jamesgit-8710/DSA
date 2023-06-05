// Reverse an array

let arr = [1,2,3,4,5];

console.log(arr);

for(let i=0; i<arr.length/2; i++)
{
    let x=arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i]=x;
}

console.log(arr);
