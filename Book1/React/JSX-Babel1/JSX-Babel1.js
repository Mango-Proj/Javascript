"use strict";

function Hello() {
  return <h2>Hello World!#2</h2>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);