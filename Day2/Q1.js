// Quesion 1

let matrix = [[1,3,4],[5,7,9],[10,12,13]];

let target = 11;

let f=false;

for(let i=0; i<matrix.length; i++)
{
    if(target<=matrix[0][matrix[0].length-1])
    {

        // it can be more optimized using binary search instead of inner for loop
        for(let j=matrix[0].length-1; j>=0; j--)
        {
            if(matrix[i][j]==target)
            {
                f=true;
                break;
            }
        }
    }

    if(f)
    break;
}

console.log(f);

// return f;

