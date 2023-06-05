// Question 10

x=29;

count=0

for (let num = 2; count!=100; num++) {
    let f = 1;

    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            f = 0;
            break;
        }
    }

    if (f){
        if(num>=x)
        console.log(num);
        count++;
    }
        
}

