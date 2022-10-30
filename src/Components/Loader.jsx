import React from 'react'
import spinner from './Spinner-1s-200px.gif'
import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.loader}>
     <img src={spinner} alt="Loading..."  /> 
    </div>
  )
}

export default Loader
