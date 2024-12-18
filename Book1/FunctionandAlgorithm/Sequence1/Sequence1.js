function drawSquare(){
    let width = Math.random() * 50;
    width = Math.round(width);
    width += 50;

    let height = Math.random() * 50;
    height = Math.ceil(height);
    height += 100;

    let color = Math.random() * 16777216;
    color = Math.floor(color);
    color = color.toString(16);

    document.getElementById('box').style.width = width + 'px';
    document.getElementById('box').style.height = height + 'px';
    document.getElementById('box').style.background = '#' + color;

    console.log(width+'px',height+'px','#'+color);
}
document.querySelector('.btn-area').onclick = function(){
    drawSquare();
}