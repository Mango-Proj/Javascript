class ButtonCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    componentDidMount() {
      document.title = `버튼을 ${this.state.count}번 클릭했습니다.`;
    }

    componentDidUpdate() {
      document.title = `버튼을 ${this.state.count}번 클릭했습니다.`;
    }

    render() {
      return (
        <div>
          <p>버튼을 {this.state.count}번 클릭했습니다.</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            클릭하세요
          </button>
        </div>
      );
    }
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ButtonCount />);