import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import UserLogin from "./components/UserLogin/index";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import Register from "./pages/Register";
import Home from "./pages/Home";
function App() {
    return (
        <Router>
            <div>
              {/* <Header/> */}
                <Nav />
                <Wrapper>
                    <Route path="/" component={Home} />
                    <Route exact path="/login" component={UserLogin} />
                    <Route exact path="/register" component={Register} />
                    <Footer/>
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;