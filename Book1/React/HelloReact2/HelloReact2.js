"use strict";

function Hello() {
return React.createElement('h2', null, 'Hello World!#2');
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Hello));