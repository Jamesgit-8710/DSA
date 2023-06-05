// Remove negative values from the array

let arr = [1,2,-2,5,-5];

console.log(arr);

arr.forEach(myFunction);
console.log(arr);

function myFunction(item,index, arr) {
  if(item<0)
  arr.splice(index,1);
}