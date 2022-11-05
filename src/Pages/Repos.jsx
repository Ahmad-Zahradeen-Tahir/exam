import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import classes from "./Repos.module.css";

const Repos = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(3);

  const getRepos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.github.com/users/Susboi20/repos"
      );
      if (!response.ok) {
        throw new Error("OOPS! Something went wrong!");
      }
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getRepos();
  }, [getRepos]);

  props.getData(repos);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = repos.slice(firstPostIndex, lastPostIndex);

  let content = <h1>No Repos Found!</h1>;
  if (isLoading) {
    content = <Loader />;
  }

  if (error) {
    content = <h1 className={classes.error}>{error}</h1>;
  }

  if (repos.length > 0) {
    content = (
      <ul className={classes.repos}>
        {currentPosts.map((el) => (
          <NavLink
            key={el.node_id}
            activeClassName={classes.active}
            to={`/Repos/${el.node_id}`}
          >
            <li className={classes.repo}>{el.name}</li>
          </NavLink>
        ))}
      </ul>
    );
  }

  return (
    <section className={classes.repoPage}>
      {content}
      <Pagination
        totalPosts={repos.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage = {currentPage}
      />
    </section>
  );
};

export default Repos;
