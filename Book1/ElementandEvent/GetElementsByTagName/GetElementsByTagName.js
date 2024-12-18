const lists = document.getElementsByTagName('li');

// console.log(lists);
// console.log(lists.length);
// console.log(typeof lists);

function formatHex(hex){
    return (hex.length == 1)?'0'+hex:hex;_
}

for(let list of lists){
    let rcolor = Math.floor(Math.random()*255).toString(16);
    let gcolor = Math.floor(Math.random()*255).toString(16);
    let bcolor = Math.floor(Math.random()*255).toString(16);

    let color = formatHex(rcolor) + formatHex(gcolor) + formatHex(bcolor);

    list.style.backgroundColor = '#'+color;
}