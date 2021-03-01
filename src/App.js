import logo1 from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header1 from "./components/Header1";
function App() {
  return (
    <div className="App">
      <Header1 />
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
