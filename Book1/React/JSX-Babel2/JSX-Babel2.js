"use strict";

class Hello extends React.Component {
  render() {
    return <h2>Hello World!#3</h2>;
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);