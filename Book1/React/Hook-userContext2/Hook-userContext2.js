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

const ThemeContext = React.createContext(themes.light);

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <button style={{ background: this.context.background, color: this.context.foreground }}>버튼</button>;
  }
}

function Toolbar() {
  return <ThemedButton />;
}

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);