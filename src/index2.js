import logo1 from "./logo.svg";
import "./App.css";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import Header1 from "./components/Header1";

import Services1 from "./components/Services1";

import Carousel from "./components/Carousel";

import Backtotop from "./components/Backtotop";

function Index2() {
  return (
    <div className="App">
      <Header1 />

      <Carousel />
      <Services1 />
      <Divider />

      <Divider />
      <Backtotop />
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

export default Index2;
