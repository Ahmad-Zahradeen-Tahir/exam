import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>{'Susboi<3'}</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/Home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Repos" activeClassName={classes.active}>
              Repos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
