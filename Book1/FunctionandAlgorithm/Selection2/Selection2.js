const score = parseInt(prompt('점수를 입력하세요',90));

if(score != null){
    if(score>=90) alert('A학점입니다.');
    else if(score>=80) alert('B학점입니다.');
    else if(score>=70) alert('C학점입니다.');
    else alert('F학점입니다.');
}