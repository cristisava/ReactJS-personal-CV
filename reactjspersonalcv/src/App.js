import "./App.css";
import React from "react";
import Header from "./components/header/header.jsx";
import HomePage from "./components/homepage/homepage.jsx";
import MyWork from "./pages/MyWork.jsx";
import MyOnlineCV from "./pages/MyOnlineCV.jsx";
import Findme from "./pages/Findme.jsx";
import Footer from "./components/footer/footer.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="appp">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/mywork" component={MyWork} />
            <Route path="/myonlinecv" component={MyOnlineCV} />
            <Route path="/findme" component={Findme} />
            <Route path="/" component={HomePage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
