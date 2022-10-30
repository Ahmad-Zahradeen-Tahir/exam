import React from "react";
import { useParams} from 'react-router-dom'
import classes from "../Pages/Repos.module.css";

const DUMMY_DATA = [
  {
    key: "q1",
    title: "to-do-list",
    forks: "1",
    language: "javaScript",
    stars: "2",
  },
  {
    key: "q2",
    title: "tic-tac-toe",
    forks: "2",
    language: "javaScript",
    stars: "3",
  },
  {
    key: "q3",
    title: "Weather App",
    forks: "3",
    language: "python",
    stars: "5",
  },
  {
    key: "q4",
    title: "Hangman Game",
    forks: "1",
    language: "C++",
    stars: "1",
  },
];

const RepoDetail = () => {
  const params = useParams()

  const repo = DUMMY_DATA.find((repo) => repo.key === params.key)

  return (
    <div className={classes.desc}>
      <p>title:{repo.title}</p>
      <p>stars:{repo.stars}</p>
      <p>language:{repo.language}</p>
      <p>forks:{repo.forks}</p>
    </div>
  );
};

export default RepoDetail;
