import "./App.css";
import React from "react";
import Header from "./components/header/header.jsx";
import HomePage from "./components/homepage/homepage.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import MyOnlineCV from "./pages/MyOnlineCV";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";



class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/myonlinecv" component={MyOnlineCV} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
