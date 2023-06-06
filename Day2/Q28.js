let heights = [1,1,4,2,1,3]

let expected = [...heights]
expected.sort(function(a, b){return a - b});

//let result = [];
let c=0;

for(let i=0; i<expected.length; i++)
{
    if(heights[i]!=expected[i])
    c++
    //result.push(i)
}

console.log(c)