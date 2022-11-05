import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Home.module.css'

const Home = () => {
  return (
    <main className={classes.home}>
     <h1>Welcome to Susboi's GitHub repos!</h1>
     <h2>We're delighted to have you here</h2>
     <h3>Click on the button below to check them out or use the naviation bar above</h3>
     <NavLink to='/Repos' ><button>{'See repos'}</button></NavLink>
    </main>
  )
}

export default Home
