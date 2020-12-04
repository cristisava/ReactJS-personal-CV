import "./App.css";
import React from "react";
import Header from "./components/header/header.jsx";
import Navigate from "./components/navigate/navigate.jsx";
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
          <Navigate>
          <Switch>
            <Route path="/aboutme">
              <AboutMe/>
            </Route>
            <Route path="/myonlinecv">
              <MyOnlineCV />
            </Route>
          </Switch>
          </Navigate>
        </BrowserRouter>
        {/* <Header></Header>
        <Navbar></Navbar> */}
      </div>
    );
  }
}

export default App;
