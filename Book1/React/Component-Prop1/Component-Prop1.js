function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="홍길동" />;
root.render(element);