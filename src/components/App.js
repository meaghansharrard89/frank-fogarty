import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import Publication from "../pages/Publication";
import Team from "../pages/Team";
import Research from "../pages/Research";
import NavBar from "./NavBar";
import Contact from "../pages/Contact";

function App() {
  useEffect(() => {
    const currentPage = localStorage.getItem("currentPage");
    if (currentPage && currentPage !== window.location.pathname) {
      window.location.href = currentPage; // Redirect to the stored page
    }
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/publication">
          <Publication />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/research">
          <Research />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* Redirect to the homepage for any other route */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
