let num=0,sum=0;

while(true){
    if(num == 4){
        num++
        continue;
    }
    if(num == 8)break

    sum+=num;
    console.log(num,sum);
    num++;
}