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
import { OmgNavigator } from "./library/OmgNavigator";
import Index2 from "./index2";
const Library = () => (
  <div className="App">
    <Header1 />
    <Header2 />
    <Carousel />
    <Services1 />
    <Divider />
    <Services2 />
    <Divider />
    <Services3 />
    <Divider></Divider>
    <Footer1 />
    <Divider />
    <Divider />
    <Divider />
    <Backtotop />
    <header className="App-header">
      <img src={logo1} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="/index2" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
);

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/about", text: "About2" },
];
const WebsiteContainer = (props) => (
  <>
    <Layout links={navLinks}>{props.children}</Layout>
  </>
);

const links = [
  { to: "/", component: <Library /> },
  { to: "/about", component: <Index2 /> },
];

function App() {
  return (
    <OmgNavigator
      links={links}
      container={(children) => <WebsiteContainer children={children} />}
    />
  );
}

export default App;
