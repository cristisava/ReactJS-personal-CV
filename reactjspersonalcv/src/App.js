import "./App.css";
import React from "react";
import Header from "./components/header/header.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import MyOnlineCV from "./pages/MyOnlineCV";



class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Navbar>
          <Switch>
            <Route path="/aboutme">
              <AboutMe/>
            </Route>
            <Route path="/myonlinecv">
              <MyOnlineCV />
            </Route>
          </Switch>
          </Navbar>
        </BrowserRouter>
        {/* <Header></Header>
        <Navbar></Navbar> */}
      </div>
    );
  }
}

export default App;
