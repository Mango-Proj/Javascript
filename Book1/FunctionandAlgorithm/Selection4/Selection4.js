const score = parseInt(prompt('점수를 입력하세요',90));

if(score != null){
    switch(score){
        case (score>=90):
            alert('A학점입니다.');
            break;
        case (score>=80):
            alert('B학점입니다.');
            break;
        case (score>=70):
            alert('B학점입니다.');
            break;
        default:
            alert('F학점입니다.')
    }
}