import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

import Posts from "./pages/Posts";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/calc" component={Calculator} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/search/:query" component={Page2} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
