const dayofWeek = new Date().getDay();

switch(dayofWeek){
    case 0:
        alert('일요일');
        break;
    case 1:
        alert('월요일');
        break;
    case 2:
        alert('화요일');
        break;
    case 3:
        alert('수요일');
        break;
    case 4:
        alert('목요일');
        break;
    case 5:
        alert('금요일');
        break;
    case 6:
        alert('토요일');
        break;
}