import React from "react";
import { useParams, NavLink } from "react-router-dom";
import classes from "../Pages/Repos.module.css";
import Fade from 'react-reveal/Fade';

const RepoDetail = (props) => {
  const params = useParams();

  const repo = props.repos.find((repo) => repo.node_id === params.key);

  return (
    <>
      <NavLink to="/Repos">
        <button className={classes.btn}>Go back</button>
      </NavLink>
      <Fade bottom >
      <section className={classes.desc}>
        <p>title:{repo.name}</p>
        <p>watchers:{repo.watchers}</p>
        <p>language:{repo.language}</p>
        <p>forks:{repo.forks}</p>
      </section>
      </Fade>
    </>
  );
};

export default RepoDetail;
