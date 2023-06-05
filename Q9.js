// Find the greatest element in the array

let arr = [1,5,7,8,2,49,63,21];

let greater = arr[0];

for(let i=1; i<arr.length; i++)
{
    if(greater<arr[i])
    greater=arr[i];
    
}

console.log(greater);

