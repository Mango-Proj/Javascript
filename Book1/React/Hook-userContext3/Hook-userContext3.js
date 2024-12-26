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

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      버튼
    </button>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);