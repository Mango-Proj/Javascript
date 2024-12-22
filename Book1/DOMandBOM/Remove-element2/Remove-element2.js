const lists = document.querySelectorAll('li');

for(let list of lists){
    list.onclick = () => {
        list.parentElement.removeChild(list);
    }
}

// const listArr = Array.from(document.querySelectorAll('li'));

// listArr.forEach((item,index)=>{
//     item.onclick = () =>{
//         item.parentElement.removeChild(item);
//     }
// });