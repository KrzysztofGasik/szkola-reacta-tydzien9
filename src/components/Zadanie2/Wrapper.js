import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movies from "./Movies";
import Places from "./Places";
import Home from "./Home";

import classes from "./Wrapper.module.css";

export default function Wrapper() {
  return (
    <div className={classes.wrapper}>
      <Router>
        <nav>
          <ul className={classes.list}>
            <li>
              <Link to="/" className={classes.listElements}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className={classes.listElements}>
                Movies
              </Link>
            </li>
            <li>
              <Link to="/places" className={classes.listElements}>
                Places
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
