import React from 'react'
import classes from './NotFound.module.css'
import notfound from './IMG_2539.gif'

const NotFound = () => {
  return (
    <div className={classes.notFound}>
    <h1>Oops! Page not found!</h1>
      <img src={notfound} alt="404 Page not found!"  />
    </div>
  )
}

export default NotFound
