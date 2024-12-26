function ButtonCount() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
        <p>버튼을 {count}번 클릭했습니다.</p>
        <button onClick={() => setCount(count + 1)}>
            클릭하세요
        </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonCount />);