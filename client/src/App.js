import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/UserLogin/index";
import Header from "./components/Header";
import Register from "./pages/Register";
import Members from "./pages/Members";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/members" component={Members} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
