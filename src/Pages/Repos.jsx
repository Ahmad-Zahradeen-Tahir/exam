import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Loader";
import classes from "./Repos.module.css";

const Repos = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [repos, setRepos] = useState([])

  const getRepos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await  fetch("https://api.github.com/users/Susboi20/repos");
      if (!response.ok) {
        throw new Error("OOPS! Something went wrong!");
      }
      const data = await response.json();
      setRepos(data)
      console.log(data)
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  

  useEffect(()=>{
    getRepos()
  },[getRepos])

  let content = <h1>No Repos Found!</h1>
  if (isLoading) {
    content = <Loader/>
  }

  if (error) {
    content = <h1 className={classes.error}>{error}</h1>
  }

  if (repos.length > 0) {
    content = <ul className={classes.repos}>
    {repos.map((el) => (
      <NavLink key={el.node_id} activeClassName={classes.active} to={`/Repos/${el.node_id}`}>
        <li className={classes.repo}>{el.name}</li>
      </NavLink>
    ))}
  </ul>
  }

  return (
    <div className={classes.repoPage}>
      {content}
    </div>
  );
};

export default Repos;
