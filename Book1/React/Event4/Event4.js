class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('this', this);
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toggle />);