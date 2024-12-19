const weatherBox = document.getElementById('js_weather');

weatherBox.onmouseover = function(){
    this.style.backgroundColor = 'black';
}

weatherBox.onmouseout = function(){
    this.style.backgroundColor = 'bisque';
}