// Question 2

let words = ["james","hies"];

let newWords = [];

for(let i=0; i<words.length; i++)
{
    for(let j=0; j<words.length; j++)
    {
        if(i==j)
        {
            continue;
        }

        if(words[j].includes(words[i])){
            newWords.push(words[i]);
            break;
        }
    }
}

newWords.forEach(e => {
    console.log(e);
});

