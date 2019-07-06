import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./global/header";
import Home from "./pages/home";
import CurrentPost from "./pages/currentPost";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/currentpost" component={CurrentPost} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
