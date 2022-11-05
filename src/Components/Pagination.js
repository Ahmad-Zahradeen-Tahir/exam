import React from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <footer className={classes.pagination}>
      {pages.length > 0 ? (
        <button
          className={props.currentPage === 1 ? classes.disable : ""}
          disabled={props.currentPage === 1}
          onClick={() => {
            props.setCurrentPage(props.currentPage - 1);
          }}
        >
          Prev
        </button>
      ) : (
        ""
      )}
      {pages.map((page, index) => {
        return (
          <button
            className={page === props.currentPage ? classes.active : ""}
            onClick={() => {
              props.setCurrentPage(page);
            }}
            key={index}
          >
            {page}
          </button>
        );
      })}
      {pages.length > 0 ? (
        <button
          className={props.currentPage === 3 ? classes.disable : ""}
          disabled={props.currentPage === 3}
          onClick={() => {
            props.setCurrentPage(props.currentPage + 1);
          }}
        >
          Next
        </button>
      ) : (
        ""
      )}
    </footer>
  );
};

export default Pagination;
