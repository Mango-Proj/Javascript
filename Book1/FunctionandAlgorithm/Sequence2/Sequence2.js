const drawSquare = function(){
    let width = Math.round(Math.random() * 50) + 50;
    let height = Math.ceil(Math.random() * 50) + 100;
    let color = Math.floor(Math.random() * 16777216).toString(16);
    
    let css = 'width: '+width+'px;height: '+height+'px;background: #'+color+';';

    document.getElementById('box').style.cssText = css;

    console.log(css);
}
document.querySelector('.btn-area').onclick = drawSquare;