import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/UserLogin/index";
import Header from "./components/Header";
import Register from "./pages/Register";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
