// Ques 4

let arr=[3,2,3];

let temp={};

let result=[];



let a=arr.length/3;

for(let i=0; i<arr.length; i++)
{
    temp[arr[i]]=0;
}

for(let i=0; i<arr.length; i++)
{
    temp[arr[i]]++;
}

for(let i =0; i<temp.length; i++){
    result[i]=temp[i]
}

let x=0;

for(var i in temp){
    if(temp[i]>a){
    result[x]=Number(i);
    x++;
    }
}

console.log(temp,a)

console.log(result)



