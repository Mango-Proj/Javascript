function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log('폼 전송 버튼을 클릭했습니다.');
    }

    return (
        <form onSubmit={handleSubmit}>
        <button type="submit">폼 전송</button>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);