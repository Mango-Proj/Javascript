function Button() {
    const fire = () => {
        alert('버튼을 클릭했습니다!');
    }

    return <button onClick={fire}>버튼 클릭!</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Button />);