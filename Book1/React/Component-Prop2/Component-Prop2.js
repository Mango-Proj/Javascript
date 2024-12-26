function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
        <Welcome name="홍길동" />
        <Welcome name="일지매" />
        <Welcome name="임꺽정" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App />;
root.render(element);