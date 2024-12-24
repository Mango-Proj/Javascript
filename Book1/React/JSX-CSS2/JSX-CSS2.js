function Hello() {
    const myStyle = {
        color: 'white',
        backgroundColor: 'DodgerBlue',
        padding: '10px',
        borderRadius: '20px'
    };
    
    return <h2 style={myStyle}>Hello World!</h2>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);