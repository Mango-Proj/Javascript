let sum=0;

for(let num=0;num<10;num++){
    if(num == 4)continue;
    if(num == 8)break

    sum+=num;
    console.log(num,sum);
    num++;
}