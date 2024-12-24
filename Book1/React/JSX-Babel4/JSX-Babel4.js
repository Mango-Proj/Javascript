"use strict";

const user = {
  lastName: '홍',
  firstName: '길동'
};

class Hello extends React.Component {
  render() {
    const name = 'React';
    return <h2 className="title">Hello {user.lastName}{name}!#3</h2>;
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);