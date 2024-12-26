const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

class ThemedButton extends React.Component {
  render() {
    return (
      <button style={{ background: this.props.theme.background, color: this.props.theme.foreground }}>
        버튼
      </button>
    );
  }
}

function Toolbar(props) {
  return <ThemedButton theme={props.theme} />;
}

class App extends React.Component {
  render() {
    return <Toolbar theme={themes.dark} />;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);