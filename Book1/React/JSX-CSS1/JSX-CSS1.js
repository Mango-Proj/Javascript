function Hello() {
    return <h2 style={{ color: 'magenta', backgroundColor: 'lightgray' }}>Hello World!</h2>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);