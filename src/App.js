import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

export default App;
