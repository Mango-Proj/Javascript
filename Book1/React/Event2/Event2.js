function Button() {
    const fire = (msg) => {
        alert(msg);
    }

    return <button onClick={() => fire('딸깍!')}>버튼 클릭!</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Button />);