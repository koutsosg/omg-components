import logo1 from "./logo.svg";
import "./App.css";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Divider } from "semantic-ui-react";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Services1 from "./components/Services1";
import Services2 from "./components/Services2";
import Footer1 from "./components/Footer1";
import Carousel from "./components/Carousel";
import Services3 from "./components/Services3";
import Backtotop from "./components/Backtotop";
import Layout from "./components/LayoutSide/Layout";
function Index2() {
  return (
    <Layout>
      <div className="App">
        <Header1 />
        <Header2 />

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
    </Layout>
  );
}

export default Index2;
