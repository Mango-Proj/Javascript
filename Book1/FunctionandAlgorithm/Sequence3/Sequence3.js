function formatHex(hex){
    return hex.length == 1?'0'+hex:hex;
}
const drawSquare = () => {
    let width = Math.round(Math.random() * 50) + 50;
    let height = Math.ceil(Math.random() * 50) + 100;
    
    let rcolor = Math.floor(Math.random() * 255).toString(16);
    let gcolor = Math.floor(Math.random() * 255).toString(16);
    let bcolor = Math.floor(Math.random() * 255).toString(16);
    
    let color = formatHex(rcolor) + formatHex(gcolor) + formatHex(bcolor);

    let css = 'width: '+width+'px;height: '+height+'px;background: #'+color+';';

    document.getElementById('box').style.cssText = css;

    console.log(css);
}

document.querySelector('.btn-area').onclick = drawSquare;