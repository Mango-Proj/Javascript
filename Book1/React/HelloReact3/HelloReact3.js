"use strict";

class Hello extends React.Component {
    render() {
        return React.createElement('h2', null, 'Hello World!#3');
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Hello));